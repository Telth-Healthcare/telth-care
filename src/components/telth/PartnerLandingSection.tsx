const cards = [
  {
    role: "Training Partner",
    icon: "🎓",
    pitch: "Certify the next generation of Care Managers",
    bring: "Training facility, healthcare faculty, or institutional network",
    get: "MedPass curriculum, digital LMS, candidate pipeline, certification framework",
    cta: "training",
  },
  {
    role: "Financing Agent",
    icon: "💰",
    pitch: "Help candidates access funding. Earn on every deal",
    bring: "Bank / NBFC / government scheme relationships",
    get: "Verified candidate pipeline with defined device costs and income projections — minimum-risk deals, clear repayment profile",
    cta: "financer",
  },
  {
    role: "Home Care / Care Network Partner",
    icon: "🏠",
    pitch: "Your care workers. Telth's technology and patients",
    bring: "A team of 2–50 care workers in a defined geography",
    get: "HES devices, DigiDoc software, patient assignments, care protocols, Telth brand support",
    cta: "homecare",
  },
];

export default function PartnerLandingSection() {
  const scrollToPartner = (tab: string) => {
    document.getElementById("partner")?.scrollIntoView({ behavior: "smooth" });
    window.dispatchEvent(new CustomEvent("setPartnerTab", { detail: tab }));
  };

  return (
    <section className="py-20 bg-[#0C2340]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[#0D9488] text-sm font-semibold uppercase tracking-widest mb-3">
          Build with Telth
        </p>
        <h2 className=" text-3xl md:text-4xl text-white mb-4">
          The network grows through partners
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl text-sm">
          Three types of service partners make it possible for every Care Manager to get
          trained, financed, and deployed. See where you fit.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.role}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="text-3xl mb-4">{c.icon}</div>
              <h3 className="text-white font-semibold text-base mb-1">{c.role}</h3>
              <p className="text-[#0D9488] text-sm font-medium mb-4">{c.pitch}</p>
              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">You bring</p>
                  <p className="text-gray-300 text-xs">{c.bring}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Telth provides</p>
                  <p className="text-gray-300 text-xs">{c.get}</p>
                </div>
              </div>
              <button
                onClick={() => scrollToPartner(c.cta)}
                className="w-full py-2.5 border border-[#0D9488] text-[#0D9488] rounded-full text-sm font-medium hover:bg-[#0D9488] hover:text-white transition-colors"
              >
                Show interest →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
