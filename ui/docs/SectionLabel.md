---
category: Layout
keywords: [label, section number, rail, ordinal]
---

# SectionLabel

The left-rail marker: a dimmed ordinal beside a mono label.

```jsx
<SectionLabel number="03" title="Erfaring" />
```

Section renders one for you from its `labelNumber` / `labelTitle` props, so
reach for this directly only in a custom layout. Set `tone="on-ink"` on a
dark ground.

Number the sections sequentially from `01`. The ordinals are the point — they
turn a stack of blocks into a document with a structure.
