import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import whatIsCMImage from "../../assets/What is CM.png";
import middleclass from "../../assets/uppermiddle.png";
import telthsplash from "../../assets/spalsh.jpg";
import nurses from "../../assets/image.jpg";
import lottery from "../../assets/lotery.jpg";
import { useEffect, useRef, useState, useCallback } from "react";

const steps = [
  {
    n: "01",
    title: "Book via the Telth CM App",
    img: whatIsCMImage,
    tag: "Scheduling",
    desc: "Receive and accept patient requests on your schedule. You control when and how many visits you take — full autonomy over your practice.",
  },
  {
    n: "02",
    title: "Visit the patient at home",
    img: middleclass,
    tag: "Home Visit",
    desc: "Arrive at the patient's residence with your Telth HES device. No waiting rooms, no gatekeepers — direct, personal care.",
  },
  {
    n: "03",
    title: "Run a 90-parameter health assessment",
    img: nurses,
    tag: "Diagnostics",
    desc: "The HES device captures vital signs, blood work, cardiac markers, and more — in under 15 minutes, at home, with AI-guided precision.",
  },
  {
    n: "04",
    title: "Coordinate care and recommend services",
    img: telthsplash,
    tag: "Care Planning",
    desc: "Connect patients to doctors, care plans, medicines, and referral networks — all orchestrated from the Telth app in real time.",
  },
  {
    n: "05",
    title: "Get paid for every service delivered",
    img: lottery,
    tag: "Income",
    desc: "Visit fees, care plan commissions, medicine margins, and referral income — all consolidated and paid out through your dashboard.",
  },
];

export default function WhatIsCMSection() {
  const ref = useScrollAnimation();
  const [activeStep, setActiveStep] = useState(0);
  const [imgSrc, setImgSrc] = useState(steps[0].img);
  const [imgFading, setImgFading] = useState(false);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ticking = useRef(false);

  // ── Crossfade image ──
  useEffect(() => {
    if (steps[activeStep].img === imgSrc) return;
    setImgFading(true);
    const t = setTimeout(() => {
      setImgSrc(steps[activeStep].img);
      setImgFading(false);
    }, 200);
    return () => clearTimeout(t);
  }, [activeStep, imgSrc]);

  // ── SCROLL LOGIC ──
  const updateActiveStep = useCallback(() => {
    const viewportH = window.innerHeight;
    const readingLine = viewportH * 0.42;

    let best = 0;
    let bestDist = Infinity;

    stepRefs.current.forEach((el, i) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centre = rect.top + rect.height / 2;
      const dist = Math.abs(centre - readingLine);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });

    setActiveStep(best);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        updateActiveStep();
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateActiveStep();
    return () => window.removeEventListener("scroll", onScroll);
  }, [updateActiveStep]);

  const scrollToStep = (index: number) => {
    stepRefs.current[index]?.scrollIntoView({ 
      behavior: "smooth", 
      block: "center" 
    });
  };

  return (
    <section
      id="what-is-cm"
      className="bg-card py-20 md:py-28 relative"
    >
      <div ref={ref} className="max-w-6xl mx-auto px-5 md:px-8">

        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-5 h-0.5 bg-primary rounded-full" />
            <span className="text-[10px] md:text-[11px] font-bold tracking-[2.5px] uppercase text-primary">
              The Role Explained
            </span>
          </div>
          <h2 className="text-foreground text-[30px] sm:text-[36px] md:text-[44px] font-bold leading-[1.15] font-display max-w-[600px]">
            What does a Care Manager actually do?
          </h2>
          <p className="text-muted-foreground text-[15px] md:text-[17px] leading-[1.75] mt-4 max-w-[520px]">
            A CM isn't a nurse-for-hire. You are the frontline of a new healthcare
            system — carrying AI-powered diagnostics to every home, every day.
          </p>
        </div>

        {/* TWO-COLUMN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-20 relative">
          
          {/* ── LEFT COLUMN: Sticky image panel ── */}
          <div className="hidden lg:block lg:w-[45%] xl:w-[48%] flex-shrink-0">
            <div className="sticky top-24 flex flex-col gap-5">
              {/* Image card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-muted aspect-[4/3]">
                <img
                  src={imgSrc}
                  alt={steps[activeStep].title}
                  className="w-full h-full object-cover block"
                  style={{
                    opacity: imgFading ? 0 : 1,
                    transform: imgFading ? "scale(1.03)" : "scale(1)",
                    transition: "opacity 0.25s ease, transform 0.25s ease",
                  }}
                />

                {/* Step overlay badge — bottom left */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold tracking-[2px] uppercase text-white/60">
                      Step
                    </span>
                    <span className="text-[22px] font-extrabold text-white font-display leading-none">
                      {steps[activeStep].n}
                    </span>
                    <span className="text-[11px] font-semibold text-white/80 ml-1 leading-tight max-w-[180px]">
                      {steps[activeStep].title}
                    </span>
                  </div>
                </div>

                {/* Tag pill — top right */}
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-bold tracking-[1.5px] uppercase px-3 py-1.5 rounded-full bg-primary text-primary-foreground shadow-lg">
                    {steps[activeStep].tag}
                  </span>
                </div>
              </div>

              {/* Progress dots + stat */}
              <div className="flex items-center justify-between px-1">
                {/* Step dots */}
                <div className="flex items-center gap-[6px]">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => scrollToStep(i)}
                      className="transition-all duration-300 rounded-full cursor-pointer hover:opacity-80"
                      style={{
                        width: activeStep === i ? "22px" : "7px",
                        height: "7px",
                        backgroundColor:
                          activeStep === i
                            ? "hsl(var(--primary))"
                            : i < activeStep
                            ? "hsl(var(--primary) / 0.4)"
                            : "hsl(var(--border))",
                      }}
                    />
                  ))}
                </div>

                {/* Stat badge */}
                <div className="flex items-baseline gap-1.5 bg-primary/8 border border-primary/20 rounded-xl px-3 py-2">
                  <span className="text-[20px] font-extrabold text-primary font-display leading-none">
                    15
                  </span>
                  <div>
                    <div className="text-[11px] font-bold text-primary leading-none">min</div>
                    <div className="text-[10px] text-muted-foreground leading-tight mt-0.5">
                      90-param checkup
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Scrolling steps ── */}
          <div className="flex-1 min-w-0">
            {/* Mobile image */}
            <div className="lg:hidden mb-8 rounded-2xl overflow-hidden shadow-xl bg-muted aspect-[4/3] relative">
              <img
                src={imgSrc}
                alt={steps[activeStep].title}
                className="w-full h-full object-cover"
                style={{ opacity: imgFading ? 0 : 1, transition: "opacity 0.25s ease" }}
              />
              <div className="absolute top-3 right-3">
                <span className="text-[10px] font-bold tracking-[1.5px] uppercase px-3 py-1.5 rounded-full bg-primary text-primary-foreground shadow-lg">
                  {steps[activeStep].tag}
                </span>
              </div>
            </div>

            {/* Steps list */}
            <div className="flex flex-col gap-2">
              {steps.map((s, index) => {
                const isActive = activeStep === index;
                const isPast = index < activeStep;

                return (
                  <div
                    key={s.n}
                    ref={(el) => { stepRefs.current[index] = el; }}
                    onClick={() => scrollToStep(index)}
                    className="relative cursor-pointer group"
                  >
                    {/* Connector line */}
                    {index < steps.length - 1 && (
                      <div
                        className="absolute left-[18px] top-[52px] bottom-0 w-[2px] transition-colors duration-500"
                        style={{
                          backgroundColor: isPast
                            ? "hsl(var(--primary) / 0.5)"
                            : "hsl(var(--border))",
                        }}
                      />
                    )}

                    <div
                      className="flex gap-4 md:gap-5 items-start rounded-2xl px-4 py-5 transition-all duration-400"
                      style={{
                        backgroundColor: isActive
                          ? "hsl(var(--primary) / 0.06)"
                          : "transparent",
                        borderLeft: isActive
                          ? "2px solid hsl(var(--primary) / 0.5)"
                          : "2px solid transparent",
                        opacity: isActive ? 1 : isPast ? 0.55 : 0.45,
                        transform: isActive ? "translateX(4px)" : "translateX(0)",
                        transition:
                          "background-color 0.35s ease, opacity 0.35s ease, transform 0.35s ease, border-color 0.35s ease",
                      }}
                    >
                      {/* Number circle */}
                      <div
                        className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 border-2 mt-0.5"
                        style={{
                          backgroundColor: isActive
                            ? "hsl(var(--primary))"
                            : isPast
                            ? "hsl(var(--primary) / 0.15)"
                            : "transparent",
                          borderColor: isActive
                            ? "hsl(var(--primary))"
                            : isPast
                            ? "hsl(var(--primary) / 0.4)"
                            : "hsl(var(--border))",
                          transform: isActive ? "scale(1.1)" : "scale(1)",
                        }}
                      >
                        {isPast && !isActive ? (
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path
                              d="M2.5 7L5.5 10L11.5 4"
                              stroke="hsl(var(--primary))"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <span
                            className="text-[12px] md:text-[13px] font-extrabold font-display transition-colors duration-300"
                            style={{
                              color: isActive
                                ? "hsl(var(--primary-foreground))"
                                : "hsl(var(--muted-foreground))",
                            }}
                          >
                            {s.n}
                          </span>
                        )}
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        {/* Tag pill */}
                        <span
                          className="inline-block text-[9px] font-bold tracking-[1.5px] uppercase px-2 py-0.5 rounded-full mb-1.5 transition-all duration-300"
                          style={{
                            backgroundColor: isActive
                              ? "hsl(var(--primary) / 0.12)"
                              : "hsl(var(--muted))",
                            color: isActive
                              ? "hsl(var(--primary))"
                              : "hsl(var(--muted-foreground))",
                          }}
                        >
                          {s.tag}
                        </span>

                        <h4
                          className="text-[15px] md:text-[16px] font-bold mb-1.5 leading-[1.3] transition-colors duration-300 font-display"
                          style={{
                            color: isActive
                              ? "hsl(var(--foreground))"
                              : "hsl(var(--foreground))",
                          }}
                        >
                          {s.title}
                        </h4>

                        <p
                          className="text-[13px] md:text-[14px] leading-relaxed transition-colors duration-300 max-w-[500px]"
                          style={{
                            color: isActive
                              ? "hsl(var(--foreground) / 0.75)"
                              : "hsl(var(--muted-foreground))",
                          }}
                        >
                          {s.desc}
                        </p>

                        {/* Active underline accent */}
                        <div
                          className="h-[2px] bg-primary rounded-full mt-3 transition-all duration-400 origin-left"
                          style={{
                            width: isActive ? "40px" : "0px",
                            opacity: isActive ? 1 : 0,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}