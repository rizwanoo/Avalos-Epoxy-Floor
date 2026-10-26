import React from 'react';
import { PageId } from '../types';
import { MessageSquare, ArrowRight, Check, ShieldCheck, Zap, Droplet, Sparkles } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full pt-28 pb-24 bg-[#0b0c0e]">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-12 border-b border-neutral-800">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-emerald-400 font-mono">
            <span>Specialized Flooring Systems</span>
            <span className="text-neutral-500">·</span>
            <span>Commercial & Residential</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-none font-['Outfit']">
            Master Craftsmanship.{' '}
            <span className="block text-neutral-400 font-medium">Engineered Resin Systems.</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
            Every Avalos floor is installed to architectural specifications—incorporating 100% industrial solids epoxy, diamond grinder mechanical profiling, and non-yellowing polyaspartic topcoats.
          </p>
        </div>
      </section>

      {/* SERVICE 1: EPOXY FLAKE FLOORING */}
      <section className="py-24 border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image side */}
            <div className="lg:col-span-7 relative group overflow-hidden border border-neutral-800 bg-black">
              <img
                src="/images/service_flake_flooring.jpg"
                alt="Epoxy Flake Floor Macro Detail"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 border border-neutral-700/60 text-[10px] uppercase font-mono tracking-widest text-emerald-400">
                System 01 / Decorative Flake
              </div>
            </div>

            {/* Content side */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs uppercase tracking-widest font-mono text-emerald-400">
                Automotive & Residential Garages
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Epoxy Flake Flooring
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                A multi-layer monolithic flooring system featuring custom multi-colored vinyl flakes broadcast into a pigmented 100% solids epoxy basecoat to total rejection. Sealed with a clear, UV-resistant polyaspartic topcoat that resists hot tire marks, chemical spills, and abrasion.
              </p>

              <div className="space-y-3 pt-3 border-t border-neutral-800 text-xs">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-neutral-300">
                    <strong className="text-white">Seamless camouflaging:</strong> Multi-tonal flakes hide dust, dirt, and minor concrete imperfections.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-neutral-300">
                    <strong className="text-white">Built-in traction:</strong> Slight orange-peel texture provides superior slip-resistance underfoot.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-neutral-300">
                    <strong className="text-white">Chemical proofing:</strong> Immune to brake fluid, de-icing chemicals, motor oil, and household cleaners.
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="py-3.5 px-6 text-xs uppercase tracking-widest font-bold bg-white text-neutral-950 hover:bg-neutral-200 transition-colors text-center cursor-pointer"
                >
                  Estimate Flake Floor
                </button>
                <a
                  href="https://wa.me/message/F6MII6SPDFBMH1?text=Hello%20Avalos%20Epoxy%20Floor,%20I%20am%20interested%20in%20an%20Epoxy%20Flake%20Flooring%20system."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 text-xs uppercase tracking-wider text-emerald-400 border border-emerald-500/40 hover:bg-emerald-950/20 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Flake Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 2: QUARTZ FLOORING */}
      <section className="py-24 border-b border-neutral-800/80 bg-[#0d0f13]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content side */}
            <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
              <div className="text-xs uppercase tracking-widest font-mono text-emerald-400">
                Heavy Industrial & Wet Environments
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Quartz Broadcast Flooring
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Ceramic-coated colored quartz granules broadcast into clear high-performance epoxy resin, producing a dense, highly durable surface with exceptional compressive strength. Designed for severe duty applications requiring maximum slip-resistance.
              </p>

              <div className="space-y-3 pt-3 border-t border-neutral-800 text-xs">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-neutral-300">
                    <strong className="text-white">Extreme slip coefficient:</strong> Granular mineral texture delivers superior wet-slip resistance.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-neutral-300">
                    <strong className="text-white">Heavy impact rating:</strong> Quartz matrix withstands heavy wheeled traffic and dropped industrial tools.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-neutral-300">
                    <strong className="text-white">Sanitary monolithic seal:</strong> Completely impervious to standing water, greases, and food-grade washdowns.
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="py-3.5 px-6 text-xs uppercase tracking-widest font-bold bg-white text-neutral-950 hover:bg-neutral-200 transition-colors text-center cursor-pointer"
                >
                  Estimate Quartz Floor
                </button>
                <a
                  href="https://wa.me/message/F6MII6SPDFBMH1?text=Hello%20Avalos%20Epoxy%20Floor,%20I%20am%20interested%20in%20a%20Quartz%20Broadcast%20Flooring%20system."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 text-xs uppercase tracking-wider text-emerald-400 border border-emerald-500/40 hover:bg-emerald-950/20 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Quartz Inquiry</span>
                </a>
              </div>
            </div>

            {/* Image side */}
            <div className="lg:col-span-7 relative group overflow-hidden border border-neutral-800 bg-black order-1 lg:order-2">
              <img
                src="/images/service_quartz_flooring.jpg"
                alt="Heavy-Duty Quartz Flooring"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 border border-neutral-700/60 text-[10px] uppercase font-mono tracking-widest text-emerald-400">
                System 02 / Industrial Quartz
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 3: SOLID EPOXY FLOORING */}
      <section className="py-24 border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image side */}
            <div className="lg:col-span-7 relative group overflow-hidden border border-neutral-800 bg-black">
              <img
                src="/images/service_solid_epoxy.jpg"
                alt="Solid Color Seamless Epoxy Floor"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 border border-neutral-700/60 text-[10px] uppercase font-mono tracking-widest text-emerald-400">
                System 03 / Seamless Solid
              </div>
            </div>

            {/* Content side */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs uppercase tracking-widest font-mono text-emerald-400">
                Architectural Showrooms & Minimalist Interiors
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Solid Epoxy Flooring
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                A glass-smooth, self-leveling monolithic epoxy system delivering an uninterrupted sea of color. Celebrated in modern architectural homes, art galleries, high-end retail boutiques, and cleanroom facilities for its pure, seamless visual elegance.
              </p>

              <div className="space-y-3 pt-3 border-t border-neutral-800 text-xs">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-neutral-300">
                    <strong className="text-white">Seamless glass finish:</strong> Perfectly continuous surface with zero grout lines, seams, or dust pockets.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-neutral-300">
                    <strong className="text-white">Curated color palette:</strong> Available in rich architectural neutrals—Charcoal, Graphite, Concrete Grey, Pure White.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-neutral-300">
                    <strong className="text-white">Reflective clarity:</strong> Multiplies ambient room brightness with mirror-like optical reflection.
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="py-3.5 px-6 text-xs uppercase tracking-widest font-bold bg-white text-neutral-950 hover:bg-neutral-200 transition-colors text-center cursor-pointer"
                >
                  Estimate Solid Floor
                </button>
                <a
                  href="https://wa.me/message/F6MII6SPDFBMH1?text=Hello%20Avalos%20Epoxy%20Floor,%20I%20am%20interested%20in%20a%20Solid%20Epoxy%20Flooring%20system."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 text-xs uppercase tracking-wider text-emerald-400 border border-emerald-500/40 hover:bg-emerald-950/20 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Solid Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIAL SERVICE: ONE-DAY INSTALLATION (Advertised Service) */}
      <section className="py-20 bg-[#08090b] border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="border border-neutral-800 p-8 sm:p-12 bg-neutral-950/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span>Business-Advertised Rapid System</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  One-Day Installation Option
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Avalos offers an accelerated, rapid-cure polyaspartic coating schedule for qualified residential garages and time-sensitive commercial projects. Utilizing advanced polyurea/polyaspartic chemistry, this process allows mechanical diamond prep, base-coat application, flake broadcast, and clear topcoat application within a single working day.
                </p>
                <div className="text-xs text-neutral-400 pt-1">
                  * Note: Substrate moisture levels, deep concrete damage, ambient temperature, and project square footage determine whether your floor qualifies for the 1-day system. Avalos assesses each site individually during estimate consultation.
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <a
                  href="https://wa.me/message/F6MII6SPDFBMH1?text=Hello%20Avalos%20Epoxy%20Floor,%20can%20my%20garage%20be%20completed%20with%20the%20One-Day%20Installation%20option?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Check 1-Day Eligibility</span>
                </a>

                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="py-3.5 px-6 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 text-xs tracking-wider uppercase transition-colors text-center cursor-pointer"
                >
                  Request On-Site Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
