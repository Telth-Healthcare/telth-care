"use client";

import { useState } from "react";

// ── Types ──────────────────────────────────────────────
interface ForkCard {
  type: "tl" | "am";          // tl = teal (govt), am = amber (self-funded)
  icon: string;
  label: string;
  desc: string;
}

interface LangCard {
  label: string;
  desc: string;
}

interface Step {
  num: number;
  title: string;
  desc: string;
  tags?: { text: string; teal?: boolean }[];
  pills?: { text: string; teal?: boolean }[];
  fork?: ForkCard[];
  subSections?: {
    label: string;
    content: React.ReactNode;
  }[];
  langGrid?: LangCard[];
  dests?: string[];
}

interface Phase {
  tab: string;
  icon: string;
  phaseLabel: string;
  phaseName: string;
  steps: Step[];
}

// ── Data ───────────────────────────────────────────────
const PHASES: Phase[] = [
  {
    tab: "01 — Apply",
    icon: "🖥️",
    phaseLabel: "Phase 01",
    phaseName: "Entry — Apply Online",
    steps: [
      {
        num: 1,
        title: "Apply Online",
        desc: "Submit your application at telth.care/careers — provide your academic credentials, identification, and a personal statement. Our team reviews and responds within 5 working days.",
        tags: [
          { text: "Online Application", teal: true },
          { text: "5-day Review" },
          { text: "telth.care/careers" },
        ],
      },
    ],
  },
  {
    tab: "02 — Qualify",
    icon: "🎓",
    phaseLabel: "Phase 02",
    phaseName: "Qualifying Checks",
    steps: [
      {
        num: 2,
        title: "Academic Qualification Review",
        desc: "Minimum eligibility verified: 10+2 or equivalent for General CM tracks; degree-level qualification for clinical specialisations (Phlebotomy, ENT, etc.). Transcripts and certificates reviewed by the Telth admissions panel.",
        tags: [
          { text: "10+2 Minimum" },
          { text: "Degree for Clinical Tracks" },
          { text: "Admissions Panel Review" },
        ],
      },
      {
        num: 3,
        title: "Funding Qualification",
        desc: "Determine your funding route — choose one of two pathways to proceed into training.",
        fork: [
          {
            type: "tl",
            icon: "🏦",
            label: "Skill India / NSDC",
            desc: "Eligible for government-funded training sponsorship. Proceed to funded training enrolment.",
          },
          {
            type: "am",
            icon: "💰",
            label: "Self-Funded",
            desc: "No funding application required — this step is bypassed. Proceed directly to training selection.",
          },
        ],
      },
    ],
  },
  {
    tab: "03 — Train",
    icon: "🏫",
    phaseLabel: "Phase 03",
    phaseName: "Training Programme",
    steps: [
      {
        num: 4,
        title: "Skill India / NSDC Accredited Training — Choose Your Specialisation",
        desc: "Select the clinical or care specialisation matching your background and career goals. Training delivered through Telth-accredited Skill India / NSDC centres.",
        pills: [
          { text: "Telehealth & General", teal: true },
          { text: "Phlebotomy" },
          { text: "ENT Assistance" },
          { text: "Radiology Assistance" },
          { text: "Dental Assistance" },
          { text: "Physiotherapy Support" },
          { text: "Ophthalmic Assistance" },
          { text: "Community Health Worker" },
          { text: "Cosmetology / Grooming" },
          { text: "Elder Care" },
          { text: "Paediatric Care" },
          { text: "+ Other Fields" },
        ],
      },
      {
        num: 5,
        title: "Telehealth Technology & Device Training",
        desc: "Hands-on training on Telth's full technology ecosystem: TWBAN device operation, G-Med ID data entry, DigiDoc interface, remote monitoring devices, wearables, biosensors, and point-of-care diagnostics. Includes Telth AI Hub platform certification.",
        tags: [
          { text: "TWBAN Device", teal: true },
          { text: "G-Med ID", teal: true },
          { text: "DigiDoc", teal: true },
          { text: "AI Hub Certification", teal: true },
        ],
      },
      {
        num: 6,
        title: "Business & Public Relations Training",
        desc: "Professional development covering care plan management, client communication, community outreach, Health Pay Care Plan facilitation, ethical standards, and Telth brand ambassadorship. Includes digital literacy and patient engagement skills.",
        tags: [
          { text: "Care Plan Management" },
          { text: "Health Pay" },
          { text: "Patient Engagement" },
          { text: "Digital Literacy" },
        ],
      },
    ],
  },
  {
    tab: "04 — Assess",
    icon: "📝",
    phaseLabel: "Phase 04",
    phaseName: "Assessment & Certification",
    steps: [
      {
        num: 7,
        title: "Complete the Final Assessment",
        desc: "Comprehensive exit assessment covering clinical knowledge, technology proficiency, care plan management, and professional conduct. Includes written examination, practical skills evaluation, and simulated patient interaction scenario. Minimum pass mark: 70%. One retake available.",
        tags: [
          { text: "70% Pass Mark", teal: true },
          { text: "Written + Practical" },
          { text: "Patient Simulation" },
          { text: "1 Retake Allowed" },
        ],
      },
    ],
  },
  {
    tab: "05 — Enrol",
    icon: "🏥",
    phaseLabel: "Phase 05",
    phaseName: "Enrolment & Career Launch",
    steps: [
      {
        num: 8,
        title: "Enrol as a Care Manager & Start Your Practice",
        desc: "Officially registered in the Telth Care Manager Network. Assigned to a Telth AI Health Hub under a Collaborative Care Manager. Begin managing your portfolio of care plans — Preventive & Primary (up to 250/month), Personalised Longevity, Elite, VVIP, Paediatric/Gynaecology/Elder Care, and Grooming/Cosmetology tracks. Full access to DigiDoc, G-Med ID, and the Telth ecosystem.",
        tags: [
          { text: "Telth CM Network", teal: true },
          { text: "AI Health Hub Assigned", teal: true },
          { text: "G-Med ID", teal: true },
          { text: "DigiDoc & Ecosystem", teal: true },
        ],
      },
    ],
  },
  {
    tab: "06 — Go Global",
    icon: "✈️",
    phaseLabel: "Phase 06 — Optional",
    phaseName: "International Pathway",
    steps: [
      {
        num: 9,
        title: "CME, Language Qualification & Destination Licensing",
        desc: "Three concurrent tracks to complete in parallel before your international transfer.",
        subSections: [
          {
            label: "9a — Continuing Medical Education",
            content: (
              <p className="text-[15px] text-white/48 leading-[1.75]">
                Accredited CME covering advanced clinical topics, longevity science, AI health technology, and evidence-based care practices. Credits accumulate towards international licensing requirements.
              </p>
            ),
          },
          {
            label: "9b — Language Qualification",
            content: null, // rendered via langGrid below
          },
          {
            label: "9c — Destination Licensing",
            content: (
              <>
                <p className="text-[15px] text-white/48 leading-[1.75] mb-3">
                  Telth provides documentation support and accredited training records for regulatory registration.
                </p>
                <div className="flex flex-wrap gap-[7px]">
                  {["🇬🇧 NMC / HCPC (UK)", "🇦🇺 AHPRA (Australia)", "🇨🇦 CNAS (Canada)", "🇩🇪 Approbation (Germany)", "🇦🇪 DHA / MOH (UAE)", "🌐 + Others"].map((t) => (
                    <span key={t} className="text-[12px] font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/38">{t}</span>
                  ))}
                </div>
              </>
            ),
          },
        ],
        langGrid: [
          { label: "IELTS / OET", desc: "UK, Australia, Canada, New Zealand, UAE" },
          { label: "European Languages", desc: "German (B2/C1), French (DELF B2), Spanish (DELE), Dutch, Italian" },
        ],
      },
      {
        num: 10,
        title: "Complete the International Programme & Qualify",
        desc: "Complete CME credits, achieve required language band score, and obtain licensing eligibility confirmation. Receive Telth International CM Certification — reviewed by Telth-U R&D and the Collaborative Care Manager network.",
        tags: [
          { text: "Telth Intl. Certification", teal: true },
          { text: "Telth-U R&D Review" },
        ],
      },
      {
        num: 11,
        title: "Transfer Your CM Career to an International Destination",
        desc: "Your Telth Care Manager career is fully portable. Transfer your registered CM opportunity, G-Med ID credentials, and care management portfolio to a Telth-affiliated hub in your chosen country. End-to-end relocation support, visa guidance, and host-country onboarding assistance provided.",
        dests: ["🇬🇧 United Kingdom", "🇦🇺 Australia", "🇨🇦 Canada", "🇩🇪 Germany", "🇫🇷 France", "🇳🇱 Netherlands", "🇦🇪 UAE", "🇸🇬 Singapore", "🇺🇸 USA", "🌐 & More"],
      },
    ],
  },
];

const STATS = [
  { n: "6",    suffix: "",  label: "Phases" },
  { n: "11",   suffix: "",  label: "Steps total" },
  { n: "12",   suffix: "+", label: "Specialisations" },
  { n: "10",   suffix: "+", label: "Countries" },
  { n: "250",  suffix: "",  label: "Plans/CM/month" },
];

// ── Sub-components ─────────────────────────────────────

/** Small teal or muted tag pill */
function Tag({ text, teal }: { text: string; teal?: boolean }) {
  return (
    <span
      className={`text-[12px] font-semibold px-3 py-1 rounded-full border ${
        teal
          ? "bg-[rgba(9,148,136,0.13)] border-[rgba(9,148,136,0.33)] text-[#099488]"
          : "bg-white/5 border-white/10 text-white/38"
      }`}
    >
      {text}
    </span>
  );
}

/** Specialisation pill (slightly larger) */
function Pill({ text, teal }: { text: string; teal?: boolean }) {
  return (
    <span
      className={`text-[13px] font-semibold px-[14px] py-[5px] rounded-full border ${
        teal
          ? "bg-[rgba(9,148,136,0.14)] border-[rgba(9,148,136,0.32)] text-[#099488]"
          : "bg-white/5 border-white/[0.09] text-white/52"
      }`}
    >
      {text}
    </span>
  );
}

/** Funding fork card — teal (govt) or amber (self) */
function ForkCardEl({ card }: { card: ForkCard }) {
  const isTeal = card.type === "tl";
  return (
    <div
      className={`rounded-[13px] p-[16px_18px] ${
        isTeal
          ? "bg-[rgba(9,148,136,0.09)] border border-[rgba(9,148,136,0.28)]"
          : "bg-[rgba(251,191,36,0.06)] border border-dashed border-[rgba(251,191,36,0.28)]"
      }`}
    >
      <div
        className={`text-[11px] font-extrabold tracking-[1px] uppercase mb-[7px] ${
          isTeal ? "text-[#099488]" : "text-[rgb(251,191,36)]"
        }`}
      >
        {card.icon} {card.label}
      </div>
      <p className="text-[13.5px] text-white/42 leading-[1.6]">{card.desc}</p>
    </div>
  );
}

/** Single numbered step row */
function StepRow({ step, isLast }: { step: Step; isLast: boolean }) {
  return (
    <div className="flex gap-[22px]">
      {/* Spine with number circle + connector line */}
      <div className={`flex-shrink-0 relative ${!isLast ? "pb-10" : ""}`}>
        {/* Vertical connector line — hidden on last step */}
        {!isLast && (
          <div className="absolute left-[19px] top-[42px] bottom-0 w-[2px] bg-white/6" />
        )}
        <div className="w-10 h-10 rounded-full border-2 border-[rgba(9,148,136,0.4)] bg-[rgba(9,148,136,0.08)] flex items-center justify-center text-[14px] font-extrabold text-[#099488] relative z-10 group-hover:border-[#099488] group-hover:bg-[rgba(9,148,136,0.2)] transition-all">
          {step.num}
        </div>
      </div>

      {/* Body */}
      <div className={`flex-1 ${!isLast ? "pb-10" : ""} pt-[7px] group`}>
        <div className="text-[17px] font-bold text-white mb-2 leading-[1.3]">{step.title}</div>
        <p className="text-[15px] text-white/48 leading-[1.75]">{step.desc}</p>

        {/* Tags */}
        {step.tags && (
          <div className="flex flex-wrap gap-[7px] mt-3">
            {step.tags.map((t) => <Tag key={t.text} {...t} />)}
          </div>
        )}

        {/* Specialisation pills */}
        {step.pills && (
          <div className="flex flex-wrap gap-2 mt-[14px]">
            {step.pills.map((p) => <Pill key={p.text} {...p} />)}
          </div>
        )}

        {/* Funding fork */}
        {step.fork && (
          <div className="grid grid-cols-2 gap-[10px] mt-4 sm:grid-cols-1 md:grid-cols-2">
            {step.fork.map((f) => <ForkCardEl key={f.label} card={f} />)}
          </div>
        )}

        {/* Sub-sections (9a / 9b / 9c) */}
        {step.subSections && step.subSections.map((sub, si) => (
          <div key={sub.label} className={si > 0 ? "mt-4" : "mt-[18px]"}>
            {/* Teal sub-label */}
            <div className="text-[11px] font-extrabold tracking-[1.5px] uppercase text-[#099488] mb-[7px]">
              {sub.label}
            </div>

            {/* 9b language grid inserted inline */}
            {sub.label.startsWith("9b") && step.langGrid ? (
              <div className="grid grid-cols-2 gap-[10px] mt-[10px] sm:grid-cols-1 md:grid-cols-2">
                {step.langGrid.map((lc) => (
                  <div key={lc.label} className="bg-white/4 border border-white/[0.09] rounded-xl p-[14px_16px]">
                    <div className="text-[11px] font-extrabold tracking-[1px] uppercase text-[#099488] mb-[5px]">{lc.label}</div>
                    <p className="text-[13.5px] text-white/42 leading-[1.55]">{lc.desc}</p>
                  </div>
                ))}
              </div>
            ) : (
              sub.content
            )}
          </div>
        ))}

        {/* Destination flags */}
        {step.dests && (
          <div className="flex flex-wrap gap-2 mt-[14px]">
            {step.dests.map((d) => (
              <span key={d} className="flex items-center gap-[6px] text-[13px] font-semibold text-white/62 bg-white/5 border border-white/[0.09] px-[14px] py-[6px] rounded-full">
                {d}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main Export ────────────────────────────────────────
export default function HowItWorksSection() {
  const [active, setActive] = useState(0);          // active phase index (0–5)

  const phase = PHASES[active];
  const progressPct = (((active + 1) / 6) * 100).toFixed(2); // e.g. "16.67"

  return (
    <section
      id="how-it-works"
      className="bg-[#0D243F] py-24 px-8"           // navy bg, generous vertical padding
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#099488] block mb-3">
            The Journey
          </span>
          <h2 className="text-white text-[clamp(30px,4vw,42px)] font-bold leading-[1.12] mb-4">
            From application to earning —<br />a complete step-by-step guide
          </h2>
          <p className="text-white/50 text-[17px] leading-[1.75] max-w-[460px] mx-auto">
            A guided process across 6 phases. You focus on patients; we handle the rest.
          </p>
        </div>

        {/* ── Stats strip — always 5 equal cols, never wraps ── */}
        <div
          className="border border-white/[0.07] rounded-[14px] overflow-hidden bg-white/[0.03] mb-[52px]"
          style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}   // inline → immune to Tailwind purge
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="px-4 py-[22px] text-center"
              style={{                                                          // borders via inline style — reliable
                borderRight: i < STATS.length - 1 ? "1px solid rgba(254, 254, 254, 0.07)" : "none",
              }}
            >
              <div className="text-[30px] font-extrabold text-white leading-none mb-[5px]">
                {s.n}
                {s.suffix && <em className="not-italic text-[#099488]">{s.suffix}</em>}
              </div>
              <div className="text-[12px] text-white/35 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Phase tab pills — single row, scroll on overflow ── */}
        <div className="flex gap-[6px] justify-center mb-5 overflow-x-auto pb-1 scrollbar-hide">
          {PHASES.map((ph, i) => (
            <button
              key={ph.tab}
              onClick={() => setActive(i)}
              className={`text-[12px] font-bold px-[18px] py-[7px] rounded-full border cursor-pointer transition-all whitespace-nowrap flex-shrink-0 ${
                active === i
                  ? "bg-[#099488] border-[#099488] text-white"           // active: teal filled
                  : "bg-white/[0.06] border-white/10 text-white/45 hover:bg-white/[0.11] hover:text-white/80"
              }`}
            >
              {ph.tab}
            </button>
          ))}
        </div>

        {/* ── Progress bar — full width, label floats right ── */}
        <div className="flex items-center gap-3 w-full mb-12">
          <div className="flex-1 h-[3px] bg-white/[0.08] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#099488] rounded-full transition-[width] duration-[400ms]"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <span className="text-[12px] font-semibold text-white/30 whitespace-nowrap">
            Phase {active + 1} of 6
          </span>
        </div>

        {/* ── Active phase panel ── */}
        <div
          key={active}                               // re-mounts on tab change → CSS fade-in
          className="animate-[fadeUp_0.25s_ease]"
        >
          {/* Phase header */}
          <div className="flex items-center gap-[14px] mb-9">
            <div className="w-12 h-12 rounded-xl bg-white/6 border border-white/10 flex items-center justify-center text-[22px] flex-shrink-0">
              {phase.icon}
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/28 mb-[3px]">
                {phase.phaseLabel}
              </div>
              <div className="text-[20px] font-bold text-white">{phase.phaseName}</div>
            </div>
          </div>

          {/* Steps */}
          <div className="flex flex-col text-white">
            {phase.steps.map((step, si) => (
              <StepRow
                key={step.num}
                step={step}
                isLast={si === phase.steps.length - 1}  // no line after final step
              />
            ))}
          </div>
        </div>

      </div>

      {/* Keyframe for panel fade-in — injected once via <style> */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}