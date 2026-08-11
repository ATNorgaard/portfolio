---
category: Navigation
keywords: [accessibility, skip, bypass, a11y, keyboard]
---

# SkipLink

Off-screen bypass link that drops into view on keyboard focus.

```jsx
<Page>
  <SkipLink href="#main-content">Gå til indhold</SkipLink>
  {/* … */}
</Page>
```

Put it first inside Page. Its `href` should match the Hero's `contentId`
(`#main-content` by default). Every page built with this system should have
one — the fixed header makes tabbing past the nav otherwise tedious.
