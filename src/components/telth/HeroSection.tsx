import heroBanner from "../../assets/akkanote.png";

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
    <section className="bg-gradient-to-br from-[#0A6B62] to-[#0D9488]">
      <div className="flex flex-col md:flex-row min-h-screen">

        {/* LEFT */}
        <div className="w-full md:w-1/2 flex items-center justify-center
                        px-8 xl:px-16
                        pt-24 pb-10 md:pt-28 md:pb-12">   {/* pt-24/28 = clears fixed navbar */}
          <HeroContent stats={stats} onApply={onApply} />
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 relative min-h-[340px] md:min-h-0">
          <img
            src={heroBanner}
            alt="Care Manager conducting home health assessment"
            className="w-full h-[300px] sm:h-[400px] object-cover object-top md:hidden"
          />
          <img
            src={heroBanner}
            alt="Care Manager conducting home health assessment"
            className="hidden md:block absolute inset-0 w-full h-full object-cover object-top"
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
    <div className="flex flex-col w-full max-w-xl">

      {/* Label row — was missing in your screenshot */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-[1px] bg-white/40" />
        <span className="text-[11px] font-semibold tracking-[2px] uppercase text-white/60">
          Calling Care Managers
        </span>
      </div>

      {/* Badge */}
      <div className="mb-5">
        <span className="inline-block bg-white/10 border border-white/20 text-white/90
                         text-[13px] font-medium px-5 py-2.5 rounded-full">
          One Family. One HealthPay Care Plan. Building Healthier Communities, Together.
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-white font-bold leading-[1.1] mb-4">
        <span className="block text-[28px] sm:text-[34px] xl:text-[40px]">
          Build Care Communities
        </span>
        <span className="block text-[24px] sm:text-[30px] xl:text-[36px]
                         font-semibold italic mt-2
                         bg-gradient-to-r from-white/80 via-white to-white/60
                         bg-clip-text text-transparent">
          Become a Healthcare Guardian.
        </span>
      </h1>

      {/* Description — tightened text size so stats fit in viewport */}
      <p className="text-white/75 text-[13px] xl:text-[14px] leading-[1.75] max-w-lg mb-6">
        Partner with family physicians to deliver precise, compassionate, personalised care at home.
        Powered by the{" "}
        <strong className="text-white/90 font-semibold">Telth Health Examination System</strong>
        {" "}— assess up to 90 health parameters in under 15 minutes, with physician oversight,
        care coordination, and medication delivery within 1 hour.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <button
          onClick={() => window.open("https://app.telth.care/ccm-auth/signup", "_self")}
          className="bg-white text-teal-700 font-semibold text-[14px]
                     px-6 py-3 rounded-xl shadow-md hover:shadow-xl
                     hover:scale-[1.02] transition whitespace-nowrap"
        >
          Start Your Practice
        </button>
        <button
          onClick={() =>
            document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
          }
          className="border border-white/30 text-white/90 font-medium text-[14px]
                     px-6 py-3 rounded-xl hover:bg-white/10 transition whitespace-nowrap"
        >
          See How It Works
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
        {stats.map((s) => (
          <div key={s.val}>
            <div className="text-white text-[22px] xl:text-[26px] font-bold">{s.val}</div>
            <div className="text-white/50 text-[10px] md:text-[11px] mt-1 leading-tight">
              {s.label}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
