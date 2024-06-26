import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, name, subject, message } = data;

    const hostEmail = process.env.HOST_EMAIL;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    const mailOptions = {
      from: `${name} - Psalms For Kids - ${email} <${process.env.EMAIL_USER}>`,
      to: hostEmail,
      subject: subject,
      text: message,
      replyTo: email,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log(info.response);

    return NextResponse.json({ success: true, info });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error});
  }
}
