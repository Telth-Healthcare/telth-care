import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function TestimonialSection() {
  const ref = useScrollAnimation();

  return (
    <section
      className="py-20"
      style={{ background: "linear-gradient(135deg, #0A6B62, #0D9488)" }}
    >
      <div ref={ref} className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 md:gap-16 items-center">

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=80"
            alt="Priya R. - Telth Care Manager"
            loading="lazy"
            className="w-40 md:w-48 rounded-2xl flex-shrink-0 object-cover"
            style={{ aspectRatio: "5/6" }}
          />

          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-white/30" />
              <span className="text-[11px] font-bold tracking-[2px] uppercase text-white/40">
                From the Field
              </span>
            </div>

            <blockquote className="text-white text-[24px] md:text-[30px] lg:text-[34px] font-bold italic leading-[1.3] mb-6 font-display">
              "I was a ward nurse for 9 years. As a Telth CM, I now earn more, choose my hours, and actually spend time with my patients."
            </blockquote>

            <p className="text-white/50 text-[14px] font-medium">
              <strong className="text-white/85 font-semibold">Priya R.</strong>, Registered Nurse — Telth CM, Chennai
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}