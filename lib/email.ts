import nodemailer from 'nodemailer';

// Email transporter configuration
export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

// Verify transporter configuration
export async function verifyEmailConfig() {
    try {
        await transporter.verify();
        console.log('✅ Email server is ready to send messages');
        return true;
    } catch (error) {
        console.error('❌ Email configuration error:', error);
        return false;
    }
}

// Premium HTML email template
export function getEmailTemplate({
    name,
    email,
    subject,
    message,
}: {
    name: string;
    email: string;
    subject: string;
    message: string;
}) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Message — Muhammad Tahir</title>
    <!--[if mso]>
    <style type="text/css">
        body, table, td { font-family: Georgia, serif !important; }
    </style>
    <![endif]-->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 0; background-color: #ddf0fb; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;">

<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: linear-gradient(160deg, #daeef9 0%, #c4e5f5 50%, #ddf3fc 100%); padding: 48px 0;">
  <tr>
    <td align="center">

      <!-- Outer border glow wrapper -->
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="620" style="max-width: 620px;">
        <tr>
          <td style="padding: 2px; background: linear-gradient(135deg, #38bdf8 0%, #7dd3fc 40%, #38bdf8 60%, #0ea5e9 100%); border-radius: 20px; box-shadow: 0 0 80px rgba(56,189,248,0.3), 0 32px 64px rgba(14,165,233,0.12);">

            <!-- Main Card -->
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #ffffff; border-radius: 18px; overflow: hidden;">

              <!-- HEADER -->
              <tr>
                <td style="padding: 0; overflow: hidden;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 45%, #38bdf8 100%);">
                    <tr>
                      <td style="padding: 48px 40px 36px; text-align: center;">

                        <!-- White accent line top -->
                        <div style="width: 60px; height: 2px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.75), transparent); margin: 0 auto 28px;"></div>

                        <!-- Icon badge -->
                        <div style="display: inline-block; width: 64px; height: 64px; background: linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.10) 100%); border-radius: 16px; border: 1px solid rgba(255,255,255,0.35); margin-bottom: 24px; box-shadow: 0 8px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.45);">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" height="64">
                            <tr><td align="center" valign="middle" style="font-size: 28px; line-height: 1;">✉️</td></tr>
                          </table>
                        </div>

                        <!-- Title -->
                        <h1 style="margin: 0 0 10px; font-family: 'Playfair Display', Georgia, serif; font-size: 32px; font-weight: 900; color: #ffffff; letter-spacing: -0.5px; line-height: 1.1; text-shadow: 0 2px 12px rgba(2,132,199,0.3);">
                          New Message Received
                        </h1>

                        <!-- Subtitle -->
                        <p style="margin: 0; font-size: 13px; font-weight: 400; color: rgba(255,255,255,0.88); letter-spacing: 2.5px; text-transform: uppercase;">
                          Portfolio Contact Form
                        </p>

                        <!-- White accent line bottom -->
                        <div style="width: 40px; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent); margin: 24px auto 0;"></div>

                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- CONTENT -->
              <tr>
                <td style="padding: 40px 40px 36px; background: #ffffff;">

                  <!-- SENDER SECTION -->
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 32px;">
                    <tr>
                      <!-- Avatar circle -->
                      <td width="52" valign="top" style="padding-right: 16px;">
                        <div style="width: 52px; height: 52px; background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%); border-radius: 50%; text-align: center; line-height: 52px; font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700; color: #ffffff; box-shadow: 0 4px 14px rgba(14,165,233,0.4);">
                          ${name ? name.charAt(0).toUpperCase() : 'U'}
                        </div>
                      </td>
                      <!-- Sender info -->
                      <td valign="middle">
                        <p style="margin: 0 0 3px; font-size: 10px; font-weight: 600; color: #0ea5e9; text-transform: uppercase; letter-spacing: 2px;">From</p>
                        <p style="margin: 0 0 4px; font-size: 18px; font-weight: 600; color: #0c2d48; line-height: 1.2;">${name}</p>
                        <p style="margin: 0;"><a href="mailto:${email}" style="color: #38bdf8; text-decoration: none; font-size: 13px; font-weight: 400; letter-spacing: 0.2px;">${email}</a></p>
                      </td>
                    </tr>
                  </table>

                  <!-- Sky-blue separator -->
                  <div style="height: 1px; background: linear-gradient(90deg, rgba(56,189,248,0.35) 0%, rgba(56,189,248,0.06) 100%); margin-bottom: 28px;"></div>

                  <!-- SUBJECT -->
                  <div style="margin-bottom: 28px;">
                    <p style="margin: 0 0 6px; font-size: 10px; font-weight: 600; color: #0ea5e9; text-transform: uppercase; letter-spacing: 2px;">Subject</p>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="background: linear-gradient(135deg, rgba(56,189,248,0.07) 0%, rgba(125,211,252,0.04) 100%); border: 1px solid rgba(56,189,248,0.22); border-radius: 8px; padding: 12px 18px;">
                          <p style="margin: 0; font-family: 'Playfair Display', Georgia, serif; font-size: 20px; font-weight: 700; color: #0c2d48; line-height: 1.3;">
                            ${subject}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <!-- MESSAGE -->
                  <div style="margin-bottom: 36px;">
                    <p style="margin: 0 0 10px; font-size: 10px; font-weight: 600; color: #0ea5e9; text-transform: uppercase; letter-spacing: 2px;">Message</p>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="background: #f0f9ff; border: 1px solid rgba(56,189,248,0.18); border-left: 3px solid #38bdf8; border-radius: 0 10px 10px 0; padding: 22px 24px;">
                          <p style="margin: 0; font-size: 15px; font-weight: 300; color: #1e4060; line-height: 1.75; white-space: pre-wrap; word-wrap: break-word;">
                            ${message}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <!-- CTA BUTTON -->
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td align="center">
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="border-radius: 10px; box-shadow: 0 6px 28px rgba(14,165,233,0.38), 0 0 0 1px rgba(56,189,248,0.3);">
                          <tr>
                            <td style="background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 50%, #0ea5e9 100%); border-radius: 10px; padding: 1px;">
                              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tr>
                                  <td style="background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%); border-radius: 9px;">
                                    <a href="mailto:${email}?subject=Re: ${subject}" style="display: block; padding: 16px 44px; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; color: #ffffff; text-decoration: none; letter-spacing: 0.8px; text-transform: uppercase;">
                                      Reply to ${name} &rarr;
                                    </a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <!-- META ROW -->
              <tr>
                <td style="padding: 0 40px;">
                  <div style="height: 1px; background: linear-gradient(90deg, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0.03) 100%);"></div>
                </td>
              </tr>
              <tr>
                <td style="padding: 14px 40px; background: #ffffff;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td>
                        <p style="margin: 0; font-size: 11px; color: #93c5d8; letter-spacing: 0.5px;">
                          &#128205; Received via portfolio contact form
                        </p>
                      </td>
                      <td align="right">
                        <p style="margin: 0; font-size: 11px; color: #93c5d8; letter-spacing: 0.3px;">
                          ${new Date().toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- FOOTER -->
              <tr>
                <td style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 28px 40px; text-align: center; border-top: 1px solid rgba(56,189,248,0.12);">

                  <!-- Monogram -->
                  <p style="margin: 0 0 6px; font-family: 'Playfair Display', Georgia, serif; font-size: 22px; font-weight: 700; color: #38bdf8; letter-spacing: 4px;">
                    MT
                  </p>

                  <p style="margin: 0 0 4px; font-size: 12px; color: #7ab8d4; letter-spacing: 0.5px;">
                    Muhammad Tahir &mdash; Portfolio
                  </p>
                  <p style="margin: 0; font-size: 11px; color: #a8d4e8;">
                    &copy; ${new Date().getFullYear()} All rights reserved
                  </p>

                </td>
              </tr>

            </table>
            <!-- /Main Card -->

          </td>
        </tr>
      </table>
      <!-- /Outer wrapper -->

    </td>
  </tr>
</table>

</body>
</html>
    `;
}

// Send email function
export async function sendEmail({
    name,
    email,
    subject,
    message,
}: {
    name: string;
    email: string;
    subject: string;
    message: string;
}) {
    const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_FROM}>`,
        to: process.env.EMAIL_TO,
        replyTo: email,
        subject: `Portfolio Contact: ${subject}`,
        html: getEmailTemplate({ name, email, subject, message }),
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    };

    return await transporter.sendMail(mailOptions);
}
