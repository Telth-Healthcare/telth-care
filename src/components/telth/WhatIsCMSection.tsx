import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    n: "1",
    title: "Book via the Telth CM App",
    desc: "Receive and accept patient requests on your schedule. You control when and how many visits you take.",
  },
  {
    n: "2",
    title: "Visit the patient at home",
    desc: "Arrive at the patient's residence with your Telth HES device. No waiting rooms, no gatekeepers.",
  },
  {
    n: "3",
    title: "Run a 90-parameter health assessment",
    desc: "The HES device captures vital signs, blood work, cardiac markers, and more — in under 15 minutes, at home.",
  },
  {
    n: "4",
    title: "Coordinate care and recommend services",
    desc: "Connect patients to doctors, care plans, medicines, and referral networks — all from the app.",
  },
  {
    n: "5",
    title: "Get paid for every service delivered",
    desc: "Visit fees, care plan commissions, medicine margins, and referral income — all consolidated in your dashboard.",
  },
];

export default function WhatIsCMSection() {
  const ref = useScrollAnimation();

  return (
    <section id="what-is-cm" className="bg-card py-16 md:py-24">
      <div ref={ref} className="max-w-6xl mx-auto px-5 md:px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"
              alt="Healthcare worker performing home health assessment with patient"
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />

            {/* Floating card */}
            <div className="absolute bottom-4 right-4 md:-bottom-6 md:-right-6 bg-card rounded-xl shadow-xl px-4 py-3 md:px-5 md:py-4 border border-border min-w-[150px] md:min-w-[180px]">
              <div className="text-primary text-[24px] md:text-[32px] font-bold leading-none font-display">
                15 min
              </div>
              <div className="text-muted-foreground text-[12px] md:text-[13px] font-medium mt-1">
                Complete 90-parameter checkup
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-5 h-0.5 bg-primary rounded-full" />
              <span className="text-[10px] md:text-[11px] font-bold tracking-[2px] uppercase text-primary">
                The Role Explained
              </span>
            </div>

            <h2 className="text-foreground text-[28px] sm:text-[32px] md:text-[42px] font-bold leading-[1.2] mb-4 font-display">
              What does a Care Manager actually do?
            </h2>

            <p className="text-muted-foreground text-[15px] md:text-[17px] leading-[1.7] mb-8">
              A CM isn't a nurse-for-hire. You are the frontline of a new healthcare system — carrying AI-powered diagnostics to every home, every day.
            </p>

            <div className="flex flex-col divide-y divide-border">

              {steps.map((s) => (
                <div
                  key={s.n}
                  className="flex gap-4 md:gap-5 items-start py-4 md:py-5 group"
                >
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-telth-teal-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <span className="text-primary text-[14px] md:text-[16px] font-bold group-hover:text-primary-foreground transition-colors font-display">
                      {s.n}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-foreground text-[14px] md:text-[15px] font-bold mb-1">
                      {s.title}
                    </h4>

                    <p className="text-muted-foreground text-[13px] md:text-[14px] leading-relaxed">
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