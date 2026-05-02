import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/partidos/Header";
import { NavTabs } from "@/components/partidos/Tabs";
import { FeaturedMatch } from "@/components/partidos/FeaturedMatch";
import { LeagueCard, type League } from "@/components/partidos/LeagueCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Partidos.Hoy — Agenda y partidos en vivo" },
      { name: "description", content: "Agenda del día, partidos en vivo, chat y cuotas de las principales ligas." },
      { property: "og:title", content: "Partidos.Hoy — Agenda y partidos en vivo" },
      { property: "og:description", content: "Agenda del día, partidos en vivo, chat y cuotas de las principales ligas." },
    ],
  }),
  component: Index,
});

const leagues: League[] = [
  {
    name: "LIGA MX",
    icon: "⚽",
    matches: [
      { home: "Liga MX", away: "Cionrobol", homeIcon: "🟥", awayIcon: "🔵", time: "21:00", odds: ["+1.00", "-", "-1.00", "-", "+0.05"] },
      { home: "Liverpool", away: "Chelsea", homeIcon: "🔴", awayIcon: "🟡", time: "", score: "1 - 0" },
    ],
  },
  {
    name: "PREMIER LEAGUE",
    icon: "🏆",
    matches: [
      { home: "River Plate", away: "Boca Juniors", homeIcon: "⚪", awayIcon: "🔵", time: "21:00", odds: ["+1.00", "-", "-1.00", "-", "+1.35"] },
      { home: "Liverpool", away: "Arsenal", homeIcon: "🔴", awayIcon: "🔴", time: "", score: "2 - 1" },
    ],
  },
  {
    name: "LA LIGA",
    icon: "🇪🇸",
    matches: [
      { home: "River Plate", away: "Boca dola", homeIcon: "⚪", awayIcon: "🟠", time: "21:00", odds: ["+1.00", "-", "-1.00", "-", "+1.00"] },
      { home: "Goraron", away: "Moantina", homeIcon: "🟢", awayIcon: "🟤", time: "", score: "2 - 0" },
    ],
  },
  {
    name: "PREMIER LEAGUE",
    icon: "🏆",
    matches: [
      { home: "River Plate", away: "Boca Juniors", homeIcon: "⚫", awayIcon: "🟤", time: "21:00", odds: ["+1.00", "-1.50", "-1.00", "+2.00", "+1.08"] },
      { home: "Liverpool", away: "Arsenal", homeIcon: "🔴", awayIcon: "🔴", time: "", score: "2 - 1" },
    ],
  },
  {
    name: "LA LIGA",
    icon: "🇪🇸",
    matches: [
      { home: "River Plate", away: "Boca dola", homeIcon: "⚪", awayIcon: "🟠", time: "21:00", odds: ["+1.00", "-2.50", "-1.00", "+0.65", "+1.00"] },
      { home: "Goraron", away: "Moantina", homeIcon: "🟢", awayIcon: "🟤", time: "", score: "2 - 0" },
    ],
  },
  {
    name: "LA LIGA",
    icon: "🇪🇸",
    matches: [
      { home: "River Plate", away: "Boca dola", homeIcon: "⚪", awayIcon: "🟠", time: "21:00", odds: ["+1.00", "-", "-1.00", "-", "+1.00"] },
      { home: "Racing", away: "Independiente", homeIcon: "🔵", awayIcon: "🔴", time: "", score: "2 - 0" },
    ],
  },
];

function Index() {
  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-10 py-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <Header />
        <NavTabs />
        <FeaturedMatch />
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {leagues.map((l, i) => (
            <LeagueCard key={i} league={l} />
          ))}
        </section>
        <footer className="text-right text-xs text-muted-foreground pt-2">
          Desarrollado por <span className="font-semibold text-foreground">DevReplica</span>
        </footer>
      </div>
    </main>
  );
}
