---
category: Typography
keywords: [heading, display, headline, title, serif, emphasis]
---

# DisplayHeading

The oversized editorial headline — the loudest thing on any page in this
system. Fluid clamp sizing, 0.91 line-height and tight −0.065em tracking, so
the lines pack into a solid block of type.

```jsx
<DisplayHeading as="h2" size="md" tone="on-paper">
  Teknologi skal kunne
  <br />
  <em>forklares</em>, før den kan skaleres.
</DisplayHeading>
```

**Wrap the emphasised words in `<em>`.** The stylesheet swaps them to italic
Georgia in the accent colour — that serif against Geist is the single most
recognisable move in this design system, and a heading without it looks
generic. One emphasis per heading.

Break lines deliberately with `<br />` rather than letting the text wrap
wherever the column ends.

Sizes: `lg` (the closing ContactBlock), `default` (the hero), `md` (a paper
section opener), `sm` (a section heading row). Set `tone` to `on-paper` or
`on-accent` so the `<em>` stays legible off the ink ground.
