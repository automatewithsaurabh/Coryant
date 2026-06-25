import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import AuthForm from "@/components/auth/AuthForm";

export const metadata: Metadata = {
  title: "Sign up — CORYANT",
};

export default function SignupPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <nav
        className="mob-nav"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px 48px",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "14px",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--ink)",
          }}
        >
          CORYANT
        </Link>
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--ink-faint)",
          }}
        >
          ← Back to site
        </Link>
      </nav>

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 24px",
        }}
      >
        <Suspense>
          <AuthForm defaultMode="signup" />
        </Suspense>
      </div>
    </div>
  );
}
