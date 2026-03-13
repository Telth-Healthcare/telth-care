import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cards = [
  {
    mode: "Part-Time", desc: "Supplement your current income with 4–6 hours a day", amount: "30–40K", period: "per month", featured: false,
    rows: [{ label: "Daily visits (6–8) @ ₹150–250", val: "₹8–12K" }, { label: "Care plan sales", val: "₹5–8K" }, { label: "Medicine & Wearables", val: "₹2–4K" }, { label: "Referral income", val: "₹1–3K" }],
  },
  {
    mode: "Full-Time", desc: "Build your independent practice over 6–8 hours a day", amount: "60–80K", period: "per month", featured: true,
    rows: [{ label: "Daily visits (12–15) @ ₹150–250", val: "₹18–25K" }, { label: "Care plan sales", val: "₹15–20K" }, { label: "Medicine & Wearables", val: "₹5–8K" }, { label: "Referral income", val: "₹3–6K" }],
  },
];

export default function EarningsSection() {
  const ref = useScrollAnimation();
  return (
    <section id="earnings" className="bg-background py-24">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[11px] font-bold tracking-[2px] uppercase text-primary">Transparent Earnings</span>
          <h2 className="text-foreground text-[36px] md:text-[42px] font-bold leading-[1.12] mt-3 mb-4 font-display">Your earning potential</h2>
          <p className="text-muted-foreground text-[17px] leading-[1.75] max-w-md mx-auto">Two paths, both viable. Build the practice that fits your life.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((c) => (
            <div key={c.mode} className={`bg-card rounded-2xl p-10 border relative overflow-hidden transition-all hover:shadow-lg ${c.featured ? "border-primary/40" : "border-border"}`}>
              <div className={`absolute top-0 left-0 right-0 h-[3px] ${c.featured ? "bg-primary" : "bg-border"}`} />
              <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-muted-foreground mb-1.5">{c.mode}</div>
              <div className="text-muted-foreground text-[14px] mb-6">{c.desc}</div>
              <div className="text-foreground text-[52px] font-bold leading-none mb-1 font-display">
                <span className="text-[22px]">₹</span>{c.amount}
              </div>
              <div className="text-muted-foreground text-[13px] tracking-wide uppercase mb-8">{c.period}</div>
              <div className="h-px bg-border mb-5" />
              <div className="flex flex-col">
                {c.rows.map((r, i) => (
                  <div key={i} className="flex justify-between items-center py-2.5 border-b border-secondary last:border-b-0 text-[14px]">
                    <span className="text-muted-foreground">{r.label}</span>
                    <span className="font-semibold text-foreground">{r.val}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-amber-50 border-l-[3px] border-amber-400 rounded-r-xl px-6 py-4 text-[14px] text-amber-900 leading-relaxed">
          <strong className="font-bold">Note:</strong> A CM who sells 5 care plans, facilitates medicine delivery, and completes 3 referrals per week can earn ₹20,000–30,000 more per month on top of visit income — without seeing a single additional patient.
        </div>
        <p className="text-center mt-5 text-[12px] text-muted-foreground/50 leading-relaxed">
          Earnings vary by city, location, patient volume, care plan sales, and operational hours. Figures shown are indicative and based on active CMs in metro and tier-1 cities.
        </p>
      </div>
    </section>
  );
}
