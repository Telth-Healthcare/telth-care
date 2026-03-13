import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  { q: "Do I need a medical degree to become a Care Manager?", a: "No MBBS degree is required. Telth accepts nurses, pharmacists, lab technicians, social workers, and health administrators. You must have a relevant healthcare qualification and complete Telth's MedPass certification training before your first patient visit." },
  { q: "What device does a Care Manager use, and who provides it?", a: "Telth provides the HES (Health Examination System) — a portable AI-powered diagnostic device that captures 90+ health parameters in under 15 minutes. Device terms and any deposit requirements are communicated during onboarding." },
  { q: "How do I receive payment for visits and services?", a: "All payments are tracked automatically through the Telth CM App. Visit fees, care plan commissions, medicine margins, and referral income are consolidated and transferred directly to your registered bank account on a regular payout cycle." },
  { q: "Can I work as a Care Manager part-time alongside my current job?", a: "Yes. Many Telth CMs start part-time — typically 4–6 hours a day — while maintaining other commitments. You set your own availability through the CM App and accept only the visits you choose." },
  { q: "Which cities is the programme available in?", a: "The programme is currently active in select metro and tier-1 cities across India. We are expanding rapidly — submit your application and we will notify you when your city goes live." },
  { q: "How long does training take before I can start seeing patients?", a: "MedPass certification training takes 2–4 weeks, combining online modules with practical hands-on sessions. After training and device activation, you can begin accepting patient visits immediately." },
];

interface FAQSectionProps {
  onApply: () => void;
}

export default function FAQSection({ onApply }: FAQSectionProps) {
  const [open, setOpen] = useState(0);
  const ref = useScrollAnimation();

  return (
    <section id="faq" className="bg-card py-24">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          <div className="md:sticky md:top-24 self-start">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-5 h-0.5 bg-primary rounded-full" />
              <span className="text-[11px] font-bold tracking-[2px] uppercase text-primary">Common Questions</span>
            </div>
            <h2 className="text-foreground text-[34px] font-bold leading-[1.15] mb-4 font-display">Still have questions?</h2>
            <p className="text-muted-foreground text-[15px] leading-[1.75] mb-7">We're happy to walk you through anything. Apply and our onboarding team will call you within 48 hours.</p>
            <button onClick={onApply} className="bg-primary text-primary-foreground font-bold text-[14px] px-6 py-3 rounded-xl hover:opacity-90 transition-colors cursor-pointer border-none">Apply Now</button>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => (
              <div key={i} className={`rounded-xl border overflow-hidden transition-colors ${open === i ? "border-primary" : "border-border"}`}>
                <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-transparent cursor-pointer border-none">
                  <span className={`text-[15px] font-semibold transition-colors ${open === i ? "text-primary" : "text-foreground"}`}>{f.q}</span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${open === i ? "bg-primary text-primary-foreground rotate-180" : "bg-secondary text-muted-foreground"}`}>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 12 12" fill="none">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-6 pb-5 text-[15px] text-muted-foreground leading-[1.75]">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
