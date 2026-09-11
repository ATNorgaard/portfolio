"use client";

import {
  AboutIntro,
  ArticleGrid,
  ContactCta,
  Container,
  Faq,
  Hero,
  LogoStrip,
  Pricing,
  ProcessCards,
  ProjectGrid,
  ResultsBento,
  Section,
  SectionHeading,
  ServiceList,
  SiteFooter,
  SiteHeader,
  TestimonialMarquee,
} from "@/design-system";

import * as c from "./content";

export default function DesignSystemHome() {
  return (
    <>
      <SiteHeader brand={c.brand} items={c.nav} cta={{ label: "Lad os tale", href: "#kontakt" }} menu={c.menu} tone="accent" />

      <main>
        <Hero {...c.hero} />

        <LogoStrip label="Betroet af ledende organisationer" logos={c.logos} />

        <AboutIntro id="om" {...c.about} />

        <Section id="fokus" tone="paper" className="pt-0">
          <Container>
            <SectionHeading {...c.servicesHeading} />
            <ServiceList items={c.services} ctaLabel="Se mere" />
          </Container>
        </Section>

        <Section id="cases" tone="paper">
          <Container>
            <SectionHeading {...c.projectsHeading} align="left" />
            <ProjectGrid items={c.projects} cta={{ label: "Alle cases", href: "#cases" }} />
          </Container>
        </Section>

        <Section id="proces" tone="paper">
          <Container>
            <SectionHeading {...c.processHeading} align="center" />
            <ProcessCards steps={c.process} />
          </Container>
        </Section>

        <Section tone="paper" className="pt-0">
          <Container>
            <SectionHeading {...c.resultsHeading} />
            <ResultsBento {...c.results} />
          </Container>
        </Section>

        <Section tone="ink" className="overflow-hidden">
          <Container>
            <SectionHeading {...c.testimonialsHeading} />
          </Container>
          <TestimonialMarquee items={c.testimonials} />
        </Section>

        <Section id="priser" tone="paper">
          <Container>
            <SectionHeading {...c.pricingHeading} align="left" />
            <Pricing options={c.pricing} />
          </Container>
        </Section>

        <Section tone="paper" className="pt-0">
          <Container>
            <SectionHeading {...c.articlesHeading} />
            <ArticleGrid items={c.articles} cta={{ label: "Se alle", href: "#" }} />
          </Container>
        </Section>

        <Faq {...c.faq} />

        <ContactCta id="kontakt" {...c.contact} />
      </main>

      <SiteFooter {...c.footer} />
    </>
  );
}
