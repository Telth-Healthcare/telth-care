import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import whatIsCMImage from "../../assets/What is CM.png";
import middleclass from '../../assets/uppermiddle.png';
import telthsplash from '../../assets/spalsh.jpg';
import nurses from "../../assets/image.jpg";
import lottery from '../../assets/lotery.jpg';
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    n: "1",
    title: "Book via the Telth CM App",
    img: whatIsCMImage,
    desc: "Receive and accept patient requests on your schedule. You control when and how many visits you take.",
  },
  {
    n: "2",
    title: "Visit the patient at home",
    img: middleclass,
    desc: "Arrive at the patient's residence with your Telth HES device. No waiting rooms, no gatekeepers.",
  },
  {
    n: "3",
    title: "Run a 90-parameter health assessment",
    img: nurses,
    desc: "The HES device captures vital signs, blood work, cardiac markers, and more — in under 15 minutes, at home.",
  },
  {
    n: "4",
    title: "Coordinate care and recommend services",
    img: telthsplash,
    desc: "Connect patients to doctors, care plans, medicines, and referral networks — all from the app.",
  },
  {
    n: "5",
    title: "Get paid for every service delivered",
    img: lottery,
    desc: "Visit fees, care plan commissions, medicine margins, and referral income — all consolidated in your dashboard.",
  },
];

export default function WhatIsCMSection() {
  const ref = useScrollAnimation();
  const [activeStep, setActiveStep] = useState(0);
  const [imgSrc, setImgSrc] = useState(steps[0].img);
  const [imgFading, setImgFading] = useState(false);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeStepRef = useRef(0);

  // Crossfade image smoothly
  useEffect(() => {
    if (steps[activeStep].img === imgSrc) return;
    setImgFading(true);
    const t = setTimeout(() => {
      setImgSrc(steps[activeStep].img);
      setImgFading(false);
    }, 180);
    return () => clearTimeout(t);
  }, [activeStep]);

  // Observer — created ONCE, no deps
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let bestIdx = -1;
        entries.forEach((entry) => {
          const idx = stepRefs.current.indexOf(entry.target as HTMLDivElement);
          if (idx !== -1 && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            bestIdx = idx;
          }
        });
        if (bestIdx !== -1 && bestIdx !== activeStepRef.current) {
          activeStepRef.current = bestIdx;
          setActiveStep(bestIdx);
        }
      },
      {
        rootMargin: "-30% 0px -30% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    stepRefs.current.forEach((el) => { if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []); // ← EMPTY — never recreated

  const scrollToStep = (index: number) => {
    stepRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="what-is-cm" className="bg-card py-16 md:py-24">
      <div ref={ref} className="max-w-6xl mx-auto px-5 md:px-6">

        {/* 
          ✅ KEY FIX: Use flexbox NOT grid. 
          Grid stretches children to equal height which breaks sticky.
          Flex with items-start lets each column be its natural height.
          The left column becomes "short" (just the sticky image size),
          while the right column is tall (all steps) — sticky works perfectly.
        */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24 items-start">

          {/* ── LEFT COLUMN: Sticky image ── */}
          {/* 
            ✅ width: set explicit width so flex doesn't collapse it
            ✅ position: sticky with top offset
            ✅ NO overflow hidden on this or any ancestor
            ✅ self-start: critical — don't stretch to match right column height
          */}
          <div
            className="hidden md:block md:w-[45%] lg:w-[48%] flex-shrink-0 self-start"
            style={{ position: "sticky", top: "100px" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={imgSrc}
                alt={steps[activeStep].title}
                className="w-full object-cover"
                style={{
                  opacity: imgFading ? 0 : 1,
                  transition: "opacity 0.25s ease",
                  display: "block",
                }}
              />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-4 right-4 bg-card rounded-xl shadow-xl px-4 py-3 border border-border min-w-[150px] backdrop-blur-sm">
              <div className="text-primary text-[28px] font-bold leading-none font-display">
                15 min
              </div>
              <div className="text-muted-foreground text-[12px] font-medium mt-1">
                Complete 90-parameter checkup
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Scrolling steps ── */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-5 h-0.5 bg-primary rounded-full" />
              <span className="text-[10px] md:text-[11px] font-bold tracking-[2px] uppercase text-primary">
                The Role Explained
              </span>
            </div>

            <h2 className="text-foreground text-[28px] sm:text-[32px] md:text-[42px] font-bold leading-[1.2] mb-4 font-display">
              What does a Care Manager actually do?
            </h2>

            <p className="text-muted-foreground text-[15px] md:text-[17px] leading-[1.7] mb-8">
              A CM isn't a nurse-for-hire. You are the frontline of a new healthcare system — carrying AI-powered diagnostics to every home, every day.
            </p>

            {/* Mobile image */}
            <div className="md:hidden mb-8 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={imgSrc}
                alt={steps[activeStep].title}
                className="w-full object-cover"
                style={{ opacity: imgFading ? 0 : 1, transition: "opacity 0.25s ease" }}
              />
            </div>

            <div className="flex flex-col divide-y divide-border">
              {steps.map((s, index) => {
                const isActive = activeStep === index;
                return (
                  <div
                    key={s.n}
                    ref={(el) => { stepRefs.current[index] = el; }}
                    onClick={() => scrollToStep(index)}
                    className="py-5 cursor-pointer select-none"
                    style={{
                      filter: isActive ? "none" : "blur(0.3px)",
                      opacity: isActive ? 1 : 0.35,
                      transform: isActive ? "translateX(4px) scale(1.01)" : "translateX(0) scale(1)",
                      transition: "filter 0.4s ease, opacity 0.4s ease, transform 0.35s ease",
                    }}
                  >
                    <div className={`
                      flex gap-4 md:gap-5 items-start rounded-xl px-3 py-2 -mx-3
                      ${isActive ? "bg-primary/5" : "hover:bg-muted/20"}
                      transition-colors duration-300
                    `}>
                      <div className={`
                        w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0
                        transition-all duration-300
                        ${isActive ? "bg-primary shadow-lg scale-110" : "bg-telth-teal-light"}
                      `}>
                        <span className={`
                          text-[14px] md:text-[16px] font-bold font-display transition-colors duration-300
                          ${isActive ? "text-primary-foreground" : "text-primary"}
                        `}>
                          {s.n}
                        </span>
                      </div>

                      <div className="flex-1">
                        <h4 className={`
                          text-[14px] md:text-[15px] font-bold mb-1 transition-colors duration-300
                          ${isActive ? "text-primary" : "text-foreground"}
                        `}>
                          {s.title}
                        </h4>
                        <p className={`
                          text-[13px] md:text-[14px] leading-relaxed transition-colors duration-300
                          ${isActive ? "text-foreground/80" : "text-muted-foreground"}
                        `}>
                          {s.desc}
                        </p>
                        {isActive && (
                          <div className="w-12 h-0.5 bg-primary rounded-full mt-2 animate-in fade-in slide-in-from-left-2 duration-300" />
                        )}
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