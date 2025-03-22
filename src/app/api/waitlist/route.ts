import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import supabase from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Create a Supabase client with the service role key for server-side operations
    // This bypasses RLS policies
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    );

    // Store the email in Supabase using the admin client
    const { error } = await supabaseAdmin
      .from('waitlist')
      .insert([{ email, created_at: new Date().toISOString() }]);

    if (error) {
      // Check if it's a duplicate email error
      if (error.code === '23505') {
        return NextResponse.json(
          { message: 'You are already on our waitlist!' },
          { status: 200 }
        );
      }
      
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to join waitlist' },
        { status: 500 }
      );
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