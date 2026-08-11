---
category: Navigation
keywords: [progress, scroll, indicator, reading]
---

# ScrollProgress

A 3px lime rule pinned to the top of the viewport that scales with reading
progress.

```jsx
<ScrollProgress />
```

Normally driven by MotionProvider through the `--an-page-progress` custom
property, so it takes no props on a real page. Pass `value` (0–1) to pin the
bar for a static shot.

Hidden entirely under `prefers-reduced-motion`.
