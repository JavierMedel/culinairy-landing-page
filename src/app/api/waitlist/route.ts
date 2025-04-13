import { NextResponse } from 'next/server';
import supabaseAdmin from '@/lib/supabase-admin';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Store the email in Supabase using the admin client with service role permissions
    const { error, data } = await supabaseAdmin
      .from('waitlist')
      .insert([{ email, created_at: new Date().toISOString() }]);
      
    console.log('Supabase response:', data, error);

    if (error) {
      // Check if it's a duplicate email error
      if (error.code === '23505') {
        return NextResponse.json(
          { message: 'You are already on our waitlist!' },
          { status: 200 }
        );
      }
      
      // Log detailed error information
      console.error('Supabase error details:', {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint
      });
      
      return NextResponse.json(
        { error: 'Failed to join waitlist: ' + error.message },
        { status: 500 }
      );
    }

    // Trigger the welcome email sending
    try {
      // We need the full URL for server-side fetch
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `http://localhost:${process.env.PORT || 3000}`;
      const emailResponse = await fetch(`${baseUrl}/api/email/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.json();
        console.error('Failed to trigger welcome email:', emailResponse.status, errorData);
        // Don't block the user response if email fails, just log it
      } else {
        console.log('Welcome email triggered successfully for:', email);
      }
    } catch (emailError) {
      console.error('Error triggering welcome email:', emailError);
      // Don't block the user response if email fails, just log it
    }
    
    return NextResponse.json(
      { message: 'Successfully joined the waitlist!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}
