import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mail';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #B76E79; border-radius: 8px; background-color: #FFFFF0;">
        <h2 style="color: #4A0E2D; border-bottom: 2px solid #B76E79; padding-bottom: 10px;">New Contact Form Submission</h2>
        <p style="font-size: 16px; color: #4A0E2D;">You have received a new message from the Nyyraa Beauty website contact form:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 8px; font-weight: bold; width: 120px; color: #4A0E2D; border-bottom: 1px solid #eee;">Name:</td>
            <td style="padding: 8px; color: #333; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #4A0E2D; border-bottom: 1px solid #eee;">Email:</td>
            <td style="padding: 8px; color: #333; border-bottom: 1px solid #eee;">
              <a href="mailto:${email}" style="color: #B76E79; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #4A0E2D; border-bottom: 1px solid #eee;">Subject:</td>
            <td style="padding: 8px; color: #333; border-bottom: 1px solid #eee; text-transform: capitalize;">${subject}</td>
          </tr>
        </table>
        
        <div style="margin-top: 25px; padding: 15px; background-color: #fff; border-left: 4px solid #B76E79; border-radius: 4px;">
          <h4 style="margin: 0 0 8px 0; color: #4A0E2D;">Message:</h4>
          <p style="margin: 0; font-size: 15px; color: #333; line-height: 1.5; white-space: pre-wrap;">${message}</p>
        </div>
        
        <footer style="margin-top: 30px; text-align: center; font-size: 12px; color: #999;">
          <p>Sent from Nyyraa Beauty Ecommerce Portal</p>
        </footer>
      </div>
    `;

    const result = await sendEmail({
      subject: `Nyyraa Contact: ${subject.toUpperCase()} - from ${name}`,
      html: emailHtml,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true, provider: result.provider });
  } catch (error: any) {
    console.error('Error handling contact form API submission:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
