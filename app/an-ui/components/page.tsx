"use client";

import { ArrowUpRight, Mail } from "lucide-react";

import {
  Accented,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Achievements,
  Asterisk,
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
  Badge,
  Button,
  ButtonTile,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Container,
  Cross,
  Eyebrow,
  GhostText,
  Heading,
  InfoCards,
  Input,
  Kicker,
  Label,
  Lead,
  Marquee,
  Muted,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SiteFooter,
  SiteHeader,
  Skeleton,
  Spark,
  StarRating,
  Stat,
  StatsRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TestimonialCard,
  Textarea,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  WordReveal,
  Wordmark,
  placeholder,
} from "@/design-system";

import * as c from "../content";

function Demo({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      <Kicker className="flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-accent-strong" />
        {title}
      </Kicker>
      {children}
    </div>
  );
}

function SampleCard() {
  return (
    <Card>
      <CardHeader>
        <Badge dot>Eksempel</Badge>
        <CardTitle>Samme kort, ny tone</CardTitle>
        <CardDescription>Kortet læser paletten fra den sektion, det står i. Ingen props.</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button size="sm">
          Handling
          <ButtonTile className="size-6" />
        </Button>
        <Button size="sm" variant="outline">
          Sekundær
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function ComponentsPage() {
  return (
    <>
      <SiteHeader
        brand={c.brand}
        items={[
          { label: "Primitiver", href: "#primitiver" },
          { label: "Typografi", href: "#typografi" },
          { label: "Toner", href: "#toner" },
          { label: "Blokke", href: "#blokke" },
        ]}
        cta={{ label: "Forside", href: "/an-ui" }}
        menu={c.menu}
        tone="paper"
      />

      <main>
        <PageHero
          brand="Andreas"
          title="Komponenter"
          year="2026"
          note="Scroll for at udforske"
          images={[
            { src: placeholder("ph-1", { tone: "lime", width: 800, height: 600 }), alt: "" },
            { src: placeholder("ph-2", { tone: "ink", width: 800, height: 600 }), alt: "" },
            { src: placeholder("ph-3", { tone: "paper", width: 800, height: 600 }), alt: "" },
            { src: placeholder("ph-4", { tone: "lime", width: 800, height: 600 }), alt: "" },
          ]}
        />

        {/* ---- Primitives ------------------------------------------------ */}
        <Section id="primitiver" tone="paper">
          <Container className="flex flex-col gap-16">
            <SectionHeading
              eyebrow="shadcn/ui"
              title={
                <>
                  Primitiver <Muted>i paletten</Muted>
                </>
              }
              intro="Button, Badge, Card, Input, Textarea, Label, Accordion, Tabs, ToggleGroup, Separator, Avatar, Sheet, Tooltip, Skeleton."
            />

            <div className="grid gap-12 md:grid-cols-2">
              <Demo title="Button — varianter">
                <div className="flex flex-wrap items-center gap-3">
                  <Button>
                    Kom i gang
                    <ButtonTile />
                  </Button>
                  <Button variant="accent">
                    Se alle cases
                    <ButtonTile tone="contrast" />
                  </Button>
                  <Button variant="outline">Sekundær</Button>
                  <Button variant="secondary">Dæmpet</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">
                    Link <ArrowUpRight />
                  </Button>
                </div>
              </Demo>
              <Demo title="Button — størrelser og tilstande">
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">
                    Lille
                    <ButtonTile className="size-6" />
                  </Button>
                  <Button size="default">Standard</Button>
                  <Button size="lg">
                    Stor
                    <ButtonTile />
                  </Button>
                  <Button size="icon" aria-label="Send">
                    <Mail />
                  </Button>
                  <Button disabled>Deaktiveret</Button>
                </div>
              </Demo>

              <Demo title="Badge">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge dot>Bedre digitale rejser</Badge>
                  <Badge variant="outline" dot>
                    Outline
                  </Badge>
                  <Badge variant="accent">AI-adoption</Badge>
                  <Badge variant="ink">Komplet pakke</Badge>
                  <Badge variant="chip">Use-case kortlægning</Badge>
                  <Badge variant="chip">Roadmap</Badge>
                </div>
              </Demo>
              <Demo title="Avatar, StarRating, Tooltip">
                <div className="flex flex-wrap items-center gap-6">
                  <AvatarGroup>
                    {c.results.rating.avatars.map((src, i) => (
                      <Avatar key={i}>
                        <AvatarImage src={src} alt="" />
                        <AvatarFallback>{i + 1}</AvatarFallback>
                      </Avatar>
                    ))}
                    <Avatar>
                      <AvatarFallback>AN</AvatarFallback>
                    </Avatar>
                  </AvatarGroup>
                  <StarRating rating={4.5} />
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm">
                        Hover mig
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Tooltip i ink</TooltipContent>
                  </Tooltip>
                </div>
              </Demo>

              <Demo title="Input, Textarea, Label">
                <form className="flex max-w-md flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="demo-name">Navn</Label>
                    <Input id="demo-name" placeholder="Jane Smith" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="demo-email">E-mail</Label>
                    <Input id="demo-email" type="email" placeholder="jane@firma.dk" aria-invalid />
                    <span className="text-xs text-destructive">Indtast en gyldig e-mail.</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="demo-msg">Besked</Label>
                    <Textarea id="demo-msg" placeholder="Din besked" />
                  </div>
                  <Button type="submit" className="w-full justify-between">
                    Send besked
                    <ButtonTile />
                  </Button>
                </form>
              </Demo>
              <Demo title="Tabs, ToggleGroup, Accordion">
                <div className="flex flex-col gap-6">
                  <Tabs defaultValue="monthly">
                    <TabsList>
                      <TabsTrigger value="monthly">Månedlig</TabsTrigger>
                      <TabsTrigger value="project">Projektbaseret</TabsTrigger>
                    </TabsList>
                    <TabsContent value="monthly" className="text-sm text-muted-foreground">
                      Løbende rådgivning, opsigelse måned til måned.
                    </TabsContent>
                    <TabsContent value="project" className="text-sm text-muted-foreground">
                      Fast pris fra afklaring til første leverance.
                    </TabsContent>
                  </Tabs>
                  <ToggleGroup type="single" defaultValue="grid" aria-label="Visning">
                    <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
                    <ToggleGroupItem value="list">Liste</ToggleGroupItem>
                  </ToggleGroup>
                  <Accordion type="single" collapsible defaultValue="0">
                    {c.faq.items.slice(0, 3).map((item, i) => (
                      <AccordionItem key={i} value={String(i)}>
                        <AccordionTrigger>
                          {i + 1}. {item.question}
                        </AccordionTrigger>
                        <AccordionContent>{item.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </Demo>

              <Demo title="Card">
                <SampleCard />
              </Demo>
              <Demo title="Sheet, Separator, Skeleton">
                <div className="flex flex-col gap-6">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline">Åbn sheet</Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Sheet</SheetTitle>
                        <SheetDescription>Glider ind fra højre på ink-grund. Menu-overlayet bygger på den.</SheetDescription>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>
                  <Separator />
                  <div className="flex items-center gap-4">
                    <Skeleton className="size-12 rounded-full" />
                    <div className="flex flex-1 flex-col gap-2">
                      <Skeleton className="h-3 w-2/3" />
                      <Skeleton className="h-3 w-1/2" />
                    </div>
                  </div>
                </div>
              </Demo>
            </div>
          </Container>
        </Section>

        {/* ---- Typography ------------------------------------------------ */}
        <Section id="typografi" tone="ink">
          <Container className="flex flex-col gap-16">
            <SectionHeading
              eyebrow="Typografi"
              title={
                <>
                  Tung, tæt, <Muted>to-tonet</Muted>
                </>
              }
              intro="Geist i sort og fed, versaler, negativ sporing. Anden halvdel af en overskrift dæmpes. Mono-mikrolabels bærer alt det små."
            />
            <div className="flex flex-col gap-10">
              <Demo title="display-xl · Hero, PageHero, footer-signatur">
                <Heading as="p" size="display-xl" weight="black">
                  Andreas
                </Heading>
              </Demo>
              <Demo title="display · ContactCta">
                <Heading as="p" size="display">
                  Lad os skabe <Muted>noget sammen</Muted>
                </Heading>
              </Demo>
              <Demo title="headline · SectionHeading (WordReveal)">
                <Heading as="p" size="headline">
                  <WordReveal>
                    Fokus på løsninger <Muted>der leverer resultater</Muted>
                  </WordReveal>
                </Heading>
              </Demo>
              <Demo title="title · ServiceList, Stat">
                <Heading as="p" size="title">
                  Data- & <Accented>integrationsarkitektur</Accented>
                </Heading>
              </Demo>
              <Demo title="em · den redaktionelle serif-kursiv, valgfri">
                <Heading as="p" size="headline">
                  Jeg gør AI <em>anvendelig</em> i virkeligheden
                </Heading>
              </Demo>
              <div className="grid gap-8 md:grid-cols-3">
                <Demo title="Lead">
                  <Lead>Fra nøgtern vurdering af muligheder til løsninger, der virker i driften.</Lead>
                </Demo>
                <Demo title="Kicker / Eyebrow">
                  <div className="flex flex-col items-start gap-3">
                    <Eyebrow className="mb-0">Bedre digitale rejser</Eyebrow>
                    <Kicker>©2026 · 001 · Skrevet af</Kicker>
                  </div>
                </Demo>
                <Demo title="Wordmark">
                  <div className="flex items-center gap-8">
                    <Wordmark>Andreas</Wordmark>
                    <Wordmark size="giant" className="text-5xl">
                      A
                    </Wordmark>
                  </div>
                </Demo>
              </div>
              <Demo title="Glyfer · Asterisk (spin), Spark, Cross, GhostText">
                <div className="relative flex items-center gap-10 overflow-hidden py-6">
                  <GhostText className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem]">Ghost</GhostText>
                  <Asterisk spin className="relative size-12 text-heading-muted" />
                  <Spark className="relative size-6 text-accent" />
                  <Cross className="relative size-5" />
                </div>
              </Demo>
            </div>
          </Container>
        </Section>

        {/* ---- Tones ----------------------------------------------------- */}
        <Section id="toner" tone="paper">
          <Container className="flex flex-col gap-16">
            <SectionHeading
              eyebrow="Toner"
              title={
                <>
                  Tre grunde, <Muted>én palet</Muted>
                </>
              }
              intro="Paper er standard. `dark` giver ink, `tone-accent` giver lime. Alle komponenter læser variablerne igen."
            />
            <div className="grid gap-4 md:grid-cols-3">
              <div className="tone-paper flex flex-col gap-4 rounded-lg border border-border bg-background p-4">
                <Kicker>tone-paper</Kicker>
                <SampleCard />
              </div>
              <div className="dark flex flex-col gap-4 rounded-lg bg-background p-4 text-foreground">
                <Kicker>dark (ink)</Kicker>
                <SampleCard />
              </div>
              <div className="tone-accent flex flex-col gap-4 rounded-lg bg-background p-4 text-foreground">
                <Kicker>tone-accent (lime)</Kicker>
                <SampleCard />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {[
                ["ink", "bg-ink"],
                ["ink-soft", "bg-ink-soft"],
                ["paper", "bg-paper"],
                ["paper-deep", "bg-paper-deep"],
                ["lime", "bg-lime"],
                ["lime-deep", "bg-lime-deep"],
              ].map(([name, cls]) => (
                <div key={name} className="flex flex-col gap-2">
                  <div className={`aspect-[4/3] rounded-md border border-border ${cls}`} />
                  <Kicker>{name}</Kicker>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* ---- Blocks ---------------------------------------------------- */}
        <Section id="blokke" tone="ink">
          <Container className="flex flex-col gap-16">
            <SectionHeading
              eyebrow="Blokke"
              title={
                <>
                  Sektioner <Muted>fra referencen</Muted>
                </>
              }
              intro="Forsiden viser Hero, LogoStrip, AboutIntro, ServiceList, ProjectGrid, ProcessCards, ResultsBento, TestimonialMarquee, Pricing, ArticleGrid, Faq, ContactCta og SiteFooter. Her er resten."
            />
            <Demo title="Achievements · ink">
              <Achievements items={c.achievements} />
            </Demo>
            <Demo title="StatsRow">
              <StatsRow {...c.statsRow} />
            </Demo>
            <Demo title="Stat · row / stack">
              <div className="grid gap-8 md:grid-cols-2">
                <Stat value={37} suffix="+" label="Projekter leveret" text="Fra pilot til drift." />
                <Stat layout="stack" value={98} suffix="%" label="Kundetilfredshed" />
              </div>
            </Demo>
          </Container>
        </Section>

        <Section tone="paper">
          <Container className="flex flex-col gap-16">
            <Demo title="InfoCards · kontaktsiden">
              <InfoCards items={c.infoCards} />
            </Demo>
            <Demo title="TestimonialCard · to layouts">
              <div className="flex flex-wrap gap-4">
                <TestimonialCard {...c.testimonials[0]} />
                <TestimonialCard {...c.testimonials[1]} layout="quote-first" />
              </div>
            </Demo>
            <Demo title="Marquee · reverse">
              <Marquee reverse duration={30}>
                {c.logos.map((l) => (
                  <span key={l} className="text-xl font-bold uppercase text-foreground/40">
                    {l}
                  </span>
                ))}
              </Marquee>
            </Demo>
            <Demo title="Reveal · effekter (scroll for at afspille)">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
                {(["up", "blur", "fade", "scale", "left", "right"] as const).map((fx, i) => (
                  <Reveal key={fx} effect={fx} delay={i * 0.08} once={false} className="rounded-md border border-border bg-card p-4">
                    <Kicker>{fx}</Kicker>
                  </Reveal>
                ))}
              </div>
            </Demo>
          </Container>
        </Section>
      </main>

      <SiteFooter {...c.footer} />
    </>
  );
}
