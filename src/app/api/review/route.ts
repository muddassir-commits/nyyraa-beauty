import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mail';

export async function POST(request: Request) {
  try {
    const { name, rating, product, text } = await request.json();

    if (!name || !rating || !product || !text) {
      return NextResponse.json(
        { error: 'Name, rating, product, and review text are required.' },
        { status: 400 }
      );
    }

    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #B76E79; border-radius: 8px; background-color: #FFFFF0;">
        <h2 style="color: #4A0E2D; border-bottom: 2px solid #B76E79; padding-bottom: 10px;">New Product Review Submitted</h2>
        <p style="font-size: 16px; color: #4A0E2D;">A new customer review has been submitted on the Nyyraa Beauty website:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 8px; font-weight: bold; width: 140px; color: #4A0E2D; border-bottom: 1px solid #eee;">Author:</td>
            <td style="padding: 8px; color: #333; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #4A0E2D; border-bottom: 1px solid #eee;">Product:</td>
            <td style="padding: 8px; color: #333; border-bottom: 1px solid #eee; text-transform: capitalize;">${product}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; color: #4A0E2D; border-bottom: 1px solid #eee;">Rating:</td>
            <td style="padding: 8px; color: #D4AF37; border-bottom: 1px solid #eee; font-size: 18px;">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)} (${rating}/5)</td>
          </tr>
        </table>
        
        <div style="margin-top: 25px; padding: 15px; background-color: #fff; border-left: 4px solid #B76E79; border-radius: 4px;">
          <h4 style="margin: 0 0 8px 0; color: #4A0E2D;">Review Content:</h4>
          <p style="margin: 0; font-size: 15px; color: #333; line-height: 1.5; white-space: pre-wrap;">"${text}"</p>
        </div>
        
        <footer style="margin-top: 30px; text-align: center; font-size: 12px; color: #999;">
          <p>Sent from Nyyraa Beauty Ecommerce Portal</p>
        </footer>
      </div>
    `;

    const result = await sendEmail({
      subject: `Nyyraa Review: ${rating} Stars on ${product} - by ${name}`,
      html: emailHtml,
      text: `Review from ${name}\nProduct: ${product}\nRating: ${rating}/5\n\nReview:\n${text}`,
    });

    return NextResponse.json({ success: true, provider: result.provider });
  } catch (error: any) {
    console.error('Error handling review API submission:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
