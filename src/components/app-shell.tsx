import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { BookMarked, BookOpen, ClipboardList, House, Languages, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "課程", icon: House, match: "home" },
  { to: "/start", label: "假名", icon: Languages, match: "start" },
  { to: "/ref", label: "資料", icon: BookMarked, match: "ref" },
  { to: "/review", label: "複習", icon: RotateCcw, match: "review" },
  { to: "/exam", label: "試卷", icon: ClipboardList, match: "exam" },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isLesson =
    pathname.startsWith("/lesson") || pathname.startsWith("/unit") || pathname.startsWith("/n4");

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col">
      <header className="sticky top-0 z-20 border-b border-border/80 bg-bg/85 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center justify-between gap-3">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <span className="seal size-10 shrink-0 text-xs font-semibold text-primary">み</span>
            <span className="min-w-0">
              <span className="block font-display text-lg leading-tight text-ink">みんな教室</span>
              <span className="block truncate text-xs text-muted">大家的日本語 · N5／N4</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 sm:flex">
            {NAV.map((item) => {
              const active =
                item.match === "home"
                  ? pathname === "/" || isLesson
                  : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "inline-flex h-10 items-center gap-2 rounded-md px-2.5 text-sm transition-colors duration-150 lg:px-3",
                    active
                      ? "bg-primary-soft text-primary"
                      : "text-muted hover:bg-bg-deep hover:text-ink",
                  )}
                >
                  <item.icon className="size-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="flex-1 px-4 pb-24 pt-5 sm:pb-10">{children}</main>

      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-surface/95 px-1 py-2 backdrop-blur-md sm:hidden">
        <div className="mx-auto grid max-w-md grid-cols-5 gap-0.5">
          {NAV.map((item) => {
            const active =
              item.match === "home" ? pathname === "/" || isLesson : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex h-12 flex-col items-center justify-center gap-0.5 rounded-md text-[11px]",
                  active ? "bg-primary-soft text-primary" : "text-muted",
                )}
              >
                <item.icon className="size-4" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export function PageTitle({
  kicker,
  title,
  description,
}: {
  kicker?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6 animate-fade-up">
      {kicker ? (
        <p className="mb-1 text-xs font-medium tracking-widest text-primary">{kicker}</p>
      ) : null}
      <h1 className="font-display text-3xl text-ink sm:text-4xl">{title}</h1>
      {description ? (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}

export function EmptyHint({ children }: { children: ReactNode }) {
  return (
    <div className="paper-card flex items-start gap-3 rounded-xl p-5 text-sm text-muted">
      <BookOpen className="mt-0.5 size-4 shrink-0 text-primary" />
      <div>{children}</div>
    </div>
  );
}
