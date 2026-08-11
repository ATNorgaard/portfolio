# design-sync notes — an-ui

Repo-specific gotchas for future syncs. Read this before touching anything.

## Where the design system came from

- This repo is a personal site, not a component library. `ui/` was **extracted** from
  `app/globals.css` + `app/page.tsx` during the first sync (2026-08-11): the same design
  language, formalised into 30 typed React components with `--an-*` tokens.
- `app/` was deliberately left untouched — the site still ships its own `app/globals.css`
  with the original unprefixed class names (`.hero`, `.section`, `.case-card`, …). **The two
  stylesheets are parallel, not shared.** A change to the look currently has to be made in
  both places. Migrating `app/page.tsx` onto `an-ui` is the obvious follow-up and would
  remove the duplication; it was out of scope for the sync.

## Build

- `cfg.buildCmd` is `node ui/build.mjs`: `tsc` for JS + `.d.ts`, then the style assets are
  copied and `dist/styles/components.css` is written as **tokens.css + components.css
  concatenated**. That concatenation is deliberate — see the tokens note below.
- `ui/build.mjs` clears `dist/` by **deleting files and leaving directories standing**. On
  this OneDrive-synced checkout the sync engine holds folder handles open and any `rmdir`
  fails with `EPERM`. Don't "simplify" it back to `rm -rf`.
- It resolves `typescript/lib/tsc.js` and runs it under the current node rather than
  shelling out to `npx` — spawning the `npx.cmd` shim fails with `EINVAL` here.
- Node in this environment is v20 while `package.json` says `>=22.13.0`. `tsc` and the
  converter both run fine on v20; the engines field is the site's requirement, not the
  library's.

## Tokens ship inside the component stylesheet, on purpose

`copyTokens` only resolves a token package through `node_modules/<tokensPkg>`, and `an-ui`
is not installed there (it is a plain in-repo directory, not a dependency). So `tokensPkg` /
`tokensGlob` cannot be used. Instead the build concatenates the tokens onto the front of the
shipped `components.css`, which the converter copies to `_ds_bundle.css` — reachable from
`styles.css`'s `@import` closure, which is the only thing rendered designs receive. Validate
confirms it: `tokens: 88 defined, 78 referenced`.

The bundle therefore has an **empty `tokens/` directory**. That is expected, not a fault.
If `an-ui` ever becomes a real workspace dependency, `tokensPkg: "an-ui"` +
`tokensGlob: "dist/styles/tokens.css"` becomes available and the concatenation can go.

## Fonts

Geist Sans and Geist Mono (latin + latin-ext) are committed at
`ui/src/styles/geist-*.woff2`, harvested from the build cache `.vinext/fonts/` — the site
loads them via `next/font/google`, which leaves no `@font-face` the converter could scrape.
`cfg.extraFonts` points at `ui/dist/styles/fonts.css`, whose `url()`s are relative so they
resolve after the copy. Geist is SIL OFL. No `[FONT_MISSING]` on this build.

## Playwright

The render check needs a chromium build matching the installed playwright. This machine has
**chromium-1228** cached in `%LOCALAPPDATA%\ms-playwright`, which is pinned by
**playwright 1.61.0** — that exact version is what `.ds-sync` installs. A different version
fails with `browserType.launch: Executable doesn't exist`. The install that originally
populated that cache (`C:\Coding\LinkedIn Content Service\…`) is gone; only the binaries
remain.

## Card presentation

15 components are full-width by nature and were flagged `[GRID_OVERFLOW]`; all of them carry
`cfg.overrides.<Name>.cardMode: "column"`. Don't remove those — without them the product's
grid view crops the cards.

`CaseGrid.Grid` shows four cases and the card crops the foot of the second row. That is a
viewport limit on a genuinely tall block, not a broken composition; the same is true of
`Section` and `Page`. Recorded here so it doesn't read as a new problem next time.

## Known render warns

None. The final build validates with zero warnings. **Any warn line on a future run is new**
— look at it rather than assuming it was always there.

## Re-sync risks — what can go stale

- **The `app/` duplication above is the big one.** If the site's look is edited in
  `app/globals.css` and not in `ui/src/styles/`, the design system silently drifts from the
  live site and every design the agent builds will be subtly wrong. Check both.
- **`.design-sync/conventions.md` names ~52 tokens and 13 components explicitly.** Renaming
  a token or component without updating it makes the design agent emit vocabulary that
  doesn't resolve — silently unstyled output. Re-run the validation pass (grep the claimed
  `--an-*` names against `ds-bundle/_ds_bundle.css`, and the named components against
  `ds-bundle/components/*/`) on every sync.
- **Preview portraits are inline SVG data-URIs**, not the real photograph — preview cards
  render offline in headless chromium, where a fetched image resolves to a broken frame. If
  the previews ever need the real portrait, it has to be inlined or shipped into the bundle.
- **`SkipLink` and `ScrollProgress` previews inject a preview-local `<style>`** to pin
  elements that are off-screen or viewport-fixed by design. If those components' positioning
  changes, those overrides need revisiting.
- **`MotionProvider` previews deliberately avoid `Hero` and `Reveal`.** Both play a timed
  entrance the moment the provider arms them, and a static capture catches them
  mid-animation (this is exactly what went wrong on the first attempt). Keep them out.
- The converter was run against **node_modules at the repo root** (`--node-modules
  ./node_modules`), where `react` resolves. `--entry ./ui/dist/index.js` is required because
  `an-ui` is not installed as a package.
