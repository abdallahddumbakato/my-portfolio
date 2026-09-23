import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const currentYear = new Date().getFullYear();
    const plainMessage = message.replace(/\s+/g, ' ').trim();
    const messageExcerpt = plainMessage.length > 200 ? `${plainMessage.slice(0, 200)}…` : plainMessage;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Email to you (notification) - EXACT TEMPLATE
    const adminEmailHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        /* Reset styles */
        body, table, td, p, a, li, blockquote {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        
        table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        img {
            -ms-interpolation-mode: bicubic;
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }
        
        /* Container styles */
        .container {
            max-width: 600px;
            margin: 0 auto;
        }
        
        .header {
            background-color: #f1f5f8;
            padding: 20px 0;
        }
        
        .content {
            background-color: #ffffff;
            padding: 20px;
        }
        
        .footer {
            background-color: #273458;
            color: #ffffff;
            padding: 20px;
            text-align: center;
        }
        
        /* Typography */
        body {
            font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-size: 14px;
            line-height: 1.6;
            color: #022e63;
        }
        
        h1, h2, h3 {
            color: #022e63;
        }
        
        .text-center {
            text-align: center;
        }
        
        .text-left {
            text-align: left;
        }
        
        /* Links */
        a {
            color: #3772b0;
            text-decoration: underline;
        }
        
        .footer a {
            color: #ffffff;
        }
        
        /* Social icons */
        .social-icons {
            text-align: center;
            padding: 15px 0;
        }
        
        .social-icons a {
            display: inline-block;
            margin: 0 10px;
        }
        
        /* Responsive */
        @media only screen and (max-width: 480px) {
            .container {
                width: 100% !important;
            }
            
            .content, .footer {
                padding: 15px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f8;">
    <center>
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr>
                <td align="center" valign="top">
                    <!-- Container -->
                    <table class="container" border="0" cellpadding="0" cellspacing="0" width="600">
                        <!-- Header -->
                        <tr>
                            <td class="header" align="center">
                                <img src="http://ddumba.kyakabi.com/profile/ibd.png" alt="Ddumba Abdallah Kato Portfolio" width="564" style="display: block; max-width: 100%;">
                            </td>
                        </tr>
                        
                        <!-- Content -->
                        <tr>
                            <td class="content">
                                <h2 class="text-center" style="text-align: center;"><strong><u>NEW CONTACT FORM SUBMISSION</u></strong></h2>
                                
                                <p class="text-center" style="text-align: center;">
                                    Ddumba Abdallah Kato Portfolio<br>
                                    a.ddumba@kyakabi.com
                                </p>
                                
                                <p>Hello Ddumba,</p>

                                <p>You've received a new message through your portfolio contact form:</p>

                                <p><strong>Contact Information:</strong><br>
                                Name: ${name}<br>
                                Email: ${email}<br>
                                Phone: ${phone}<br>
                                Submitted: ${new Date().toLocaleString()}</p>

                                <p><strong>Message:</strong><br>
                                ${message.replace(/\n/g, '<br>')}</p>

                                <p>Reply directly to ${email} to respond.</p>
                            </td>
                        </tr>

                        <!-- Footer -->
                        <tr>
                            <td class="footer">
                                <p><strong>DDUMBA ABDALLAH KATO</strong><br>
                                AI Engineer & Solutions Architect based in Kampala, Uganda<br>
                                a.ddumba@kyakabi.com | +256701019242</p>
                                
                                <!-- Social Icons -->
                                <div class="social-icons">
                                    <a href="https://www.facebook.com/abdallahddumba.kato/" target="_blank">
                                        <img src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-facebook-48.png" alt="Facebook" width="24" height="24">
                                    </a>
                                    <a href="https://twitter.com/Hatalabdallah" target="_blank">
                                        <img src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-twitter-48.png" alt="Twitter" width="24" height="24">
                                    </a>
                                    <a href="https://ddumba.kyakabi.com/projects" target="_blank">
                                        <img src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-link-48.png" alt="Website" width="24" height="24">
                                    </a>

                                    <a href="https://wa.me/256701019242" target="_blank">
                                        <img src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-whatsapp-48.png" alt="WhatsApp" width="24" height="24">
                                    </a>
                                    <a href="https://github.com/abdallahddumbakato" target="_blank">
                                        <img src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-github-48.png" alt="GitHub" width="24" height="24">
                                    </a>
                                </div>
                                
                                <p style="font-size: 12px;">
                                    This is an automated notification from your portfolio website.
                                </p>
                                
                                <p style="font-size: 10px;">
                                    The information contained in this communication is confidential. 
                                    It is intended solely for the recipient. If you are not the intended recipient, 
                                    you are hereby notified that any disclosure, copying, distribution or taking 
                                    action in relation to the contents of this information is strictly prohibited.
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </center>
</body>
</html>`;

    // Email to sender (confirmation) - EXACT TEMPLATE
    const senderEmailHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Message Received Confirmation</title>
    <style>
        /* Reset styles */
        body, table, td, p, a, li, blockquote {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        
        table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        
        img {
            -ms-interpolation-mode: bicubic;
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }
        
        /* Container styles */
        .container {
            max-width: 600px;
            margin: 0 auto;
        }
        
        .header {
            background-color: #f1f5f8;
            padding: 20px 0;
        }
        
        .content {
            background-color: #ffffff;
            padding: 20px;
        }
        
        .footer {
            background-color: #273458;
            color: #ffffff;
            padding: 20px;
            text-align: center;
        }
        
        /* Typography */
        body {
            font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-size: 14px;
            line-height: 1.6;
            color: #022e63;
        }
        
        h1, h2, h3 {
            color: #022e63;
        }
        
        .text-center {
            text-align: center;
        }
        
        .text-left {
            text-align: left;
        }
        
        /* Links */
        a {
            color: #3772b0;
            text-decoration: underline;
        }
        
        .footer a {
            color: #ffffff;
        }
        
        /* Social icons */
        .social-icons {
            text-align: center;
            padding: 15px 0;
        }
        
        .social-icons a {
            display: inline-block;
            margin: 0 10px;
        }
        
        /* Responsive */
        @media only screen and (max-width: 480px) {
            .container {
                width: 100% !important;
            }
            
            .content, .footer {
                padding: 15px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f8;">
    <center>
        <table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr>
                <td align="center" valign="top">
                    <!-- Container -->
                    <table class="container" border="0" cellpadding="0" cellspacing="0" width="600">
                        <!-- Header -->
                        <tr>
                            <td class="header" align="center">
                                <img src="http://ddumba.kyakabi.com/profile/ibd.png" alt="Ddumba Abdallah Kato Portfolio" width="564" style="display: block; max-width: 100%;">
                            </td>
                        </tr>
                        
                        <!-- Content -->
                        <tr>
                            <td class="content">
                                <p>Hi ${name},</p>

                                <p>Thanks for reaching out about ${subject}. I read what you sent — "${messageExcerpt}" — and wanted to confirm it's landed with me; I'll get back to you with a proper reply, usually within 24 hours.</p>

                                <p>Talk soon,<br>
                                Ddumba</p>
                            </td>
                        </tr>
                        
                        <!-- Footer -->
                        <tr>
                            <td class="footer">
                                <p><strong>DDUMBA ABDALLAH KATO</strong><br>
                                AI Engineer & Solutions Architect based in Kampala, Uganda<br>
                                Specializing in Generative AI, MLOps & Cloud Platform Engineering</p>

                                <p>a.ddumba@kyakabi.com | +256701019242</p>
                                
                                <!-- Social Icons -->
                                <div class="social-icons">
                                    <a href="https://www.facebook.com/abdallahddumba.kato/" target="_blank">
                                        <img src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-facebook-48.png" alt="Facebook" width="24" height="24">
                                    </a>
                                    <a href="https://twitter.com/Hatalabdallah" target="_blank">
                                        <img src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-twitter-48.png" alt="Twitter" width="24" height="24">
                                    </a>
                                    <a href="https://ddumba.kyakabi.com/projects" target="_blank">
                                        <img src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-link-48.png" alt="Website" width="24" height="24">
                                    </a>

                                    <a href="https://wa.me/256701019242" target="_blank">
                                        <img src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-whatsapp-48.png" alt="WhatsApp" width="24" height="24">
                                    </a>
                                    <a href="https://github.com/abdallahddumbakato" target="_blank">
                                        <img src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-light-github-48.png" alt="GitHub" width="24" height="24">
                                    </a>
                                </div>
                                
                                <p style="font-size: 10px;">
                                    &copy; ${currentYear} Ddumba Abdallah Kato. All rights reserved.
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </center>
</body>
</html>`;

    // Send email to you (notification)
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      subject: `New Contact Form: ${subject}`,
      html: adminEmailHtml,
    });

    // Send confirmation email to sender
    await transporter.sendMail({
      from: `"Ddumba Abdallah Kato" <${process.env.FROM_EMAIL}>`,
      to: email,
      subject: 'Message Received - Ddumba Abdallah Kato',
      html: senderEmailHtml,
    });

    // Fire WhatsApp notification — failure here must not affect the success response
    try {
      const whatsappExcerpt = plainMessage.length > 300 ? `${plainMessage.slice(0, 300)}…` : plainMessage;
      const whatsappMessage = `New portfolio contact\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${whatsappExcerpt}`;
      const whatsappUrl = `https://api.callmebot.com/whatsapp.php?phone=256701019242&text=${encodeURIComponent(whatsappMessage)}&apikey=${process.env.WHATSAPP_API_KEY}`;
      const whatsappResponse = await fetch(whatsappUrl);
      const whatsappResponseText = await whatsappResponse.text();
      console.log(`WhatsApp notification response (status ${whatsappResponse.status}):`, whatsappResponseText);
    } catch (whatsappError) {
      console.error('WhatsApp notification failed:', whatsappError);
    }

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
