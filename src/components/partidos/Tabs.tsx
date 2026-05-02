import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "agenda", label: "AGENDA DEL DÍA" },
  { id: "chat", label: "CHAT", icon: MessageCircle, badge: 0 },
  { id: "live", label: "PARTIDOS EN VIVO", live: true },
] as const;

export function NavTabs() {
  const [active, setActive] = useState<string>("agenda");
  return (
    <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-2 shadow-[var(--shadow-card)] grid grid-cols-3 gap-2">
      {tabs.map((t) => {
        const isActive = active === t.id;
        return (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={cn(
              "relative h-12 rounded-xl text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center gap-2 transition",
              isActive
                ? "bg-chip text-chip-foreground shadow-[var(--shadow-card)]"
                : "text-foreground/85 hover:bg-secondary/60",
            )}
          >
            {"icon" in t && t.icon ? <t.icon className="h-4 w-4" /> : null}
            <span>{t.label}</span>
            {"badge" in t && typeof t.badge === "number" ? (
              <span className="ml-1 h-5 min-w-5 px-1 rounded-full bg-live text-live-foreground text-[10px] font-bold grid place-items-center">
                {t.badge}
              </span>
            ) : null}
            {"live" in t && t.live ? (
              <span className="ml-1 px-2 py-0.5 rounded-md bg-live text-live-foreground text-[10px] font-bold">LIVE</span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}