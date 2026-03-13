interface PhotoPlaceholderProps {
  label: string;
  hint?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function PhotoPlaceholder({ label, hint, className = "", style }: PhotoPlaceholderProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 bg-telth-teal-light overflow-hidden ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg,transparent,transparent 20px,rgba(13,148,136,.04) 20px,rgba(13,148,136,.04) 21px)",
        ...style,
      }}
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-20" />
      <div className="relative z-10 flex flex-col items-center gap-2 px-6 text-center">
        <div className="w-12 h-12 rounded-full bg-card border border-primary/20 flex items-center justify-center mb-1">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
            <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </div>
        <span className="text-[10px] font-bold tracking-widest uppercase text-primary bg-card/80 px-3 py-1 rounded-full border border-primary/10">
          {label}
        </span>
        {hint && (
          <span className="text-[12px] text-muted-foreground leading-relaxed max-w-[200px]">
            {hint}
          </span>
        )}
      </div>
    </div>
  );
}
