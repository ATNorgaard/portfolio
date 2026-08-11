---
category: Foundations
keywords: [motion, scroll, parallax, observer, animation, reveal]
---

# MotionProvider

Drives every scroll-linked effect on the page: reveal entrances, the hero
parallax, the header's compact state, the progress bar and the nav
scroll-spy. Mount it once, near the top of the tree.

```jsx
<Page>
  <MotionProvider />
  <ScrollProgress />
  <SiteHeader items={nav} />
  {/* … */}
</Page>
```

It renders nothing of its own, so it works equally as a bare sibling or as a
wrapper around the page.

Nothing depends on it. Without it every component renders in its final,
visible state — that is the point of the design, not a fallback. Under
`prefers-reduced-motion` it reveals everything immediately and installs no
scroll listeners.

It is a client component (`"use client"`); in a server-rendered app it must
sit inside a client boundary.
