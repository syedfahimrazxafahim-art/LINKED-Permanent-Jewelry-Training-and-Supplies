import React, { useState, useEffect, useRef } from 'react';
import { X, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface WebinarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WebinarModal: React.FC<WebinarModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<null | string>(null);
  const [error, setError] = useState<null | string>(null);

  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      closeBtnRef.current?.focus();
    } else {
      document.body.style.overflow = '';
      setStatus(null);
      setError(null);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !email.includes('@')) {
      setError('Please provide a valid name and email address.');
      return;
    }

    setError(null);

    const subject = encodeURIComponent(`Webinar Seat Reservation: ${name}`);
    const body = encodeURIComponent(
      `Hello LINKED Permanent Jewelry Training,\n\n` +
      `I would like to save my seat for the upcoming Free Live Webinar.\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone || 'Not provided'}\n\n` +
      `Please notify me as soon as the live broadcast date and time are finalized.`
    );

    window.location.href = `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;

    setStatus('Your pre-registration email draft has been created. Send the email to confirm your priority notification.');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="webinar-modal-title"
      className="fixed inset-0 z-50 bg-[#171717]/80 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#FFFFFF] border-2 border-[#C9922E]/40 max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
        {/* Close Button */}
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-[#171717] hover:text-[#C9922E] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E] cursor-pointer"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <h3 id="webinar-modal-title" className="text-2xl sm:text-3xl font-serif text-[#171717] mb-2">
            SAVE MY SEAT
          </h3>

          <p className="text-xs sm:text-sm text-[#5F5B55] leading-relaxed">
            Reserve your spot for our live online introductory session. 
            Official date and time will be broadcast to registered attendees first.
          </p>
        </div>

        {/* Date Placeholder Warning */}
        <div className="p-3 bg-[#F8F5EF] border border-[#C9922E]/30 mb-6 flex items-start gap-2.5 text-xs text-[#5F5B55]">
          <AlertCircle className="w-4 h-4 text-[#C9922E] shrink-0 mt-0.5" />
          <span>
            Upcoming broadcast date and time are currently being finalized. Pre-registering ensures you receive immediate priority access.
          </span>
        </div>

        {status ? (
          <div className="text-center py-4 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#F8F5EF] border border-[#C9922E] mx-auto flex items-center justify-center text-[#C9922E]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <p className="text-sm text-[#171717] leading-relaxed">{status}</p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 bg-[#171717] text-white text-xs uppercase tracking-widest hover:bg-[#C9922E] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {error && (
              <p className="text-xs text-red-600 bg-red-50 p-2 border border-red-200">
                {error}
              </p>
            )}

            <div>
              <label htmlFor="modal-name" className="block text-xs uppercase tracking-wider text-[#171717] font-medium mb-1">
                Full Name <span className="text-[#C9922E]">*</span>
              </label>
              <input
                id="modal-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Jordan Smith"
                className="w-full px-4 py-2.5 bg-[#F8F5EF] border border-[#EFE9DE] text-sm text-[#171717] focus:outline-hidden focus:border-[#C9922E] focus:bg-white"
              />
            </div>

            <div>
              <label htmlFor="modal-email" className="block text-xs uppercase tracking-wider text-[#171717] font-medium mb-1">
                Email Address <span className="text-[#C9922E]">*</span>
              </label>
              <input
                id="modal-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. jordan@example.com"
                className="w-full px-4 py-2.5 bg-[#F8F5EF] border border-[#EFE9DE] text-sm text-[#171717] focus:outline-hidden focus:border-[#C9922E] focus:bg-white"
              />
            </div>

            <div>
              <label htmlFor="modal-phone" className="block text-xs uppercase tracking-wider text-[#171717] font-medium mb-1">
                Phone Number (Optional)
              </label>
              <input
                id="modal-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 512-957-1604"
                className="w-full px-4 py-2.5 bg-[#F8F5EF] border border-[#EFE9DE] text-sm text-[#171717] focus:outline-hidden focus:border-[#C9922E] focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#171717] text-white border-2 border-[#C9922E] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C9922E] hover:text-[#171717] transition-colors cursor-pointer"
            >
              RESERVE MY WEBINAR SPOT
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
