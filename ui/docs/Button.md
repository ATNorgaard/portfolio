---
category: Actions
keywords: [button, cta, action, link]
---

# Button

The system's primary action: a wide, squared, uppercase mono block with no
border radius. Every variant lifts 2px and flips to the lime accent on hover.

```jsx
<Button href="#projekter" trailingIcon="↓">
  Se udvalgte projekter
</Button>

<Button variant="accent" onClick={submit}>Send</Button>
```

Variants: `light` (paper on an ink ground — the default hero call to action),
`accent` (lime, for use on paper), `ink` (dark, for use on the lime contact
block), `outline` (a hairline box, the quiet secondary anywhere).

Passing `href` renders an anchor instead of a button. `trailingIcon` sits
apart from the label behind a wide gap — `↓` points at the next section, `↗`
marks an outbound link.

Pair one Button with one TextLink in an action row; two filled buttons
side by side is not a pattern this system uses.
