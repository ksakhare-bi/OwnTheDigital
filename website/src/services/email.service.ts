import nodemailer from "nodemailer";
import type { CreateContactInput } from "@/types/contact";

// Escape HTML to prevent XSS / injection in HTML emails
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getTransporter() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const host = process.env.EMAIL_HOST || "gmail";

  if (!user || !pass) {
    console.warn(
      "EMAIL_USER or EMAIL_PASS is not defined in environment variables. Emails cannot be sent."
    );
    return null;
  }

  if (host.toLowerCase() === "gmail") {
    return nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });
  }

  return nodemailer.createTransport({
    host: host,
    port: Number(process.env.EMAIL_PORT) || 465,
    secure: process.env.EMAIL_SECURE !== "false",
    auth: { user, pass },
  });
}

/**
 * Sends both the acknowledgment email to the client and the notification alert to the owner.
 */
export async function sendContactEmails(
  contact: CreateContactInput
): Promise<{ clientSent: boolean; ownerSent: boolean }> {
  const transporter = getTransporter();
  if (!transporter) {
    console.error("Email transporter could not be initialized.");
    return { clientSent: false, ownerSent: false };
  }

  const senderEmail = process.env.EMAIL_USER;
  const ownerEmail = process.env.OWNER_EMAIL || "dev.ownthedigital@gmail.com"
  const fromHeader = `"Own The Digital" <${senderEmail}>`;

  const safeName = escapeHtml(contact.name);
  const safeEmail = escapeHtml(contact.email);
  const safePhone = contact.phone ? escapeHtml(contact.phone) : "";
  const safeMessage = escapeHtml(contact.message).replace(/\n/g, "<br />");
  const submissionTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  // 1. Template: Client Acknowledgment Email
  const clientSubject = `Thank you for contacting Own The Digital!`;
  const clientHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for reaching out</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f7fa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f7fa; padding: 40px 15px;">
    <tr>
      <td align="center">
        <table width="100%" max-width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #0b132b 0%, #1c2541 100%); padding: 32px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase;">
                Own The <span style="color: #3b82f6;">Digital</span>
              </h1>
              <p style="margin: 8px 0 0 0; color: #94a3b8; font-size: 13px; letter-spacing: 1px; text-transform: uppercase;">
                Digital Transformation & Growth
              </p>
            </td>
          </tr>

          <!-- Main Body -->
          <tr>
            <td style="padding: 36px 32px 24px 32px;">
              <h2 style="margin: 0 0 16px 0; color: #0b132b; font-size: 20px; font-weight: 700;">
                Hi ${safeName},
              </h2>
              <p style="margin: 0 0 16px 0; font-size: 15px; line-height: 1.6; color: #475569;">
                Thank you for reaching out to <strong>Own The Digital</strong>. We have received your inquiry and our team is already reviewing your details.
              </p>
              <p style="margin: 0 0 24px 0; font-size: 15px; line-height: 1.6; color: #475569;">
                One of our digital strategists will contact you within <strong>24 business hours</strong> to discuss how we can partner to achieve your goals.
              </p>

              <!-- Submission Summary Box -->
              <div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 0 8px 8px 0; padding: 18px 20px; margin-bottom: 26px;">
                <h3 style="margin: 0 0 10px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; font-weight: 700;">
                  Summary of your inquiry
                </h3>
                <p style="margin: 0 0 6px 0; font-size: 14px; color: #334155;">
                  <strong>Message:</strong>
                </p>
                <div style="font-size: 14px; color: #1e293b; line-height: 1.5; font-style: italic; background: #ffffff; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
                  ${safeMessage}
                </div>
                ${safePhone
      ? `<p style="margin: 10px 0 0 0; font-size: 13px; color: #475569;"><strong>Phone:</strong> ${safePhone}</p>`
      : ""
    }
              </div>

              <!-- Quick Contact Section -->
              <div style="background-color: #f1f5f9; border-radius: 8px; padding: 18px 20px; margin-bottom: 24px;">
                <h4 style="margin: 0 0 10px 0; font-size: 13px; color: #0b132b; text-transform: uppercase; letter-spacing: 0.5px;">
                  Need immediate support?
                </h4>
                <p style="margin: 0 0 4px 0; font-size: 13px; color: #475569;">
                  🇮🇳 <strong>India:</strong> <a href="tel:+919993067849" style="color: #2563eb; text-decoration: none;">+91 9993067849</a>
                </p>
                <p style="margin: 0 0 4px 0; font-size: 13px; color: #475569;">
                  🇺🇸 <strong>USA:</strong> <a href="tel:+12065533419" style="color: #2563eb; text-decoration: none;">+1 206 553 3419</a>
                </p>
                <p style="margin: 0; font-size: 13px; color: #475569;">
                  ✉️ <strong>Email:</strong> <a href="mailto:dev.ownthedigital@gmail.com" style="color: #2563eb; text-decoration: none;">dev.ownthedigital@gmail.com</a>
                </p>
              </div>

              <p style="margin: 0; font-size: 15px; color: #475569;">
                Warm regards,<br>
                <strong style="color: #0b132b;">Team Own The Digital</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 32px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                © ${new Date().getFullYear()} Own The Digital. All rights reserved.
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

  const clientText = `
Hi ${contact.name},

Thank you for reaching out to Own The Digital! We have received your inquiry and our team is already reviewing it.
One of our digital experts will get in touch with you within 24 business hours.

Summary of your inquiry:
- Message: ${contact.message}
${contact.phone ? `- Phone: ${contact.phone}` : ""}

Need immediate assistance?
- India: +91 9993067849
- USA: +1 206 553 3419
- Email: dev.ownthedigital@gmail.com

Warm regards,
Team Own The Digital
`;

  // 2. Template: Owner Notification Email
  const ownerSubject = `New Contact Inquiry: ${contact.name}`;
  const ownerHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Submission</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f7fa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f7fa; padding: 40px 15px;">
    <tr>
      <td align="center">
        <table width="100%" max-width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
          
          <!-- Alert Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%); padding: 24px 30px; text-align: left;">
              <span style="background: rgba(255,255,255,0.2); color: #ffffff; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;">
                New Lead Alert
              </span>
              <h1 style="margin: 12px 0 0 0; color: #ffffff; font-size: 22px; font-weight: 800;">
                New Contact Form Submission
              </h1>
              <p style="margin: 4px 0 0 0; color: #bfdbfe; font-size: 13px;">
                Received on ${submissionTime} (IST)
              </p>
            </td>
          </tr>

          <!-- Contact Details -->
          <tr>
            <td style="padding: 28px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9; width: 120px; font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase;">
                    Client Name
                  </td>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9; font-size: 15px; font-weight: 600; color: #0f172a;">
                    ${safeName}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9; font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase;">
                    Email
                  </td>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9; font-size: 15px; color: #2563eb;">
                    <a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: none; font-weight: 500;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9; font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase;">
                    Phone
                  </td>
                  <td style="padding: 10px 12px; border-bottom: 1px solid #f1f5f9; font-size: 15px; color: #334155;">
                    ${safePhone
      ? `<a href="tel:${safePhone}" style="color: #0f172a; text-decoration: none;">${safePhone}</a>`
      : `<span style="color: #94a3b8; font-style: italic;">Not provided</span>`
    }
                  </td>
                </tr>
              </table>

              <!-- Message Section -->
              <div style="margin-bottom: 28px;">
                <h3 style="margin: 0 0 10px 0; font-size: 13px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">
                  Message / Inquiry
                </h3>
                <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #1e293b;">
                  ${safeMessage}
                </div>
              </div>

              <!-- Action Button -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${safeEmail}?subject=${encodeURIComponent(
      "Re: Your inquiry with Own The Digital"
    )}" style="display: inline-block; background-color: #2563eb; color: #ffffff; padding: 12px 28px; border-radius: 6px; font-size: 14px; font-weight: 600; text-decoration: none; box-shadow: 0 2px 8px rgba(37,99,235,0.25);">
                      Reply to ${safeName}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 16px 30px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                This notification was automatically sent from the Own The Digital website contact form.
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

  const ownerText = `
New Contact Form Submission
===========================
Date: ${submissionTime} (IST)
Name: ${contact.name}
Email: ${contact.email}
Phone: ${contact.phone || "Not provided"}

Message:
${contact.message}

Reply to client: ${contact.email}
`;

  const results = await Promise.allSettled([
    // Client Acknowledgment
    transporter.sendMail({
      from: fromHeader,
      to: contact.email,
      subject: clientSubject,
      text: clientText,
      html: clientHtml,
    }),
    // Owner Notification
    transporter.sendMail({
      from: fromHeader,
      to: ownerEmail,
      replyTo: contact.email,
      subject: ownerSubject,
      text: ownerText,
      html: ownerHtml,
    }),
  ]);

  let clientSent = false;
  let ownerSent = false;

  if (results[0].status === "fulfilled") {
    clientSent = true;
    console.log(`[Email] Acknowledgment email sent successfully to ${contact.email}`);
  } else {
    console.error("[Email] Failed to send acknowledgment email to client:", results[0].reason);
  }

  if (results[1].status === "fulfilled") {
    ownerSent = true;
    console.log(`[Email] Lead notification email sent successfully to owner (${ownerEmail})`);
  } else {
    console.error("[Email] Failed to send notification email to owner:", results[1].reason);
  }

  return { clientSent, ownerSent };
}
