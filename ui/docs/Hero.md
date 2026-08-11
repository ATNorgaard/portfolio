---
category: Hero
keywords: [hero, banner, opening, masthead, split, landing]
---

# Hero

The opening statement: an ink-ground split with the headline stack on the
left and a portrait on the right, sized to the viewport and offset by the
fixed header.

```jsx
<Hero
  eyebrow="AI · DATA · ARKITEKTUR"
  lines={[
    "Jeg gør AI",
    <><em>anvendelig</em> i</>,
    "virkeligheden.",
  ]}
  intro="Jeg hjælper virksomhedsledere med at skelne mellem støj og reelle skift."
  meta="Aalborg · Danmark · Arbejder globalt"
  actions={
    <>
      <Button href="#projekter" trailingIcon="↓">Se udvalgte projekter</Button>
      <TextLink href="mailto:hi@example.com" tone="on-ink" trailingIcon="↗">
        Start en samtale
      </TextLink>
    </>
  }
  portrait={<HeroPortrait src="/portrait.webp" alt="Portræt" captionStart="Andreas Nørgaard" captionEnd="AI Solutions Architect" />}
>
  <ScrollCue />
</Hero>
```

**`lines` is one entry per rendered line**, not a sentence to be wrapped.
Each becomes a block that clips and skews into place in sequence, so the
break points are a design decision — three lines is the intended shape. Put
`<em>` inside an entry for the italic serif accent.

Omit `portrait` for a single-column hero. `flush` drops the 100svh floor and
the header offset, for previews and embedded layouts.

A faint outline circle bleeds off the left edge — the same drifting form
appears on the dark sections and the contact block.
