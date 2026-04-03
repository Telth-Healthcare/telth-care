import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const profiles = [
  {
    title: "10+2 Science Students",
    description: "Aspiring healthcare entrants. Start your career in community care with zero prior clinical experience — Telth trains you from the ground up.",
    tag: "Entry Level",
  },
  {
    title: "Diploma Holders",
    description: "Nursing diploma, DMLT, paramedic, or health assistant graduates looking to practise independently with full technological support.",
    tag: "Diploma / Certificate",
  },
  {
    title: "Registered Nurses",
    description: "GNM or BSc Nursing qualified? Build a flexible, independent care practice. Earn ₹30–80K/month on your own schedule.",
    tag: "GNM / BSc Nursing",
  },
  {
    title: "Pharmacists",
    description: "D.Pharm or B.Pharm holders who want to extend beyond dispensing — deliver diagnostics, care plans, and chronic disease management.",
    tag: "D.Pharm / B.Pharm",
  },
  {
    title: "Doctors & MBBS",
    description: "Qualified physicians who want to lead a networked community care model, supervise CMs, and deliver P3DSC-powered care.",
    tag: "MBBS / MD",
  },
  {
    title: "Clinic & Hospital Owners",
    description: "Extend your facility's reach into the community. Deploy Care Managers under your brand using Telth's full ecosystem.",
    tag: "Operator",
  },
];

export default function WhoIsItForSection() {
  const ref = useScrollAnimation();

  return (
    <section id="who" className="bg-background py-24">
      <div ref={ref} className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-[11px] font-bold tracking-[2px] uppercase text-primary">
            Is This For You?
          </span>

          <h2 className="text-foreground text-[36px] md:text-[42px] font-bold leading-[1.12] mb-4 font-display mt-3">
            Who becomes a Telth Care Manager?
          </h2>

          <p className="text-muted-foreground text-[17px] leading-[1.75] max-w-xl mx-auto">
            If you have a healthcare background and want the freedom to work independently, Telth is built for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {profiles.map((p, i) => (
            <div
              key={p.title}
              className={`bg-card rounded-2xl overflow-hidden border border-border hover:border-primary hover:-translate-y-1.5 hover:shadow-xl transition-all duration-200 group stagger-${i + 1}`}
            >
              <div className="p-6">
                <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-primary mb-2">
                  {p.tag}
                </div>

                <h3 className="text-foreground text-[18px] font-bold mb-2 leading-snug font-display">
                  {p.title}
                </h3>

                <p className="text-muted-foreground text-[14px] leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}