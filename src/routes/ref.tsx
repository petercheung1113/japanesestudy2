import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Volume2 } from "lucide-react";
import {
  DAYS,
  GROUP_GUIDE,
  HOURS,
  MINUTES,
  MONEY_HUNDRED,
  MONEY_MAN,
  MONEY_THOUSAND,
  MONEY_YEN,
  MONTHS,
  REF_SECTIONS,
  TE_RULES,
  TIME_EXTRA,
  VERBS,
  WEEKDAYS,
  type RefItem,
  type RefSectionId,
  type VerbEntry,
} from "@/data/reference";
import { PageTitle } from "@/components/app-shell";
import { speakJapanese } from "@/lib/speech";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/ref")({ component: RefPage });

function RefPage() {
  const [section, setSection] = useState<RefSectionId>("time");

  return (
    <div>
      <PageTitle
        kicker="REFERENCE"
        title="補充資料"
        description="報時、月份、日期、錢、星期，以及第一／二／三類動詞的活用。點格子即可朗讀。日本沒有三十二號，日子列到三十一日。"
      />

      <div className="sticky top-16 z-10 -mx-4 mb-6 border-b border-border/80 bg-bg/90 px-4 py-2 backdrop-blur-md">
        <div className="flex gap-1 overflow-x-auto pb-1">
          {REF_SECTIONS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSection(item.id)}
              className={cn(
                "h-11 shrink-0 rounded-md px-3 text-sm",
                section === item.id ? "bg-primary text-primary-fg" : "bg-surface text-muted",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {section === "time" ? <TimeSection /> : null}
      {section === "month" ? (
        <Block
          kicker="がつ"
          title="月份"
          note="四月しがつ、七月しちがつ、九月くがつ。問「何月」なんがつ。"
          items={MONTHS}
        />
      ) : null}
      {section === "day" ? (
        <Block
          kicker="にち／か"
          title="日子（1–31 日）"
          note="1–10、14、20、24 日是和語讀法，其餘多為音讀＋にち。沒有三十二號。"
          items={DAYS}
          cols="day"
        />
      ) : null}
      {section === "money" ? <MoneySection /> : null}
      {section === "week" ? (
        <Block
          kicker="ようび"
          title="星期"
          note="今週の月曜日、来週の金曜日。問「何曜日ですか」。"
          items={WEEKDAYS}
        />
      ) : null}
      {section === "verb" ? <VerbSection /> : null}

      <p className="mt-10 text-sm text-muted">
        回到
        <Link to="/start" className="mx-1 text-primary underline-offset-2 hover:underline">
          五十音
        </Link>
        或
        <Link to="/" className="mx-1 text-primary underline-offset-2 hover:underline">
          課程
        </Link>
        。
      </p>
    </div>
  );
}

function TimeSection() {
  return (
    <div className="space-y-8">
      <Block
        kicker="じ"
        title="一點到十二點"
        note="4時よじ、7時しちじ、9時くじ。半＝30 分，例如 4時半＝よじはん。"
        items={HOURS}
      />
      <div>
        <p className="text-xs font-medium tracking-wide text-primary">ほか</p>
        <h3 className="mb-3 mt-1 font-display text-xl text-ink">報時用語</h3>
        <ItemGrid items={TIME_EXTRA} />
      </div>
      <div>
        <p className="text-xs font-medium tracking-wide text-primary">ふん／ぷん</p>
        <h3 className="mt-1 font-display text-2xl text-ink">一分到五十九分</h3>
        <p className="mb-3 mt-1 text-sm text-muted">
          1・3・4・6・8・10 分以及整十多用「ぷん」（促音：いっぷん、ろっぷん、はっぷん、じゅっぷん）。其餘用「ふん」。標了色的是容易唸錯的。
        </p>
        <ItemGrid items={MINUTES} compact />
      </div>
      <p className="rounded-xl bg-primary-soft/70 px-4 py-3 text-sm text-ink">
        例句：今 4時5分です＝いま よじ ごふん です。午後 2時半＝ごご にじはん。
      </p>
    </div>
  );
}

function MoneySection() {
  return (
    <div className="space-y-8">
      <Block
        kicker="えん"
        title="円"
        note="4円よえん。問價錢：いくらですか／何円ですか。"
        items={MONEY_YEN}
      />
      <Block kicker="ひゃくえん" title="百円" note="300 さんびゃく、600 ろっぴゃく、800 はっぴゃく。" items={MONEY_HUNDRED} />
      <Block kicker="せんえん" title="千円" note="3000 さんぜん、8000 はっせん。" items={MONEY_THOUSAND} />
      <Block kicker="まんえん" title="万円" note="一萬＝いちまんえん。十萬＝じゅうまんえん。" items={MONEY_MAN} />
    </div>
  );
}

function VerbSection() {
  const [group, setGroup] = useState<0 | 1 | 2 | 3>(0);
  const [verbId, setVerbId] = useState(VERBS[0]?.id ?? "kaku");
  const list = useMemo(
    () => (group === 0 ? VERBS : VERBS.filter((v) => v.group === group)),
    [group],
  );
  const verb = list.find((v) => v.id === verbId) ?? list[0];

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-medium tracking-wide text-primary">グループ</p>
        <h2 className="mt-1 font-display text-2xl text-ink">怎麼分三類</h2>
        <p className="mt-1 text-sm text-muted">
          看ます形最穩：詞幹在い段且後面不是「え／い＋ます→る」的單純一段，多半是一類。する／来る永遠是三類。
        </p>
        <div className="mt-4 grid gap-3 lg:grid-cols-3">
          {GROUP_GUIDE.map((g) => (
            <article key={g.group} className="paper-card rounded-xl p-4">
              <p className="text-xs tracking-wide text-primary">{g.aka}</p>
              <h3 className="mt-1 font-display text-xl text-ink">{g.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{g.how}</p>
              <dl className="mt-3 space-y-1.5 text-sm">
                <Row k="ます" v={g.masu} />
                <Row k="て" v={g.te} />
                <Row k="ない" v={g.nai} />
                <Row k="可能" v={g.pot} />
                <Row k="意向" v={g.vol} />
                <Row k="ば" v={g.ba} />
                <Row k="受身" v={g.pass} />
                <Row k="使役" v={g.caus} />
              </dl>
            </article>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-medium tracking-wide text-primary">て形</p>
        <h3 className="mb-3 mt-1 font-display text-xl text-ink">て形／た形怎麼變</h3>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="px-3 py-2 font-medium text-muted">類</th>
                <th className="px-3 py-2 font-medium text-muted">結尾</th>
                <th className="px-3 py-2 font-medium text-muted">て形</th>
                <th className="px-3 py-2 font-medium text-muted">例子</th>
              </tr>
            </thead>
            <tbody>
              {TE_RULES.map((rule) => (
                <tr key={`${rule.group}-${rule.ending}`} className="border-b border-border last:border-0">
                  <td className="px-3 py-2 text-muted">{rule.group}</td>
                  <td className="px-3 py-2 font-medium text-ink">{rule.ending}</td>
                  <td className="px-3 py-2 font-display text-ink">{rule.te}</td>
                  <td className="px-3 py-2">
                    <button
                      type="button"
                      className="text-left text-muted hover:text-ink"
                      onClick={() => speakJapanese(rule.speak)}
                    >
                      {rule.example}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-subtle">た形：て→た、で→だ（書いて→書いた、飲んで→飲んだ）。</p>
      </div>

      <div>
        <p className="text-xs font-medium tracking-wide text-primary">活用表</p>
        <h3 className="mt-1 font-display text-xl text-ink">選一個動詞看全部轉變</h3>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {([0, 1, 2, 3] as const).map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => {
                setGroup(g);
                const next = (g === 0 ? VERBS : VERBS.filter((v) => v.group === g))[0];
                if (next) setVerbId(next.id);
              }}
              className={cn(
                "h-10 rounded-md px-3 text-sm",
                group === g ? "bg-primary text-primary-fg" : "border border-border bg-surface text-muted",
              )}
            >
              {g === 0 ? "全部" : g === 1 ? "一類" : g === 2 ? "二類" : "三類"}
            </button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {list.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setVerbId(item.id)}
              className={cn(
                "h-10 rounded-md px-3 text-sm",
                verb?.id === item.id ? "bg-primary-soft text-primary" : "border border-border bg-surface text-ink",
              )}
            >
              {item.dict}
            </button>
          ))}
        </div>
        {verb ? <VerbCard verb={verb} /> : null}
      </div>
    </div>
  );
}

function VerbCard({ verb }: { verb: VerbEntry }) {
  return (
    <article className="paper-card mt-4 rounded-2xl p-5">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-xs tracking-wide text-primary">
            {verb.group === 1 ? "第一類・五段" : verb.group === 2 ? "第二類・一段" : "第三類・不規則"}
            <span className="mx-1 text-subtle">·</span>
            {verb.ending}
          </p>
          <h4 className="mt-1 font-display text-3xl text-ink">{verb.dict}</h4>
          <p className="mt-1 text-sm text-muted">
            {verb.kana} · {verb.zh}
          </p>
        </div>
        <button
          type="button"
          onClick={() => speakJapanese(verb.kana)}
          className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-4 text-sm text-primary-fg"
        >
          <Volume2 className="size-4" />
          朗讀辞書形
        </button>
      </div>
      {verb.note ? <p className="mt-3 text-sm text-muted">{verb.note}</p> : null}
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {verb.forms.map((form) => (
          <button
            key={form.key}
            type="button"
            onClick={() => speakJapanese(form.speak)}
            className="flex min-h-14 items-center justify-between gap-3 rounded-lg border border-border bg-surface px-3 py-2 text-left hover:bg-primary-soft/50"
          >
            <span>
              <span className="block text-[11px] tracking-wide text-subtle">{form.label}</span>
              <span className="font-display text-lg text-ink">{form.jp}</span>
            </span>
            <Volume2 className="size-4 shrink-0 text-primary" />
          </button>
        ))}
      </div>
      <p className="mt-4 text-xs leading-relaxed text-subtle">
        常用接續：てください／ないでください／てもいい／てはいけない／なければならない／たことがある／ている。可能對象多用「が」（漢字が書けます）。
      </p>
    </article>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex gap-2">
      <dt className="w-10 shrink-0 text-xs text-subtle">{k}</dt>
      <dd className="text-ink">{v}</dd>
    </div>
  );
}

function Block({
  kicker,
  title,
  note,
  items,
  cols,
}: {
  kicker: string;
  title: string;
  note: string;
  items: RefItem[];
  cols?: "day";
}) {
  return (
    <section>
      <p className="text-xs font-medium tracking-wide text-primary">{kicker}</p>
      <h2 className="mt-1 font-display text-2xl text-ink">{title}</h2>
      <p className="mb-3 mt-1 text-sm text-muted">{note}</p>
      <ItemGrid items={items} compact={cols === "day"} />
    </section>
  );
}

function ItemGrid({ items, compact }: { items: RefItem[]; compact?: boolean }) {
  return (
    <div
      className={cn(
        "grid gap-1.5",
        compact ? "grid-cols-3 sm:grid-cols-6" : "grid-cols-3 sm:grid-cols-4 lg:grid-cols-6",
      )}
    >
      {items.map((item) => (
        <button
          key={item.jp}
          type="button"
          onClick={() => speakJapanese(item.speak)}
          className={cn(
            "paper-card flex min-h-20 flex-col items-center justify-center rounded-xl p-2 text-center hover:shadow-lift",
            item.mark && "ring-1 ring-primary/25",
          )}
        >
          <span className="font-display text-xl leading-none text-ink sm:text-2xl">{item.jp}</span>
          <span className="mt-1 text-[11px] text-muted">{item.kana}</span>
          <span className="text-[10px] text-subtle">{item.zh}</span>
        </button>
      ))}
    </div>
  );
}
