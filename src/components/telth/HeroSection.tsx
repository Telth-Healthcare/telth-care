import heroBanner from "@/assets/akkanote.png";

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
    <section className="relative overflow-hidden">

      {/* ═══════════════════════════════════
          DESKTOP (lg+) — your original layout
      ════════════════════════════════════ */}
      <div className="hidden lg:block relative min-h-[calc(100vh-64px)]">

        {/* Right image — fixed to right side */}
        <div className="absolute inset-y-0 right-0 w-[60%]">
          <img
            src={heroBanner}
            alt="Care Manager conducting home health assessment"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Left gradient fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg,#0A6B62 0%,#0D9488 35%,rgba(13,148,136,0.85) 43.5%,rgba(13,148,136,0.55) 0%,rgba(13,148,136,0.25) 0%,rgba(13,148,136,0.05) 0%,transparent 0%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto flex items-center min-h-[calc(100vh-64px)]">
          <div className="w-[55%] px-4 md:px-10 py-14 flex flex-col justify-between">
            <HeroContent stats={stats} onApply={onApply} />
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════
          MOBILE (< lg) — clean stacked layout
      ════════════════════════════════════ */}
      <div className="lg:hidden flex flex-col">

        {/* Solid teal content block */}
        <div className="bg-[#0A6B62] px-6 py-10">
          <HeroContent stats={stats} onApply={onApply} />
        </div>

        {/* Full image — no gradient, fully visible */}
        <div className="bg-[#0D9488] px-4 pb-10 pt-4">
          <img
            src={heroBanner}
            alt="Care Manager conducting home health assessment"
            className="w-full rounded-xl object-cover"
          />
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
          <span className="block text-[20px] sm:text-[36px] md:text-[44px] ">
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
                .getElementById("day-in-life")
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