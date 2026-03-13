import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const partnerTypes = [
  { label: "Hospitals & Clinics", title: "Extend Your Care Reach", desc: "Deploy a network of trained home-visit CMs linked directly to your physicians and care teams." },
  { label: "Corporate Wellness", title: "Employee Health Programmes", desc: "Annual health checks, chronic disease management, and wellness monitoring for your workforce." },
  { label: "Government & NGOs", title: "Community Health at Scale", desc: "Scale health delivery with trained, tech-equipped CMs across districts, wards, and communities." },
];

export default function PartnerSection() {
  const ref = useScrollAnimation();
  return (
    <section id="partner" className="bg-background py-24">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[11px] font-bold tracking-[2px] uppercase text-primary">For Organisations</span>
          <h2 className="text-foreground text-[36px] md:text-[42px] font-bold leading-[1.12] mt-3 mb-4 font-display">Partner with Telth</h2>
          <p className="text-muted-foreground text-[17px] leading-[1.75] max-w-xl mx-auto">Hospitals, corporates, and government bodies — we build custom CM deployment programmes for your context.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
          {partnerTypes.map((p) => (
            <div key={p.title} className="bg-card rounded-2xl p-8 border border-border hover:border-primary hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-primary mb-3">{p.label}</div>
              <h3 className="text-foreground text-[18px] font-bold mb-2 leading-snug font-display">{p.title}</h3>
              <p className="text-muted-foreground text-[14px] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl border border-border p-10 max-w-2xl mx-auto">
          <h3 className="text-foreground text-[22px] font-bold mb-2 font-display">Send us an enquiry</h3>
          <p className="text-muted-foreground text-[15px] mb-8">Fill in the form and our partnerships team will respond within 24 hours.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Full Name", type: "text", placeholder: "Your name" },
              { label: "Organisation", type: "text", placeholder: "Hospital / Company name" },
              { label: "City", type: "text", placeholder: "Your city" },
              { label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
              { label: "Email Address", type: "email", placeholder: "you@organisation.com" },
            ].map((f) => (
              <div key={f.label} className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-foreground">{f.label}</label>
                <input type={f.type} placeholder={f.placeholder} className="px-4 py-3 rounded-lg border border-border bg-background text-[15px] outline-none focus:border-primary transition-colors font-[inherit]" />
              </div>
            ))}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-foreground">Organisation Type</label>
              <select className="px-4 py-3 rounded-lg border border-border bg-background text-[15px] outline-none focus:border-primary transition-colors font-[inherit] text-muted-foreground cursor-pointer">
                <option>Select type</option>
                <option>Hospital / Clinic</option>
                <option>Corporate</option>
                <option>Government / NGO</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label className="text-[13px] font-semibold text-foreground">Message</label>
              <textarea rows={3} placeholder="Tell us about your requirements…" className="px-4 py-3 rounded-lg border border-border bg-background text-[15px] outline-none focus:border-primary transition-colors font-[inherit] resize-none" />
            </div>
          </div>
          <button className="mt-6 bg-primary text-primary-foreground font-bold text-[15px] px-10 py-3.5 rounded-xl hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg transition-all cursor-pointer border-none">
            Submit Enquiry
          </button>
        </div>
      </div>
    </section>
  );
}
