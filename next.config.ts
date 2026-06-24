import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Supabase auth calls go to *.supabase.co — must be explicitly allowed.
// In dev, also allow localhost websocket connections (Turbopack HMR).
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const connectSrc = [
  "'self'",
  supabaseUrl,
  "https://*.razorpay.com",
  isDev ? "ws://localhost:* wss://localhost:*" : "",
]
  .filter(Boolean)
  .join(" ");

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "off" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // React needs 'unsafe-eval' in dev; Razorpay checkout.js always allowed
      isDev
        ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://checkout.razorpay.com"
        : "script-src 'self' 'unsafe-inline' https://checkout.razorpay.com",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self'",
      "img-src 'self' data: https://*.razorpay.com",
      `connect-src ${connectSrc}`,
      // Razorpay checkout opens its payment modal in an iframe
      "frame-src 'self' https://*.razorpay.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Tell Next.js not to bundle the Razorpay Node.js SDK — let Node.js load it
  // natively at runtime. Bundling it fails because it uses Node built-ins
  // (crypto, https, querystring) that webpack can't resolve in the build phase.
  serverExternalPackages: ["razorpay"],

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
