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

      {/* ── MOBILE (< md) ── */}
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

      {/* ── TABLET (md → lg) ── */}
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

      {/* ── LAPTOP (lg → xl) ── */}
      <div className="hidden lg:flex xl:hidden min-h-[calc(100vh-64px)]">
        <div className="w-[55%] flex items-center px-10 py-14">
          <HeroContent stats={stats} onApply={onApply} />
        </div>
        <div className="w-[45%] relative overflow-hidden">
          <img
            src={heroBanner}
            alt="Care Manager conducting home health assessment"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* ── DESKTOP (xl+) ── */}
      <div className="hidden xl:flex min-h-[calc(100vh-64px)]">
        <div className="w-[50%] flex items-center px-16 py-16">
          <HeroContent stats={stats} onApply={onApply} />
        </div>
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
          Calling Care Managers
        </span>
      </div>

      {/* Badge */}
      <div className="mb-5">
        <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[13px] sm:text-[14px] font-medium px-5 py-2.5 rounded-full shadow-sm">
          One Family. One HealthPay Care Plan. Building Healthier Communities, Together.
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-white font-bold leading-[1.1] mb-5">
        <span className="block text-[30px] sm:text-[36px] md:text-[38px] lg:text-[34px] xl:text-[42px]">
          Build Care Communities.
        </span>
        <span className="block text-[26px] sm:text-[32px] md:text-[34px] lg:text-[30px] xl:text-[38px] font-semibold italic mt-2 bg-gradient-to-r from-white/80 via-white to-white/60 bg-clip-text text-transparent">
          Become a Healthcare Guardian.
        </span>
      </h1>

      {/* Description */}
      <p className="text-white/75 text-[14px] md:text-[15px] lg:text-[13.5px] xl:text-[15px] leading-[1.8] max-w-lg mb-7">
        Partner with family physicians to deliver precise, compassionate, personalised care at home.
        Powered by the <strong className="text-white/90 font-semibold">Telth Health Examination System</strong> — assess up to 90 health parameters in under 15 minutes,
        with physician oversight, care coordination, and medication delivery within 1 hour.
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