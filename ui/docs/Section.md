---
category: Layout
keywords: [section, layout, grid, container, rail]
---

# Section

The page's structural unit: a two-column grid with a narrow left rail for the
numbered label and everything else in the body column.

```jsx
<Section id="fokus" tone="ink" labelNumber="02" labelTitle="Fokus" headingId="fokus-title">
  <SectionHeading
    id="fokus-title"
    title="Fra ambition til drift."
    intro="Jeg bevæger mig mellem ledelsesrummet og det tekniske maskinrum."
  />
  <CapabilityList items={capabilities} />
</Section>
```

**Use this for every section on the page.** The shared left rail is what makes
the body text align down the whole document, and the numbered labels are what
give it its table-of-contents feel.

Grounds alternate: `paper`, `ink`, `paper`, `ink-panel`. The two ink tones
each carry a slowly drifting outline circle. `paper-deep` is available for an
inset stretch.

Give every Section an `id` that a SiteHeader nav item points at — that is how
the scroll-spy finds it. Point `headingId` at the SectionHeading's `id` so
the section is properly labelled.

Collapses to a single stacked column below 800px.
