import heroBanner from "@/assets/Gemini_Generated_Image_1ez51i1ez51i1ez5.png";

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
        <div className="relative z-10 max-w-[1200px] mx-auto flex items-center min-h-[calc(100vh-64px)]">
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
    <div className="flex flex-col justify-between h-full">
      <div>
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-6 h-px bg-white/40" />
          <span className="text-[10px] md:text-[11px] font-bold tracking-[2px] uppercase text-white/60">
            For Healthcare Professionals
          </span>
        </div>

        {/* Badge */}
        <h4 className="inline-block bg-white/10 border border-white/20 text-white/90 text-[16px] sm:text-[18px] md:text-[20px] font-medium px-5 py-3 rounded-full mb-6">
          Care from the heart. Delivered at home.
        </h4>

        {/* Heading */}
        <h1 className="text-white text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] font-bold leading-[1.1] mb-5">
          Build your own
          <br />
          practice.
          <br />
          <em className="text-white/70 italic">On your terms.</em>
        </h1>

        {/* Description */}
        <p className="text-white/70 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.7] max-w-md mb-8">
          Visit patients at home. Run a 90-parameter health check in 15
          minutes. Earn from every service you deliver — without a clinic, a
          hospital, or a boss.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onApply}
            className="bg-white text-teal-800 font-bold text-[14px] md:text-[15px] px-6 py-3 rounded-xl hover:shadow-xl transition"
          >
            Start Your Practice
          </button>
          <button
            onClick={() =>
              document
                .getElementById("day-in-life")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border border-white/30 text-white/90 font-semibold text-[14px] md:text-[15px] px-6 py-3 rounded-xl hover:bg-white/10 transition"
          >
            See How It Works
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/15 mt-10 max-w-md">
        {stats.map((s) => (
          <div key={s.val}>
            <div className="text-white text-[22px] md:text-[26px] font-bold">
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