export default function Footer() {
  return (
    <footer className="bg-telth-navy px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-5 flex-wrap">
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 bg-primary rounded-[8px] flex items-center justify-center">
          <svg className="w-3.5 h-3.5" viewBox="0 0 18 18" fill="none">
            <path d="M9 1.5L11.5 7H17L12.5 10.5L14.5 16L9 12.5L3.5 16L5.5 10.5L1 7H6.5L9 1.5Z" fill="white" />
          </svg>
        </div>
        <span className="text-white text-[17px] font-bold font-display">
          Telth<span className="text-primary">.care</span>
        </span>
      </div>
      <div className="flex gap-7">
        {["Privacy Policy", "Terms of Service", "Contact Us"].map((l) => (
          <a key={l} href="#" className="text-[13px] text-white/30 hover:text-white/60 no-underline transition-colors">{l}</a>
        ))}
      </div>
      <p className="text-[12px] text-white/20">2025 Telth Healthcare. All rights reserved.</p>
    </footer>
  );
}
