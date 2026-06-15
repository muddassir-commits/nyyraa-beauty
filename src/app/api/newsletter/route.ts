import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mail';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required.' },
        { status: 400 }
      );
    }

    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #B76E79; border-radius: 8px; background-color: #FFFFF0;">
        <h2 style="color: #4A0E2D; border-bottom: 2px solid #B76E79; padding-bottom: 10px;">New Newsletter Subscriber</h2>
        <p style="font-size: 16px; color: #4A0E2D;">A new visitor has subscribed to the Nyyraa Beauty newsletter:</p>
        
        <div style="margin-top: 25px; padding: 15px; background-color: #fff; border: 1px dashed #B76E79; border-radius: 4px; text-align: center;">
          <h3 style="margin: 0; color: #4A0E2D;">
            <a href="mailto:${email}" style="color: #B76E79; text-decoration: none; font-size: 20px;">${email}</a>
          </h3>
        </div>
        
        <footer style="margin-top: 30px; text-align: center; font-size: 12px; color: #999;">
          <p>Sent from Nyyraa Beauty Ecommerce Portal</p>
        </footer>
      </div>
    `;

    const result = await sendEmail({
      subject: `Nyyraa Newsletter: New Subscriber! - ${email}`,
      html: emailHtml,
      text: `New subscriber email: ${email}`,
    });

    return NextResponse.json({ success: true, provider: result.provider });
  } catch (error: any) {
    console.error('Error handling newsletter API submission:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
