import { Search, CalendarDays, User } from "lucide-react";

export function Header() {
  return (
    <header className="rounded-2xl border border-border bg-card/60 backdrop-blur px-6 py-4 shadow-[var(--shadow-card)] flex items-center justify-between">
      <a href="/" className="flex items-baseline gap-1 select-none" aria-label="Partidos.Hoy">
        <span className="text-2xl sm:text-3xl font-black tracking-tight text-foreground italic">
          Partid
          <span className="relative inline-block">
            <span className="inline-block h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-primary align-middle mx-0.5 shadow-[0_0_0_2px_oklch(0.18_0.05_155)]" />
          </span>
          s
        </span>
        <span className="text-xl sm:text-2xl font-black tracking-tight text-primary italic">.Hoy</span>
      </a>
      <div className="flex items-center gap-2">
        <button className="h-10 w-10 grid place-items-center rounded-full bg-secondary/60 hover:bg-secondary text-foreground transition" aria-label="Search">
          <Search className="h-5 w-5" />
        </button>
        <button className="h-10 w-10 grid place-items-center rounded-full bg-secondary/60 hover:bg-secondary text-foreground transition" aria-label="Calendar">
          <CalendarDays className="h-5 w-5" />
        </button>
        <button className="relative h-10 w-10 grid place-items-center rounded-full bg-primary text-primary-foreground hover:opacity-90 transition" aria-label="Profile">
          <User className="h-5 w-5" />
          <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-primary border-2 border-card" />
        </button>
      </div>
    </header>
  );
}