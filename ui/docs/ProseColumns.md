---
category: Layout
keywords: [prose, columns, body copy, text, paragraphs]
---

# ProseColumns

Two columns of body copy under a hairline rule — the system's way of setting
a couple of paragraphs without letting them run to a full-width measure.

```jsx
<ProseColumns
  paragraphs={[
    "Der sker utroligt meget inden for AI. Det meste fortjener hverken hypen eller frygten.",
    "Min rolle er at skabe det overblik, ledere har brug for — og bygge bro mellem behov og teams.",
  ]}
/>
```

Two paragraphs is the intended count. Pass `children` instead when the
columns need more than plain text.

`tone="on-ink"` lightens the rule and the text. Stacks below 800px.
