import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  { n: "01", title: "Telth CM App", desc: "Manage all bookings, visit schedules, health reports, and earnings from one intuitive mobile app." },
  { n: "02", title: "HES Diagnostic Device", desc: "A compact AI-powered health examination device that runs 90+ parameters in under 15 minutes at any location." },
  { n: "03", title: "MedPass Training", desc: "Accredited care management training that qualifies you to deliver advanced data-driven care at home." },
  { n: "04", title: "Care Plans Library", desc: "Access Telth's full library of condition-specific plans — chronic, diabetic, cardiac, elder care, and more." },
  { n: "05", title: "Dedicated Support Team", desc: "A CM support team available for clinical queries, technical issues, and patient escalations whenever you need." },
  { n: "06", title: "Earnings Dashboard", desc: "Real-time visibility into your visit income, commissions, and monthly performance. No guesswork." },
];

export default function WhatTelthGivesSection() {
  const ref = useScrollAnimation();
  return (
    <section id="support" className="bg-background py-24">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[11px] font-bold tracking-[2px] uppercase text-primary">Full Support</span>
          <h2 className="text-foreground text-[36px] md:text-[42px] font-bold leading-[1.12] mt-3 mb-4 font-display">Everything you need to run your practice</h2>
          <p className="text-muted-foreground text-[17px] leading-[1.75] max-w-xl mx-auto">Telth doesn't just give you patients. It gives you the tools, training, and technology to operate with confidence.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <div key={item.n} className="bg-card rounded-2xl p-8 border border-border hover:border-primary hover:-translate-y-1 hover:shadow-lg transition-all group">
              <div className="text-primary/10 text-[38px] font-bold leading-none mb-4 group-hover:text-primary/30 transition-colors font-display">{item.n}</div>
              <h3 className="text-foreground text-[17px] font-bold mb-2 leading-snug font-display">{item.title}</h3>
              <p className="text-muted-foreground text-[14px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
