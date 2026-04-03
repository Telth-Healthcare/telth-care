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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A6B62] to-[#0D9488]">

      {/* ── MOBILE (< md) ── stacked vertically */}
      <div className="flex flex-col md:hidden">
        <div className="px-6 pt-10 pb-8">
          <HeroContent stats={stats} onApply={onApply} />
        </div>
        <div className="w-full">
          <img
            src={heroBanner}
            alt="Care Manager conducting home health assessment"
            className="w-full object-cover object-top"
            style={{ maxHeight: "320px" }}
          />
        </div>
      </div>

      {/* ── TABLET (md → lg) ── stacked, wider content, taller image */}
      <div className="hidden md:flex lg:hidden flex-col">
        <div className="px-10 pt-12 pb-8">
          <HeroContent stats={stats} onApply={onApply} />
        </div>
        <div className="w-full">
          <img
            src={heroBanner}
            alt="Care Manager conducting home health assessment"
            className="w-full object-cover object-top"
            style={{ maxHeight: "420px" }}
          />
        </div>
      </div>

      {/* ── LAPTOP (lg → xl) ── side-by-side, left gets MORE space */}
      <div className="hidden lg:flex xl:hidden min-h-[calc(100vh-64px)]">
        {/* LEFT — content, 55% width so text never gets squeezed */}
        <div className="w-[55%] flex items-center px-10 py-14 xl:px-14">
          <HeroContent stats={stats} onApply={onApply} />
        </div>
        {/* RIGHT — image, 45% */}
        <div className="w-[45%] relative overflow-hidden">
          <img
            src={heroBanner}
            alt="Care Manager conducting home health assessment"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* ── DESKTOP (xl+) ── classic 50/50 with breathing room */}
      <div className="hidden xl:flex min-h-[calc(100vh-64px)]">
        {/* LEFT */}
        <div className="w-[50%] flex items-center px-16 py-16">
          <HeroContent stats={stats} onApply={onApply} />
        </div>
        {/* RIGHT */}
        <div className="w-[50%] relative overflow-hidden">
          <img
            src={heroBanner}
            alt="Care Manager conducting home health assessment"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
      </div>

    </section>
  );
}

/* ─── Shared content block ─── */
function HeroContent({
  stats,
  onApply,
}: {
  stats: { val: string; label: string }[];
  onApply: () => void;
}) {
  return (
    <div className="flex flex-col w-full max-w-2xl">

      {/* Label row */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-[1px] bg-white/40" />
        <span className="text-[11px] font-semibold tracking-[2px] uppercase text-white/60">
          For Healthcare Professionals
        </span>
      </div>

      {/* Badge */}
      <div className="mb-5">
        <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[14px] sm:text-[15px] font-medium px-5 py-2.5 rounded-full shadow-sm">
          Calling Care Managers
        </span>
      </div>

      {/* Heading — responsive font sizes that scale down on laptop */}
      <h1 className="text-white font-bold leading-[1.1] mb-5">
        <span className="block text-[32px] sm:text-[38px] md:text-[40px] lg:text-[36px] xl:text-[44px]">
          To Build Care Communities and
        </span>
        <span className="block text-[28px] sm:text-[34px] md:text-[36px] lg:text-[32px] xl:text-[40px] font-semibold italic mt-2 bg-gradient-to-r from-white/80 via-white to-white/60 bg-clip-text text-transparent">
          Be a Health Care Guardians
        </span>
      </h1>

      {/* Description */}
      <p className="text-white/70 text-[14px] md:text-[15px] lg:text-[14px] xl:text-[16px] leading-[1.7] max-w-md mb-7">
        Visit patients at home. Run a 90-parameter health check in 15 minutes.
        Earn from every service you deliver — without a clinic, hospital, or boss.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        <button
          onClick={() =>
            window.open("https://app.telth.care/ccm-auth/signup", "_self")
          }
          className="bg-white text-teal-700 font-semibold text-[14px] lg:text-[13px] xl:text-[15px] px-6 py-3 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition whitespace-nowrap"
        >
          Start Your Practice
        </button>
        <button
          onClick={() =>
            document
              .getElementById("how-it-works")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="border border-white/30 text-white/90 font-medium text-[14px] lg:text-[13px] xl:text-[15px] px-6 py-3 rounded-xl hover:bg-white/10 transition whitespace-nowrap"
        >
          See How It Works
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 xl:gap-8 pt-8 border-t border-white/10">
        {stats.map((s) => (
          <div key={s.val}>
            <div className="text-white text-[22px] md:text-[24px] lg:text-[22px] xl:text-[28px] font-bold">
              {s.val}
            </div>
            <div className="text-white/50 text-[10px] md:text-[11px] mt-1 leading-tight">
              {s.label}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}