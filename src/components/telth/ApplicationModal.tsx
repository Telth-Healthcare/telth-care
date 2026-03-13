import { useState } from "react";

const steps = [
  { title: "Your name & contact", hint: "Step 1 of 5", fields: [
    { label: "Full Name", type: "text" as const, placeholder: "As per ID" },
    { label: "Mobile Number", type: "tel" as const, placeholder: "+91 XXXXX XXXXX" },
    { label: "Email Address", type: "email" as const, placeholder: "your@email.com" },
  ]},
  { title: "Your qualification", hint: "Step 2 of 5", fields: [
    { label: "Profession", type: "select" as const, options: ["Nurse", "MBBS Doctor", "Pharmacist", "Lab Technician", "Social Worker", "Clinic Owner", "Other"] },
    { label: "Years of Experience", type: "text" as const, placeholder: "e.g. 5 years" },
  ]},
  { title: "Your location", hint: "Step 3 of 5", fields: [
    { label: "City", type: "text" as const, placeholder: "e.g. Chennai" },
    { label: "PIN Code", type: "text" as const, placeholder: "Service area PIN" },
  ]},
  { title: "Availability", hint: "Step 4 of 5", fields: [
    { label: "Preferred Mode", type: "select" as const, options: ["Part-Time (4–6 hrs)", "Full-Time (6–8 hrs)", "Flexible"] },
    { label: "When can you start?", type: "text" as const, placeholder: "e.g. Immediately / Next month" },
  ]},
  { title: "Almost done", hint: "Step 5 of 5", fields: [
    { label: "How did you hear about Telth?", type: "select" as const, options: ["Social Media", "Friend / Colleague", "Hospital Notice", "Google Search", "Other"] },
    { label: "Any questions for us?", type: "text" as const, placeholder: "Optional" },
  ]},
];

interface ApplicationModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ApplicationModal({ open, onClose }: ApplicationModalProps) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const s = steps[step];
  const isLast = step === steps.length - 1;

  const handleClose = () => {
    onClose();
    setTimeout(() => { setStep(0); setSubmitted(false); }, 300);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-telth-navy/70 backdrop-blur-md z-[999] flex items-center justify-center p-4 animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="bg-card rounded-2xl p-10 w-full max-w-md relative shadow-2xl animate-scale-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary border-none cursor-pointer text-muted-foreground flex items-center justify-center text-[16px] hover:bg-border transition-colors"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <div className="flex gap-1.5 mb-8">
              {steps.map((_, i) => (
                <div key={i} className={`h-[3px] flex-1 rounded-full transition-colors ${i <= step ? "bg-primary" : "bg-border"}`} />
              ))}
            </div>
            <h2 className="text-foreground text-[22px] font-bold mb-1 font-display">{s.title}</h2>
            <p className="text-muted-foreground text-[13px] mb-6">{s.hint}</p>
            <div className="flex flex-col gap-4">
              {s.fields.map((f) => (
                <div key={f.label} className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-foreground">{f.label}</label>
                  {f.type === "select" ? (
                    <select className="px-4 py-3 rounded-lg border border-border bg-background text-[15px] outline-none focus:border-primary transition-colors font-[inherit] text-muted-foreground cursor-pointer">
                      <option value="">Select…</option>
                      {f.options?.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  ) : (
                    <input type={f.type} placeholder={f.placeholder} className="px-4 py-3 rounded-lg border border-border bg-background text-[15px] outline-none focus:border-primary transition-colors font-[inherit] text-foreground" />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-8">
              {step > 0 ? (
                <button onClick={() => setStep(step - 1)} className="text-[14px] font-semibold text-muted-foreground border border-border px-5 py-2.5 rounded-lg bg-transparent cursor-pointer hover:border-muted-foreground transition-colors">Back</button>
              ) : <span />}
              <button onClick={() => isLast ? setSubmitted(true) : setStep(step + 1)} className="bg-primary text-primary-foreground font-bold text-[14px] px-7 py-2.5 rounded-lg border-none cursor-pointer hover:opacity-90 transition-colors">
                {isLast ? "Submit Application" : "Continue"}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-telth-teal-light flex items-center justify-center mx-auto mb-5">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="text-foreground text-[24px] font-bold mb-2 font-display">Application Submitted</h2>
            <p className="text-muted-foreground text-[15px] leading-relaxed">Our onboarding team will contact you within 48 hours. Check your email for next steps.</p>
          </div>
        )}
      </div>
    </div>
  );
}
