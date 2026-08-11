---
category: Hero
keywords: [portrait, image, photo, figure, caption]
---

# HeroPortrait

The right half of the hero: a full-bleed portrait, slightly over-scaled so it
can drift as the page scrolls, with an ink gradient washing up the bottom
third and a mono caption split across the frame.

```jsx
<HeroPortrait
  src="/andreas-portrait.webp"
  alt="Sort-hvidt portræt af Andreas Nørgaard"
  width={1344}
  height={1792}
  captionStart="Andreas Nørgaard"
  captionEnd="AI Solutions Architect"
/>
```

Use a tall portrait-orientation image — the frame is roughly 3:4 and crops to
fill. It wipes in from the right on load.

Pass it to Hero's `portrait` prop rather than placing it yourself.
