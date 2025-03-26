"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

interface EmailPopupProps {
  triggerText: string;
  isLoading?: boolean;
}

const EmailPopup = ({ triggerText, isLoading = false }: EmailPopupProps) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();
      console.log('API response:', { status: response.status, data });

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Successfully joined the waitlist!');
        setEmail('');
        // Close the popup after a short delay on success
        setTimeout(() => {
          setIsOpen(false);
        }, 2000);
      } else {
        setStatus('error');
        setMessage(data.error || 'Failed to join waitlist. Please try again.');
        console.error('API error:', data);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setMessage('Failed to join waitlist. Please try again.');
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          className="bg-culinairy-teal hover:bg-culinairy-lightTeal rounded-full text-white px-8 py-3 h-auto disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : triggerText}
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-gradient-to-r from-culinairy-darkTeal to-culinairy-darkBlue border-culinairy-teal/70 shadow-lg">
        <SheetHeader className="text-white">
          <SheetTitle className="text-2xl font-bold text-white">Join Our Waitlist</SheetTitle>
          <SheetDescription className="text-culinairy-lightGray">
            Be the first to know when CulinAIry.io launches and get exclusive early access.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-culinairy-teal"
                required
              />
              <Button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-culinairy-teal hover:bg-culinairy-lightTeal rounded-full text-white px-8 py-3 h-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Joining...' : 'Join Waitlist →'}
              </Button>
            </div>
            {message && (
              <p className={`text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default EmailPopup;