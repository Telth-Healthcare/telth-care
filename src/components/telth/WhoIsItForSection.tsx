import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const profiles = [
  {
    role: "Nursing",
    title: "Registered Nurses",
    desc: "Flexible working, direct patient care — without hospital hierarchy or fixed shifts.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
  },
  {
    role: "Medicine",
    title: "MBBS Doctors",
    desc: "Expand your practice beyond the clinic and earn from multiple patient channels simultaneously.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
  },
  {
    role: "Pharmacy",
    title: "Pharmacists",
    desc: "Offer comprehensive home health reviews and medication management as a standalone service.",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831",
  },
  {
    role: "Diagnostics",
    title: "Lab Technicians",
    desc: "Conduct advanced point-of-care testing with AI-enabled devices — at any location.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
  },
  {
    role: "Community Care",
    title: "Social Workers",
    desc: "Focus on holistic patient well-being, follow-up care, and family support in the community.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b",
  },
  {
    role: "Practice Expansion",
    title: "Clinic Owners",
    desc: "Build a satellite network of CMs linked to your physicians and extend care beyond your walls.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
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

              {/* Image */}
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="w-full object-cover"
                style={{ aspectRatio: "3/2" }}
              />

              <div className="p-6">
                <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-primary mb-2">
                  {p.role}
                </div>

                <h3 className="text-foreground text-[18px] font-bold mb-2 leading-snug font-display">
                  {p.title}
                </h3>

                <p className="text-muted-foreground text-[14px] leading-relaxed">
                  {p.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}