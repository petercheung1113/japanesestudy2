import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Volume2 } from "lucide-react";
import {
  CHARACTERS,
  CLASSROOM,
  GREETINGS,
  HIRAGANA_DAKUTEN,
  HIRAGANA_GOJUON,
  HIRAGANA_YOUON,
  NUMBERS,
  SOUND_NOTES,
  toKatakanaGrid,
  type KanaCell,
} from "@/data/intro";
import { PageTitle } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { speakJapanese } from "@/lib/speech";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/start")({ component: StartPage });

type Script = "hira" | "kata";

function StartPage() {
  const [script, setScript] = useState<Script>("hira");
  const gojuon = script === "hira" ? HIRAGANA_GOJUON : toKatakanaGrid(HIRAGANA_GOJUON);
  const dakuten = script === "hira" ? HIRAGANA_DAKUTEN : toKatakanaGrid(HIRAGANA_DAKUTEN);
  const youon = script === "hira" ? HIRAGANA_YOUON : toKatakanaGrid(HIRAGANA_YOUON);

  return (
    <div>
      <PageTitle
        kicker="はじめに"
        title="先把聲音抓好"
        description="對應課本開頭：五十音、長音／撥音／促音、教室用語、打招呼與 0–10。點假名即可朗讀。"
      />

      <div className="mb-6 flex flex-wrap items-center gap-2">
        <Button size="sm" variant={script === "hira" ? "default" : "outline"} onClick={() => setScript("hira")}>
          平假名
        </Button>
        <Button size="sm" variant={script === "kata" ? "default" : "outline"} onClick={() => setScript("kata")}>
          片假名
        </Button>
        <p className="text-xs text-subtle">點一下格子聽發音</p>
      </div>

      <Section title="五十音" kicker="かなと 拍">
        <KanaGrid rows={gojuon} cols={5} />
      </Section>

      <Section title="濁音・半濁音" kicker="がざだばぱ">
        <KanaGrid rows={dakuten} cols={5} />
      </Section>

      <Section title="拗音" kicker="きゃ・しゃ・ちゃ">
        <KanaGrid rows={youon} cols={3} />
      </Section>

      <Section title="發音要注意" kicker="一拍之差">
        <div className="grid gap-3 sm:grid-cols-2">
          {SOUND_NOTES.map((note) => (
            <article key={note.id} className="paper-card rounded-xl p-4">
              <p className="text-xs tracking-wide text-primary">{note.kana}</p>
              <h3 className="mt-1 font-display text-xl text-ink">{note.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{note.body}</p>
              {note.pairs ? (
                <ul className="mt-3 space-y-1.5 text-sm">
                  {note.pairs.map((p) => (
                    <li key={p.a} className="flex flex-wrap items-baseline gap-2">
                      <button type="button" className="font-medium text-ink underline-offset-2 hover:underline" onClick={() => speakJapanese(p.a)}>
                        {p.a}
                      </button>
                      <span className="text-subtle">/</span>
                      <button type="button" className="font-medium text-ink underline-offset-2 hover:underline" onClick={() => speakJapanese(p.b)}>
                        {p.b}
                      </button>
                      <span className="text-xs text-subtle">{p.zh}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {note.samples ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {note.samples.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => speakJapanese(s)}
                      className="rounded-md border border-border bg-surface px-2.5 py-1 text-sm hover:bg-primary-soft"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </Section>

      <Section title="教室用語" kicker="きょうしつ のことば">
        <PhraseList items={CLASSROOM} />
      </Section>

      <Section title="每天的招呼" kicker="あいさつ">
        <PhraseList items={GREETINGS} />
      </Section>

      <Section title="數字 0–10" kicker="すうじ">
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
          {NUMBERS.map((item) => (
            <button
              key={item.n}
              type="button"
              onClick={() => speakJapanese(item.kana.split("／")[0] ?? item.kana)}
              className="paper-card flex min-h-20 flex-col items-center justify-center rounded-xl p-2 hover:shadow-lift"
            >
              <span className="font-display text-2xl text-ink">{item.kanji}</span>
              <span className="mt-0.5 text-xs text-muted">{item.kana}</span>
            </button>
          ))}
        </div>
      </Section>

      <Link
        to="/ref"
        className="paper-card mb-8 flex items-center justify-between gap-4 rounded-2xl p-5 transition-[transform,box-shadow] duration-200 hover:shadow-lift"
      >
        <div>
          <p className="text-xs font-medium tracking-wide text-primary">補充資料</p>
          <p className="mt-1 font-display text-2xl text-ink">時刻・月日・錢・動詞活用</p>
          <p className="mt-1 text-sm text-muted">一點到十二點、一分到五十九分、一至十二月、1–31 日、百千萬円、星期、一二三類動詞轉變</p>
        </div>
        <span className="text-sm text-primary">打開</span>
      </Link>

      <Section title="登場人物" kicker="だれが でますか">
        <div className="grid gap-2 sm:grid-cols-2">
          {CHARACTERS.map((person) => (
            <article key={person.name} className="paper-card flex items-start gap-3 rounded-xl p-4">
              <span className="seal size-10 shrink-0 text-xs text-primary">{person.name.slice(0, 1)}</span>
              <div className="min-w-0">
                <p className="font-display text-lg text-ink">{person.name}</p>
                <p className="text-xs text-subtle">{person.kana}</p>
                <p className="mt-1 text-sm text-muted">
                  {person.zh} · {person.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Quiz />

      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
        <p className="text-sm text-muted">音抓好了，從第 1 課開始判斷句。</p>
        <div className="flex flex-wrap gap-2">
          <Link
            to="/ref"
            className="inline-flex h-11 items-center rounded-md border border-border bg-surface px-4 text-sm text-ink"
          >
            補充資料
          </Link>
          <Link
            to="/lesson/$id"
            params={{ id: "1" }}
            className="inline-flex h-11 items-center rounded-md bg-primary px-4 text-sm text-primary-fg"
          >
            進入第 1 課
          </Link>
        </div>
      </div>
    </div>
  );
}

function Section({ title, kicker, children }: { title: string; kicker: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <p className="text-xs font-medium tracking-wide text-primary">{kicker}</p>
      <h2 className="mb-3 mt-1 font-display text-2xl text-ink">{title}</h2>
      {children}
    </section>
  );
}

function KanaGrid({ rows, cols }: { rows: KanaCell[][]; cols: number }) {
  return (
    <div className={cn("grid gap-1.5", cols === 5 ? "grid-cols-5" : "grid-cols-3")}>
      {rows.flatMap((row, ri) =>
        row.map((cell, ci) =>
          cell.empty ? (
            <div key={`${ri}-${ci}`} />
          ) : (
            <button
              key={`${ri}-${ci}-${cell.kana}`}
              type="button"
              onClick={() => speakJapanese(cell.kana)}
              className="paper-card flex min-h-14 flex-col items-center justify-center rounded-lg p-1 hover:bg-primary-soft hover:shadow-lift sm:min-h-16"
            >
              <span className="font-display text-2xl leading-none text-ink sm:text-3xl">{cell.kana}</span>
              <span className="mt-1 text-[10px] uppercase tracking-wide text-subtle">{cell.romaji}</span>
            </button>
          ),
        ),
      )}
    </div>
  );
}

function PhraseList({ items }: { items: { jp: string; speak: string; zh: string }[] }) {
  return (
    <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
      {items.map((item) => (
        <li key={item.jp}>
          <button
            type="button"
            onClick={() => speakJapanese(item.speak)}
            className="flex min-h-12 w-full items-center gap-3 px-4 py-2.5 text-left hover:bg-primary-soft/60"
          >
            <Volume2 className="size-4 shrink-0 text-primary" />
            <span className="flex-1 font-medium text-ink">{item.jp}</span>
            <span className="text-sm text-muted">{item.zh}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

function Quiz() {
  const pool = useMemo(
    () => HIRAGANA_GOJUON.flat().filter((c) => !c.empty),
    [],
  );
  const [item, setItem] = useState(() => pool[1] ?? pool[0]);
  const [picked, setPicked] = useState<string | null>(null);

  const choices = useMemo(() => {
    const others = pool.filter((c) => c.kana !== item.kana);
    const mix = [...others].sort(() => Math.random() - 0.5).slice(0, 3);
    return [...mix, item].sort(() => Math.random() - 0.5);
  }, [item, pool]);

  function next() {
    const nxt = pool[Math.floor(Math.random() * pool.length)] ?? item;
    setItem(nxt);
    setPicked(null);
  }

  return (
    <Section title="聽一聽，選平假名" kicker="CHECK">
      <div className="paper-card rounded-2xl p-5">
        <button
          type="button"
          onClick={() => speakJapanese(item.kana)}
          className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary text-primary-fg"
          aria-label="朗讀"
        >
          <Volume2 className="size-7" />
        </button>
        <p className="mt-3 text-center text-sm text-muted">羅馬字：{item.romaji}</p>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {choices.map((c) => {
            const ok = picked !== null && c.kana === item.kana;
            const bad = picked === c.kana && c.kana !== item.kana;
            return (
              <button
                key={c.kana}
                type="button"
                disabled={picked !== null}
                onClick={() => setPicked(c.kana)}
                className={cn(
                  "min-h-12 rounded-lg border font-display text-2xl",
                  picked === null && "border-border bg-surface hover:bg-primary-soft",
                  ok && "border-success/40 bg-success-soft text-success",
                  bad && "border-danger/40 bg-danger-soft text-danger",
                  picked && !ok && !bad && "border-border text-muted",
                )}
              >
                {c.kana}
              </button>
            );
          })}
        </div>
        {picked ? (
          <Button className="mt-4 w-full sm:w-auto" onClick={next}>
            下一題
          </Button>
        ) : null}
      </div>
    </Section>
  );
}
