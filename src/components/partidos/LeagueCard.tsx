type Match = {
  home: string;
  away: string;
  homeIcon: string;
  awayIcon: string;
  time: string;
  score?: string;
  odds?: (string | number)[];
};

export type League = {
  name: string;
  icon: string;
  matches: Match[];
};

export function LeagueCard({ league }: { league: League }) {
  const odds = league.matches[0]?.odds ?? ["+1.00", "-", "-1.00", "-", "+1.00"];
  return (
    <article className="rounded-2xl bg-chip text-chip-foreground p-4 shadow-[var(--shadow-card)] border border-black/5">
      <header className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">{league.icon}</span>
          <h3 className="text-sm font-extrabold tracking-wide">{league.name}</h3>
        </div>
        <span className="px-2 py-0.5 rounded-md bg-live text-live-foreground text-[10px] font-bold">● LIVE</span>
      </header>

      <div className="space-y-2">
        {league.matches.map((m, i) => (
          <div key={i} className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-sm">
            <div className="flex items-center gap-2 justify-end">
              <span className="font-medium">{m.home}</span>
              <span className="text-base">{m.homeIcon}</span>
            </div>
            <span className="text-xs font-bold text-chip-foreground/70 px-2 py-1 rounded bg-black/5 min-w-[50px] text-center">
              {m.score ?? m.time}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-base">{m.awayIcon}</span>
              <span className="font-medium">{m.away}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-5 gap-1.5">
        {odds.map((o, i) => (
          <div
            key={i}
            className="h-8 rounded-md bg-black/[0.04] border border-black/5 grid place-items-center text-xs font-semibold"
          >
            {o}
          </div>
        ))}
      </div>
    </article>
  );
}