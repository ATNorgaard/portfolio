---
category: Hero
keywords: [marquee, ticker, band, divider, scrolling text]
---

# MotionBand

The lime marquee that breaks the page between the hero and the first
section — a horizontal rule with something to say.

```jsx
<MotionBand
  items={["AI-STRATEGI", "DATAARKITEKTUR", "ANSVARLIG ADOPTION", "EKSEKVERING"]}
/>
```

Give it three to five short uppercase phrases. It repeats the list internally
so the loop is seamless, so pass each phrase once.

`tone="ink"` inverts it to lime-on-ink. The animation stops under
`prefers-reduced-motion`, leaving a static band, and the whole thing is
`aria-hidden` — never put information here that appears nowhere else.

Use once per page. A second marquee turns a device into a tic.
