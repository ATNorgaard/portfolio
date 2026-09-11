// an-ui/shadcn — barrel export.
//
// Tokens live in styles/globals.css; import that once at the route root.

export { cn } from "./lib/utils";
export { placeholder, type PlaceholderOptions, type PlaceholderTone } from "./lib/placeholder";

// ---- ui (shadcn primitives) --------------------------------------------
export * from "./components/ui/button";
export * from "./components/ui/badge";
export * from "./components/ui/card";
export * from "./components/ui/input";
export * from "./components/ui/textarea";
export * from "./components/ui/label";
export * from "./components/ui/accordion";
export * from "./components/ui/tabs";
export * from "./components/ui/toggle-group";
export * from "./components/ui/separator";
export * from "./components/ui/avatar";
export * from "./components/ui/sheet";
export * from "./components/ui/tooltip";
export * from "./components/ui/skeleton";

// ---- typography ----------------------------------------------------------
export * from "./components/typography/heading";
export * from "./components/typography/eyebrow";
export * from "./components/typography/stat";
export * from "./components/typography/glyphs";

// ---- motion --------------------------------------------------------------
export * from "./components/motion/motion-provider";
export * from "./components/motion/reveal";
export * from "./components/motion/word-reveal";
export * from "./components/motion/mask-reveal";
export * from "./components/motion/marquee";
export * from "./components/motion/parallax";
export * from "./components/motion/count-up";

// ---- blocks --------------------------------------------------------------
export * from "./components/blocks/section";
export * from "./components/blocks/site-header";
export * from "./components/blocks/menu-overlay";
export * from "./components/blocks/hero";
export * from "./components/blocks/logo-strip";
export * from "./components/blocks/about-intro";
export * from "./components/blocks/service-list";
export * from "./components/blocks/project-grid";
export * from "./components/blocks/process-cards";
export * from "./components/blocks/results-bento";
export * from "./components/blocks/testimonial-marquee";
export * from "./components/blocks/pricing";
export * from "./components/blocks/article-grid";
export * from "./components/blocks/contact-cta";
export * from "./components/blocks/site-footer";
export * from "./components/blocks/faq";
export * from "./components/blocks/page-hero";
export * from "./components/blocks/achievements";
export * from "./components/blocks/stats-row";
export * from "./components/blocks/info-cards";
