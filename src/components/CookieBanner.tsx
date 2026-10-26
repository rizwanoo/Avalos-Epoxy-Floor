import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('avalos_cookie_consent');
    if (!consent) {
      // Small delay before showing so it doesn't flash immediately
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('avalos_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('avalos_cookie_consent', 'essential_only');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-[#090a0d]/95 backdrop-blur-md border-t border-neutral-800 text-neutral-300 shadow-2xl animate-fadeIn">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-3xl">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Cookie & Privacy Policy
            </span>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Avalos Epoxy Floor uses essential cookies and local storage to guarantee seamless video playback, remember project estimate specifications, and support direct WhatsApp messaging. We respect your privacy and never sell personal information.
          </p>

          {showDetails && (
            <div className="mt-3 p-3 bg-neutral-950 border border-neutral-800 text-[11px] text-neutral-400 space-y-1">
              <p>• <strong>Essential Cookies:</strong> Required for site navigation, video stream caching, and responsive layout preferences.</p>
              <p>• <strong>Analytics & Communication:</strong> Enables direct pre-filled WhatsApp inquiry generation and quote state persistence.</p>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-xs text-neutral-400 hover:text-white underline underline-offset-4 cursor-pointer"
          >
            {showDetails ? 'Hide Policy' : 'Policy Details'}
          </button>

          <button
            onClick={handleDecline}
            className="py-2 px-4 bg-transparent hover:bg-neutral-900 border border-neutral-700 text-xs font-semibold text-neutral-300 hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
          >
            Essential Only
          </button>

          <button
            onClick={handleAccept}
            className="py-2 px-5 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
};
