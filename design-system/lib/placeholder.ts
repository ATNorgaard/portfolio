/**
 * Palette-safe placeholder imagery.
 *
 * The reference design leans on warm photography. Until real assets are in
 * place, `placeholder()` returns an SVG data-URI built only from the an-ui
 * palette: an abstract composition seeded by a string, so the same seed
 * always renders the same picture and nothing is fetched from the network.
 */

export type PlaceholderTone = "lime" | "ink" | "paper";

const PALETTE: Record<PlaceholderTone, { bg: string; shapes: string[]; line: string }> = {
  lime: { bg: "#c4d987", shapes: ["#a9bd6e", "#708046", "#142221", "#f1efe7"], line: "rgba(20,34,33,0.18)" },
  ink: { bg: "#142221", shapes: ["#223331", "#1a2928", "#c4d987", "#708046"], line: "rgba(255,255,255,0.14)" },
  paper: { bg: "#e6e2d7", shapes: ["#f1efe7", "#c4d987", "#142221", "#a9bd6e"], line: "rgba(20,34,33,0.14)" },
};

function rng(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return ((h >>> 0) % 10000) / 10000;
  };
}

export interface PlaceholderOptions {
  tone?: PlaceholderTone;
  width?: number;
  height?: number;
  label?: string;
}

export function placeholder(seed: string, opts: PlaceholderOptions = {}): string {
  const { tone = "lime", width = 800, height = 1000, label } = opts;
  const rnd = rng(seed);
  const p = PALETTE[tone];
  const shapes: string[] = [];
  const count = 3 + Math.floor(rnd() * 3);
  for (let i = 0; i < count; i++) {
    const fill = p.shapes[Math.floor(rnd() * p.shapes.length)];
    const kind = rnd();
    const x = Math.round(rnd() * width);
    const y = Math.round(rnd() * height);
    const s = Math.round((0.18 + rnd() * 0.5) * Math.min(width, height));
    if (kind < 0.45) {
      shapes.push(`<circle cx="${x}" cy="${y}" r="${Math.round(s / 2)}" fill="${fill}" opacity="0.92"/>`);
    } else if (kind < 0.8) {
      const r = Math.round(rnd() * 40 - 20);
      const h = Math.round(s * (0.5 + rnd()));
      shapes.push(`<rect x="${x}" y="${y}" width="${s}" height="${h}" fill="${fill}" opacity="0.92" transform="rotate(${r} ${x} ${y})"/>`);
    } else {
      shapes.push(`<circle cx="${x}" cy="${y}" r="${Math.round(s / 2)}" fill="none" stroke="${fill}" stroke-width="${Math.round(s * 0.08)}" opacity="0.92"/>`);
    }
  }
  const grid = `<path d="M ${width / 3} 0 V ${height} M ${(2 * width) / 3} 0 V ${height} M 0 ${height / 3} H ${width} M 0 ${(2 * height) / 3} H ${width}" stroke="${p.line}" stroke-width="1"/>`;
  const text = label
    ? `<text x="24" y="${height - 24}" font-family="Geist Mono, ui-monospace, monospace" font-size="${Math.round(width / 40)}" letter-spacing="2" fill="${p.line}">${label.toUpperCase()}</text>`
    : "";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="${width}" height="${height}" fill="${p.bg}"/>${shapes.join("")}${grid}${text}</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
