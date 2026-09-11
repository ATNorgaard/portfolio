# an-ui / shadcn

A shadcn-based design system for the portfolio site. The **layout, type and
motion language** come from Sk Nahid Hasan's *Personal Portfolio* Framer
reference (heavy uppercase display type, two-tone headings, hairline structure,
one accent carrying every interactive element, blur-in reveals). The **colour**
is the existing an-ui palette: ink, paper, lime. Every shadcn semantic variable
is an alias of an `--an-*` token from `ui/src/styles/tokens.css`, so the palette
still has one source of truth.

Demo routes (dev server): `/an-ui` (full portfolio page) and `/an-ui/components`
(kitchen sink).

## Stack

| Piece | Choice |
|---|---|
| Styling | Tailwind CSS v4, `@theme inline`, CSS variables |
| Primitives | `radix-ui` (unified package) via shadcn's `new-york` style |
| Variants | `class-variance-authority`, `clsx`, `tailwind-merge` |
| Icons | `lucide-react` |
| Motion | `motion` (Framer Motion) + a few CSS keyframes, `tw-animate-css` for Radix enter/exit |
| Fonts | Geist Sans / Geist Mono from the root layout (`--font-geist-*`), Georgia for `<em>` |

`components.json` is configured so `npx shadcn add <component>` drops new
primitives into `design-system/components/ui` using the `@/design-system/*`
aliases.

## Setup

```tsx
// app/<route>/layout.tsx
import "@/design-system/styles/globals.css";
import { MotionProvider } from "@/design-system";

export default function Layout({ children }) {
  return (
    <div className="ds min-h-svh bg-background text-foreground">
      <MotionProvider>{children}</MotionProvider>
    </div>
  );
}
```

`.ds` sets the ground, the type stack, selection colour and focus ring.
`MotionProvider` honours `prefers-reduced-motion` and provides tooltip context;
it is optional — every component renders its final state without it.

Import everything from the barrel: `import { Hero, Button, Heading } from "@/design-system"`.

## Tones

A section switches its whole palette with one class. Every component below
re-reads the variables, so the same `<Card>` is off-white on paper, dark grey
on ink and ink-black on lime without a prop.

| Class | Ground | Use |
|---|---|---|
| `tone-paper` (default `:root`) | paper `#f1efe7` | most sections |
| `dark` | ink `#142221` | testimonials, achievements, contact CTA, process cards |
| `tone-accent` | lime `#c4d987` | the hero, one closing CTA |

`<Section tone="paper|ink|accent">` applies them. Grounds alternate down the
page: paper → ink → paper, closing on one ink or lime CTA.

### Semantic tokens

`background` `foreground` `card` `popover` `primary` `secondary` `muted`
`accent` `accent-strong` `destructive` `border` `input` `ring`, plus three
reference-specific channels: `heading-muted` (second colour of a two-tone
heading), `ghost` (watermark text) and `grid-line` (the faint hero grid).
`accent-strong` is the accent *as text* on the current ground — deep lime on
paper, bright lime on ink — so lime text is always legible.

The raw palette is exposed too (`bg-ink`, `text-lime`, `bg-paper-deep`, …) for
the rare fixed-colour case such as the lime arrow tile inside an ink button.

One tint was added to the palette: `--an-paper-bright #faf9f4`, the card ground
that floats a step above paper the way the reference floats white cards on grey.
`--destructive #a3472f` exists only for form errors.

## Type scale

| Utility | Size | Where |
|---|---|---|
| `text-display-xl` | 4.5rem → 15rem (14vw) | hero name, footer signature |
| `text-display` | 3.25rem → 7.5rem | page hero titles, contact CTA |
| `text-headline` | 2.25rem → 4.25rem | section headings |
| `text-title` | 1.5rem → 2.5rem | service rows, stats |
| `text-lead` | 1rem → 1.2rem | lead paragraphs |
| `text-micro` | 0.7rem | mono uppercase labels, buttons, kickers |

Display type is uppercase, bold/black, negative tracking. Micro labels are
mono, uppercase, `tracking-label`. `<em>` inside any `h1–h3` renders italic
Georgia in the accent — the editorial flourish kept from an-ui, optional.

Two-tone headings: `<Heading size="headline">My impact <Muted>through user experience</Muted></Heading>`.

## Components

**ui/** (shadcn primitives, restyled) — `Button` + `ButtonTile` (the accent
square holding the arrow), `Badge` (dotted pill / chip), `Card`, `Input`,
`Textarea`, `Label`, `Accordion` (+ becomes ×), `Tabs`, `ToggleGroup`,
`Separator`, `Avatar` + `AvatarGroup`, `Sheet`, `Tooltip`, `Skeleton`.

**typography/** — `Heading` `Muted` `Accented`, `Eyebrow` `Kicker` `Lead`,
`Stat` (counts up), `Asterisk` (spins) `Spark` `Cross` `StarRating` `Wordmark`
(with ®, `size="giant"` for the footer) `GhostText`.

**motion/** — `MotionProvider`, `Reveal` / `RevealGroup` / `RevealItem`
(effects: `blur` `up` `fade` `scale` `left` `right`), `WordReveal` (word-by-word
blur-in, keeps `<Muted>` per word), `MaskReveal` (text rises out of a clip),
`ImageReveal` (un-clips + settles from zoom), `Marquee` (CSS, pause on hover,
`reverse`), `Parallax` / `ParallaxImage`, `CountUp`.

**blocks/** (sections from the reference) — `Section` `Container`
`SectionHeading`, `SiteHeader` (transparent over the hero, compacts on scroll),
`MenuOverlay` (full-height ink menu, ghost label on hover), `Hero`, `LogoStrip`,
`AboutIntro`, `ServiceList` (hover swaps the photograph), `ProjectGrid` /
`ProjectCard`, `ProcessCards`, `ResultsBento`, `TestimonialMarquee` /
`TestimonialCard`, `Pricing` / `PlanCards`, `ArticleGrid` / `ArticleCard`,
`ContactCta` (aurora + form), `SiteFooter`, `Faq`, `PageHero`, `Achievements`,
`StatsRow`, `InfoCards`.

Every block takes plain data props; see `app/an-ui/content.tsx` for a complete
worked example in Danish.

## Images

Blocks accept `{ src, alt }`. `placeholder(seed, { tone, width, height, label })`
in `lib/placeholder.ts` returns a palette-only SVG data-URI for mock-ups, so
nothing is fetched. The `Hero` re-colours its portrait into the ground's hue
with a luminosity blend (`blend={false}` to keep the original colours).

## Gotchas

- **Route names must not collide with the folder.** Vite's dev middleware
  resolves `/design-system` to `design-system/index.ts` and serves source, which
  is why the demo lives at `/an-ui`.
- **Tailwind utilities are imported unlayered on purpose.** The site's
  `app/globals.css` is unlayered and styles bare `a`, `button` and `footer`;
  layered utilities would lose to it regardless of specificity.
- **`cn()` knows the custom scale.** `lib/utils.ts` extends tailwind-merge with
  the `text-*` sizes, `tracking-label*` and `shadow-lift/header`; without that
  `text-headline` is mistaken for a colour and drops `text-foreground`. Add any
  new custom utility there.
- **Reveal on clipped children.** A child translated outside an
  `overflow-hidden` parent never intersects the viewport, so `MaskReveal` and
  `ImageReveal` observe the wrapper and animate the child.
- **Dev server needs Node ≥ 22** (vinext uses `fs.glob`). `.claude/launch.json`
  points at the nvm-installed 22.23.2 without changing the machine default.
