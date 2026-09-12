import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/content';
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Permanent Jewelry Training',
    message: '',
  });

  const [submittedStatus, setSubmittedStatus] = useState<null | {
    type: 'success' | 'info';
    message: string;
  }>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name.';
    if (!formData.phone.trim()) errs.phone = 'Please enter your phone number.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Please enter your message or questions.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    // Honest Email Flow: Construct mailto link with prefilled details
    const subject = encodeURIComponent(`Training Inquiry: ${formData.interest} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Training Interest: ${formData.interest}\n\n` +
      `Message:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    // Display honest confirmation status
    setSubmittedStatus({
      type: 'info',
      message:
        'Your inquiry email draft has been generated in your default mail app. You can send it directly to info@linkedpermanentjewelrytraining.com, or give us a call at 1 512-957-1604.',
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8F5EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Supplied Business Information */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171717] tracking-tight leading-tight mb-4">
              CONNECT WITH OUR ACADEMY
            </h2>

            <p className="text-base text-[#5F5B55] leading-relaxed mb-8 font-sans">
              Have questions regarding upcoming training sessions or curriculum specifics? 
              Reach out directly by phone, email, or social channels.
            </p>

            {/* Business Details Card */}
            <div className="bg-[#FFFFFF] border border-[#C9922E]/30 p-6 sm:p-8 space-y-6 shadow-xs mb-8">
              <div>
                <h3 className="text-xl font-serif text-[#171717] font-medium mb-1">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#C9922E]">
                  {BUSINESS_INFO.type}
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-[#EFE9DE]">
                {/* Location */}
                <div className="flex items-center gap-3 text-sm text-[#171717]">
                  <MapPin className="w-5 h-5 text-[#C9922E] shrink-0" />
                  <span>{BUSINESS_INFO.location}</span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-5 h-5 text-[#C9922E] shrink-0" />
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-[#171717] hover:text-[#C9922E] transition-colors font-medium focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E]"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-5 h-5 text-[#C9922E] shrink-0" />
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-[#171717] hover:text-[#C9922E] transition-colors break-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E]"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#EFE9DE]">
                <span className="text-xs uppercase tracking-widest text-[#5F5B55] block mb-3 font-medium">
                  Follow Our Work
                </span>
                <div className="flex items-center gap-4">
                  <a
                    href={BUSINESS_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F8F5EF] border border-[#C9922E]/30 text-xs text-[#171717] hover:border-[#C9922E] hover:text-[#C9922E] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E]"
                  >
                    <Instagram className="w-4 h-4 text-[#C9922E]" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={BUSINESS_INFO.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F8F5EF] border border-[#C9922E]/30 text-xs text-[#171717] hover:border-[#C9922E] hover:text-[#C9922E] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E]"
                  >
                    <Facebook className="w-4 h-4 text-[#C9922E]" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#171717] text-[#FFFFFF] text-xs tracking-widest uppercase font-medium hover:bg-[#C9922E] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E]"
              >
                CALL NOW
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#FFFFFF] border border-[#C9922E] text-[#171717] text-xs tracking-widest uppercase font-medium hover:bg-[#F8F5EF] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E]"
              >
                CONTACT US
              </a>
            </div>
          </div>

          {/* Right Column: Premium Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] p-8 sm:p-10 lg:p-12 border border-[#C9922E]/30 shadow-md">
              <div className="mb-6">
                <h3 className="text-2xl font-serif text-[#171717] mb-2">
                  Training Inquiry Form
                </h3>
                <p className="text-xs sm:text-sm text-[#5F5B55]">
                  Please fill out the form below to receive training schedule and curriculum details.
                </p>
              </div>

              {submittedStatus && (
                <div className="mb-6 p-4 bg-[#F8F5EF] border border-[#C9922E]/50 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#C9922E] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[#171717] leading-relaxed">
                    {submittedStatus.message}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="inquiry-name" className="block text-xs uppercase tracking-wider text-[#171717] font-medium mb-1.5">
                    Full Name <span className="text-[#C9922E]">*</span>
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Amanda Davis"
                    className={`w-full px-4 py-3 bg-[#F8F5EF] border text-sm text-[#171717] placeholder:text-[#5F5B55]/50 transition-colors focus:outline-hidden focus:border-[#C9922E] focus:bg-[#FFFFFF] ${
                      errors.name ? 'border-red-500' : 'border-[#EFE9DE]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-600 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="inquiry-phone" className="block text-xs uppercase tracking-wider text-[#171717] font-medium mb-1.5">
                      Phone Number <span className="text-[#C9922E]">*</span>
                    </label>
                    <input
                      id="inquiry-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 512-957-1604"
                      className={`w-full px-4 py-3 bg-[#F8F5EF] border text-sm text-[#171717] placeholder:text-[#5F5B55]/50 transition-colors focus:outline-hidden focus:border-[#C9922E] focus:bg-[#FFFFFF] ${
                        errors.phone ? 'border-red-500' : 'border-[#EFE9DE]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="inquiry-email" className="block text-xs uppercase tracking-wider text-[#171717] font-medium mb-1.5">
                      Email Address <span className="text-[#C9922E]">*</span>
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. amanda@example.com"
                      className={`w-full px-4 py-3 bg-[#F8F5EF] border text-sm text-[#171717] placeholder:text-[#5F5B55]/50 transition-colors focus:outline-hidden focus:border-[#C9922E] focus:bg-[#FFFFFF] ${
                        errors.email ? 'border-red-500' : 'border-[#EFE9DE]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Training Interest Dropdown */}
                <div>
                  <label htmlFor="inquiry-interest" className="block text-xs uppercase tracking-wider text-[#171717] font-medium mb-1.5">
                    Training Interest
                  </label>
                  <select
                    id="inquiry-interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F8F5EF] border border-[#EFE9DE] text-sm text-[#171717] transition-colors focus:outline-hidden focus:border-[#C9922E] focus:bg-[#FFFFFF] cursor-pointer"
                  >
                    <option value="Permanent Jewelry Training">Permanent Jewelry Training</option>
                    <option value="Business Setup">Business Setup</option>
                    <option value="Hands-On Skills">Hands-On Skills</option>
                    <option value="Business Growth">Business Growth</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="inquiry-message" className="block text-xs uppercase tracking-wider text-[#171717] font-medium mb-1.5">
                    Message / Questions <span className="text-[#C9922E]">*</span>
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your goals or questions regarding permanent jewelry training..."
                    className={`w-full px-4 py-3 bg-[#F8F5EF] border text-sm text-[#171717] placeholder:text-[#5F5B55]/50 transition-colors focus:outline-hidden focus:border-[#C9922E] focus:bg-[#FFFFFF] resize-none ${
                      errors.message ? 'border-red-500' : 'border-[#EFE9DE]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-600 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  id="inquiry-submit-button"
                  type="submit"
                  className="w-full py-4 bg-[#171717] text-[#FFFFFF] text-xs sm:text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#C9922E] transition-colors duration-300 shadow-md focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C9922E] cursor-pointer"
                >
                  SUBMIT INQUIRY
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
