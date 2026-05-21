import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, phone, service, pickupLocation, dropoffLocation, date, time, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const serviceLabels: Record<string, string> = {
    airport: 'Airport Transfer',
    executive: 'Executive Travel',
    island: 'Island-Wide Service',
    corporate: 'Corporate Account',
  };

  const html = `
    <h2>New Booking Request — ABN Taxi Service</h2>
    <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px;">
      <tr><td><strong>Name</strong></td><td>${name}</td></tr>
      <tr><td><strong>Email</strong></td><td>${email}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
      <tr><td><strong>Service</strong></td><td>${serviceLabels[service] ?? service}</td></tr>
      <tr><td><strong>Pickup</strong></td><td>${pickupLocation}</td></tr>
      <tr><td><strong>Drop-off</strong></td><td>${dropoffLocation}</td></tr>
      <tr><td><strong>Date</strong></td><td>${date}</td></tr>
      <tr><td><strong>Time</strong></td><td>${time}</td></tr>
      <tr><td><strong>Message</strong></td><td>${message || '—'}</td></tr>
    </table>
  `;

  try {
    await transporter.sendMail({
      from: `"ABN Taxi Service Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `New Booking Request from ${name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
