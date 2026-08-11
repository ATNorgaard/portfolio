---
category: Content
keywords: [timeline, experience, cv, history, chronology, roles]
---

# Timeline

A chronology set as a rule-divided table rather than a decorated spine:
period, organisation, description.

```jsx
<Timeline
  items={[
    { period: "2025 — nu", title: "Combine A/S", role: "AI-Lead", text: "Retning og levering på tværs af AI, data og arkitektur." },
    { period: "2021 — 2025", title: "DIS / CREADIS", role: "Consulting Software Engineer", text: "Rådgivning og udvikling af digitale løsninger." },
  ]}
/>
```

Newest first. It reads as a CV without looking like one — there are no dots,
no connecting line, just the same hairlines that structure the rest of the
page.

`tone="on-ink"` adapts it to a dark section.
