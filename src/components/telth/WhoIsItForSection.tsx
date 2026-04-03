import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef, useEffect, useState } from "react";

const profiles = [
  {
    title: "10+2 Science Students",
    description: "Aspiring healthcare entrants. Start your career in community care with zero prior clinical experience — Telth trains you from the ground up.",
    tag: "Entry Level",
  },
  {
    title: "Diploma Holders",
    description: "Nursing diploma, DMLT, paramedic, or health assistant graduates looking to practise independently with full technological support.",
    tag: "Diploma / Certificate",
  },
  {
    title: "Registered Nurses",
    description: "GNM or BSc Nursing qualified? Build a flexible, independent care practice. Earn ₹30–80K/month on your own schedule.",
    tag: "GNM / BSc Nursing",
  },
  {
    title: "Pharmacists",
    description: "D.Pharm or B.Pharm holders who want to extend beyond dispensing — deliver diagnostics, care plans, and chronic disease management.",
    tag: "D.Pharm / B.Pharm",
  },
  {
    title: "Doctors & MBBS",
    description: "Qualified physicians who want to lead a networked community care model, supervise CMs, and deliver P3DSC-powered care.",
    tag: "MBBS / MD",
  },
  {
    title: "Clinic & Hospital Owners",
    description: "Extend your facility's reach into the community. Deploy Care Managers under your brand using Telth's full ecosystem.",
    tag: "Operator",
  },
];

// Duplicate profiles for infinite effect
const infiniteProfiles = [...profiles, ...profiles, ...profiles];

export default function WhoIsItForSection() {
  const ref = useScrollAnimation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll with wheel - horizontal scroll on mouse wheel
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  // Update active index based on scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardWidth = 380; // Approximate card width + gap
      const scrollPos = container.scrollLeft;
      const newIndex = Math.round(scrollPos / cardWidth) % profiles.length;
      setActiveIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Drag to scroll functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section id="who" className="bg-background py-24 overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[11px] font-bold tracking-[2px] uppercase text-primary">
            Is This For You?
          </span>
          <h2 className="text-foreground text-[36px] md:text-[42px] font-bold leading-[1.12] mb-4 font-display mt-3">
            Who becomes a Telth Care Manager?
          </h2>
          <p className="text-muted-foreground text-[17px] leading-[1.75] max-w-xl mx-auto">
            Scroll horizontally — drag or use your mouse wheel to explore every role
          </p>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="flex justify-center gap-2 mb-8">
          {profiles.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                const container = scrollContainerRef.current;
                if (container) {
                  const cardWidth = 380;
                  container.scrollTo({
                    left: idx * cardWidth,
                    behavior: "smooth",
                  });
                }
              }}
              className={`h-1 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "w-8 bg-primary"
                  : "w-4 bg-primary/20 hover:bg-primary/40"
              }`}
            />
          ))}
        </div>

        {/* Infinite Horizontal Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="flex gap-6 px-4 pb-8" style={{ width: "max-content" }}>
            {infiniteProfiles.map((p, i) => (
              <div
                key={`${p.title}-${i}`}
                className="relative group"
                style={{
                  width: "340px",
                  flexShrink: 0,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Animated glow effect that follows scroll */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                {/* Card with parallax scroll effect */}
                <div className="relative bg-card rounded-2xl border border-border overflow-hidden transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:-translate-y-2">
                  {/* Gradient border animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                  <div className="p-6 relative z-10">
                    {/* Tag with icon */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-6 bg-primary rounded-full transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                      <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-primary group-hover:tracking-[2px] transition-all duration-300">
                        {p.tag}
                      </div>
                    </div>

                    {/* Title with number indicator */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="text-foreground text-[18px] font-bold leading-snug font-display flex-1 group-hover:text-primary transition-colors duration-300">
                        {p.title}
                      </h3>
                      <div className="text-[10px] font-mono text-primary/30 group-hover:text-primary/60 transition-colors duration-300">
                        {(i % profiles.length) + 1}
                      </div>
                    </div>

                    {/* Description with reveal on scroll */}
                    <p className="text-muted-foreground text-[14px] leading-relaxed">
                      {p.description}
                    </p>

                    {/* Animated arrow that appears on hover */}
                    <div className="mt-4 flex justify-end">
                      <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:w-10 transition-all duration-300">
                        <svg
                          className="w-4 h-4 text-primary transform transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-0 -rotate-45"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Bottom progress bar that fills on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/20">
                    <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Hint Animation */}
        <div className="flex justify-center mt-8 gap-2 animate-pulse">
          <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span>Drag to scroll</span>
            <span className="mx-2">•</span>
            <span>Mouse wheel</span>
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        {/* Floating CTA */}
        <div className="mt-12 text-center relative">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group cursor-pointer">
            <span className="text-[13px] font-semibold text-primary tracking-wide">
              👋 Not sure? Let's find your path
            </span>
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
              <svg
                className="w-3 h-3 text-primary transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .group:hover .group-hover\\:animate-slide {
          animation: slideInFromRight 0.3s ease-out;
        }
        
        /* Custom cursor for dragging */
        .cursor-grab {
          cursor: grab;
        }
        
        .cursor-grabbing {
          cursor: grabbing;
        }
      `}</style>
    </section>
  );
}