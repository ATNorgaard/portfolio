---
category: Content
keywords: [facts, credentials, education, stats, strip, panel]
---

# FactStrip

A full-width ink panel dropped at the end of a paper section, carrying the
facts that would otherwise clutter the prose.

```jsx
<FactStrip
  items={[
    { label: "Uddannelse", value: "MSc, Biomedical Engineering & Informatics", detail: "Aalborg Universitet · 2016 — 2021" },
    { label: "Udvalgte certificeringer", value: "Azure AI Fundamentals · Azure Fundamentals", detail: "Suppleret med Scrum Master og cybersikkerhed" },
  ]}
/>
```

Two cells is the intended count; `columns` takes more. Cells are divided by
hairlines and stack below 800px.

The dark panel against the paper section is what makes it register as an
aside rather than more body content — don't put it on a dark section, where
that contrast disappears.
