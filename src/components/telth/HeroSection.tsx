import heroBanner from "../../assets/hero section.png";

interface HeroSectionProps {
  onApply: () => void;
}

export default function HeroSection({ onApply }: HeroSectionProps) {
  const stats = [
    { val: "90+", label: "Health parameters per visit" },
    { val: "15 min", label: "Average assessment time" },
    { val: "₹80K", label: "Top monthly earnings" },
  ];

  return (
    // HeroSection.tsx — key fix: no gradient overlay, true 50/50 flex split

<section className="relative overflow-hidden">

  {/* ── DESKTOP ── */}
  <div className="hidden lg:flex min-h-[calc(100vh-64px)]">

    {/* LEFT — teal bg, all content */}
    <div className="w-[48%] bg-gradient-to-br from-[#0A6B62] to-[#0D9488]
                    flex items-center px-14 py-16">
      <HeroContent stats={stats} onApply={onApply} />
    </div>

    {/* RIGHT — same teal bg, image fills completely, NO gap */}
    <div className="w-[52%] bg-[#0D9488] flex items-stretch">
      <img
        src={heroBanner}
        alt="Care Manager conducting home health assessment"
        className="w-full h-full object-cover object-top"
        // object-cover fills the box; object-top anchors face at top
      />
    </div>

  </div>

  {/* ── MOBILE ── */}
  <div className="lg:hidden flex flex-col">
    <div className="bg-[#0A6B62] px-6 py-10">
      <HeroContent stats={stats} onApply={onApply} />
    </div>
    <div className="bg-[#0D9488]">
      <img src={heroBanner} alt="..." className="w-full object-cover" />
    </div>
  </div>

</section>
  );
}

/* ─── Shared content used in both layouts ─── */
function HeroContent({
  stats,
  onApply,
}: {
  stats: { val: string; label: string }[];
  onApply: () => void;
}) {
  return (
    <div className="flex flex-col justify-between h-full max-w-xl">

      {/* Top Label */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[1px] bg-white/40" />
          <span className="text-[11px] font-semibold tracking-[2px] uppercase text-white/60">
            For Healthcare Professionals
          </span>
        </div>

        {/* Badge */}
        <div className="mb-6">
          <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[14px] sm:text-[16px] font-medium px-6 py-3 rounded-full shadow-sm">
            Calling Care Managers
          </span>
        </div>
            <br />
        {/* Heading */}  
        <h1 className="text-white font-bold leading-[1.1] mb-6">
          <span className="block text-[40px] sm:text-[44px] md:text-[44px] ">
            To Build Care Communities and
          </span> 

          {/* Gradient Flow Text */}
          <span className="block text-[34px] sm:text-[42px] md:text-[40px] font-semibold italic mt-2 bg-gradient-to-r from-white/80 via-white to-white/60 bg-clip-text text-transparent">
            Be a Health Care Guardians
          </span> 
        </h1>

        {/* Description */}
        <p className="text-white/70 text-[15px] md:text-[16px] leading-[1.7] max-w-md mb-8">
          Visit patients at home. Run a 90-parameter health check in 15
          minutes. Earn from every service you deliver — without a clinic,
          hospital, or boss.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() =>
              window.open("https://app.telth.care/ccm-auth/signup", "_self")
            }
            className="bg-white text-teal-700 font-semibold text-[15px] px-7 py-3 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition"
          >
            Start Your Practice
          </button>

          <button
            onClick={() =>
              document
                .getElementById("how-it-works")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border border-white/30 text-white/90 font-medium text-[15px] px-7 py-3 rounded-xl hover:bg-white/10 transition"
          >
            See How It Works
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10 mt-12 max-w-md">
        {stats.map((s) => (
          <div key={s.val}>
            <div className="text-white text-[24px] md:text-[28px] font-bold">
              {s.val}
            </div>
            <div className="text-white/50 text-[11px] md:text-[12px] mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}