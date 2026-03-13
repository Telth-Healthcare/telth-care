import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { label: "The Role", href: "#what-is-cm" },
    { label: "A Day in the Field", href: "#day-in-life" },
    { label: "Earnings", href: "#earnings" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <div className="w-8 h-8 bg-primary rounded-[9px] flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 1.5L11.5 7H17L12.5 10.5L14.5 16L9 12.5L3.5 16L5.5 10.5L1 7H6.5L9 1.5Z"
                fill="white"
              />
            </svg>
          </div>
          <span className="text-foreground text-[19px] font-bold tracking-tight font-display">
            Telth<span className="text-primary">.care</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[14px] font-medium text-muted-foreground hover:text-foreground transition-colors no-underline"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2.5">
          <button
            onClick={() => navigate("https://app.telth.care/ccm-auth/signin")}
            className="text-[13px] font-semibold text-foreground border border-border px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition-all bg-transparent cursor-pointer"
          >
            Login
          </button>
          <button
            onClick={() => navigate("https://app.telth.care/ccm-auth/signup")}
            className="text-[13px] font-bold text-primary-foreground bg-primary px-5 py-2 rounded-lg hover:opacity-90 transition-all cursor-pointer border-none"
          >
            Apply Now
          </button>
        </div>

        <button
          className="md:hidden p-2 rounded-lg bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-5 h-0.5 bg-muted-foreground mb-1 transition-all" />
          <div className="w-5 h-0.5 bg-muted-foreground mb-1" />
          <div className="w-5 h-0.5 bg-muted-foreground" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 py-4 flex flex-col gap-4 animate-fade-in">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[15px] font-medium text-muted-foreground no-underline"
            >
              {l.label}
            </a>
          ))}
          <div className="grid grid-cols-2 gap-3 ">
          <button
            onClick={() => navigate("https://app.telth.care/ccm-auth/signin")}
            className="text-[13px] font-semibold text-foreground border border-border px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition-all bg-transparent cursor-pointer"
          >
            Login
          </button>
          <button
            onClick={() => navigate("https://app.telth.care/ccm-auth/signup")}
            className="bg-primary text-primary-foreground font-bold text-[14px] py-2.5 rounded-lg border-none cursor-pointer"
          >
            Apply Now
          </button>
          </div>
        </div>
      )}
    </nav>
  );
}
