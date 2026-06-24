"use client";

import { useState, useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

interface Props {
  packSlug: string;
  packName: string;
  onSuccess: () => void;
}

export default function RazorpayButton({ packSlug, packName, onSuccess }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    if (document.getElementById("razorpay-checkout-js")) {
      setScriptReady(true);
      return;
    }
    const script = document.createElement("script");
    script.id = "razorpay-checkout-js";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => setScriptReady(true);
    script.onerror = () => setError("Failed to load payment module. Please refresh.");
    document.body.appendChild(script);
  }, []);

  async function handleClick() {
    if (!scriptReady) return;
    setLoading(true);
    setError(null);

    try {
      // Step 1: create order on server
      const orderRes = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: packSlug }),
      });
      const orderData = await orderRes.json();
      if (!orderRes.ok) {
        throw new Error(orderData.error ?? "Failed to create order");
      }

      // Step 2: open Razorpay modal
      await new Promise<void>((resolve, reject) => {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: orderData.amount,
          currency: orderData.currency,
          name: "Coryant",
          description: packName,
          order_id: orderData.order_id,
          handler: async (response: {
            razorpay_payment_id: string;
            razorpay_order_id: string;
            razorpay_signature: string;
          }) => {
            // Step 3: verify signature on server
            const verifyRes = await fetch("/api/razorpay/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                slug: packSlug,
              }),
            });
            const verifyData = await verifyRes.json();
            if (!verifyRes.ok) {
              reject(new Error(verifyData.error ?? "Payment verification failed"));
              return;
            }
            resolve();
          },
          modal: {
            ondismiss: () => reject(new Error("cancelled")),
          },
          prefill: {},
          theme: { color: "#4f8ef7" },
        };

        const rzp = new window.Razorpay(options);
        rzp.on("payment.failed", (resp: { error: { description: string } }) => {
          reject(new Error(resp.error?.description ?? "Payment failed"));
        });
        rzp.open();
      });

      onSuccess();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      if (msg !== "cancelled") setError(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={loading || !scriptReady}
        style={{
          display: "inline-block",
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          background: loading ? "var(--accent-dim)" : "var(--accent)",
          color: "var(--ink)",
          padding: "12px 24px",
          borderRadius: "4px",
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
          opacity: !scriptReady ? 0.6 : 1,
          transition: "opacity 150ms",
        }}
      >
        {loading ? "Processing…" : `Buy for ₹2,900 →`}
      </button>
      {error && (
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "#e57373",
            marginTop: "10px",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
