import { useState } from "react";

const PARTNERS = [
  {
    id: "training",
    label: "Training Partner",
    headline: "Certify care workers. Get paid per graduate.",
    whatYouBring:
      "A training facility, healthcare faculty, or institutional network.",
    whatTelthProvides:
      "MedPass curriculum, digital LMS, certification framework, and a pipeline of candidates who need training to join the network.",
    earning:
      "Earn a fee for every Care Manager you certify who activates in the Telth network.",
    fields: [
      "Organisation name",
      "Location",
      "Training capacity (monthly)",
      "Contact name",
      "Phone",
      "Email",
    ],
  },
  {
    id: "financer",
    label: "Financing Agent",
    headline: "Help candidates get funded. Earn on every deal.",
    whatYouBring:
      "Relationships with banks, NBFCs, government schemes, or microfinance institutions.",
    whatTelthProvides:
      "A verified pipeline of candidates with defined device costs and income projections — making loan approvals simpler and lower-risk.",
    earning:
      "Act as the agent who finds the best financing option with minimum risk. Earn a referral fee per financed and onboarded Care Manager.",
    fields: [
      "Your name",
      "Affiliated institutions/banks",
      "State(s) you operate in",
      "Phone",
      "Email",
    ],
  },
  {
    id: "homecare",
    label: "Home Care / Care Network Partner",
    headline: "Plug your team into Telth's patient network.",
    whatYouBring:
      "An existing team of 2–50 care workers, nurses, or home care staff in a defined geography.",
    whatTelthProvides:
      "Devices, DigiDoc software, patient assignments, care protocols, and the Telth brand. Your workers get fully equipped and activated.",
    earning:
      "Earn per visit assigned through the Telth network. Scale your operations without building the technology yourself.",
    fields: [
      "Organisation name",
      "State / City",
      "Number of care workers",
      "Current services offered",
      "Contact name",
      "Phone",
      "Email",
    ],
  },
];

export default function PartnerSection() {
  const [active, setActive] = useState("training");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const partner = PARTNERS.find((p) => p.id === active)!;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    // attach partner type
    data.partnerType = active;

    try {
      const res = await fetch("https://enquiry.mytelth.com/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("API Error");

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="partner" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[#0D9488] text-sm font-semibold uppercase tracking-widest mb-3">
          Partner with Telth
        </p>

        <h2 className=" text-3xl md:text-4xl text-[#0C2340] mb-4">
          Grow with the network
        </h2>

        <p className="text-gray-600 mb-10 max-w-2xl">
          Telth works with training institutions, financing agents, and local
          care networks to build and sustain the Care Manager ecosystem.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {PARTNERS.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setActive(p.id);
                setSubmitted(false);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === p.id
                  ? "bg-[#0D9488] text-white"
                  : "border border-[#0D9488] text-[#0D9488] hover:bg-[#E6F7F6]"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT */}
          <div>
            <h3 className="text-2xl text-[#0C2340] mb-4">
              {partner.headline}
            </h3>

            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase text-[#0D9488] mb-1">
                  What you bring
                </p>
                <p className="text-gray-700 text-sm">
                  {partner.whatYouBring}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase text-[#0D9488] mb-1">
                  What Telth provides
                </p>
                <p className="text-gray-700 text-sm">
                  {partner.whatTelthProvides}
                </p>
              </div>

              <div className="bg-[#E6F7F6] rounded-xl p-4">
                <p className="text-xs font-semibold uppercase text-[#0D9488] mb-1">
                  Your earning model
                </p>
                <p className="text-[#0C2340] text-sm font-medium">
                  {partner.earning}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-14 h-14 rounded-full bg-[#E6F7F6] flex items-center justify-center mb-4">
                  ✓
                </div>
                <h4 className="text-xl text-[#0C2340] mb-2">
                  Interest registered
                </h4>
                <p className="text-gray-500 text-sm">
                  Our team will reach out within 2 working days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-sm font-medium text-[#0C2340] mb-2">
                  Show your interest — we'll be in touch.
                </p>

                {partner.fields.map((field) => {
                  const name = field
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "_");

                  return (
                    <input
                      key={field}
                      name={name}
                      type="text"
                      placeholder={field}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E0D8] bg-white text-sm"
                    />
                  );
                })}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-[#0D9488] text-white rounded-full font-semibold disabled:opacity-50"
                >
                  {loading
                    ? "Submitting..."
                    : `Submit as ${partner.label}`}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}