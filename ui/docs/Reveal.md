---
category: Foundations
keywords: [reveal, entrance, animation, parallax, stagger, scroll]
---

# Reveal

Marks an element for a scroll-triggered entrance. Wrap anything that should
arrive as the reader reaches it.

```jsx
<Reveal variant="headline">
  <DisplayHeading>Fra ambition til drift.</DisplayHeading>
</Reveal>

<Reveal variant="scale" parallax={18}>
  <Callout label="Mit arbejdsprincip">Forretningen først. Teknologien med.</Callout>
</Reveal>
```

Variants: `up` (rises 48px, the default), `left` (slides in from the left —
used for section labels), `scale` (settles from 0.94), `card` (arrives from
74px with a half-degree rotation), `headline` (wipes upward), `line` (wipes in
from the left edge, for rules and link rows).

`parallax` drifts the element against the scroll by that many pixels while
it is in view. 14–18 is the usual amount.

Reveals only animate once MotionProvider is mounted; otherwise they render
visible. The list components already carry the `an-stagger` class, so
Reveals placed as their direct children cascade at 90ms intervals.
