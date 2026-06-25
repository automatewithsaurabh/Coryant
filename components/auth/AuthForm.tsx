"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Mode = "login" | "signup";

const PROFESSIONS = [
  "Job seeker / career switcher",
  "Founder / GTM lead",
  "Product manager",
  "Researcher / analyst",
  "Consultant",
  "Student",
  "Other",
];

const inputStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "13px",
  color: "var(--ink)",
  background: "var(--bg-raised)",
  border: "1px solid var(--rule-strong)",
  borderRadius: "4px",
  padding: "10px 14px",
  outline: "none",
  width: "100%",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "11px",
  color: "var(--ink-faint)",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
};

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label htmlFor={id} style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

export default function AuthForm({ defaultMode = "login" }: { defaultMode?: Mode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<Mode>(defaultMode);

  // Shared fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Signup-only fields
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const supabase = createClient();

  function switchMode(next: Mode) {
    setMode(next);
    setError(null);
    setInfo(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setLoading(true);

    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        // Normalize all login errors to prevent account enumeration
        setError("Invalid email or password. Please try again.");
      } else {
        const rawNext = searchParams.get("next") ?? "/dashboard";
        const next = rawNext.startsWith("/") && !rawNext.startsWith("//") ? rawNext : "/dashboard";
        router.push(next);
        router.refresh();
      }
    } else {
      if (!profession) {
        setError("Please select your profession.");
        setLoading(false);
        return;
      }
      const { data: signUpData, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: name, profession },
          emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL ?? window.location.origin}/auth/callback`,
        },
      });
      if (error) {
        const msg = error.message && error.message !== "{}" ? error.message : "Sign up failed. Please try again.";
        setError(msg);
      } else if (signUpData.session) {
        // Email confirmation is disabled — user is already logged in
        router.push("/dashboard");
        router.refresh();
      } else {
        setInfo("Check your email for a confirmation link to activate your account.");
      }
    }

    setLoading(false);
  }

  return (
    <div style={{ width: "100%", maxWidth: "420px", margin: "0 auto" }}>
      <h1
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "24px",
          fontWeight: 500,
          color: "var(--ink)",
          marginBottom: "8px",
        }}
      >
        {mode === "login" ? "Sign in" : "Create your account"}
      </h1>
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--ink-faint)",
          marginBottom: "36px",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        CORYANT
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

        {/* ── Signup-only fields ── */}
        {mode === "signup" && (
          <>
            <Field id="name" label="Full name">
              <input
                id="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Jane Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
              />
            </Field>

            <Field id="profession" label="Profession">
              <select
                id="profession"
                required
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
              >
                <option value="" disabled>Select your role…</option>
                {PROFESSIONS.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </Field>
          </>
        )}

        {/* ── Shared fields ── */}
        <Field id="email" label="Email">
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
        </Field>

        <Field id="password" label={mode === "signup" ? "Create password" : "Password"}>
          <input
            id="password"
            type="password"
            required
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            minLength={8}
            placeholder={mode === "signup" ? "Min. 8 characters" : ""}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
        </Field>

        {/* ── Feedback ── */}
        {error && (
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "#e53e3e",
              padding: "10px 14px",
              background: "rgba(229,62,62,0.08)",
              border: "1px solid rgba(229,62,62,0.2)",
              borderRadius: "4px",
            }}
          >
            {error}
          </p>
        )}

        {info && (
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--accent)",
              padding: "10px 14px",
              background: "var(--accent-dim)",
              border: "1px solid var(--accent-border)",
              borderRadius: "4px",
              lineHeight: 1.6,
            }}
          >
            {info}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "14px",
            fontWeight: 500,
            color: "var(--ink)",
            background: loading ? "var(--ink-ghost)" : "var(--accent)",
            border: "none",
            borderRadius: "4px",
            padding: "12px 24px",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "opacity 150ms ease",
            marginTop: "4px",
          }}
        >
          {loading
            ? "Please wait…"
            : mode === "login"
            ? "Sign in →"
            : "Create account →"}
        </button>
      </form>

      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "13px",
          color: "var(--ink-faint)",
          marginTop: "24px",
          textAlign: "center",
        }}
      >
        {mode === "login" ? "No account?" : "Already have an account?"}{" "}
        <button
          onClick={() => switchMode(mode === "login" ? "signup" : "login")}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "13px",
            color: "var(--ink-soft)",
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          {mode === "login" ? "Sign up" : "Sign in"}
        </button>
      </p>
    </div>
  );
}
