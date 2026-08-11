---
category: Actions
keywords: [link, secondary, underline, inline]
---

# TextLink

The quiet secondary action: body-sized text with a 1px underline rule that
sits on the baseline box rather than on the glyphs.

```jsx
<TextLink href="mailto:atnoergaard@gmail.com" tone="on-ink" trailingIcon="↗">
  Start en samtale
</TextLink>
```

Set `tone="on-ink"` on a dark ground. `external` opens a new tab and adds
`rel="noreferrer"`.

Its job is to sit beside a Button without competing with it — one filled
Button plus one TextLink is the house action row.
