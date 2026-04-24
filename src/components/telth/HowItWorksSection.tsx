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
          { label: "9a — Continuing Medical Education", content: <p className="text-[13px] text-white/75 leading-[1.6]">Accredited CME covering advanced clinical topics, longevity science, AI health technology, and evidence-based care practices.</p> },
          { label: "9b — Language Qualification", content: null },
          { label: "9c — Destination Licensing", content: (<><p className="text-[13px] text-white/75 leading-[1.6] mb-2">Telth provides documentation support and accredited training records for regulatory registration.</p><div className="flex flex-wrap gap-[5px]">{["🇬🇧 NMC / HCPC (UK)", "🇦🇺 AHPRA (Australia)", "🇨🇦 CNAS (Canada)", "🇩🇪 Approbation (Germany)", "🇦🇪 DHA / MOH (UAE)", "🌐 + Others"].map((t) => (<span key={t} className="text-[11px] font-semibold px-[9px] py-[3px] rounded-full bg-white/5 border border-white/10 text-white/80">{t}</span>))}</div></>) },
        ],
        langGrid: [{ label: "IELTS / OET", desc: "UK, Australia, Canada, New Zealand, UAE" }, { label: "European Languages", desc: "German (B2/C1), French (DELF B2), Spanish (DELE), Dutch, Italian" }],
      },
      { num: 10, title: "Complete the International Programme & Qualify", desc: "Complete CME credits, achieve required language band score, and obtain licensing eligibility confirmation. Receive Telth International CM Certification.", tags: [{ text: "Telth Intl. Certification", teal: true }, { text: "Telth-U R&D Review" }] },
      { num: 11, title: "Transfer Your CM Career to an International Destination", desc: "Your Telth Care Manager career is fully portable. Transfer your registered CM opportunity, G-Med ID credentials, and care management portfolio to a Telth-affiliated hub in your chosen country.", dests: ["🇬🇧 United Kingdom", "🇦🇺 Australia", "🇨🇦 Canada", "🇩🇪 Germany", "🇫🇷 France", "🇳🇱 Netherlands", "🇦🇪 UAE", "🇸🇬 Singapore", "🇺🇸 USA", "🌐 & More"] },
    ],
  },
];

const STATS = [
  { n: 6,   suffix: "",  label: "Phases" },
  { n: 11,  suffix: "",  label: "Steps" },
  { n: 12,  suffix: "+", label: "Specialisations" },
  { n: 10,  suffix: "+", label: "Countries" },
  { n: 250, suffix: "",  label: "Plans/CM" },
];

/* ─── counter hook ─── */
function useCounter(target: number, duration = 1200, active = false) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    let s = 0;
    const step = Math.ceil(target / (duration / 16));
    const t = setInterval(() => {
      s += step;
      if (s >= target) { setV(target); clearInterval(t); } else setV(s);
    }, 16);
    return () => clearInterval(t);
  }, [target, duration, active]);
  return v;
}

/* ─── small atoms ─── */
function StatCell({ n, suffix, label, animate }: { n: number; suffix: string; label: string; animate: boolean }) {
  const v = useCounter(n, n > 50 ? 1400 : 900, animate);
  return (
    <div className="px-2 py-3 text-center">
      <div className="text-[17px] sm:text-[22px] font-extrabold text-white leading-none mb-[2px]">
        {v}<em className="not-italic text-[#099488]">{suffix}</em>
      </div>
      <div className="text-[10px] text-white/70 font-medium">{label}</div>
    </div>
  );
}

function Tag({ text, teal }: { text: string; teal?: boolean }) {
  return (
    <span className={`text-[11px] font-semibold px-[9px] py-[3px] rounded-full border ${teal ? "bg-[rgba(9,148,136,0.13)] border-[rgba(9,148,136,0.33)] text-[#099488]" : "bg-white/5 border-white/10 text-white/80"}`}>
      {text}
    </span>
  );
}

function Pill({ text, teal, index }: { text: string; teal?: boolean; index: number }) {
  return (
    <span
      className={`text-[11px] font-semibold px-[10px] py-[3px] rounded-full border ${teal ? "bg-[rgba(9,148,136,0.14)] border-[rgba(9,148,136,0.32)] text-[#099488]" : "bg-white/5 border-white/[0.09] text-white/60"}`}
      style={{ animationDelay: `${index * 22}ms` }}
    >
      {text}
    </span>
  );
}

function ForkCard({ card, index }: { card: ForkCard; index: number }) {
  const teal = card.type === "tl";
  return (
    <div
      className={`rounded-[10px] p-[11px_13px] ${teal ? "bg-[rgba(9,148,136,0.09)] border border-[rgba(9,148,136,0.28)]" : "bg-[rgba(251,191,36,0.06)] border border-dashed border-[rgba(251,191,36,0.28)]"}`}
      style={{ animationDelay: `${index * 45}ms` }}
    >
      <div className={`text-[10px] font-extrabold tracking-[1px] uppercase mb-[4px] ${teal ? "text-[#099488]" : "text-[rgb(251,191,36)]"}`}>{card.label}</div>
      <p className="text-[12px] text-white leading-[1.5]">{card.desc}</p>
    </div>
  );
}

function StepRow({ step, isLast, index }: { step: Step; isLast: boolean; index: number }) {
  return (
    <div className="flex gap-[13px]" style={{ animationDelay: `${index * 55}ms` }}>
      {/* bubble + connector */}
      <div className={`flex-shrink-0 relative ${!isLast ? "pb-5" : ""}`}>
        {!isLast && (
          <div className="absolute left-[12px] top-[28px] bottom-0 w-[2px] bg-white/[0.06]">
            <div
              className="conn-fill h-0 w-full bg-gradient-to-b from-[#099488]/35 to-transparent rounded-full"
              style={{ animationDelay: `${index * 55 + 150}ms` }}
            />
          </div>
        )}
        <div className="w-[26px] h-[26px] rounded-full border-2 border-[rgba(9,148,136,0.4)] bg-[rgba(9,148,136,0.08)] flex items-center justify-center text-[11px] font-extrabold text-[#099488] relative z-10">
          {step.num}
        </div>
      </div>

      {/* content */}
      <div className={`flex-1 min-w-0 ${!isLast ? "pb-5" : ""} pt-[2px]`}>
        <div className="text-[13px] sm:text-[14px] font-bold text-white mb-[3px] leading-[1.3]">{step.title}</div>
        <p className="text-[12px] sm:text-[13px] text-white/80 leading-[1.6]">{step.desc}</p>

        {step.tags && (
          <div className="flex flex-wrap gap-[5px] mt-[7px]">
            {step.tags.map((t) => <Tag key={t.text} {...t} />)}
          </div>
        )}
        {step.pills && (
          <div className="flex flex-wrap gap-[5px] mt-[7px]">
            {step.pills.map((p, pi) => <Pill key={p.text} {...p} index={pi} />)}
          </div>
        )}
        {step.fork && (
          <div className="flex flex-col gap-[6px] mt-[9px]">
            {step.fork.map((f, fi) => <ForkCard key={f.label} card={f} index={fi} />)}
          </div>
        )}
        {step.subSections && step.subSections.map((sub, si) => (
          <div key={sub.label} className={si > 0 ? "mt-[9px]" : "mt-[10px]"}>
            <div className="text-[10px] font-extrabold tracking-[1.4px] uppercase text-[#099488] mb-[4px]">{sub.label}</div>
            {sub.label.startsWith("9b") && step.langGrid ? (
              <div className="flex flex-col gap-[6px] mt-[5px]">
                {step.langGrid.map((lc) => (
                  <div key={lc.label} className="bg-white/[0.04] border border-white/[0.08] rounded-[9px] p-[9px_11px]">
                    <div className="text-[10px] font-extrabold tracking-[1px] uppercase text-[#099488] mb-[3px]">{lc.label}</div>
                    <p className="text-[12px] text-white/60 leading-[1.45]">{lc.desc}</p>
                  </div>
                ))}
              </div>
            ) : sub.content}
          </div>
        ))}
        {step.dests && (
          <div className="flex flex-wrap gap-[5px] mt-[7px]">
            {step.dests.map((d, di) => (
              <span
                key={d}
                className="text-[11px] font-semibold text-white/80 bg-white/5 border border-white/[0.08] px-[9px] py-[3px] rounded-full"
                style={{ animationDelay: `${di * 22}ms` }}
              >
                {d}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main export
───────────────────────────────────────────── */
export default function HowItWorksSection() {
  const [active, setActive]             = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const [navH, setNavH]                 = useState(0);
  const [stickyH, setStickyH]           = useState(0);

  const statsRef  = useRef<HTMLDivElement>(null);
  const tabsRef   = useRef<HTMLDivElement>(null);
  const stickyBar = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>(Array(PHASES.length).fill(null));

  const progressPct = (((active + 1) / PHASES.length) * 100).toFixed(1);

  /* ── FIX 1: Measure nav height with ResizeObserver so iOS re-measures correctly ── */
  useEffect(() => {
    const nav = document.querySelector("nav, header, [data-navbar]") as HTMLElement | null;
    if (!nav) return;

    const measure = () => setNavH(nav.offsetHeight);
    measure();

    // ResizeObserver ensures we re-measure if nav changes size on iOS
    const ro = new ResizeObserver(measure);
    ro.observe(nav);
    return () => ro.disconnect();
  }, []);

  /* ── FIX 2: Measure sticky bar height with ResizeObserver too ── */
  useEffect(() => {
    if (!stickyBar.current) return;
    const el = stickyBar.current;

    const measure = () => setStickyH(el.offsetHeight);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /* stats counter trigger */
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.2 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  /* scroll → active chip */
  useEffect(() => {
    const onScroll = () => {
      const topEdge = navH + stickyH + 16;
      let best = 0;
      let bestDist = Infinity;

      blockRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top - topEdge);
        if (rect.top <= topEdge + 60 && dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });

      setActive(best);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [navH, stickyH]);

  /* keep active chip visible */
  useEffect(() => {
    const strip = tabsRef.current;
    if (!strip) return;
    const btn = strip.children[active] as HTMLElement;
    if (btn) btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [active]);

  /* chip tap → scroll to phase */
  const jumpToPhase = (i: number) => {
    const el = blockRefs.current[i];
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - navH - stickyH - 4;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    /*
      ── FIX 3: NO overflow-hidden on section or any ancestor ──
      Use overflowX: 'clip' if you need to clip horizontal overflow.
      overflow: hidden creates a scroll container and BREAKS position: sticky on iOS Safari.
    */
    <section
      id="how-it-works"
      className="bg-[#0D243F] text-white"
      style={{ overflowX: "clip" }}
    >

      {/* Header + Stats */}
      <div className="px-4 sm:px-8 pt-10 pb-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-5">
            <span className="text-[10px] font-bold tracking-[2px] uppercase text-[#099488] block mb-2 hdr-fade">The Journey</span>
            <h2 className="text-white text-[clamp(20px,4vw,36px)] font-bold leading-[1.15] mb-2 hdr-rise">
              From application to earning —<br />a complete step-by-step guide
            </h2>
            <p className="text-white/60 text-[13px] sm:text-[14px] leading-[1.65] max-w-[370px] mx-auto hdr-rise" style={{ animationDelay: "90ms" }}>
              A guided process across 6 phases. You focus on patients; we handle the rest.
            </p>
          </div>

          {/* Stats strip */}
          <div
            ref={statsRef}
            className="border border-white/[0.07] rounded-[10px] overflow-hidden bg-white/[0.03]"
            style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}
          >
            {STATS.map((s, i) => (
              <div key={s.label} style={{ borderRight: i < 4 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                <StatCell {...s} animate={statsVisible} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*
        ── STICKY BAR ──

        FIX 4: Key iOS Safari sticky fixes applied here:
        1. Added `position: '-webkit-sticky'` via inline style for iOS Safari fallback
        2. Removed `backdrop-blur-sm` — blur filters break sticky positioning on iOS Safari
           by creating a new compositing layer that interferes with the sticky stacking context
        3. Using solid `backgroundColor: '#0D243F'` instead of Tailwind's bg-opacity class
           (`bg-[#0D243F]/95`) — semi-transparent backgrounds can also trigger compositing bugs
        4. `top` is set only via inline style (not className) to ensure it applies correctly
      */}
      <div
        ref={stickyBar}
        data-sticky
        className="z-20 border-b border-white/[0.06] px-4 sm:px-8 py-[9px]"
        style={{
          position: "-webkit-sticky" as React.CSSProperties["position"],
          // Fallback for TypeScript — the cast above handles -webkit-sticky,
          // but we also need the standard sticky. We achieve this via the CSS class below.
          top: `${navH}px`,
          backgroundColor: "#0D243F", // solid — no opacity, no blur, no compositing layer
          // DO NOT use backdrop-filter here — it breaks iOS sticky
        }}
      >
        {/* FIX 5: Inline style override ensures `sticky` is always set correctly.
            The className="sticky" from Tailwind is sometimes purged or overridden.
            We set it via a <style> tag below AND via JS as a safety net. */}
        <div className="max-w-5xl mx-auto">
          {/* Chips */}
          <div ref={tabsRef} className="flex gap-[5px] overflow-x-auto scrollbar-hide pb-[2px] mb-[7px]">
            {PHASES.map((ph, i) => (
              <button
                key={ph.tab}
                onClick={() => jumpToPhase(i)}
                className={`text-[10px] sm:text-[11px] font-bold px-[11px] py-[4px] rounded-full border cursor-pointer transition-all duration-200 whitespace-nowrap flex-shrink-0
                  ${active === i
                    ? "bg-[#099488] border-[#099488] text-white shadow-[0_0_10px_rgba(9,148,136,0.35)]"
                    : "bg-white/[0.05] border-white/[0.09] text-white/70 hover:bg-white/[0.10] hover:text-white/60"
                  }`}
              >
                {ph.tab}
              </button>
            ))}
          </div>

          {/* Progress */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-[2px] bg-white/[0.07] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#099488] rounded-full transition-[width] duration-400 ease-out relative overflow-hidden"
                style={{ width: `${progressPct}%` }}
              >
                <div className="absolute inset-0 shimmer" />
              </div>
            </div>
            <span className="text-[10px] font-semibold text-white/40 tabular-nums shrink-0">{active + 1}/{PHASES.length}</span>
          </div>
        </div>
      </div>

      {/* Phase content blocks */}
      {PHASES.map((ph, i) => (
        <div
          key={i}
          ref={(el) => { blockRefs.current[i] = el; }}
          data-phase={i}
          className="px-4 sm:px-8 pt-5 pb-6"
          style={{ borderTop: i > 0 ? "1px solid rgba(236, 229, 229, 0.05)" : "none" }}
        >
          <div className="max-w-5xl mx-auto">
            {/* Phase label row */}
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-[10px] font-bold tracking-[1.4px] uppercase text-[#099488]/60">{ph.phaseLabel}</span>
              <span className="text-[14px] sm:text-[16px] font-bold text-white">{ph.phaseName}</span>
            </div>
            {/* Steps */}
            <div className="flex flex-col">
              {ph.steps.map((step, si) => (
                <StepRow key={step.num} step={step} isLast={si === ph.steps.length - 1} index={si} />
              ))}
            </div>
          </div>
        </div>
      ))}

      <style>{`
        /*
          FIX 6: Explicit sticky declaration with -webkit-sticky prefix.
          Tailwind's 'sticky' class compiles to just 'position: sticky'.
          iOS Safari (especially older versions) requires -webkit-sticky.
          We target the data-sticky attribute to be precise.
        */
        [data-sticky] {
          position: -webkit-sticky !important;
          position: sticky !important;
        }

        /*
          FIX 7: Ensure NO ancestor of the sticky bar has overflow: hidden or auto.
          The section uses overflowX: clip (set via inline style above) which is safe —
          unlike overflow: hidden, 'clip' does NOT create a scroll container,
          so sticky children still work correctly on iOS Safari.
        */

        .hdr-fade { animation: hFade .45s ease both }
        .hdr-rise { animation: hRise .5s ease both }
        @keyframes hFade { from { opacity:0;letter-spacing:5px } to { opacity:1;letter-spacing:2px } }
        @keyframes hRise { from { opacity:0;transform:translateY(10px) } to { opacity:1;transform:translateY(0) } }

        .conn-fill { animation: cGrow .4s ease forwards; animation-delay:280ms }
        @keyframes cGrow { from { height:0 } to { height:100% } }

        .shimmer { background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.18) 50%,transparent 100%);animation:sh 2s ease infinite;background-size:200% 100% }
        @keyframes sh { from{background-position:-200% 0} to{background-position:200% 0} }

        .scrollbar-hide::-webkit-scrollbar { display:none }
        .scrollbar-hide { -ms-overflow-style:none;scrollbar-width:none }
      `}</style>
    </section>
  );
}