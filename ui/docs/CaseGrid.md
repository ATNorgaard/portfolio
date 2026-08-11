---
category: Content
keywords: [grid, projects, cases, portfolio, work, cards]
---

# CaseGrid

The project grid: cards separated by shared hairlines rather than gaps, so
the whole block reads as one ruled table until a card is hovered.

```jsx
<CaseGrid
  items={[
    { tag: "Arkitektur", title: "En fælles integrationsrygrad", text: "Et fragmenteret systemlandskab blev samlet omkring fælles datamodeller." },
    { tag: "Adoption", title: "AI fra eksperiment til praksis", text: "Fra spredte enkeltforsøg til en fælles, ansvarlig AI-praksis." },
    { tag: "Computer vision", title: "Maskinsyn i bevægelse", text: "Computer vision og robotstyring kombineret til adaptiv håndtering." },
  ]}
/>
```

Ordinals are generated from position — `01`, `02`, … — so the grid stays
correctly numbered when entries are reordered. Don't pass numbers yourself.

Three columns at full width, stepping to 2 at 1080px and 1 at 560px. Six
entries fills two clean rows.

`tag` is a one- or two-word category, not a sentence.
