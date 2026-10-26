import React, { useState } from 'react';
import { PageId } from '../types';
import { BrandLogo } from '../components/BrandLogo';
import {
  MessageSquare,
  Instagram,
  Facebook,
  CheckCircle2,
  AlertCircle,
  Calculator,
  Send,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactMethod: 'whatsapp',
    contactValue: '',
    projectLocation: '',
    floorType: 'flake',
    approxSqFt: 450,
    timeline: 'two_weeks',
    projectNotes: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const quickSqFtPresets = [
    { label: '1-Car (~250 sq ft)', value: 250 },
    { label: '2-Car (~450 sq ft)', value: 450 },
    { label: '3-Car (~650 sq ft)', value: 650 },
    { label: 'Shop / Commercial (~1,200 sq ft)', value: 1200 },
  ];

  const floorTypeLabels: Record<string, string> = {
    flake: 'Epoxy Flake System (Most Popular)',
    quartz: 'Commercial Quartz Broadcast',
    solid: 'Solid Color Seamless Epoxy',
    metallic: 'Metallic Showroom Epoxy',
    other: 'Custom / Unsure',
  };

  const timelineLabels: Record<string, string> = {
    asap: 'As Soon As Possible (1-2 Weeks)',
    two_weeks: 'Within 2–4 Weeks',
    next_month: 'Next Month',
    planning: 'Planning / Researching Estimates',
  };

  const generateWhatsAppUrl = () => {
    const text = `*New Estimate Inquiry - Avalos Epoxy Floor*
• *Name*: ${formData.fullName || 'Not provided'}
• *Location*: ${formData.projectLocation || 'Not provided'}
• *Floor Type*: ${floorTypeLabels[formData.floorType]}
• *Approx Area*: ${formData.approxSqFt} sq ft
• *Timeline*: ${timelineLabels[formData.timeline]}
• *Preferred Contact*: ${formData.contactValue || 'Direct WhatsApp'}
${formData.projectNotes ? `• *Notes*: ${formData.projectNotes}` : ''}`;

    return `https://wa.me/message/F6MII6SPDFBMH1?text=${encodeURIComponent(text)}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.contactValue.trim()) {
      setErrorMsg('Please provide a phone number or email.');
      return;
    }
    if (!formData.projectLocation.trim()) {
      setErrorMsg('Please specify the project location / city.');
      return;
    }

    setErrorMsg('');
    setFormSubmitted(true);
  };

  return (
    <div className="w-full pt-28 pb-24 bg-[#0b0c0e]">
      {/* Header section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-12 border-b border-neutral-800">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-emerald-400 font-mono">
            <span>Direct Project Inquiries</span>
            <span className="text-neutral-500">·</span>
            <span>Fast Turnaround</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-none font-['Outfit']">
            Request an Estimate.{' '}
            <span className="block text-neutral-400 font-medium">Discuss Your Space.</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
            Whether you need a high-traction garage floor or a showroom-ready commercial finish, send your project details below or contact Avalos Epoxy Floor directly on WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Official Contact Details & Direct WhatsApp Quick-Card */}
          <div className="lg:col-span-5 space-y-10">
            {/* Primary WhatsApp Direct Channel */}
            <div className="p-8 bg-[#0e1015] border border-emerald-500/30 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Direct WhatsApp</h3>
                  <span className="text-xs text-emerald-400 font-mono">Fastest Response Channel</span>
                </div>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                Send photos of your current concrete floor directly to Avalos Epoxy Floor on WhatsApp for rapid feedback, substrate evaluation, and scheduling.
              </p>

              <a
                href="https://wa.me/message/F6MII6SPDFBMH1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp Chat</span>
              </a>

              <div className="text-[11px] text-neutral-400 font-mono">
                Official link: wa.me/message/F6MII6SPDFBMH1
              </div>
            </div>

            {/* Official Social Channels */}
            <div className="space-y-4 pt-4 border-t border-neutral-800">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Official Social Profiles
              </span>

              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/expoxyflooravalos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="w-4 h-4 text-pink-400" />
                    <span className="text-xs font-medium">Instagram: @expoxyflooravalos</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61570430105377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Facebook className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-medium">Facebook: Avalos Epoxy Floor</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="https://www.tiktok.com/@rjoseavalos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 fill-current text-neutral-200" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.33a6.33 6.33 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34c3.5 0 6.34-2.84 6.34-6.34V9.08a8.28 8.28 0 0 0 4.81 1.52v-3.46a4.85 4.85 0 0 1-1.04-.45z" />
                    </svg>
                    <span className="text-xs font-medium">TikTok: @rjoseavalos</span>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>

            {/* Substrate Preparation Notice */}
            <div className="p-5 border border-neutral-800/80 bg-neutral-950/40 space-y-2 text-xs text-neutral-400">
              <span className="font-semibold text-neutral-300 uppercase tracking-wider block">
                Substrate Notice
              </span>
              <p className="leading-relaxed">
                Every project includes diamond grinding surface profiling. If your concrete has existing paints, deep oil saturation, or extensive settlement cracks, please mention it so we can include appropriate prep steps in your estimate.
              </p>
            </div>
          </div>

          {/* RIGHT: Estimate Inquiry Form */}
          <div className="lg:col-span-7 bg-[#0e1015] border border-neutral-800 p-8 sm:p-10">
            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-emerald-400">
                    Project Questionnaire
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                    Custom Flooring Estimate Form
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Fill in your project specifications to prepare your quote and instant WhatsApp link.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-950/40 border border-red-800/60 text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Name */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-300">
                    Full Name <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Michael Rodriguez"
                    className="w-full px-4 py-3 bg-[#08090c] border border-neutral-700 text-white text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Contact Value */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-300">
                      Phone Number or Email <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactValue}
                      onChange={(e) => setFormData({ ...formData, contactValue: e.target.value })}
                      placeholder="e.g. (555) 234-5678 or user@mail.com"
                      className="w-full px-4 py-3 bg-[#08090c] border border-neutral-700 text-white text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-300">
                      Project Location (City / Area) <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                      placeholder="e.g. Local Metro Area"
                      className="w-full px-4 py-3 bg-[#08090c] border border-neutral-700 text-white text-sm focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                {/* Floor System Selection */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-300">
                    Floor System Preferred
                  </label>
                  <select
                    value={formData.floorType}
                    onChange={(e) => setFormData({ ...formData, floorType: e.target.value as any })}
                    className="w-full px-4 py-3 bg-[#08090c] border border-neutral-700 text-white text-sm focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="flake">Epoxy Flake System (Full Broadcast)</option>
                    <option value="quartz">Quartz Broadcast System (Industrial Non-Slip)</option>
                    <option value="solid">Solid Color Seamless Epoxy (Monolithic)</option>
                    <option value="metallic">Metallic Epoxy Floor (Luxury Swirl)</option>
                    <option value="other">Unsure / Need Recommendation</option>
                  </select>
                </div>

                {/* Area Sq Footage Slider & Presets */}
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs uppercase tracking-wider font-semibold text-neutral-300">
                      Approximate Surface Area
                    </label>
                    <span className="text-sm font-mono font-bold text-white bg-neutral-900 px-3 py-1 border border-neutral-800">
                      {formData.approxSqFt} Sq. Ft.
                    </span>
                  </div>

                  {/* Range Slider */}
                  <input
                    type="range"
                    min="150"
                    max="3000"
                    step="50"
                    value={formData.approxSqFt}
                    onChange={(e) =>
                      setFormData({ ...formData, approxSqFt: parseInt(e.target.value, 10) })
                    }
                    className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-neutral-800"
                  />

                  {/* Preset quick buttons */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    {quickSqFtPresets.map((preset) => (
                      <button
                        key={preset.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, approxSqFt: preset.value })}
                        className={`p-2 text-[11px] text-center font-medium border transition-colors cursor-pointer ${
                          formData.approxSqFt === preset.value
                            ? 'bg-neutral-800 border-white text-white'
                            : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-white'
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-300">
                    Project Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value as any })}
                    className="w-full px-4 py-3 bg-[#08090c] border border-neutral-700 text-white text-sm focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="asap">As Soon As Possible (1-2 Weeks)</option>
                    <option value="two_weeks">Within 2–4 Weeks</option>
                    <option value="next_month">Next Month</option>
                    <option value="planning">Budgeting & Planning Phase</option>
                  </select>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-300">
                    Substrate Details or Specific Questions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.projectNotes}
                    onChange={(e) => setFormData({ ...formData, projectNotes: e.target.value })}
                    placeholder="e.g. Existing cracked concrete, current coating needs removal, moisture concerns, or specific color blend in mind..."
                    className="w-full px-4 py-3 bg-[#08090c] border border-neutral-700 text-white text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Submission Actions */}
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 px-6 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Inquiry on WhatsApp</span>
                  </a>

                  <button
                    type="submit"
                    className="py-4 px-6 bg-white hover:bg-neutral-200 text-neutral-950 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Save Project Details</span>
                  </button>
                </div>

                <p className="text-[11px] text-neutral-400 text-center">
                  Avalos responds directly to confirm square footage and surface prep details.
                </p>
              </form>
            ) : (
              /* Success Confirmation */
              <div className="py-12 px-6 text-center space-y-6">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Inquiry Details Prepared!
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName}. Your project inquiry for {formData.approxSqFt} sq ft of {floorTypeLabels[formData.floorType]} in {formData.projectLocation} has been compiled.
                  </p>
                </div>

                <div className="p-6 bg-neutral-900 border border-neutral-800 text-left text-xs space-y-2.5 max-w-md mx-auto font-mono text-neutral-300">
                  <div className="flex justify-between border-b border-neutral-800 pb-2">
                    <span className="text-neutral-400">System:</span>
                    <span>{floorTypeLabels[formData.floorType]}</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800 pb-2">
                    <span className="text-neutral-400">Approximate Size:</span>
                    <span>{formData.approxSqFt} sq ft</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800 pb-2">
                    <span className="text-neutral-400">Location:</span>
                    <span>{formData.projectLocation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Timeline:</span>
                    <span>{timelineLabels[formData.timeline]}</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-3.5 px-8 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Launch WhatsApp with Details</span>
                  </a>

                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="w-full sm:w-auto py-3 px-6 bg-neutral-800 hover:bg-neutral-700 text-white text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Edit Form
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
