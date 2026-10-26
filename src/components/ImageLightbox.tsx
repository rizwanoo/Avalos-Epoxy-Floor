import React, { useEffect } from 'react';
import { GalleryProject } from '../types';
import { X, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

interface ImageLightboxProps {
  project: GalleryProject | null;
  onClose: () => void;
  onSelectProject?: (project: GalleryProject) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Avalos Epoxy Floor, I am interested in a flooring project similar to "${project.title}" (${project.system} - ${project.finish}). Could you provide more details and an estimate?`
  );
  const whatsappUrl = `https://wa.me/message/F6MII6SPDFBMH1?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-md animate-fadeIn">
      {/* Background click dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Content - Free-flow architecture without rounded cards */}
      <div className="relative z-10 w-full max-w-6xl max-h-[92vh] flex flex-col lg:flex-row bg-[#0c0e12] border border-neutral-800 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2.5 bg-black/80 text-white hover:text-neutral-300 border border-neutral-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Area */}
        <div className="lg:w-2/3 relative bg-black flex items-center justify-center overflow-hidden min-h-[320px] lg:min-h-[580px]">
          <img
            src={project.primaryUrl || project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            onError={(e) => {
              if (project.fallbackUrl && e.currentTarget.src !== project.fallbackUrl) {
                e.currentTarget.src = project.fallbackUrl;
              }
            }}
            className="w-full h-full object-contain max-h-[82vh]"
          />
        </div>

        {/* Content Sidebar */}
        <div className="lg:w-1/3 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-neutral-800 bg-[#0e1015]">
          <div className="space-y-6">
            <div>
              <div className="text-[11px] font-mono tracking-widest uppercase text-emerald-400 mb-1">
                {project.categoryLabel}
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed">
              {project.description}
            </p>

            <div className="space-y-3 pt-4 border-t border-neutral-800">
              <div className="flex justify-between text-xs py-1.5 border-b border-neutral-800/60">
                <span className="text-neutral-400 uppercase tracking-wider">System</span>
                <span className="text-neutral-200 font-medium">{project.system}</span>
              </div>
              <div className="flex justify-between text-xs py-1.5 border-b border-neutral-800/60">
                <span className="text-neutral-400 uppercase tracking-wider">Finish</span>
                <span className="text-neutral-200 font-medium">{project.finish}</span>
              </div>
              <div className="flex justify-between text-xs py-1.5">
                <span className="text-neutral-400 uppercase tracking-wider">Highlight</span>
                <span className="text-neutral-200 font-medium">{project.highlight}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Professional surface profiling & 100% industrial-grade solids resin</span>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-neutral-800 space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire This Style on WhatsApp</span>
            </a>

            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 bg-transparent hover:bg-neutral-800/60 text-neutral-400 hover:text-white border border-neutral-800 text-xs tracking-wider uppercase transition-colors cursor-pointer"
            >
              Back to Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
