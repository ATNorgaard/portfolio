---
category: Navigation
keywords: [scroll, cue, hint, decoration]
---

# ScrollCue

Rotated mono label with a hairline that a lime segment sweeps along, sat in
the bottom seam of the hero.

```jsx
<Hero lines={lines} portrait={<HeroPortrait src={src} alt={alt} />}>
  <ScrollCue />
</Hero>
```

Purely decorative and `aria-hidden`. Hidden below 800px and frozen under
`prefers-reduced-motion`. Pass it as a child of Hero — it positions itself
against the hero box.
