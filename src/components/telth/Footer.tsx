import logo from "@/assets/TELTH LOGO.png";

export default function Footer() {
  return (
    <footer className="bg-telth-navy/80 px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-5 flex-wrap">
      <div className="flex items-center gap-2.5">
         <img 
         src={logo}
         alt="telth.care"
         className="h-10 w-auto"
         />
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
