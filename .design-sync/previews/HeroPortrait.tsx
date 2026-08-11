import type { ReactNode } from "react";
import { Page, HeroPortrait } from "an-ui";

// Preview cards render offline, so the portrait is a self-contained SVG
// stand-in rather than a fetched photograph.
function figure(seed: string) {
  return (
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800">
         <defs><linearGradient id="g" x1="0" y1="0" x2="0.6" y2="1">
           <stop offset="0" stop-color="${seed}"/><stop offset="0.55" stop-color="#8e918a"/>
           <stop offset="1" stop-color="#cfcdc6"/></linearGradient></defs>
         <rect width="600" height="800" fill="url(#g)"/>
         <circle cx="300" cy="300" r="132" fill="#2b3331" opacity="0.55"/>
         <path d="M120 800c0-118 80-196 180-196s180 78 180 196z" fill="#2b3331" opacity="0.55"/>
       </svg>`
    )
  );
}

/* The portrait fills the right half of a hero, so the cell keeps an ink
   ground either side of it rather than letting the page's paper show. */
function Stage({ children }: { children: ReactNode }) {
  return (
    <Page>
      <div style={{ background: "var(--an-ink)", display: "flex", justifyContent: "flex-end" }}>
        <div style={{ width: "min(420px, 70%)" }}>{children}</div>
      </div>
    </Page>
  );
}

export function WithCaption() {
  return (
    <Stage>
      <HeroPortrait
        src={figure("#3a4340")}
        alt="Portræt af Andreas Nørgaard"
        captionStart="Andreas Nørgaard"
        captionEnd="AI Solutions Architect"
      />
    </Stage>
  );
}

export function WithoutCaption() {
  return (
    <Stage>
      <HeroPortrait src={figure("#2f3b39")} alt="Portræt" />
    </Stage>
  );
}
