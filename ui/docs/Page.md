---
category: Foundations
keywords: [root, wrapper, layout, ground, background]
---

# Page

The root wrapper for every page built with this system. It establishes the
paper ground, the Geist type stack, the lime selection colour and the accent
focus ring — the defaults every other component assumes are already in place.

```jsx
<Page>
  <SkipLink />
  <MotionProvider />
  <ScrollProgress />
  <SiteHeader items={[{ href: "#om", label: "Om" }]} />
  <Hero lines={["Jeg gør AI", <><em>anvendelig</em> i</>, "virkeligheden."]} />
  {/* sections */}
  <SiteFooter>Andreas Nørgaard · AI Solutions Architect</SiteFooter>
</Page>
```

Renders a `<main>`. If a layout renders in Times New Roman on a white
background, this wrapper is missing.
