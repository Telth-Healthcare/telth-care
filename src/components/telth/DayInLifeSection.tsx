import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import careImg from "../../assets/IN a day -1.png";
import doctorImg from "../../assets/Doctor.png";
import earnImg from "../../assets/Earning or End of Day.png";


const rows = [
  {
    id: 1,
    title: "The day starts on your terms",
    body: "You check your visit schedule on the Telth CM App. Three confirmed appointments — two chronic care follow-ups and a new patient. You pack your HES device and head out.",
    details: [
      "All bookings managed through the Telth CM App. You accept visits that fit your schedule.",
      "Patient history, care plan details, and previous reports are available before you arrive."
    ],
    image: careImg,
    reverse: false,
  },
  {
    id:2,
    title: "90 parameters. 15 minutes. At their doorstep.",
    body: "At Mrs. Lakshmi's home, you set up the HES device and run a comprehensive assessment. Blood pressure, ECG, blood glucose, liver and kidney markers — all within 15 minutes. The P3DSC algorithm flags a pattern and suggests a care plan review.",
    details: [
      "The HES device captures 90+ parameters — results upload instantly to the patient's health record.",
      "AI-assisted insights guide your care recommendations without replacing your clinical judgment."
    ],
    image: doctorImg,
    reverse: true,
  },
  {
    id:3,
    title: "Every service you deliver — pays you.",
    body: "Three visits done. Two care plan renewals. One medicine order facilitated. One specialist referral completed. You check your dashboard — today's earnings are already logged. No invoicing, no waiting.",
    details: [
      "Visit fees, care plan commissions, medicine margins and referral income — all tracked automatically.",
      "Payouts are consolidated and transferred on a regular cycle, directly to your bank account."
    ],
    image: earnImg,
    reverse: false,
  },
];

export default function DayInLifeSection() {
  const ref = useScrollAnimation();

  return (
    <section id="day-in-life" className="bg-card py-24">
      <div ref={ref} className="max-w-6xl mx-auto px-6">

        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-5 h-0.5 bg-primary rounded-full" />
          <span className="text-[11px] font-bold tracking-[2px] uppercase text-primary">
            In the Field
          </span>
        </div>

        <h2 className="text-foreground text-[36px] md:text-[42px] font-bold leading-[1.12] mb-14 font-display">
          A day in the life of a Care Manager
        </h2>

        <div className="flex flex-col divide-y divide-border">
          {rows.map((row) => (
            <div
              key={row.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center py-16 ${
                row.reverse ? "md:[direction:rtl]" : ""
              }`}
            >

              {/* Image */}
              <img
                src={row.image}
                alt={row.title}
                loading="lazy"
                className={`w-full rounded-2xl object-cover ${
                  row.reverse ? "md:[direction:ltr]" : ""
                }`}
                style={{ aspectRatio: "4/3" }}
              />

              <div className={row.reverse ? "md:[direction:ltr]" : ""}>

                <h3 className="text-foreground text-[24px] md:text-[28px] font-bold leading-[1.2] mb-4 font-display">
                  {row.title}
                </h3>

                <p className="text-muted-foreground text-[15px] leading-[1.75] mb-5">
                  {row.body}
                </p>

                <div className="flex flex-col gap-0 divide-y divide-border">
                  {row.details.map((d, i) => (
                    <div key={i} className="flex items-start gap-3 py-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-[7px]" />
                      <span className="text-[14px] text-muted-foreground leading-relaxed">
                        {d}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}