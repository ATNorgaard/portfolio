---
category: Content
keywords: [capability, row, list item]
---

# CapabilityItem

One row of a CapabilityList: ordinal, title and description across three
columns, divided by a hairline.

```jsx
<CapabilityList tone="on-paper">
  <CapabilityItem number="01" title="AI-retning & eksekvering">
    Fra nøgtern vurdering af muligheder til løsninger, der virker i den daglige drift.
  </CapabilityItem>
</CapabilityList>
```

Hovering nudges the whole row 12px right and tints it lime — the rows behave
like a list you can run a finger down.

Always render inside a CapabilityList, which supplies the top rule and the
on-ink/on-paper context. Pass `items` to CapabilityList instead when the rows
are plain text.

Below 800px it folds to two columns with the description under the title.
