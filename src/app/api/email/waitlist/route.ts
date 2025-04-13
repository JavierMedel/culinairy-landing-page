import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Use the Azure Blob Storage URL for the logo image
    const imageUrl = "https://culinairy.blob.core.windows.net/images-public/culinAIry-image-01.jpeg?sp=r&st=2025-04-11T19:38:02Z&se=2026-01-01T04:38:02Z&spr=https&sv=2024-11-04&sr=b&sig=mUkEN3Ka5MqBjvpMxRqslVdHj2TD2y7A94k5Jfr%2Bp8M%3D";

    // Generate the HTML content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="${imageUrl}" alt="CulinAIry.io Logo" style="max-width: 150px; height: auto;">
        </div>
        <h1 style="color: #00A0B0; text-align: center;">Welcome to CulinAIry.io! 🎉</h1>
        
        <p style="text-align: center;">Thank you for joining our waitlist! We're thrilled to have you on board.</p>
        
        <p>You're now among the first to know when we launch our revolutionary AI-powered meal planning platform. Here's what you can look forward to:</p>
        
        <ul style="color: #2E1A47;">
          <li>Personalized recipe recommendations</li>
          <li>Step-by-step visual cooking guides</li>
          <li>Auto-generated shopping lists</li>
          <li>AI-powered meal planning</li>
        </ul>
        
        <p>We'll keep you updated on our progress and let you know as soon as we're ready to launch.</p>
        
        <p>In the meantime, follow us on social media for updates and cooking inspiration:</p>
        
        <div style="margin: 20px 0; text-align: center;">
          <a href="https://X.com/culinairy" style="color: #00A0B0; text-decoration: none; margin-right: 15px;">X.com</a>
          <a href="https://instagram.com/culinairy.io" style="color: #00A0B0; text-decoration: none;">Instagram</a>
        </div>
        
        <p style="color: #2E1A47; font-size: 0.9em; margin-top: 30px; text-align: center;">
          Best regards,<br>
          The CulinAIry.io Team
        </p>
      </div>
    `;

    const response = await resend.emails.send({
      from: 'CulinAIry.io <hello@culinairy.io>', // Updated sender name
      to: email,
      subject: 'Welcome to CulinAIry.io Waitlist! 🎉', // Updated subject
      html: emailHtml // Use the generated HTML variable
    });

    // Check if Resend returned an error
    if (response.error) {
      console.error('Resend API error:', response.error);
      return NextResponse.json(
        { error: `Failed to send welcome email: ${response.error.message}` },
        { status: 500 } // Use 500 for server-side/API issues
      );
    }

    console.log('Resend API success response:', response.data); // Log success data

    return NextResponse.json(
      { message: 'Welcome email sent successfully', data: response.data }, // Include Resend data ID
      { status: 200 }
    );
  } catch (error) { 
    // Log the error object for more details
    console.error('Exception sending welcome email:', error); 
    // Check if it's an Error instance to safely access message
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: `Failed to send welcome email: ${errorMessage}` },
      { status: 500 }
    );
  }
}
