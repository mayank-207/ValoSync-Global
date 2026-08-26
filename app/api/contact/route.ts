import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, budget, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const adminEmail = process.env.ADMIN_EMAIL || "Jinaliprajapati1708@gmail.com";
    
    // Resend requires a verified domain or its default 'onboarding@resend.dev' for the 'from' address.
    // Public webmail domains like @gmail.com cannot be used as 'from' sender in Resend.
    let rawSender = process.env.SENDER_EMAIL || "onboarding@resend.dev";
    if (rawSender.includes("@gmail.com") || rawSender.includes("@yahoo.com") || rawSender.includes("@outlook.com") || rawSender.includes("@hotmail.com")) {
      rawSender = "onboarding@resend.dev";
    }
    const sender = `Velosync Global <${rawSender}>`;

    // Build Admin Notification HTML
    const adminHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0F172A; color: #F8FAFC; margin: 0; padding: 20px; }
            .card { background-color: #1E293B; border-radius: 16px; padding: 32px; max-width: 600px; margin: 0 auto; border: 1px solid rgba(6, 182, 212, 0.3); }
            .header { border-bottom: 2px solid #06B6D4; padding-bottom: 16px; margin-bottom: 24px; }
            .badge { background-color: rgba(6, 182, 212, 0.2); color: #06B6D4; font-size: 12px; font-weight: bold; padding: 6px 12px; border-radius: 20px; text-transform: uppercase; }
            h1 { font-size: 22px; color: #FFFFFF; margin: 12px 0 4px 0; }
            .field { margin-bottom: 16px; }
            .label { font-size: 11px; text-transform: uppercase; color: #94A3B8; font-weight: bold; letter-spacing: 0.5px; }
            .value { font-size: 15px; color: #F1F5F9; margin-top: 4px; font-weight: 500; }
            .message-box { background-color: #0F172A; padding: 16px; border-radius: 12px; border-left: 4px solid #06B6D4; font-size: 14px; color: #CBD5E1; margin-top: 8px; line-height: 1.6; }
            .btn { display: inline-block; background-color: #06B6D4; color: #FFFFFF; font-weight: bold; text-decoration: none; padding: 12px 24px; border-radius: 10px; margin-top: 20px; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <span class="badge">New Lead Received</span>
              <h1>${name} requested a consultation</h1>
              <p style="color: #94A3B8; font-size: 13px; margin: 0;">Received from Velosync Global Contact Form</p>
            </div>

            <div class="field">
              <div class="label">Full Name</div>
              <div class="value">${name}</div>
            </div>

            <div class="field">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${email}" style="color: #06B6D4; text-decoration: none;">${email}</a></div>
            </div>

            <div class="field">
              <div class="label">Phone / WhatsApp</div>
              <div class="value">${phone || "Not provided"}</div>
            </div>

            <div class="field">
              <div class="label">Company Name</div>
              <div class="value">${company || "Not specified"}</div>
            </div>

            <div class="field">
              <div class="label">Primary Service Interested</div>
              <div class="value" style="color: #06B6D4; font-weight: bold;">${service || "Custom Software Development"}</div>
            </div>

            <div class="field">
              <div class="label">Budget Range</div>
              <div class="value">${budget || "Not specified"}</div>
            </div>

            <div class="field">
              <div class="label">Project Brief / Message</div>
              <div class="message-box">${message ? message.replace(/\n/g, '<br/>') : "No additional message provided."}</div>
            </div>

            <a href="mailto:${email}?subject=RE: Velosync Global Consultation - ${encodeURIComponent(service || 'IT Solutions')}" class="btn">Reply Directly to ${name}</a>
          </div>
        </body>
      </html>
    `;

    // Build User Confirmation HTML
    const userHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0B1B3D; color: #F8FAFC; margin: 0; padding: 20px; }
            .card { background-color: #0F172A; border-radius: 16px; padding: 36px; max-width: 600px; margin: 0 auto; border: 1px solid rgba(6, 182, 212, 0.3); }
            .logo { font-size: 24px; font-weight: bold; color: #FFFFFF; }
            .accent { color: #06B6D4; }
            h1 { font-size: 24px; color: #FFFFFF; margin-top: 20px; }
            p { font-size: 15px; color: #CBD5E1; line-height: 1.6; }
            .summary { background-color: #1E293B; padding: 20px; border-radius: 12px; margin: 24px 0; border: 1px solid #334155; }
            .footer { border-top: 1px solid #334155; padding-top: 20px; margin-top: 32px; font-size: 12px; color: #64748B; text-align: center; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="logo">Velosync <span class="accent">Global</span></div>
            <h1>Thank you for reaching out, ${name}!</h1>
            <p>We have successfully received your inquiry regarding <strong>${service || "our services"}</strong>.</p>
            <p>Our senior solution architect is reviewing your requirements and will contact you within <strong>24 hours</strong> to discuss the next steps for your project.</p>
            
            <div class="summary">
              <h3 style="margin-top: 0; color: #FFFFFF; font-size: 15px;">Your Submission Summary:</h3>
              <p style="margin: 4px 0; font-size: 13px;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 4px 0; font-size: 13px;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 4px 0; font-size: 13px;"><strong>Service:</strong> ${service || "Custom Software Development"}</p>
              ${message ? `<p style="margin: 4px 0; font-size: 13px;"><strong>Message:</strong> ${message}</p>` : ''}
            </div>

            <p>If you have any urgent questions, feel free to reply directly to this email or reach us at <a href="mailto:contact@velosyncglobal.com" style="color: #06B6D4;">contact@velosyncglobal.com</a>.</p>

            <div class="footer">
              © ${new Date().getFullYear()} Velosync Global. All rights reserved.<br/>
              Custom Software • CRM Engineering • AI Automation • Digital Marketing
            </div>
          </div>
        </body>
      </html>
    `;

    if (apiKey) {
      const resend = new Resend(apiKey);

      // 1. Send Admin Notification Email
      const adminResult = await resend.emails.send({
        from: sender,
        to: adminEmail,
        replyTo: email,
        subject: `🚨 New Lead: ${name} (${service || "Inquiry"})`,
        html: adminHtml,
      });

      if (adminResult.error) {
        console.error("Resend Admin Email Error:", adminResult.error);
      } else {
        console.log("Resend Admin Email Sent Successfully:", adminResult.data?.id);
      }

      // 2. Send User Confirmation Email
      // Note: On unverified Resend free test accounts (using onboarding@resend.dev),
      // Resend only allows sending to the account owner's email address.
      const userResult = await resend.emails.send({
        from: sender,
        to: email,
        subject: `Thank you for contacting Velosync Global!`,
        html: userHtml,
      });

      if (userResult.error) {
        console.warn("Resend User Email Notice (Expected on free test domain for non-owner emails):", userResult.error);
      } else {
        console.log("Resend User Email Sent Successfully:", userResult.data?.id);
      }
    } else {
      console.log("DEMO MODE - No API Key provided");
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been submitted successfully!",
    });
  } catch (err: any) {
    console.error("Error processing contact submission:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
