import { Resend } from "resend";
import { NextRequest } from "next/server";



export async function POST(req : NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const mymail = process.env.MY_MAIL!
    const { email, message } = await req.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // later replace with your domain
      to: [mymail],
      subject: "New Contact Form Message",
      html: `
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}