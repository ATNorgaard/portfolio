---
category: Content
keywords: [contact, cta, closing, footer, links, get in touch]
---

# ContactBlock

The closer: a full-bleed lime block carrying the largest headline on the page
and the ways to get in touch.

```jsx
<ContactBlock
  eyebrow="EN GOD SAMTALE ER ET GODT STED AT STARTE"
  title={<>Skal vi gøre det<br />komplekse <em>klart?</em></>}
  intro="Jeg er altid åben for en nysgerrig samtale om AI, data og arkitektur."
  links={[
    { href: "mailto:atnoergaard@gmail.com", label: "atnoergaard@gmail.com ↗" },
    { href: "https://linkedin.com/in/…", label: "LinkedIn ↗", external: true },
  ]}
/>
```

**Use it once, last.** It is the only section on the accent ground, which is
what makes it read as the end of the page — a second lime block anywhere
above it destroys that.

Put the emphasis `<em>` on the question itself. Links are laid out two-up
under a hairline and stack below 800px; two to four works.

Follow it with SiteFooter.
