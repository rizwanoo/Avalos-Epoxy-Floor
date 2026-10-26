import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { BrandLogo } from './BrandLogo';
import { MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Flooring Services' },
    { id: 'gallery', label: 'Project Gallery' },
    { id: 'contact', label: 'Contact & Estimate' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0c0e]/90 backdrop-blur-md border-b border-neutral-800/80 py-3.5'
          : 'bg-gradient-to-b from-black/30 via-transparent to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark / Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center text-left focus:outline-none group cursor-pointer"
            aria-label="Avalos Epoxy Floor Home"
          >
            <BrandLogo size="md" />
          </button>

          {/* Zone 2: Navigation Links (single line, no wrapping) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 text-xs uppercase tracking-[0.16em] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-200" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href="https://wa.me/message/F6MII6SPDFBMH1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-neutral-300 hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => handleLinkClick('contact')}
              className="px-5 py-2 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-white hover:bg-neutral-200 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Request Estimate
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="https://wa.me/message/F6MII6SPDFBMH1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact via WhatsApp"
              className="p-2 text-emerald-400 hover:text-emerald-300"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-neutral-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1014] border-b border-neutral-800 px-6 py-6 transition-all animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left text-sm uppercase tracking-widest py-2 transition-colors flex items-center justify-between ${
                  currentPage === link.id
                    ? 'text-white font-bold border-l-2 border-white pl-3'
                    : 'text-neutral-400 hover:text-white pl-3'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </button>
            ))}

            <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full py-3 text-center text-xs font-bold tracking-widest uppercase bg-white text-neutral-950 hover:bg-neutral-200 transition-colors"
              >
                Request Estimate
              </button>

              <a
                href="https://wa.me/message/F6MII6SPDFBMH1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-semibold tracking-wider uppercase border border-emerald-500/40 text-emerald-400 flex items-center justify-center gap-2 hover:bg-emerald-950/20 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
