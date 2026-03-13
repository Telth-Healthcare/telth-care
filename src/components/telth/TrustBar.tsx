import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  { label: "MedPass Certified", sub: "Training" },
  { label: "Johns Hopkins", sub: "Research Coordination" },
  { label: "Active in India, UK & USA", sub: "" },
  { label: "P3DSC", sub: "AI-Powered Platform" },
];

export default function TrustBar() {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className="bg-telth-navy px-6 py-5 flex flex-wrap items-center justify-center gap-8 md:gap-14">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2.5">
          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
          <span className="text-[13px] font-medium text-white/50">
            <strong className="text-white/85 font-semibold">{item.label}</strong>
            {item.sub ? ` ${item.sub}` : ""}
          </span>
        </div>
      ))}
    </div>
  );
}
