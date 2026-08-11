---
category: Content
keywords: [card, case, project, tile]
---

# CaseCard

One case in a CaseGrid. The meta row sits at the top and the title is pushed
down to meet the description, so a row of cards aligns on the title line.

```jsx
<CaseGrid>
  <CaseCard number="01" tag="Arkitektur" title="En fælles integrationsrygrad">
    Et fragmenteret systemlandskab blev samlet omkring fælles datamodeller og
    genbrugelige integrationsmønstre.
  </CaseCard>
</CaseGrid>
```

On hover the whole card flips to lime, lifts 8px and casts a deep shadow
over its neighbours — the one place in the system where an element leaves the
grid. `active` pins that state on, for a featured card or a static shot.

Always render inside a CaseGrid, which supplies the outer rules. Pass `items`
to CaseGrid instead when the cards are plain text — it numbers them for you.
