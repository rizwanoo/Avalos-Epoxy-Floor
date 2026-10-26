import React from 'react';
import { PageId } from '../types';
import { BrandLogo } from './BrandLogo';
import { MessageSquare, ArrowUpRight, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#08090b] text-neutral-400 border-t border-neutral-800/80">
      {/* Top Banner Callout */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 border-b border-neutral-800/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-mono">
              Transform Your Concrete
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Ready to elevate your garage, commercial facility, or showroom?
            </h2>
            <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
              Connect directly with Avalos Epoxy Floor for project consultations, finish samples, and custom installation estimates.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href="https://wa.me/message/F6MII6SPDFBMH1"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </a>

            <button
              onClick={() => handleLinkClick('contact')}
              className="py-3.5 px-6 bg-transparent hover:bg-neutral-900 text-white border border-neutral-700 text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Submit Project Form</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Navigation & Brand Details */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand info */}
          <div className="lg:col-span-4 space-y-5">
            <button
              onClick={() => handleLinkClick('home')}
              className="text-left focus:outline-none cursor-pointer"
            >
              <BrandLogo size="lg" />
            </button>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Specialized epoxy resin artisans crafting heavy-duty flake systems, slip-resistant quartz surfaces, and mirror-finish solid color coatings.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/expoxyflooravalos/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                aria-label="Avalos Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61570430105377"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                aria-label="Avalos Facebook Profile"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@rjoseavalos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                aria-label="Avalos TikTok Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.33a6.33 6.33 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34c3.5 0 6.34-2.84 6.34-6.34V9.08a8.28 8.28 0 0 0 4.81 1.52v-3.46a4.85 4.85 0 0 1-1.04-.45z" />
                </svg>
              </a>
              <a
                href="https://wa.me/message/F6MII6SPDFBMH1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-neutral-800 flex items-center justify-center text-emerald-400 hover:text-emerald-300 hover:border-emerald-600 transition-colors"
                aria-label="Avalos WhatsApp Link"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Flooring Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('gallery')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Project Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Estimate
                </button>
              </li>
            </ul>
          </div>

          {/* Services stated on profile */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Official Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="text-neutral-400">Epoxy Flake Flooring</li>
              <li className="text-neutral-400">Quartz Broadcast Flooring</li>
              <li className="text-neutral-400">Solid Epoxy Flooring</li>
              <li className="text-neutral-400">Diamond Grind Concrete Prep</li>
              <li className="text-neutral-400">
                One-Day Installation{' '}
                <span className="text-[10px] text-neutral-400">(Advertised Option)</span>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-white">
              Inquiries
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              For rapid response, project consultations, and schedule availability, message directly via WhatsApp.
            </p>
            <div className="pt-1">
              <a
                href="https://wa.me/message/F6MII6SPDFBMH1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300"
              >
                <span>wa.me/message/F6MII6SPDFBMH1</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom hairline disclaimer */}
        <div className="pt-10 mt-10 border-t border-neutral-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-neutral-400">
          <p>© {currentYear} Avalos Epoxy Floor. All rights reserved.</p>
          <p className="max-w-xl text-left md:text-right">
            Notice: Project durations, cure schedules, and finish properties depend on substrate condition and site environment. Contact Avalos directly for exact specifications.
          </p>
        </div>
      </div>
    </footer>
  );
};
