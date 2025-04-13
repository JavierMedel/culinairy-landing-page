'use client';

import { useState } from 'react';

export default function EmailSender() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const sendEmail = async () => {
    setLoading(true);
    setStatus('idle');
    setMessage('');

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'jmedel@gmail.com', // Replace with your email
          subject: 'Test Email from CulinAIry',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #14B8A6;">Test Email from CulinAIry</h1>
              <p>This is a test email to verify the email sending functionality is working correctly.</p>
              <p>If you're seeing this, it means:</p>
              <ul>
                <li>The Resend API is properly configured</li>
                <li>The email route is working</li>
                <li>The EmailSender component is functioning as expected</li>
              </ul>
              <p style="color: #666;">Sent at: ${new Date().toLocaleString()}</p>
            </div>
          `
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setMessage('Test email sent successfully! Check your inbox.');
        console.log('Email sent:', data);
      } else {
        throw new Error(data.error || 'Failed to send email');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Failed to send email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={sendEmail}
        disabled={loading}
        className="px-4 py-2 bg-culinairy-teal text-white rounded-lg hover:bg-culinairy-teal/80 disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Send Test Email'}
      </button>
      {message && (
        <p className={`text-sm ${status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </p>
      )}
    </div>
  );
}