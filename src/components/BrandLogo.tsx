import React, { useState } from 'react';

interface BrandLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  showText = true,
  size = 'md',
}) => {
  const [imageFailed, setImageFailed] = useState(false);
  const officialLogoUrl = '/images/avalos_logo.jpg';

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  }[size];

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      <div className={`relative ${sizeClasses} shrink-0 bg-neutral-900 border border-neutral-700/60 overflow-hidden flex items-center justify-center`}>
        {!imageFailed ? (
          <img
            src={officialLogoUrl}
            alt="Avalos Epoxy Floor Official Logo"
            referrerPolicy="no-referrer"
            onError={() => setImageFailed(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-800 via-neutral-900 to-black text-white p-1">
            <svg
              className="w-5 h-5 text-neutral-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
        )}
      </div>

      {showText && (
        <div className="flex flex-col tracking-tight">
          <span className="text-base font-bold text-white tracking-wider uppercase font-['Outfit'] whitespace-nowrap">
            Avalos
          </span>
          <span className="text-[10px] tracking-[0.22em] text-neutral-400 uppercase font-medium whitespace-nowrap -mt-0.5">
            Epoxy Floor
          </span>
        </div>
      )}
    </div>
  );
};
