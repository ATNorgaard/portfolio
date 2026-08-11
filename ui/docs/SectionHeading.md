---
category: Layout
keywords: [heading, section title, intro, standfirst]
---

# SectionHeading

Opens a section body: an oversized headline on the left, bottom-aligned
against a short paragraph on the right.

```jsx
<SectionHeading
  id="projects-title"
  title={<>Komplekse problemer. Klare bevægelser.</>}
  intro="Et udvalg af anonymiserede opgaver. Mønstret er det samme: forstå problemet, skab retning."
/>
```

The baselines meeting at the bottom of the row is what makes the pairing
work — a headline set against a paragraph that ends level with it. Keep the
intro to two or three lines; it is capped at 500px.

Set `tone="on-paper"` on a light ground. Stacks below 800px.
