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

    // Generate unique reference ID
    const referenceId = `REF-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const currentYear = new Date().getFullYear();

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
                                    <img src="/profile/ibd.png" alt="Ddumba Abdallah Kato Portfolio" width="564" style="display: block; max-width: 100%;">
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
                                
                                <p>You have received a new message through your portfolio website contact form. Here are the details:</p>
                                
                                <p><strong>Contact Information:</strong><br>
                                Name: ${name}<br>
                                Email: ${email}<br>
                                Phone: ${phone}<br>
                                Submitted: ${new Date().toLocaleString()}</p>
                                
                                <p><strong>Message:</strong><br>
                                ${message.replace(/\n/g, '<br>')}</p>
                                
                                <p>This potential client has shown interest in your software development services. They may be looking for web development, full-stack solutions, or other technical expertise that matches your skills.</p>
                                
                                <p>Please respond to this inquiry within 24 hours to maintain professional communication standards.</p>
                                
                                <p>You can reply directly to: ${email}</p>
                                
                                <p>Kind Regards,<br>
                                <strong>Your Portfolio Website System</strong></p>
                            </td>
                        </tr>
                        
                        <!-- Footer -->
                        <tr>
                            <td class="footer">
                                <p><strong>DDUMBA ABDALLAH KATO</strong><br>
                                Software Developer based in Kampala, Uganda<br>
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
                                    <img src="/profile/ibd.png" alt="Ddumba Abdallah Kato Portfolio" width="564" style="display: block; max-width: 100%;">
                                </td>
                            </tr>
                        
                        <!-- Content -->
                        <tr>
                            <td class="content">
                                <h2 class="text-center" style="text-align: center;"><strong><u>MESSAGE CONFIRMATION</u></strong></h2>
                                
                                <p class="text-center" style="text-align: center;">
                                    Ddumba Abdallah Kato - Software Developer<br>
                                    Full Stack Developer & Web Technologies Specialist
                                </p>
                                
                                <p>Dear ${name},</p>
                                
                                <p>Thank you for reaching out through my portfolio website! I've successfully received your message and appreciate you taking the time to contact me.</p>
                                
                                <p><strong>Here's a summary of your submission:</strong><br>
                                Received: ${new Date().toLocaleString()}<br>
                                Reference ID: ${referenceId}</p>
                                
                                <p>As a software developer specializing in full-stack development with expertise in web technologies, database systems, and cloud computing, I'm excited to learn about your project requirements.</p>
                                
                                <p><strong>What happens next?</strong><br>
                                I typically respond to all inquiries within 24 hours. During this time, I'll review your message in detail and prepare a thoughtful response addressing your specific needs.</p>
                                
                                <p>In the meantime, feel free to explore more of my work:</p>
                                <ul>
                                    <li>View my <a href="https://ddumba.kyakabi.com/projects">recent projects</a></li>
                                    <li>Check out my <a href="https://ddumba.kyakabi.com/skills">technical skills</a></li>
                                    <li>See my professional <a href="https://ddumba.kyakabi.com/certificates">certifications</a></li>
                                </ul>
                                
                                <p>I look forward to connecting with you and discussing how we can bring your ideas to life with modern, efficient technology solutions!</p>
                                
                                <p>Best regards,<br>
                                <strong>Ddumba Abdallah Kato</strong><br>
                                Software Developer</p>
                            </td>
                        </tr>
                        
                        <!-- Footer -->
                        <tr>
                            <td class="footer">
                                <p><strong>DDUMBA ABDALLAH KATO</strong><br>
                                Software Developer based in Kampala, Uganda<br>
                                Specializing in Full Stack Development, Web Technologies & Cloud Computing</p>
                                
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
                                
                                <p style="font-size: 12px;">
                                    This is an automated confirmation email. Please do not reply to this message.
                                </p>
                                
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