import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.RESEND_FROM ?? "Coryant <onboarding@resend.dev>";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://coryant.in";

export async function sendPurchaseConfirmationEmail({
  to,
  packName,
  slug,
}: {
  to: string;
  packName: string;
  slug: string;
}) {
  const dashboardUrl = `${APP_URL}/dashboard`;
  const packUrl = `${APP_URL}/packs/${slug}`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body style="margin:0;padding:0;background:#0f0e0c;font-family:monospace;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f0e0c;padding:48px 24px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#161512;border:1px solid #2a2824;border-radius:6px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="padding:32px 40px 24px;border-bottom:1px solid #2a2824;">
              <p style="margin:0;font-family:monospace;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#7a7570;">CORYANT</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              <h1 style="margin:0 0 12px;font-family:sans-serif;font-size:22px;font-weight:500;color:#f0ede8;">
                Purchase confirmed
              </h1>
              <p style="margin:0 0 28px;font-family:monospace;font-size:13px;color:#8a8480;line-height:1.7;">
                You now have full access to <strong style="color:#d4c9a8;">${packName}</strong>.<br/>
                Head to your dashboard to download the pack and follow the install guide.
              </p>

              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-radius:4px;background:#d4c9a8;">
                    <a href="${dashboardUrl}" style="display:inline-block;padding:12px 24px;font-family:monospace;font-size:12px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;color:#0f0e0c;text-decoration:none;">
                      Go to Dashboard →
                    </a>
                  </td>
                </tr>
              </table>

              <hr style="margin:32px 0;border:none;border-top:1px solid #2a2824;" />

              <p style="margin:0 0 8px;font-family:monospace;font-size:11px;text-transform:uppercase;letter-spacing:0.06em;color:#5a5550;">What's next</p>
              <ol style="margin:12px 0 0;padding-left:20px;font-family:monospace;font-size:12px;color:#8a8480;line-height:2;">
                <li>Download the pack from your <a href="${dashboardUrl}" style="color:#d4c9a8;text-decoration:none;">dashboard</a></li>
                <li>Copy the folder into your Claude skills directory</li>
                <li>Enable web search in Claude</li>
                <li>Paste the example brief from the <a href="${packUrl}" style="color:#d4c9a8;text-decoration:none;">pack page</a> to get started</li>
              </ol>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;border-top:1px solid #2a2824;">
              <p style="margin:0;font-family:monospace;font-size:11px;color:#5a5550;line-height:1.7;">
                Questions? Reply to this email or contact us at
                <a href="mailto:hello@coryant.xyz" style="color:#8a8480;text-decoration:none;">hello@coryant.xyz</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

  const text = `Purchase confirmed — ${packName}

You now have full access to ${packName}. Head to your dashboard to download the pack and install it.

Dashboard: ${dashboardUrl}

What's next:
1. Download the pack from your dashboard
2. Copy the folder into your Claude skills directory
3. Enable web search in Claude
4. Paste the example brief from the pack page to get started

Questions? Contact us at hello@coryant.xyz
`;

  const { error } = await resend.emails.send({
    from: FROM,
    to,
    subject: `Your ${packName} is ready to install`,
    html,
    text,
  });

  if (error) {
    console.error("Failed to send purchase confirmation email:", error);
  }
}
