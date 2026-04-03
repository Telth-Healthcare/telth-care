"use client";

import { useState, useEffect, useRef } from "react";

interface ForkCard { type: "tl" | "am"; label: string; desc: string; }
interface LangCard { label: string; desc: string; }
interface Step {
  num: number; title: string; desc: string;
  tags?: { text: string; teal?: boolean }[];
  pills?: { text: string; teal?: boolean }[];
  fork?: ForkCard[];
  subSections?: { label: string; content: React.ReactNode }[];
  langGrid?: LangCard[];
  dests?: string[];
}
interface Phase { tab: string; phaseLabel: string; phaseName: string; steps: Step[]; }

const PHASES: Phase[] = [
  {
    tab: "01 — Apply", phaseLabel: "Phase 01", phaseName: "Entry — Apply Online",
    steps: [{
      num: 1, title: "Apply Online",
      desc: "Submit your application at telth.care/careers — provide your academic credentials, identification, and a personal statement. Our team reviews and responds within 5 working days.",
      tags: [{ text: "Online Application", teal: true }, { text: "5-day Review" }, { text: "telth.care/careers" }],
    }],
  },
  {
    tab: "02 — Qualify", phaseLabel: "Phase 02", phaseName: "Qualifying Checks",
    steps: [
      { num: 2, title: "Academic Qualification Review", desc: "Minimum eligibility verified: 10+2 or equivalent for General CM tracks; degree-level qualification for clinical specialisations (Phlebotomy, ENT, etc.). Transcripts and certificates reviewed by the Telth admissions panel.", tags: [{ text: "10+2 Minimum" }, { text: "Degree for Clinical Tracks" }, { text: "Admissions Panel Review" }] },
      { num: 3, title: "Funding Qualification", desc: "Determine your funding route — choose one of two pathways to proceed into training.", fork: [{ type: "tl", label: "Skill India / NSDC", desc: "Eligible for government-funded training sponsorship. Proceed to funded training enrolment." }, { type: "am", label: "Self-Funded", desc: "No funding application required — this step is bypassed. Proceed directly to training selection." }] },
    ],
  },
  {
    tab: "03 — Train", phaseLabel: "Phase 03", phaseName: "Training Programme",
    steps: [
      { num: 4, title: "Skill India / NSDC Accredited Training — Choose Your Specialisation", desc: "Select the clinical or care specialisation matching your background and career goals.", pills: [{ text: "Telehealth & General", teal: true }, { text: "Phlebotomy" }, { text: "ENT Assistance" }, { text: "Radiology Assistance" }, { text: "Dental Assistance" }, { text: "Physiotherapy Support" }, { text: "Ophthalmic Assistance" }, { text: "Community Health Worker" }, { text: "Cosmetology / Grooming" }, { text: "Elder Care" }, { text: "Paediatric Care" }, { text: "+ Other Fields" }] },
      { num: 5, title: "Telehealth Technology & Device Training", desc: "Hands-on training on Telth's full technology ecosystem: TWBAN device operation, G-Med ID data entry, DigiDoc interface, remote monitoring devices, wearables, biosensors, and point-of-care diagnostics.", tags: [{ text: "TWBAN Device", teal: true }, { text: "G-Med ID", teal: true }, { text: "DigiDoc", teal: true }, { text: "AI Hub Certification", teal: true }] },
      { num: 6, title: "Business & Public Relations Training", desc: "Professional development covering care plan management, client communication, community outreach, Health Pay Care Plan facilitation, ethical standards, and Telth brand ambassadorship.", tags: [{ text: "Care Plan Management" }, { text: "Health Pay" }, { text: "Patient Engagement" }, { text: "Digital Literacy" }] },
    ],
  },
  {
    tab: "04 — Assess", phaseLabel: "Phase 04", phaseName: "Assessment & Certification",
    steps: [{ num: 7, title: "Complete the Final Assessment", desc: "Comprehensive exit assessment covering clinical knowledge, technology proficiency, care plan management, and professional conduct. Minimum pass mark: 70%. One retake available.", tags: [{ text: "70% Pass Mark", teal: true }, { text: "Written + Practical" }, { text: "Patient Simulation" }, { text: "1 Retake Allowed" }] }],
  },
  {
    tab: "05 — Enrol", phaseLabel: "Phase 05", phaseName: "Enrolment & Career Launch",
    steps: [{ num: 8, title: "Enrol as a Care Manager & Start Your Practice", desc: "Officially registered in the Telth Care Manager Network. Assigned to a Telth AI Health Hub under a Collaborative Care Manager. Full access to DigiDoc, G-Med ID, and the Telth ecosystem.", tags: [{ text: "Telth CM Network", teal: true }, { text: "AI Health Hub Assigned", teal: true }, { text: "G-Med ID", teal: true }, { text: "DigiDoc & Ecosystem", teal: true }] }],
  },
  {
    tab: "06 — Go Global", phaseLabel: "Phase 06 — Optional", phaseName: "International Pathway",
    steps: [
      {
        num: 9, title: "CME, Language Qualification & Destination Licensing", desc: "Three concurrent tracks to complete in parallel before your international transfer.",
        subSections: [
          { label: "9a — Continuing Medical Education", content: <p className="text-[15px] text-white/50 leading-[1.75]">Accredited CME covering advanced clinical topics, longevity science, AI health technology, and evidence-based care practices.</p> },
          { label: "9b — Language Qualification", content: null },
          { label: "9c — Destination Licensing", content: (<><p className="text-[15px] text-white/50 leading-[1.75] mb-3">Telth provides documentation support and accredited training records for regulatory registration.</p><div className="flex flex-wrap gap-[7px]">{["🇬🇧 NMC / HCPC (UK)", "🇦🇺 AHPRA (Australia)", "🇨🇦 CNAS (Canada)", "🇩🇪 Approbation (Germany)", "🇦🇪 DHA / MOH (UAE)", "🌐 + Others"].map((t) => (<span key={t} className="text-[12px] font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40">{t}</span>))}</div></>) },
        ],
        langGrid: [{ label: "IELTS / OET", desc: "UK, Australia, Canada, New Zealand, UAE" }, { label: "European Languages", desc: "German (B2/C1), French (DELF B2), Spanish (DELE), Dutch, Italian" }],
      },
      { num: 10, title: "Complete the International Programme & Qualify", desc: "Complete CME credits, achieve required language band score, and obtain licensing eligibility confirmation. Receive Telth International CM Certification.", tags: [{ text: "Telth Intl. Certification", teal: true }, { text: "Telth-U R&D Review" }] },
      { num: 11, title: "Transfer Your CM Career to an International Destination", desc: "Your Telth Care Manager career is fully portable. Transfer your registered CM opportunity, G-Med ID credentials, and care management portfolio to a Telth-affiliated hub in your chosen country.", dests: ["🇬🇧 United Kingdom", "🇦🇺 Australia", "🇨🇦 Canada", "🇩🇪 Germany", "🇫🇷 France", "🇳🇱 Netherlands", "🇦🇪 UAE", "🇸🇬 Singapore", "🇺🇸 USA", "🌐 & More"] },
    ],
  },
];

const STATS = [
  { n: 6, suffix: "", label: "Phases" }, { n: 11, suffix: "", label: "Steps total" },
  { n: 12, suffix: "+", label: "Specialisations" }, { n: 10, suffix: "+", label: "Countries" },
  { n: 250, suffix: "", label: "Plans/CM/month" },
];

function useCounter(target: number, duration = 1200, active = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setValue(target); clearInterval(timer); } else setValue(start);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return value;
}

function StatCell({ n, suffix, label, animate }: { n: number; suffix: string; label: string; animate: boolean }) {
  const val = useCounter(n, n > 50 ? 1400 : 900, animate);
  return (
    <div className="px-4 py-[22px] text-center stat-cell">
      <div className="text-[30px] font-extrabold text-white leading-none mb-[5px]">{val}<em className="not-italic text-[#099488]">{suffix}</em></div>
      <div className="text-[12px] text-white/35 font-medium">{label}</div>
    </div>
  );
}

function Tag({ text, teal }: { text: string; teal?: boolean }) {
  return <span className={`text-[12px] font-semibold px-3 py-1 rounded-full border transition-all duration-300 hover:scale-105 ${teal ? "bg-[rgba(9,148,136,0.13)] border-[rgba(9,148,136,0.33)] text-[#099488] hover:bg-[rgba(9,148,136,0.22)]" : "bg-white/5 border-white/10 text-white/40 hover:bg-white/10 hover:text-white/60"}`}>{text}</span>;
}

function Pill({ text, teal, index }: { text: string; teal?: boolean; index: number }) {
  return <span className={`text-[13px] font-semibold px-[14px] py-[5px] rounded-full border pill-pop ${teal ? "bg-[rgba(9,148,136,0.14)] border-[rgba(9,148,136,0.32)] text-[#099488]" : "bg-white/5 border-white/[0.09] text-white/52 hover:bg-white/10 hover:text-white/70 hover:border-white/20"} transition-all duration-200`} style={{ animationDelay: `${index * 40}ms` }}>{text}</span>;
}

function ForkCardEl({ card, index }: { card: ForkCard; index: number }) {
  const isTeal = card.type === "tl";
  return (
    <div className={`rounded-[13px] p-[16px_18px] fork-slide transition-all duration-300 hover:scale-[1.02] ${isTeal ? "bg-[rgba(9,148,136,0.09)] border border-[rgba(9,148,136,0.28)] hover:bg-[rgba(9,148,136,0.16)] hover:border-[rgba(9,148,136,0.5)]" : "bg-[rgba(251,191,36,0.06)] border border-dashed border-[rgba(251,191,36,0.28)] hover:bg-[rgba(251,191,36,0.12)] hover:border-[rgba(251,191,36,0.5)]"}`} style={{ animationDelay: `${index * 80}ms` }}>
      <div className={`text-[11px] font-extrabold tracking-[1px] uppercase mb-[7px] ${isTeal ? "text-[#099488]" : "text-[rgb(251,191,36)]"}`}>{card.label}</div>
      <p className="text-[13.5px] text-white/42 leading-[1.6]">{card.desc}</p>
    </div>
  );
}

function StepRow({ step, isLast, index }: { step: Step; isLast: boolean; index: number }) {
  return (
    <div className="flex gap-[22px] step-row" style={{ animationDelay: `${index * 90}ms` }}>
      <div className={`flex-shrink-0 relative ${!isLast ? "pb-10" : ""}`}>
        {!isLast && (
          <div className="absolute left-[19px] top-[42px] bottom-0 w-[2px] bg-white/6">
            <div className="connector-fill h-0 w-full bg-gradient-to-b from-[#099488]/40 to-transparent rounded-full" style={{ animationDelay: `${index * 90 + 200}ms` }} />
          </div>
        )}
        <div className="w-10 h-10 rounded-full border-2 border-[rgba(9,148,136,0.4)] bg-[rgba(9,148,136,0.08)] flex items-center justify-center text-[14px] font-extrabold text-[#099488] relative z-10 step-num transition-all duration-300 hover:border-[#099488] hover:bg-[rgba(9,148,136,0.25)] hover:shadow-[0_0_16px_rgba(9,148,136,0.4)] hover:scale-110 cursor-default">{step.num}</div>
      </div>
      <div className={`flex-1 ${!isLast ? "pb-10" : ""} pt-[7px]`}>
        <div className="text-[17px] font-bold text-white mb-2 leading-[1.3]">{step.title}</div>
        <p className="text-[15px] text-white/50 leading-[1.75]">{step.desc}</p>
        {step.tags && <div className="flex flex-wrap gap-[7px] mt-3">{step.tags.map((t, ti) => <span key={t.text} style={{ animationDelay: `${index * 90 + ti * 50}ms` }} className="tag-pop"><Tag {...t} /></span>)}</div>}
        {step.pills && <div className="flex flex-wrap gap-2 mt-[14px]">{step.pills.map((p, pi) => <Pill key={p.text} {...p} index={pi} />)}</div>}
        {step.fork && <div className="grid grid-cols-2 gap-[10px] mt-4 sm:grid-cols-1 md:grid-cols-2">{step.fork.map((f, fi) => <ForkCardEl key={f.label} card={f} index={fi} />)}</div>}
        {step.subSections && step.subSections.map((sub, si) => (
          <div key={sub.label} className={si > 0 ? "mt-4" : "mt-[18px]"}>
            <div className="text-[11px] font-extrabold tracking-[1.5px] uppercase text-[#099488] mb-[7px]">{sub.label}</div>
            {sub.label.startsWith("9b") && step.langGrid ? (
              <div className="grid grid-cols-2 gap-[10px] mt-[10px] sm:grid-cols-1 md:grid-cols-2">
                {step.langGrid.map((lc) => <div key={lc.label} className="bg-white/4 border border-white/[0.09] rounded-xl p-[14px_16px] hover:bg-white/8 hover:border-white/20 transition-all duration-300"><div className="text-[11px] font-extrabold tracking-[1px] uppercase text-[#099488] mb-[5px]">{lc.label}</div><p className="text-[13.5px] text-white/42 leading-[1.55]">{lc.desc}</p></div>)}
              </div>
            ) : sub.content}
          </div>
        ))}
        {step.dests && <div className="flex flex-wrap gap-2 mt-[14px]">{step.dests.map((d, di) => <span key={d} className="dest-pop flex items-center gap-[6px] text-[13px] font-semibold text-white/62 bg-white/5 border border-white/[0.09] px-[14px] py-[6px] rounded-full hover:bg-white/10 hover:border-white/20 hover:text-white/80 transition-all duration-200 hover:scale-105" style={{ animationDelay: `${di * 40}ms` }}>{d}</span>)}</div>}
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  const [active, setActive]             = useState(0);
  const [direction, setDirection]       = useState<"fwd" | "bwd">("fwd");
  const [statsVisible, setStatsVisible] = useState(false);

  const statsRef     = useRef<HTMLDivElement>(null);
  const sectionRef   = useRef<HTMLElement>(null);
  const phaseRefsMap = useRef<(HTMLDivElement | null)[]>([]);

  const progressPct = (((active + 1) / 6) * 100).toFixed(2);
  const phase = PHASES[active];

  // Trigger stat counters when strip enters viewport
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.4 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  // Scroll-driven phase switch via invisible sentinels
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const idx = phaseRefsMap.current.indexOf(visible.target as HTMLDivElement);
      if (idx === -1 || idx === active) return;
      setDirection(idx > active ? "fwd" : "bwd");
      setActive(idx);
    }, { threshold: 0.3, rootMargin: "0px 0px -20% 0px" });
    phaseRefsMap.current.forEach((el) => { if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [active]);

  // Tab click: update state + scroll matching sentinel into view
  const switchTab = (i: number) => {
    setDirection(i >= active ? "fwd" : "bwd");
    setActive(i);
    phaseRefsMap.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="how-it-works" ref={sectionRef} className="bg-[#0D243F] relative">

      {/* NON-STICKY — header + stats
          Scrolls away normally before sticky takes over.
          User sees these on entry, then they disappear
          giving full viewport to the phase content.      */}
      <div className="py-24 px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#099488] block mb-3 header-fade">The Journey</span>
            <h2 className="text-white text-[clamp(30px,4vw,42px)] font-bold leading-[1.12] mb-4 header-rise">
              From application to earning —<br />a complete step-by-step guide
            </h2>
            <p className="text-white/50 text-[17px] leading-[1.75] max-w-[460px] mx-auto header-rise" style={{ animationDelay: "120ms" }}>
              A guided process across 6 phases. You focus on patients; we handle the rest.
            </p>
          </div>
          <div ref={statsRef} className="border border-white/[0.07] rounded-[14px] overflow-hidden bg-white/[0.03]" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
            {STATS.map((s, i) => (
              <div key={s.label} style={{ borderRight: i < STATS.length - 1 ? "1px solid rgba(254,254,254,0.07)" : "none" }}>
                <StatCell {...s} animate={statsVisible} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STICKY — only tabs + progress bar + phase panel
          Sticks at top=0 AFTER header/stats have scrolled away.
          Full viewport height is free for phase content here.   */}
      <div className="sticky top-[64px] z-10 bg-[#0D243F] px-8 pt-6 pb-12">
        <div className="max-w-6xl mx-auto">

          {/* Tab pills */}
          <div className="flex gap-[6px] justify-center mb-5 overflow-x-auto pb-1 scrollbar-hide">
            {PHASES.map((ph, i) => (
              <button key={ph.tab} onClick={() => switchTab(i)} className={`text-[12px] font-bold px-[18px] py-[7px] rounded-full border cursor-pointer transition-all duration-300 whitespace-nowrap flex-shrink-0 ${active === i ? "bg-[#099488] border-[#099488] text-white shadow-[0_0_20px_rgba(9,148,136,0.45)] scale-[1.05]" : "bg-white/[0.06] border-white/10 text-white/45 hover:bg-white/[0.12] hover:text-white/80 hover:scale-[1.03] hover:border-white/25"}`}>
                {ph.tab}
              </button>
            ))}
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-3 w-full mb-10">
            <div className="flex-1 h-[3px] bg-white/[0.08] rounded-full overflow-hidden">
              <div className="h-full bg-[#099488] rounded-full transition-[width] duration-[600ms] ease-in-out relative overflow-hidden" style={{ width: `${progressPct}%` }}>
                <div className="absolute inset-0 progress-shimmer" />
              </div>
            </div>
            <span className="text-[12px] font-semibold text-white/30 whitespace-nowrap tabular-nums">Phase {active + 1} of 6</span>
          </div>

          {/* Phase panel */}
          <div className="overflow-y-auto scrollbar-hide" style={{ maxHeight: "calc(100vh - 230px)" }}>
          <div key={active} className={`phase-panel ${direction === "fwd" ? "slide-fwd" : "slide-bwd"}`}>
            <div className="flex items-center gap-[14px] mb-9">
              <div>
                <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/28 mb-[3px]">{phase.phaseLabel}</div>
                <div className="text-[20px] font-bold text-white phase-title">{phase.phaseName}</div>
              </div>
            </div>
            <div className="flex flex-col text-white">
              {phase.steps.map((step, si) => <StepRow key={step.num} step={step} isLast={si === phase.steps.length - 1} index={si} />)}
            </div>
          </div>
            </div>
        </div>
      </div>

      {/* Invisible scroll sentinels — one 100vh div per phase.
          IntersectionObserver watches these; as each enters
          view it fires setActive(i). No visual output.        */}
      <div className="pointer-events-none" aria-hidden="true">
        {PHASES.map((_, i) => (
          <div key={i} ref={(el) => { phaseRefsMap.current[i] = el; }} style={{ height: "100vh" }} />
        ))}
      </div>

      <style>{`
        .header-fade { animation: headerFade 0.6s ease both; }
        .header-rise { animation: headerRise 0.7s ease both; }
        @keyframes headerFade { from { opacity:0; letter-spacing:4px; } to { opacity:1; letter-spacing:2px; } }
        @keyframes headerRise { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
        .stat-cell { animation: statPop 0.5s cubic-bezier(0.34,1.56,0.64,1) both; }
        @keyframes statPop { from { opacity:0; transform:scale(0.8) translateY(10px); } to { opacity:1; transform:scale(1) translateY(0); } }
        .phase-panel { animation-duration:0.35s; animation-timing-function:cubic-bezier(0.25,0.46,0.45,0.94); animation-fill-mode:both; }
        .slide-fwd { animation-name: slideFwd; }
        .slide-bwd { animation-name: slideBwd; }
        @keyframes slideFwd { from { opacity:0; transform:translateX(32px) scale(0.98); } to { opacity:1; transform:translateX(0) scale(1); } }
        @keyframes slideBwd { from { opacity:0; transform:translateX(-32px) scale(0.98); } to { opacity:1; transform:translateX(0) scale(1); } }
        .phase-title { position:relative; display:inline-block; animation:fadeIn 0.4s ease both; animation-delay:80ms; }
        .phase-title::after { content:''; position:absolute; bottom:-3px; left:0; height:2px; width:0; background:#099488; border-radius:2px; animation:underlineDraw 0.5s ease forwards; animation-delay:200ms; }
        @keyframes underlineDraw { to { width:100%; } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        .step-row { animation:stepSlide 0.4s cubic-bezier(0.25,0.46,0.45,0.94) both; }
        @keyframes stepSlide { from { opacity:0; transform:translateX(-16px); } to { opacity:1; transform:translateX(0); } }
        .step-num { animation:numPulse 0.5s cubic-bezier(0.34,1.56,0.64,1) both; }
        @keyframes numPulse { 0% { transform:scale(0.5); opacity:0; } 70% { transform:scale(1.15); } 100% { transform:scale(1); opacity:1; } }
        .connector-fill { animation:connectorGrow 0.6s ease forwards; animation-delay:400ms; }
        @keyframes connectorGrow { from { height:0; } to { height:100%; } }
        .tag-pop { animation:tagPop 0.35s cubic-bezier(0.34,1.56,0.64,1) both; }
        @keyframes tagPop { from { opacity:0; transform:scale(0.7) translateY(6px); } to { opacity:1; transform:scale(1) translateY(0); } }
        .pill-pop { animation:pillPop 0.4s cubic-bezier(0.34,1.56,0.64,1) both; }
        @keyframes pillPop { from { opacity:0; transform:scale(0.75); } to { opacity:1; transform:scale(1); } }
        .fork-slide { animation:forkSlide 0.4s cubic-bezier(0.25,0.46,0.45,0.94) both; }
        @keyframes forkSlide { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        .dest-pop { animation:destPop 0.35s cubic-bezier(0.34,1.56,0.64,1) both; }
        @keyframes destPop { from { opacity:0; transform:scale(0.8) translateY(8px); } to { opacity:1; transform:scale(1) translateY(0); } }
        .progress-shimmer { background:linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%); animation:shimmer 2s ease infinite; background-size:200% 100%; }
        @keyframes shimmer { from { background-position:-200% 0; } to { background-position:200% 0; } }
        .scrollbar-hide::-webkit-scrollbar { display:none; }
        .scrollbar-hide { -ms-overflow-style:none; scrollbar-width:none; }
      `}</style>
    </section>
  );
}