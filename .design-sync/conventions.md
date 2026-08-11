# Building with an-ui

An editorial design system: warm paper, near-black ink, one lime accent. Structure is drawn
with 1px hairlines — there is **no border-radius token and no card shadow** except the one a
CaseCard casts on hover. Sections are numbered like a document.

## Setup

Wrap every page in `<Page>`. It sets the paper ground, the Geist type stack, the lime
selection colour and the accent focus ring. Components styled for the paper ground assume
those defaults; without the wrapper an otherwise-correct layout renders in Times New Roman
on white.

```jsx
<Page>
  <SkipLink />
  <MotionProvider />        {/* optional — see below */}
  <ScrollProgress />
  <SiteHeader items={[{ href: "#fokus", label: "Fokus" }]} />
  <Hero lines={["Jeg gør AI", <><em>anvendelig</em> i</>, "virkeligheden."]} />
  <Section id="fokus" tone="ink" labelNumber="01" labelTitle="Fokus">…</Section>
  <ContactBlock title={<>Skal vi gøre det komplekse <em>klart?</em></>} />
  <SiteFooter>Andreas Nørgaard · AI Solutions Architect</SiteFooter>
</Page>
```

`MotionProvider` is **optional and additive**. Mount it once to get scroll-linked entrances,
hero parallax, the header's compact state and the nav scroll-spy. Leave it out and every
component still renders in its final, visible state — that is by design, not a fallback. It
is a client component, so in a server-rendered app it needs a client boundary.

## Styling idiom — components plus tokens, never utility classes

There is no utility-class vocabulary here. **Compose the library components**, and when you
need layout glue of your own, write plain CSS against these `var(--an-*)` tokens. Never
invent hex values or your own class vocabulary; the `.an-*` classes are internal.

| Family | Real names |
|---|---|
| Grounds | `--an-paper` `--an-paper-deep` `--an-ink` `--an-ink-soft` `--an-ink-panel` `--an-ink-deep` |
| Accent | `--an-accent-bright` (the working lime) `--an-accent` `--an-accent-deep` (on paper) `--an-accent-shadow` (on lime) |
| Text on paper | `--an-text-strong` `--an-text-body` `--an-text-body-soft` `--an-text-muted` `--an-text-faint` |
| Text on ink | `--an-on-ink` `--an-on-ink-strong` `--an-on-ink-body` `--an-on-ink-muted` `--an-on-ink-faint` |
| Hairlines | `--an-line-dark` `--an-line-light` `--an-line-light-soft` `--an-line-contrast` |
| Type | `--an-font-sans` `--an-font-mono` `--an-font-serif` · `--an-text-display{,-lg,-md,-sm}` `--an-text-title` `--an-text-lead` `--an-text-micro` |
| Space | `--an-gutter` `--an-gutter-wide` `--an-section-y` `--an-column-gap` `--an-space-{3xs,2xs,xs,sm,md,lg,xl,2xl}` |
| Motion | `--an-ease` `--an-dur-fast` `--an-dur-mid` `--an-dur-slow` `--an-dur-reveal` |

Three rules carry most of the look:

1. **Emphasis is italic serif in the accent.** Wrap the emphasised words of any
   `DisplayHeading`, `SectionHeading` or `ContactBlock` title in `<em>` — the stylesheet
   swaps them to Georgia in lime. One per heading. A heading without it looks generic.
2. **Micro-labels are uppercase mono.** Eyebrows, section ordinals, captions, nav, buttons.
   Use `Eyebrow` / `SectionLabel` rather than styling text yourself, and set their `tone`
   to match the ground — the accent has to darken as the ground lightens.
3. **Grounds alternate down the page**: paper → ink → paper → ink-panel, closing on the one
   lime `ContactBlock`. Use `ContactBlock` once, last; a second lime block destroys the
   ending.

Reach for `CapabilityList` or `Timeline` — rule-separated tables — before reaching for a
card grid. `CaseGrid` is the only grid, and its cards share hairlines rather than gaps.

## Where the truth lives

Read the bundled `styles.css` and its imports for the real token values, and each
component's `<Name>.prompt.md` for its props, variants and a worked example. Those files
beat any summary here.

## A worked example

```jsx
<Section id="erfaring" tone="paper" labelNumber="03" labelTitle="Erfaring" headingId="exp-title">
  <SectionHeading
    id="exp-title"
    tone="on-paper"
    title={<>Teknisk dybde. Forretningsmæssigt <em>udsyn</em>.</>}
    intro="En baggrund fra rådgivning, softwareudvikling og Forsvaret."
  />
  <Timeline items={[{ period: "2025 — nu", title: "Combine A/S", role: "AI-Lead", text: "…" }]} />
  <FactStrip items={[{ label: "Uddannelse", value: "MSc, Biomedical Engineering", detail: "AAU · 2016 — 2021" }]} />
</Section>
```

Note the shape: a `Section` supplies the numbered rail and the ground, a `SectionHeading`
opens the body, and the content components handle their own rules and alignment. Your own
glue — a wrapper, a gap — uses the tokens above, never new colours.
