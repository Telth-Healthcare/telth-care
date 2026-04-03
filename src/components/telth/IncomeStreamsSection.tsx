import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import inCmmImg from "../../assets/IN a day -1.png";

const streams = [
  { title: "Per-Visit Fee", desc: "Earn ₹150–250 per home visit. The more patients you serve, the higher your base income every month.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> },
  { title: "Care Plan Sales", desc: "Recommend and sell Telth's personalised care plans. Each plan earns you a recurring monthly commission.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg> },
  { title: "Medicine Delivery", desc: "Facilitate e-pharmacy orders for patients. Earn a margin on every prescription fulfilled through Telth.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /></svg> },
  { title: "Wearable Device Sales", desc: "Sell Telth's IoMT monitoring devices — glucose monitors, BP trackers — to patients who need continuous care.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 3H8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z" /></svg> },
  { title: "Referral Income", desc: "Refer patients to specialists, hospitals, or labs through the Telth network and earn per successful referral.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg> },
  { title: "Health Insurance Facilitation", desc: "Help patients enrol in Telth-partnered insurance plans and earn a facilitation commission on every policy.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
];

export default function IncomeStreamsSection() {
  const ref = useScrollAnimation();

  return (
    <section id="income" className="bg-card py-24">
      <div ref={ref} className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Image */}
          <div className="md:sticky md:top-24">
            <img
              src={inCmmImg}
              alt="Care manager checking earnings dashboard"
              loading="lazy"
              className="w-full rounded-2xl object-cover"
              style={{ aspectRatio: "3/4" }}
            />
          </div>

          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-5 h-0.5 bg-primary rounded-full" />
              <span className="text-[11px] font-bold tracking-[2px] uppercase text-primary">
                Revenue Streams
              </span>
            </div>

            <h2 className="text-foreground text-[36px] md:text-[40px] font-bold leading-[1.12] mb-4 font-display">
              6 ways you earn as a Care Manager
            </h2>

            <p className="text-muted-foreground text-[16px] leading-[1.75] mb-2">
              Your income isn't capped at visit fees. Every service you deliver opens a new revenue channel.
            </p>

            <div className="flex flex-col divide-y divide-border">
              {streams.map((s) => (
                <div key={s.title} className="flex gap-5 items-start py-6 group">
                  <div className="w-11 h-11 bg-telth-teal-light rounded-xl flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    {s.icon}
                  </div>

                  <div>
                    <h4 className="text-foreground text-[15px] font-bold mb-1.5">
                      {s.title}
                    </h4>

                    <p className="text-muted-foreground text-[14px] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}