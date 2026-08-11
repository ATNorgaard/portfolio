---
category: Content
keywords: [fact, stat, credential, cell]
---

# Fact

One cell of a FactStrip: a lime mono label at the top, the fact set large at
the bottom, optional detail beneath.

```jsx
<FactStrip>
  <Fact
    label="Uddannelse"
    value="MSc, Biomedical Engineering & Informatics"
    detail="Aalborg Universitet · 2016 — 2021"
  />
</FactStrip>
```

The label is pinned to the top and the value pushed to the bottom, so a row
of cells aligns on the value line however long each label runs.

Always render inside a FactStrip, which supplies the ink ground and the
dividing rules.
