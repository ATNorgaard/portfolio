---
category: Typography
keywords: [eyebrow, kicker, label, mono, uppercase]
---

# Eyebrow

The uppercase mono kicker that opens a block. Widest tracking in the system,
so it always reads as a label rather than as prose.

```jsx
<Eyebrow>AI · DATA · ARKITEKTUR</Eyebrow>
<Eyebrow tone="on-accent">EN GOD SAMTALE ER ET GODT STED AT STARTE</Eyebrow>
```

Set `tone` to match the ground: `on-ink` (default, bright lime), `on-paper`
(deep olive) or `on-accent` (darkest olive, for the lime ContactBlock). The
accent has to darken as the ground lightens or the label stops being legible.

Keep it to a few words. Separate ideas with `·` rather than commas.
