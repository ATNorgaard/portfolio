---
category: Content
keywords: [timeline entry, role, position, experience row]
---

# TimelineItem

One entry in a Timeline: period, organisation and role, then the
description, across three columns under a hairline.

```jsx
<Timeline>
  <TimelineItem period="2025 — nu" title="Combine A/S" role="AI-Lead">
    Retning og levering på tværs af AI, data, arkitektur og forretningsudvikling.
  </TimelineItem>
</Timeline>
```

Always render inside a Timeline, which supplies the top rule and the
on-ink/on-paper context. Pass `items` to Timeline instead when the entries
are plain text.

`period` is set in uppercase mono — use an en dash with spaces (`2021 — 2025`)
and a word rather than an open range for the current role (`2025 — nu`).
