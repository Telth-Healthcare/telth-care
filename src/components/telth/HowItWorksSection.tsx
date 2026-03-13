import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { n: "01", pill: "Apply", title: "Apply Online", desc: "Submit a short 5-step application. Our team reviews and responds within 48 hours." },
  { n: "02", pill: "Train", title: "MedPass Certification", desc: "Complete Telth's accredited care management training — online modules and practical sessions." },
  { n: "03", pill: "Activate", title: "Device & App Setup", desc: "Receive your Telth HES device, activate the CM App, and complete a supervised first visit." },
  { n: "04", pill: "Earn", title: "Start Your Practice", desc: "Accept visits, run health assessments, recommend care plans — every service pays you directly." },
];

export default function HowItWorksSection() {
  const ref = useScrollAnimation();
  return (
    <section id="how-it-works" className="bg-telth-navy py-24">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[11px] font-bold tracking-[2px] uppercase text-primary">The Journey</span>
          <h2 className="text-white text-[36px] md:text-[42px] font-bold leading-[1.12] mt-3 mb-4 font-display">From application to earning — in 4 steps</h2>
          <p className="text-white/50 text-[17px] leading-[1.75] max-w-lg mx-auto">A guided process. You focus on patients; we handle the rest.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {steps.map((s) => (
            <div key={s.n} className="bg-telth-navy px-7 py-9 hover:bg-teal-900/30 transition-colors group border-r border-white/[0.06] last:border-r-0">
              <div className="text-white/[0.07] text-[52px] font-bold leading-none mb-6 group-hover:text-teal-800/50 transition-colors font-display">{s.n}</div>
              <div className="inline-block text-[11px] font-bold tracking-[1.2px] uppercase text-primary bg-teal-900/40 px-3 py-1 rounded-full mb-4">{s.pill}</div>
              <h3 className="text-white text-[18px] font-bold mb-3 leading-snug font-display">{s.title}</h3>
              <p className="text-white/40 text-[14px] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
