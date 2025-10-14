import React, { useMemo, useState } from "react";
import "./mixer.css";

/** ---- Analytics helper (safe even if gtag isn't present) ---- **/
const track = (name, params = {}) => {
  if (window.gtag) window.gtag("event", name, params);
};

const BASES = [
  { id: "gin", label: "Gin", hue: 210 },      // cool blue
  { id: "vodka", label: "Vodka", hue: 0 },    // neutral
];
const MODIFIERS = [
  { id: "dry-vermouth", label: "Dry Vermouth", hueShift: 15 },
  { id: "sweet-vermouth", label: "Sweet Vermouth", hueShift: 35, sweetness: 0.2 },
  { id: "bitters", label: "Bitters", hueShift: -10, darkness: 0.18 },
  { id: "simple", label: "Simple Syrup", sweetness: 0.25 },
];
const GARNISHES = [
  { id: "lemon", label: "Lemon Twist", hueShift: 40, icon: "🍋" },
  { id: "olive", label: "Olive", hueShift: -25, icon: "🫒" },
  { id: "cherry", label: "Cherry", hueShift: -5, icon: "🍒" },
  { id: "cucumber", label: "Cucumber", hueShift: -40, icon: "🥒" },
];

export default function Mixer() {
  const [base, setBase] = useState(null);
  const [mods, setMods] = useState([]);        // array of ids
  const [garnishes, setGarnishes] = useState([]); // array of ids
  const [shaken, setShaken] = useState(false);

  // toggle helpers
  const toggle = (arr, setArr, id) => {
    setArr((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      track("mixer_toggle", { id, selected: !prev.includes(id) });
      return next;
    });
  };

  // derive “liquid” color & fill
  const { liquid, fillPct, sparkleIntensity } = useMemo(() => {
    const baseHue = base ? BASES.find((b) => b.id === base)?.hue ?? 200 : 200;
    let hue = baseHue;
    let darkness = 0.06;
    let sweetness = 0;
    let level = 0;

    mods.forEach((id) => {
      const m = MODIFIERS.find((x) => x.id === id);
      if (!m) return;
      hue += m.hueShift ?? 0;
      darkness += m.darkness ?? 0;
      sweetness += m.sweetness ?? 0;
      level += 1;
    });

    // garnishes add a touch of hue influence & sparkle
    garnishes.forEach((id) => {
      const g = GARNISHES.find((x) => x.id === id);
      if (!g) return;
      hue += (g.hueShift ?? 0) * 0.3;
      level += 0.3;
    });

    hue = ((hue % 360) + 360) % 360;
    const sat = Math.min(80, 40 + sweetness * 100);
    const light = Math.max(25, 55 - darkness * 100);
    const liquid = `hsl(${Math.round(hue)} ${Math.round(sat)}% ${Math.round(light)}%)`;

    // 1 base + each mod increases fill; cap ~90%
    const baseLevel = base ? 0.35 : 0.0;
    const fillPct = Math.min(0.9, baseLevel + level * 0.12);
    const sparkleIntensity = 0.4 + (sweetness * 0.8) + (garnishes.length * 0.08);

    return { liquid, fillPct, sparkleIntensity };
  }, [base, mods, garnishes]);

  // signature story
  const signature = useMemo(() => {
    if (!base) return "Choose a base to begin.";
    const pieces = [];
    if (base === "gin") pieces.push("botanical");
    if (base === "vodka") pieces.push("crystal-clean");

    if (mods.includes("dry-vermouth")) pieces.push("dry");
    if (mods.includes("sweet-vermouth")) pieces.push("amber-warm");
    if (mods.includes("bitters")) pieces.push("complex");
    if (mods.includes("simple")) pieces.push("silky");

    if (garnishes.includes("lemon")) pieces.push("citrus-bright");
    if (garnishes.includes("olive")) pieces.push("savory");
    if (garnishes.includes("cherry")) pieces.push("ruby-sweet");
    if (garnishes.includes("cucumber")) pieces.push("spa-fresh");

    const mood = pieces.length ? pieces.join(" · ") : "minimal";
    const title = (()=>{
      if (garnishes.includes("olive") && mods.includes("dry-vermouth")) return "Classic Martini";
      if (mods.includes("sweet-vermouth") && mods.includes("bitters") && base === "vodka") return "Vesper-ish Mood";
      if (garnishes.includes("cherry") && mods.includes("bitters")) return "Playful Manhattan-Vibes";
      return "Signature Mix";
    })();

    return `${title} — ${mood}`;
  }, [base, mods, garnishes]);

  const onShake = () => {
    setShaken(true);
    track("mixer_shake", { base, mods: mods.join(","), garnishes: garnishes.join(",") });
    setTimeout(() => setShaken(false), 900);
  };

  const reset = () => {
    setBase(null); setMods([]); setGarnishes([]); setShaken(false);
    track("mixer_reset");
  };

  return (
    <main className="mixer-wrap">
      <div className="bg-sheen" aria-hidden="true" />
      <header className="mixer-head">
        <h1>mixer<span className="dot">.</span>pamelajterrell<span className="com">.com</span></h1>
        <p>Blend a classy, glistening martini. Your choices paint the glass.</p>
      </header>

      <section className="stage">
        {/* Glass SVG */}
        <div className={`glass ${shaken ? "shake" : ""}`} aria-label="Martini glass">
          <svg viewBox="0 0 400 480" className="glass-svg" role="img" aria-label="martini glass">
            {/* stem + base */}
            <g className="stem">
              <rect x="195" y="210" width="10" height="180" rx="5"/>
              <ellipse cx="200" cy="400" rx="80" ry="10"/>
            </g>

            {/* bowl outline */}
            <path className="bowl" d="M60 40 L340 40 L210 210 L190 210 Z" />

            {/* liquid (mask inside bowl) */}
            <defs>
              <clipPath id="bowl-clip">
                <path d="M60 40 L340 40 L210 210 L190 210 Z" />
              </clipPath>
              <linearGradient id="shine" x1="0" x2="1">
                <stop offset="0%" stopColor="#ffffffaa"/>
                <stop offset="60%" stopColor="#ffffff10"/>
                <stop offset="100%" stopColor="#ffffff00"/>
              </linearGradient>
            </defs>

            {/* liquid rect clipped by bowl */}
            <g clipPath="url(#bowl-clip)">
              <rect
                className="liquid"
                x="65"
                y={210 - 160 * fillPct}
                width="270"
                height={170}
                fill={liquid}
                rx="6"
              />
              {/* surface line */}
              <rect
                x="70"
                y={210 - 160 * fillPct}
                width="260"
                height="3"
                rx="2"
                fill="#ffffff33"
              />
              {/* sparkles */}
              <g className="sparkles" style={{ opacity: sparkleIntensity }}>
                {[...Array(22)].map((_, i) => {
                  const x = 80 + (i * 10) % 240 + (i % 3) * 6;
                  const y = 205 - 160 * fillPct + (i % 5) * 14;
                  return <circle key={i} cx={x} cy={y} r="1.8" fill="#fff" className="sp" />;
                })}
              </g>
            </g>

            {/* bowl sheen */}
            <path className="sheen" d="M85 55 L200 55 L135 155 Z" fill="url(#shine)" />

            {/* rim highlight */}
            <line x1="60" y1="40" x2="340" y2="40" className="rim" />
          </svg>

          {/* Garnish emojis placed around rim */}
          <div className="garnish-layer">
            {garnishes.includes("lemon") && <span className="gar gar-lemon" title="Lemon Twist">🍋</span>}
            {garnishes.includes("olive") && <span className="gar gar-olive" title="Olive">🫒</span>}
            {garnishes.includes("cherry") && <span className="gar gar-cherry" title="Cherry">🍒</span>}
            {garnishes.includes("cucumber") && <span className="gar gar-cuke" title="Cucumber">🥒</span>}
          </div>
        </div>

        {/* Controls */}
        <div className="controls">
          <fieldset className="panel">
            <legend>Base</legend>
            <div className="grid">
              {BASES.map((b) => (
                <button
                  key={b.id}
                  className={`chip ${base === b.id ? "active" : ""}`}
                  onClick={() => { setBase(b.id); track("mixer_base", { id: b.id }); }}
                >{b.label}</button>
              ))}
            </div>
          </fieldset>

          <fieldset className="panel">
            <legend>Modifiers</legend>
            <div className="grid">
              {MODIFIERS.map((m) => (
                <button
                  key={m.id}
                  className={`chip ${mods.includes(m.id) ? "active" : ""}`}
                  onClick={() => toggle(mods, setMods, m.id)}
                >{m.label}</button>
              ))}
            </div>
          </fieldset>

          <fieldset className="panel">
            <legend>Garnish</legend>
            <div className="grid">
              {GARNISHES.map((g) => (
                <button
                  key={g.id}
                  className={`chip ${garnishes.includes(g.id) ? "active" : ""}`}
                  onClick={() => toggle(garnishes, setGarnishes, g.id)}
                >
                  <span className="ic" aria-hidden>{g.icon}</span>{g.label}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="actions">
            <button className="btn" onClick={onShake}>Shake ✨</button>
            <button className="btn ghost" onClick={reset}>Reset</button>
          </div>

          <p className="signature" aria-live="polite">{signature}</p>
        </div>
      </section>
    </main>
  );
}
