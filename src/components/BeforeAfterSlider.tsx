import React, { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string;
  caption?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Existing Concrete (Dull / Stained)',
  afterLabel = 'Avalos High-Gloss Epoxy Finish',
  aspectRatio = 'aspect-[16/9]',
  caption = 'Slide horizontally to reveal the surface transition from raw concrete to polished industrial-grade epoxy.',
}) => {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percentage);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX);
    }
  };

  return (
    <div className="w-full select-none">
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        className={`relative w-full ${aspectRatio} overflow-hidden cursor-ew-resize bg-neutral-900 border border-neutral-800`}
      >
        {/* AFTER Image (Full background) */}
        <img
          src={afterImage}
          alt={afterLabel}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${position}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{
              width: containerRef.current
                ? `${containerRef.current.offsetWidth}px`
                : '100vw',
              height: '100%',
            }}
          />
        </div>

        {/* Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none shadow-[0_0_12px_rgba(255,255,255,0.7)]"
          style={{ left: `${position}%` }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-neutral-950 border border-white flex items-center justify-center shadow-2xl">
            <svg
              className="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <svg
              className="w-4 h-4 text-white -ml-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 pointer-events-none">
          <span className="text-[11px] font-bold tracking-widest uppercase bg-black/80 text-white px-2.5 py-1 backdrop-blur-sm border border-neutral-700/60">
            BEFORE: Raw Concrete
          </span>
        </div>
        <div className="absolute bottom-4 right-4 pointer-events-none">
          <span className="text-[11px] font-bold tracking-widest uppercase bg-white text-neutral-950 px-2.5 py-1 shadow-lg">
            AFTER: Avalos Epoxy
          </span>
        </div>
      </div>

      {caption && (
        <div className="mt-3 flex items-center justify-between text-xs text-neutral-400">
          <p>{caption}</p>
          <span className="text-[10px] uppercase tracking-widest font-mono text-neutral-400">
            {Math.round(position)}% REVEAL
          </span>
        </div>
      )}
    </div>
  );
};
