import { Play, Volume2, Maximize2, Send } from "lucide-react";

function TeamBadge({ letter, color }: { letter: string; color: string }) {
  return (
    <div
      className="h-20 w-20 rounded-2xl grid place-items-center text-3xl font-black text-white shadow-[var(--shadow-card)]"
      style={{ background: color }}
    >
      {letter}
    </div>
  );
}

export function FeaturedMatch() {
  return (
    <section className="rounded-2xl border border-border bg-[image:var(--gradient-card)] p-5 shadow-[var(--shadow-card)]">
      <div className="grid lg:grid-cols-[1.1fr_1.4fr_0.9fr] gap-5">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-xs font-bold tracking-[0.25em] text-muted-foreground mb-4">FEATURED MATCH</p>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <TeamBadge letter="A" color="linear-gradient(160deg,#3b82f6,#1e3a8a)" />
              <span className="text-sm font-semibold">Team Alfa</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="px-2 py-0.5 rounded-md bg-live text-live-foreground text-[10px] font-bold mb-1">LIVE</span>
              <span className="text-4xl font-black tracking-tight">2 - 1</span>
              <span className="text-xs text-muted-foreground mt-1">vs</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <TeamBadge letter="B" color="linear-gradient(160deg,#ef4444,#7f1d1d)" />
              <span className="text-sm font-semibold">Team Beta</span>
            </div>
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden bg-black aspect-video lg:aspect-auto min-h-[220px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1f1f1f,#000)]" />
          <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-live text-live-foreground text-[10px] font-bold z-10">LIVE</span>
          <button className="absolute inset-0 grid place-items-center group" aria-label="Play">
            <span className="h-14 w-14 rounded-full bg-white/15 backdrop-blur grid place-items-center group-hover:bg-white/25 transition">
              <Play className="h-6 w-6 text-white fill-white ml-1" />
            </span>
          </button>
          <button className="absolute bottom-3 left-3 px-3 py-1.5 rounded-md bg-white text-chip-foreground text-xs font-bold tracking-wide hover:opacity-90 transition">
            WATCH LIVE
          </button>
          <div className="absolute bottom-3 right-3 flex items-center gap-2 text-white/80">
            <Volume2 className="h-4 w-4" />
            <Maximize2 className="h-4 w-4" />
          </div>
        </div>

        <div className="rounded-xl border border-border bg-background/40 p-3 flex flex-col">
          <p className="text-xs font-bold tracking-wider text-muted-foreground mb-2">LIVE CHAT</p>
          <div className="flex-1 space-y-2 text-sm">
            <ChatLine user="iTonfo" text="Messi goal!!" />
            <ChatLine user="Replical" text="" />
            <ChatLine user="ReplicaFan" text="Arsenal dominant today!" />
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-lg bg-secondary/60 px-3 py-2">
            <input
              placeholder="Type a hooligan..."
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
            />
            <button className="text-primary hover:text-primary/80" aria-label="Send">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatLine({ user, text }: { user: string; text: string }) {
  return (
    <div className="flex gap-2 items-start">
      <div className="h-5 w-5 rounded-full bg-primary/30 grid place-items-center text-[10px] font-bold mt-0.5">
        {user[0]}
      </div>
      <p className="leading-snug">
        <span className="font-semibold mr-1">{user}:</span>
        <span className="text-foreground/80">{text}</span>
      </p>
    </div>
  );
}