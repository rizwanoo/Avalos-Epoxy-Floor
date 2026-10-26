import React, { useState } from 'react';
import { PageId, GalleryProject } from '../types';
import { officialProjectsList } from '../data/officialProjects';
import { MessageSquare, ArrowUpRight, ShieldCheck, Sparkles, Check } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'flake' | 'quartz' | 'solid' | 'metallic' | 'prep'>('all');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const projects = officialProjectsList;

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const filterTabs: { id: typeof activeFilter; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'flake', label: 'Flake Systems' },
    { id: 'quartz', label: 'Commercial Quartz' },
    { id: 'solid', label: 'Solid Epoxy' },
    { id: 'metallic', label: 'Metallic & Swirl' },
    { id: 'prep', label: 'Surface Preparation' },
  ];

  const handleCardClick = (projectId: string) => {
    setExpandedProjectId((prev) => (prev === projectId ? null : projectId));
  };

  return (
    <div className="w-full pt-28 pb-24 bg-[#0b0c0e]">
      {/* Header section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-12 border-b border-neutral-800">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-emerald-400 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>100% High-Definition Project Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-none font-['Outfit']">
              Project Gallery
            </h1>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Explore authentic high-definition photographs and completed floor installations by Avalos Epoxy Floor. Click any project to reveal full architectural specifications or chat directly on WhatsApp.
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs text-neutral-400 font-mono">
              Displaying {filteredProjects.length} of {projects.length} Works (HD Quality)
            </span>
          </div>
        </div>

        {/* Clean Filter Controls (Functional buttons, NO pill badges) */}
        <div className="flex flex-wrap items-center gap-2 pt-8">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFilter(tab.id);
                  setExpandedProjectId(null);
                }}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer border ${
                  isActive
                    ? 'bg-white text-neutral-950 border-white shadow-sm'
                    : 'bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Free-Flow Masonry / Architectural Project Showcase (NO POPUP MODALS) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, index) => {
            // Asymmetric layout span
            const isLarge = index === 0 || index === 2 || index === 5 || index === 8 || index === 11;
            const colSpan = isLarge ? 'lg:col-span-8' : 'lg:col-span-4';
            const isExpanded = expandedProjectId === project.id;

            const whatsappMessage = encodeURIComponent(
              `Hello Avalos Epoxy Floor, I am interested in a flooring project similar to "${project.title}" (${project.system} - ${project.finish}). Could you please provide an estimate?`
            );
            const whatsappUrl = `https://wa.me/message/F6MII6SPDFBMH1?text=${whatsappMessage}`;

            return (
              <div
                key={project.id}
                className={`${colSpan} group relative flex flex-col bg-[#0e1015] border ${
                  isExpanded ? 'border-emerald-500/80 shadow-[0_0_25px_rgba(16,185,129,0.15)]' : 'border-neutral-800'
                } overflow-hidden transition-all duration-300 hover:border-neutral-600`}
              >
                {/* Image Container with Crisp HD Rendering */}
                <div
                  onClick={() => handleCardClick(project.id)}
                  className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-black cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Top Category Tag */}
                  <div className="absolute top-3 left-3 bg-black/85 px-2.5 py-1 text-[10px] uppercase font-mono tracking-widest text-emerald-400 border border-neutral-800">
                    {project.categoryLabel}
                  </div>

                  {/* HD Badge */}
                  <div className="absolute top-3 right-3 bg-neutral-900/90 text-white px-2 py-0.5 text-[9px] font-mono tracking-wider uppercase border border-neutral-700">
                    HD Quality
                  </div>
                </div>

                {/* Info Strip */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3
                        onClick={() => handleCardClick(project.id)}
                        className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Inline Expanded Specifications (Reveals inline without any popup) */}
                  {isExpanded && (
                    <div className="p-4 bg-neutral-950/90 border border-neutral-800 space-y-2.5 text-xs animate-fadeIn">
                      <div className="flex justify-between border-b border-neutral-800/80 pb-1.5">
                        <span className="text-neutral-400">Resin System:</span>
                        <span className="text-white font-medium">{project.system}</span>
                      </div>
                      <div className="flex justify-between border-b border-neutral-800/80 pb-1.5">
                        <span className="text-neutral-400">Protective Finish:</span>
                        <span className="text-white font-medium">{project.finish}</span>
                      </div>
                      <div className="flex justify-between pb-1">
                        <span className="text-neutral-400">Key Feature:</span>
                        <span className="text-emerald-400 font-medium">{project.highlight}</span>
                      </div>
                      <div className="pt-1 flex items-center gap-1.5 text-[11px] text-neutral-400">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Diamond mechanically profiled concrete substrate</span>
                      </div>
                    </div>
                  )}

                  {/* Action Bar */}
                  <div className="pt-3 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <button
                      onClick={() => handleCardClick(project.id)}
                      className="text-neutral-300 hover:text-white transition-colors cursor-pointer text-xs underline underline-offset-4"
                    >
                      {isExpanded ? 'Hide Details' : 'View Specifications'}
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3.5 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-neutral-950 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Inquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 p-8 sm:p-12 border border-neutral-800 bg-[#0d0f14] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h4 className="text-xl font-bold text-white tracking-tight">
              Looking for a custom color or flake blend?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Jose Avalos provides custom flake color combinations and quartz matrix densities to match your vehicle collection, corporate branding, or home interior.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/message/F6MII6SPDFBMH1?text=Hello%20Jose%20Avalos,%20I%20have%20a%20specific%20custom%20floor%20color/flake%20blend%20in%20mind."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold text-xs tracking-wider uppercase flex items-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
