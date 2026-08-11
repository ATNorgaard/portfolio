---
category: Navigation
keywords: [header, nav, navigation, masthead, sticky]
---

# SiteHeader

Fixed translucent header: the mark on the left, centred mono nav, contact
link on the right. It blurs whatever scrolls behind it and shrinks by 10px
once the page moves.

```jsx
<SiteHeader
  items={[
    { href: "#om", label: "Om" },
    { href: "#fokus", label: "Fokus" },
    { href: "#erfaring", label: "Erfaring" },
    { href: "#projekter", label: "Projekter" },
  ]}
  actionLabel="Sig hej"
  actionHref="#kontakt"
/>
```

The nav item matching the section currently in view is underlined by a rule
that wipes in from the left — MotionProvider maintains that state, matching
each item's `href` against the `id` of the sections on the page. Give every
Section an `id` that a nav item points at.

The nav is hidden below 800px, where the header collapses to two columns.

`isStatic` takes it out of fixed positioning — for previews and embedded
layouts. `scrolled` pins the compact state for a static shot.
