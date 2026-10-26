import React, { useRef, useEffect, useState } from 'react';
import { PageId } from '../types';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import {
  ArrowRight,
  MessageSquare,
  Shield,
  Layers,
  Sparkles,
  CheckCircle2,
  Clock,
  Hammer,
  Maximize2
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenProject?: (projectId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force strict muted and playsinline properties for mobile iOS Safari & Android Chrome
    video.defaultMuted = true;
    video.muted = true;
    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');

    const tryPlay = () => {
      if (!video) return;
      video.muted = true;
      const promise = video.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            setVideoLoaded(true);
          })
          .catch(() => {
            // If browser blocked initial autoplay (e.g. Low Power Mode), play on first user interaction
          });
      }
    };

    tryPlay();

    // Instant mobile interaction triggers in case device is on Low Power / Battery Saver Mode
    const onUserInteraction = () => {
      tryPlay();
      window.removeEventListener('touchstart', onUserInteraction);
      window.removeEventListener('scroll', onUserInteraction);
      window.removeEventListener('click', onUserInteraction);
    };

    window.addEventListener('touchstart', onUserInteraction, { once: true, passive: true });
    window.addEventListener('scroll', onUserInteraction, { once: true, passive: true });
    window.addEventListener('click', onUserInteraction, { once: true, passive: true });

    return () => {
      window.removeEventListener('touchstart', onUserInteraction);
      window.removeEventListener('scroll', onUserInteraction);
      window.removeEventListener('click', onUserInteraction);
    };
  }, []);

  return (
    <div className="w-full">
      {/* HERO SECTION WITH CINEMATIC VIDEO PLAYING UNDER NAVBAR */}
      <section className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Cinematic User Video Background Playing Under Header & Navbar */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-black">
          {/* Instant 0ms High-Priority Poster - displays immediately when link opens */}
          <img
            src="/images/hero_poster.jpg"
            alt="Avalos Epoxy Floor Real Installation"
            fetchPriority="high"
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
              videoLoaded ? 'opacity-0' : 'opacity-100'
            }`}
          />

          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            preload="auto"
            poster="/images/hero_poster.jpg"
            onCanPlay={() => setVideoLoaded(true)}
            onPlaying={() => setVideoLoaded(true)}
            onLoadedData={() => setVideoLoaded(true)}
            className={`w-full h-full object-cover object-center scale-[1.01] transition-opacity duration-700 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src="/videos/hero_mobile.mp4" type="video/mp4" />
            <source src="/videos/hero_user_epoxy.mp4" type="video/mp4" />
          </video>

          {/* Ultra-light subtle bottom transition so video remains fully bright across header and hero */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-20 w-full">
          <div className="max-w-4xl space-y-8">
            {/* Editorial Kicker */}
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-neutral-300 font-medium">
              <span className="w-8 h-[1px] bg-emerald-400" />
              <span>Architectural Surface Engineering</span>
              <span className="text-neutral-500">·</span>
              <span className="text-neutral-400">Residential & Commercial</span>
            </div>

            {/* Master Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight uppercase leading-[0.98] font-['Outfit']">
              Transform Your Floor.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
                Elevate Your Space.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed font-normal">
              High-performance epoxy flake, quartz broadcast, and mirror-finish solid color flooring. Handcrafted by Avalos Epoxy Floor for extreme durability, chemical resistance, and showroom beauty.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="py-4 px-8 text-xs font-bold tracking-widest uppercase bg-white text-neutral-950 hover:bg-neutral-200 transition-colors flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Request An Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  onNavigate('gallery');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="py-4 px-8 text-xs font-semibold tracking-widest uppercase bg-black/60 hover:bg-black/90 text-white border border-neutral-700 backdrop-blur-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Our Work</span>
              </button>

              <a
                href="https://wa.me/message/F6MII6SPDFBMH1"
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-6 text-xs font-semibold tracking-wider uppercase text-emerald-400 border border-emerald-500/40 hover:bg-emerald-950/20 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Fast Inquiry</span>
              </a>
            </div>

            {/* Sub-hero Verified Service Strip */}
            <div className="pt-10 border-t border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-neutral-300">
              <div className="space-y-1">
                <span className="block text-[10px] uppercase font-mono tracking-wider text-neutral-400">01 / System</span>
                <span className="font-semibold text-white">Epoxy Flake & Quartz</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] uppercase font-mono tracking-wider text-neutral-400">02 / Finish</span>
                <span className="font-semibold text-white">Seamless Solid Coatings</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] uppercase font-mono tracking-wider text-neutral-400">03 / Standard</span>
                <span className="font-semibold text-white">Diamond Grind Profile</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] uppercase font-mono tracking-wider text-neutral-400">04 / Option</span>
                <span className="font-semibold text-white">One-Day Installation*</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: THE TRANSFORMATION NARRATIVE */}
      <section className="py-24 sm:py-32 bg-[#0b0c0e] border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-mono">
                The Concrete Transformation
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Ordinary concrete is porous, fragile, and prone to staining.
              </h2>
              <div className="w-12 h-[2px] bg-neutral-700" />
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Untreated concrete absorbs motor oil, road salts, brake fluid, and moisture. Over time, surface sweating, micro-cracks, and concrete dusting degrade the look and cleanliness of your garage or commercial facility.
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Avalos Epoxy Floor bonds an impervious, multi-layer resin matrix into the mechanically opened concrete pores—creating a monolithic, non-porous floor that wipes clean with water, repels harsh chemicals, and amplifies room lighting by up to 300%.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-6">
                <div className="text-xs uppercase tracking-widest text-neutral-400 flex items-center justify-between pb-2 border-b border-neutral-800">
                  <span>Interactive Proof of Transformation</span>
                  <span className="text-emerald-400 font-mono">Real Surface Results</span>
                </div>

                <BeforeAfterSlider
                  beforeImage="/images/before_after_transformation.jpg"
                  afterImage="/images/before_after_transformation.jpg"
                  beforeLabel="Worn, Stained Concrete"
                  afterLabel="Avalos High-Gloss Flake Finish"
                  caption="Compare the difference between unsealed concrete and the seamless, polished Avalos epoxy surface."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 3 CORE FINISHES SHOWCASE */}
      <section className="py-24 sm:py-32 bg-[#0d0f13] border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-neutral-800">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-mono">
                Architectural Finishes
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mt-2">
                Engineered for Every Demand
              </h2>
            </div>
            <button
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs uppercase tracking-widest font-semibold text-neutral-300 hover:text-white flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore All Specifications</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Editorial Full-Width Systems (No rounded cards) */}
          <div className="space-y-20">
            {/* System 1: Epoxy Flake */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-7 relative group overflow-hidden bg-black border border-neutral-800">
                <img
                  src="/images/service_flake_flooring.jpg"
                  alt="Epoxy Flake Flooring System"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-black/80 text-white px-3 py-1 border border-neutral-800">
                    System 01 / Flake
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="text-xs font-mono tracking-wider text-emerald-400 uppercase">
                  Most Popular for Residential Garages & Workshops
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Epoxy Flake Flooring
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  A high-density broadcast of multi-tonal vinyl color chips embedded into high-strength epoxy, sealed beneath an ultra-tough polyaspartic topcoat. It completely masks surface imperfections while providing tactile slip-resistance.
                </p>

                <div className="space-y-2 pt-2 border-t border-neutral-800/80 text-xs">
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-400">Texture:</span>
                    <span className="text-white font-medium">Textured Orange-Peel Non-Slip</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-400">Resistance:</span>
                    <span className="text-white font-medium">Hot Tires, Motor Oil, Road Salt</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-400">Maintenance:</span>
                    <span className="text-white font-medium">Mild Detergent & Water Wash</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="py-3 px-6 text-xs uppercase tracking-widest font-bold bg-white text-neutral-950 hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    View System Specs
                  </button>
                  <a
                    href="https://wa.me/message/F6MII6SPDFBMH1?text=Hello%20Avalos%20Epoxy%20Floor,%20I%20am%20interested%20in%20an%20Epoxy%20Flake%20Flooring%20system."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-wider text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire Flake</span>
                  </a>
                </div>
              </div>
            </div>

            {/* System 2: Quartz Flooring */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
                <div className="text-xs font-mono tracking-wider text-emerald-400 uppercase">
                  Industrial-Grade Traction & Impact Armor
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Quartz Broadcast Flooring
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Ceramic-coated quartz silica granules broadcast into clear high-performance epoxy resin. Engineered specifically for high-moisture environments, heavy machinery corridors, commercial kitchens, and entry breezeways.
                </p>

                <div className="space-y-2 pt-2 border-t border-neutral-800/80 text-xs">
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-400">Durability:</span>
                    <span className="text-white font-medium">Extreme Compressive Strength</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-400">Traction:</span>
                    <span className="text-white font-medium">Heavy Wet/Dry Slip Resistance</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-400">Environment:</span>
                    <span className="text-white font-medium">Commercial & Heavy Duty</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="py-3 px-6 text-xs uppercase tracking-widest font-bold bg-white text-neutral-950 hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    View System Specs
                  </button>
                  <a
                    href="https://wa.me/message/F6MII6SPDFBMH1?text=Hello%20Avalos%20Epoxy%20Floor,%20I%20am%20interested%20in%20a%20Quartz%20Broadcast%20Flooring%20system."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-wider text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire Quartz</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 relative group overflow-hidden bg-black border border-neutral-800 order-1 lg:order-2">
                <img
                  src="/images/service_quartz_flooring.jpg"
                  alt="Quartz Broadcast Epoxy Floor"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-black/80 text-white px-3 py-1 border border-neutral-800">
                    System 02 / Quartz
                  </span>
                </div>
              </div>
            </div>

            {/* System 3: Solid Epoxy */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-7 relative group overflow-hidden bg-black border border-neutral-800">
                <img
                  src="/images/service_solid_epoxy.jpg"
                  alt="Solid Color Seamless Epoxy Floor"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-black/80 text-white px-3 py-1 border border-neutral-800">
                    System 03 / Solid
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="text-xs font-mono tracking-wider text-emerald-400 uppercase">
                  Modern Architectural Monolith
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Solid Color Epoxy Flooring
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Smooth, jointless solid resin surfaces delivering a gallery-grade visual aesthetic. Perfect for minimalist residential interiors, contemporary showrooms, boutique stores, and medical facilities.
                </p>

                <div className="space-y-2 pt-2 border-t border-neutral-800/80 text-xs">
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-400">Finish:</span>
                    <span className="text-white font-medium">High Gloss or Matte Satin</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-400">Cleanliness:</span>
                    <span className="text-white font-medium">100% Seamless, Zero Grout Lines</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-400">Palette:</span>
                    <span className="text-white font-medium">Graphite, Basalt, Slate, Pure White</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="py-3 px-6 text-xs uppercase tracking-widest font-bold bg-white text-neutral-950 hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    View System Specs
                  </button>
                  <a
                    href="https://wa.me/message/F6MII6SPDFBMH1?text=Hello%20Avalos%20Epoxy%20Floor,%20I%20am%20interested%20in%20a%20Solid%20Epoxy%20Flooring%20system."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-wider text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire Solid</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE 4-STAGE INSTALLATION PROCESS */}
      <section className="py-24 sm:py-32 bg-[#0b0c0e] border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-mono">
              Craftsmanship & Technique
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              An uncompromised installation process.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Epoxy floor longevity is 90% determined by concrete preparation. Avalos adheres to mechanical planetary diamond grinding standards rather than acid etching shortcuts.
            </p>
          </div>

          {/* Grinding Process Marquee Visual */}
          <div className="relative overflow-hidden mb-16 border border-neutral-800 bg-neutral-950">
            <img
              src="/images/process_diamond_grinding.jpg"
              alt="Planetary Diamond Grinding Concrete Preparation"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full aspect-[21/9] sm:aspect-[16/7] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-6 sm:p-10">
              <div className="max-w-xl">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                  Step 01 In Action
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Planetary Diamond Surface Profiling
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 mt-2">
                  Heavy-duty diamond grinding removes laitance, opens concrete pores to CSP-2/3 profile, and connects with HEPA vacuum dust extractors for clean prep.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Process Columns (Bordered hairlines only, no cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4 pt-6 border-t border-neutral-800">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                01. Surface Profiling
              </span>
              <h3 className="text-lg font-bold text-white">Diamond Grinding</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Mechanical grinding levels high spots, strips old sealers, and opens capillary channels to guarantee deep chemical adhesion.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-neutral-800">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                02. Crack & Joint Repair
              </span>
              <h3 className="text-lg font-bold text-white">Mender Matrix</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Structural epoxy-polyurea mender fills spider cracks, expansion joints, and spalled divots, creating a true seamless substrate.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-neutral-800">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                03. Base & Full Broadcast
              </span>
              <h3 className="text-lg font-bold text-white">100% Solids Resin</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                High-penetration pigmented epoxy primer rolled into concrete followed immediately by full saturation flake or quartz broadcast.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-neutral-800">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                04. Clear Armor Coat
              </span>
              <h3 className="text-lg font-bold text-white">Polyaspartic Glaze</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Scraped smooth and locked beneath UV-stable, non-yellowing polyaspartic clear coat for chemical and scratch defense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: REAL ADVANTAGES (NO UNSUPPORTED CLAIMS) */}
      <section className="py-24 sm:py-32 bg-[#0d0f13] border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-mono">
                Real-World Performance
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Why residential and commercial clients upgrade to Avalos epoxy.
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Engineered for harsh everyday abuse—from hot vehicle tires and leaked motor oil to heavy shop tools and foot traffic.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="py-3.5 px-6 text-xs uppercase tracking-widest font-semibold bg-white text-neutral-950 hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Schedule Your Inspection
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3 pb-6 border-b border-neutral-800">
                <Shield className="w-5 h-5 text-emerald-400" />
                <h4 className="text-base font-bold text-white">Chemical & Fluid Immunity</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Repels automotive transmission fluids, engine oil, de-icing salts, bleach, and grease without staining or bubbling.
                </p>
              </div>

              <div className="space-y-3 pb-6 border-b border-neutral-800">
                <Hammer className="w-5 h-5 text-emerald-400" />
                <h4 className="text-base font-bold text-white">Hot-Tire Pickup Defense</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  High-heat softening point prevents hot tires from lifting or delaminating the coating after highway driving.
                </p>
              </div>

              <div className="space-y-3 pb-6 border-b border-neutral-800">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <h4 className="text-base font-bold text-white">300% Light Reflectivity</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  The high-gloss reflective surface multiplies natural and overhead LED illumination, transforming dark workshops into bright spaces.
                </p>
              </div>

              <div className="space-y-3 pb-6 border-b border-neutral-800">
                <Clock className="w-5 h-5 text-emerald-400" />
                <h4 className="text-base font-bold text-white">One-Day Installation Option</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Rapid-cure polyaspartic technology allows qualified residential spaces to be completed in one working day upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: MEET JOSE AVALOS — OWNER & MASTER CRAFTSMAN */}
      <section className="py-24 sm:py-32 bg-[#090b0e] border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Owner Image */}
            <div className="lg:col-span-6 relative border border-neutral-800 bg-black overflow-hidden group">
              <img
                src="/images/owner_jose_avalos_official.jpg"
                alt="Jose Avalos - Owner of Avalos Epoxy Floor"
                loading="lazy"
                decoding="async"
                className="w-full aspect-square sm:aspect-[4/3] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-black/85 px-3 py-1 text-[10px] uppercase font-mono tracking-widest text-emerald-400 border border-neutral-700/60">
                Founder & Lead Craftsman
              </div>
            </div>

            {/* Owner Story & Direct Commitment */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-emerald-400 font-mono">
                <span>Direct Ownership Oversight</span>
                <span className="text-neutral-500">·</span>
                <span>No Subcontractors</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Meet Jose Avalos.{' '}
                <span className="block text-neutral-400 font-medium">Precision on Every Floor.</span>
              </h2>
              <div className="w-12 h-[2px] bg-neutral-700" />
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                "When you hire Avalos Epoxy Floor, you work directly with me. Every concrete slab has its own character, moisture profile, and prep requirements. I personally oversee each project—from the mechanical diamond grind to the final polyaspartic glaze."
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Whether you need a commercial quartz floor or a custom garage flake design, Jose brings hands-on mastery to ensure flawless adhesion, razor-sharp edges, and long-lasting beauty.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="https://wa.me/message/F6MII6SPDFBMH1?text=Hello%20Jose%20Avalos,%20I%20would%20like%20to%20discuss%20a%20flooring%20project%20directly%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat Directly with Jose</span>
                </a>

                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="py-3.5 px-6 bg-transparent hover:bg-neutral-900 text-white border border-neutral-700 text-xs uppercase tracking-widest transition-colors cursor-pointer text-center"
                >
                  Request Jobsite Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: GALLERY TEASER STRIP */}
      <section className="py-24 sm:py-32 bg-[#0b0c0e]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-mono">
                Recent Projects
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
                Visual Project Showcase
              </h2>
            </div>
            <button
              onClick={() => {
                onNavigate('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="py-2.5 px-5 text-xs uppercase tracking-wider font-semibold border border-neutral-700 text-white hover:bg-neutral-900 transition-colors cursor-pointer"
            >
              View Full Gallery
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              onClick={() => onNavigate('gallery')}
              className="group relative overflow-hidden bg-black border border-neutral-800 cursor-pointer"
            >
              <img
                src="/images/gallery_terrazzo_flake.jpg"
                alt="Custom 2-Car Garage Flake Floor"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="p-4 bg-neutral-950 border-t border-neutral-800/80">
                <span className="text-[10px] font-mono uppercase text-emerald-400 tracking-wider">
                  Residential Garage
                </span>
                <h4 className="text-sm font-bold text-white mt-0.5">
                  Multi-Tonal Granite Flake
                </h4>
              </div>
            </div>

            <div
              onClick={() => onNavigate('gallery')}
              className="group relative overflow-hidden bg-black border border-neutral-800 cursor-pointer"
            >
              <img
                src="/images/gallery_metallic_silver.jpg"
                alt="Luxury Showroom Metallic Epoxy"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="p-4 bg-neutral-950 border-t border-neutral-800/80">
                <span className="text-[10px] font-mono uppercase text-emerald-400 tracking-wider">
                  Luxury Showroom
                </span>
                <h4 className="text-sm font-bold text-white mt-0.5">
                  Metallic Charcoal Swirl
                </h4>
              </div>
            </div>

            <div
              onClick={() => onNavigate('gallery')}
              className="group relative overflow-hidden bg-black border border-neutral-800 cursor-pointer"
            >
              <img
                src="/images/gallery_commercial_patio.jpg"
                alt="Commercial Entryway Quartz Floor"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="p-4 bg-neutral-950 border-t border-neutral-800/80">
                <span className="text-[10px] font-mono uppercase text-emerald-400 tracking-wider">
                  Commercial Facility
                </span>
                <h4 className="text-sm font-bold text-white mt-0.5">
                  Slip-Resistant Quartz Broadcast
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
