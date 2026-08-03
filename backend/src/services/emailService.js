import fs from "node:fs";
import { fileURLToPath } from "node:url";
import nodemailer from "nodemailer";
import { env } from "../config/env.js";

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const submissionTitles = {
  contact: "Contact Request",
  callback: "Callback Request",
  product: "Product Enquiry",
  dealership: "Dealership Enquiry",
};

const logoPath = fileURLToPath(
  new URL("../../../frontend/public/nev-logo-cropped-removebg.png", import.meta.url)
);

const formatLabel = (key) =>
  key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());

const formatRows = (data) =>
  Object.entries(data)
    .map(
      ([key, value]) =>
        `<tr>
          <td style="width:34%;padding:14px 16px;border-bottom:1px solid #e7edf0;color:#5b6b7b;font-size:13px;font-weight:700;vertical-align:top">${escapeHtml(formatLabel(key))}</td>
          <td style="padding:14px 16px;border-bottom:1px solid #e7edf0;color:#17283f;font-size:14px;line-height:1.55;vertical-align:top">${escapeHtml(value).replace(/\r?\n/g, "<br>")}</td>
        </tr>`
    )
    .join("");

const buildEmailHtml = (type, data) => {
  const title = submissionTitles[type] || "Website Submission";
  const logo = fs.existsSync(logoPath)
    ? `<img src="cid:nev-logo" width="140" alt="NEV Navgatee" style="display:block;width:140px;max-width:100%;height:auto;border:0">`
    : `<div style="color:#17345c;font-size:20px;font-weight:800;letter-spacing:2px">NEV <span style="color:#5bbf43">NAVGATEE</span></div>`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0;background:#eef3f6;font-family:Arial,Helvetica,sans-serif;color:#17283f">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0">${escapeHtml(title)} received from the NEV website.</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:#eef3f6">
      <tr>
        <td align="center" style="padding:32px 14px">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:640px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 28px rgba(21,45,72,.12)">
            <tr>
              <td style="padding:16px 24px;background:#ffffff;text-align:center;border-top:4px solid #5bbf43">
                ${logo}
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px;background:#071426;color:#ffffff">
                <div style="margin-bottom:10px;color:#74cf5b;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase">NEV Navgatee Website</div>
                <h1 style="margin:0;font-size:26px;line-height:1.25;font-weight:800">New ${escapeHtml(title)}</h1>
                <p style="margin:10px 0 0;color:#cbd7e4;font-size:14px;line-height:1.6">A visitor has submitted the form below. Please follow up with them soon.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 12px">
                <div style="margin-bottom:14px;color:#5bbf43;font-size:12px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase">Submission details</div>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;border:1px solid #e7edf0;border-radius:10px;overflow:hidden">
                  ${formatRows(data)}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 28px">
                <div style="padding:16px 18px;background:#f1faee;border-left:4px solid #5bbf43;border-radius:6px;color:#31523a;font-size:13px;line-height:1.6">Reply directly to this email to contact the visitor at their submitted email address.</div>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;background:#071426;color:#9eb0c3;text-align:center;font-size:12px;line-height:1.6">
                <strong style="color:#ffffff">NEV Navgatee</strong><br>
                Smart Electric Mobility Solutions<br>
                This notification was sent from your website enquiry form.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

export async function sendSubmissionEmail(type, data) {
  if (!env.smtp.host || !env.smtp.user || !env.smtp.password || !env.mailTo) {
    console.warn("[Email] SMTP is not configured; submission saved without sending email");
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: env.smtp.host,
    port: env.smtp.port,
    secure: env.smtp.secure,
    auth: { user: env.smtp.user, pass: env.smtp.password },
  });

  const logoAttachment = fs.existsSync(logoPath)
    ? [{ filename: "nev-logo.png", path: logoPath, cid: "nev-logo" }]
    : [];

  await transporter.sendMail({
    from: env.mailFrom,
    to: env.mailTo,
    replyTo: data.email || undefined,
    subject: `New NEV ${submissionTitles[type] || "Website Submission"}`,
    html: buildEmailHtml(type, data),
    attachments: logoAttachment,
  });

  console.log(`[Email] ${type} submission sent to ${env.mailTo}`);
  return true;
}
