---
category: Content
keywords: [capabilities, services, list, numbered, offerings]
---

# CapabilityList

A numbered, rule-separated list of capabilities — this system's answer to a
card grid.

```jsx
<CapabilityList
  items={[
    { number: "01", title: "AI-retning & eksekvering", text: "Fra nøgtern vurdering af muligheder til løsninger, der virker i drift." },
    { number: "02", title: "Data- & integrationsarkitektur", text: "Robuste dataflows og integrationsmønstre, der reducerer kompleksitet." },
  ]}
/>
```

Rules top and bottom of every row make it read as one continuous table
rather than a set of boxes — which is the point. Reach for this instead of a
card grid whenever the items are services, capabilities or principles.

Four to six rows works well. Number them sequentially from `01`.

`tone="on-paper"` adapts the rules and text for a light ground.
