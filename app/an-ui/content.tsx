import { Muted } from "@/design-system/components/typography/heading";
import { placeholder } from "@/design-system/lib/placeholder";
import type { ServiceItem } from "@/design-system/components/blocks/service-list";
import type { ProjectItem } from "@/design-system/components/blocks/project-grid";
import type { Testimonial } from "@/design-system/components/blocks/results-bento";
import type { PricingOption } from "@/design-system/components/blocks/pricing";
import type { Article } from "@/design-system/components/blocks/article-grid";
import type { FaqItem } from "@/design-system/components/blocks/faq";
import type { Achievement } from "@/design-system/components/blocks/achievements";

/* Demo content for the design-system showcase. Everything is placeholder
 * apart from the name and role; client names, numbers and quotes are
 * illustrative. */

export const brand = "Andreas";

export const nav = [
  { label: "Fokus", href: "#fokus" },
  { label: "Cases", href: "#cases" },
  { label: "Proces", href: "#proces" },
  { label: "Kontakt", href: "#kontakt" },
];

export const menu = {
  items: [
    { label: "Hjem", href: "/an-ui" },
    { label: "Fokus", href: "#fokus" },
    { label: "Cases", href: "#cases" },
    { label: "Priser", href: "#priser" },
    { label: "Komponenter", href: "/an-ui/components" },
  ],
  contact: [
    { label: "Telefon", value: "(+45) 12 34 56 78", href: "tel:+4512345678" },
    { label: "Mail", value: "hej@andreasnoergaard.dk", href: "mailto:hej@andreasnoergaard.dk" },
  ],
  hours: { label: "Kontoret er åbent 08–17", value: "Mandag – fredag" },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
  ],
  backdropSrc: "/andreas-portrait.webp",
};

export const hero = {
  name: "Andreas",
  tagline: "Jeg gør AI anvendelig i virkeligheden — strategi, arkitektur og løsninger, der holder i den daglige drift.",
  year: "2026",
  portrait: { src: "/andreas-portrait.webp", alt: "Andreas Nørgaard" },
  polaroid: {
    src: placeholder("hero-polaroid", { tone: "lime", label: "case" }),
    alt: "Udvalgt case",
    title: "Rygrad",
    category: "Arkitektur",
    href: "#cases",
  },
  talkCard: {
    avatarSrc: "/andreas-portrait.webp",
    name: "Andreas Nørgaard",
    role: "AI Solutions Architect",
    label: "Lad os tale",
    href: "#kontakt",
  },
};

export const logos = ["Nordlys", "Kompas", "Meridian", "Fjordbank", "Atlas Energi", "Lumen"];

export const about = {
  eyebrow: "Bedre digitale rejser",
  title: (
    <>
      Min effekt <Muted>gennem anvendelig AI</Muted>
    </>
  ),
  intro: "Hej, jeg er Andreas — AI Solutions Architect med fokus på løsninger, der er til at forstå, styre og drive.",
  stats: [
    { value: 37, suffix: "+", label: "Projekter leveret", text: "Fra pilot til drift på tværs af data, integration og AI." },
    { value: 70, suffix: "+", label: "Tilfredse kunder", text: "I både offentlige og private organisationer." },
  ],
  images: [
    { src: placeholder("about-1", { tone: "ink", label: "arbejde" }), alt: "Arbejdssituation" },
    { src: placeholder("about-2", { tone: "lime", label: "workshop" }), alt: "Workshop" },
  ] as [{ src: string; alt: string }, { src: string; alt: string }],
};

export const servicesHeading = {
  eyebrow: "Ydelser",
  title: (
    <>
      Stærke <Muted>AI-ydelser</Muted> til din organisation
    </>
  ),
  intro: "Fra nøgtern vurdering af muligheder til løsninger, der virker i driften.",
};

export const services: ServiceItem[] = [
  {
    number: "001",
    title: "AI-retning & eksekvering",
    description: "Fra nøgtern vurdering af muligheder til løsninger, der virker i den daglige drift. Jeg forbinder strategi, prioritering og teknisk eksekvering.",
    tags: ["Use-case kortlægning", "Roadmap", "Proof of value", "Governance"],
    image: { src: placeholder("svc-1", { tone: "lime", width: 800, height: 600 }), alt: "AI-retning" },
    href: "#kontakt",
  },
  {
    number: "002",
    title: "Data- & integrationsarkitektur",
    description: "Robuste dataflows og integrationsmønstre, der reducerer kompleksitet og gør nye digitale initiativer lettere at skalere.",
    tags: ["Datamodeller", "API-kontrakter", "Event-drevet", "Observability"],
    image: { src: placeholder("svc-2", { tone: "ink", width: 800, height: 600 }), alt: "Integrationsarkitektur" },
    href: "#kontakt",
  },
  {
    number: "003",
    title: "Governance & ansvarlighed",
    description: "Klare rammer for ejerskab, kvalitet, sikkerhed og sporbarhed, så innovation kan ske med tillid og uden at miste kontrollen.",
    tags: ["AI Act", "Risikovurdering", "Sporbarhed", "Politikker"],
    image: { src: placeholder("svc-3", { tone: "paper", width: 800, height: 600 }), alt: "Governance" },
    href: "#kontakt",
  },
  {
    number: "004",
    title: "Modernisering & automation",
    description: "Pragmatiske forbedringer af processer og systemlandskaber med fokus på mindre friktion, lavere afhængighed og bedre beslutninger.",
    tags: ["Procesautomation", "Legacy-afvikling", "Agentiske flows"],
    image: { src: placeholder("svc-4", { tone: "lime", width: 800, height: 600 }), alt: "Automation" },
    href: "#kontakt",
  },
];

export const projectsHeading = {
  eyebrow: "Portfolio",
  title: (
    <>
      Udvalgte <Muted>cases.</Muted>
    </>
  ),
};

export const projects: ProjectItem[] = [
  { title: "Rygrad", category: "Arkitektur", image: { src: placeholder("proj-1", { tone: "lime" }), alt: "En fælles integrationsrygrad" } },
  { title: "Kompas", category: "AI-strategi", image: { src: placeholder("proj-2", { tone: "ink", width: 800, height: 600 }), alt: "AI-strategi" } },
  { title: "Sporet", category: "Governance", image: { src: placeholder("proj-3", { tone: "paper" }), alt: "Governance-ramme" } },
  { title: "Puls", category: "Automation", image: { src: placeholder("proj-4", { tone: "lime", width: 800, height: 600 }), alt: "Procesautomation" } },
];

export const processHeading = {
  eyebrow: "Sådan arbejder jeg",
  title: (
    <>
      En proces <Muted>der virker</Muted>
    </>
  ),
};

export const process = [
  { title: "Afklaring", text: "Vi finder de use-cases, der faktisk flytter noget, og tester antagelserne tidligt." },
  { title: "Arkitektur", text: "Data, integration og ansvar tegnes op, før der bygges — så løsningen kan skaleres." },
  { title: "Byg", text: "Små, sikre leverancer med målinger fra dag ét, tæt på dem der skal bruge det." },
  { title: "Forankring", text: "Drift, ejerskab og læring sættes i system, så effekten holder efter projektet." },
];

export const resultsHeading = {
  eyebrow: "Hvorfor mig",
  title: (
    <>
      Fokus på løsninger <Muted>der leverer resultater</Muted>
    </>
  ),
};

export const results = {
  stats: [
    { value: 7, suffix: "+", label: "Års erfaring", text: "Rådgivning, softwareudvikling og Forsvaret." },
    { value: 98, suffix: "%", label: "Kundetilfredshed", text: "Målt på tværs af leverancer siden 2021." },
  ] as [
    { value: number; suffix?: string; label: string; text?: string },
    { value: number; suffix?: string; label: string; text?: string },
  ],
  image: { src: placeholder("results-img", { tone: "ink", width: 700, height: 1000 }), alt: "Portræt" },
  rating: {
    value: 4.9,
    label: "1,8k+ tilfredse brugere",
    avatars: [placeholder("av-1", { tone: "lime", width: 80, height: 80 }), placeholder("av-2", { tone: "ink", width: 80, height: 80 }), placeholder("av-3", { tone: "paper", width: 80, height: 80 })],
  },
  quote: {
    quote: "Andreas oversatte et rodet systemlandskab til en klar plan, vi faktisk kunne eksekvere på.",
    name: "Mette Holm",
    role: "CIO",
    avatar: placeholder("av-4", { tone: "lime", width: 80, height: 80 }),
    rating: 5,
  },
  highlight: {
    title: "Hurtigt & pålideligt",
    text: "Korte iterationer, tydelig kommunikation og løsninger, der er bygget til drift.",
  },
};

export const testimonialsHeading = {
  eyebrow: "Kundeudtalelser",
  title: (
    <>
      Hvad mine <Muted>kunder siger</Muted>
    </>
  ),
  intro: "Gennemtænkte løsninger, der hjælper organisationer med at bruge AI ansvarligt og få reel effekt.",
};

export const testimonials: Testimonial[] = [
  { quote: "Andreas skabte en klar og intuitiv arkitektur, der passede til vores forretning. Hele forløbet var professionelt.", name: "Mette Holm", role: "CIO, Nordlys", avatar: placeholder("t-1", { tone: "lime", width: 80, height: 80 }) },
  { quote: "Den endelige løsning forbedrede vores beslutningsgrundlag markant og gav os et moderne, driftssikkert setup.", name: "Daniel Smith", role: "Produktchef, Kompas", avatar: placeholder("t-2", { tone: "ink", width: 80, height: 80 }) },
  { quote: "Fremragende kommunikation, hurtig levering og stor omhu. Kan varmt anbefales til ethvert AI-projekt.", name: "Olivia Harris", role: "Leder, Meridian", avatar: placeholder("t-3", { tone: "paper", width: 80, height: 80 }) },
  { quote: "Han forvandlede vores idéer til en poleret og funktionel løsning — og lærte os at drive den selv.", name: "Sophia Taylor", role: "Direktør, Fjordbank", avatar: placeholder("t-4", { tone: "lime", width: 80, height: 80 }) },
];

export const pricingHeading = {
  eyebrow: "Priser",
  title: (
    <>
      Enkle planer <Muted>til ethvert behov</Muted>
    </>
  ),
};

export const pricing: PricingOption[] = [
  {
    id: "monthly",
    label: "Månedlig",
    plan: {
      packageLabel: "Komplet pakke",
      packageName: "Løbende AI-rådgivning",
      details: [
        { label: "Leveringstid", value: "Løbende" },
        { label: "Revisioner", value: "Ubegrænset" },
        { label: "Format", value: "Workshops + doks" },
      ],
      priceLabel: "Månedlig betaling",
      price: "18.000",
      per: "måned",
      features: ["Op til 4 workshops om måneden", "Arkitekturreview", "Roadmap & prioritering", "Governance-sparring", "Slack-adgang", "Opsigelse måned til måned"],
      guarantee: { title: "Tilfredshedsgaranti", text: "Vi forpligter os til at levere rådgivning af høj kvalitet, der overgår forventningerne." },
      cta: { label: "Kom i gang", href: "#kontakt" },
    },
  },
  {
    id: "project",
    label: "Projektbaseret",
    plan: {
      packageLabel: "Projektpakke",
      packageName: "Afklaring til første leverance",
      details: [
        { label: "Leveringstid", value: "3–4 uger" },
        { label: "Revisioner", value: "Op til 2" },
        { label: "Format", value: "Rapport + prototype" },
      ],
      priceLabel: "Engangsbetaling",
      price: "45.000",
      per: "projekt",
      features: ["Use-case kortlægning", "Data- & integrationsdesign", "Proof of value", "Risikovurdering", "Implementeringsplan", "3 måneders support"],
      guarantee: { title: "Tilfredshedsgaranti", text: "Vi forpligter os til at levere løsninger af høj kvalitet, der overgår forventningerne." },
      cta: { label: "Kom i gang", href: "#kontakt" },
    },
  },
];

export const articlesHeading = {
  eyebrow: "Indsigter",
  title: (
    <>
      Seneste <Muted>indsigter</Muted>
    </>
  ),
  intro: "Udforsk tanker om AI, arkitektur og ansvarlighed i praksis.",
};

export const articles: Article[] = [
  { title: "Førstehåndsindtrykket afgør om AI bliver brugt", category: "AI-adoption", image: { src: placeholder("art-1", { tone: "lime", width: 1200, height: 750 }), alt: "" }, author: "Andreas Nørgaard", date: "12. jun. 2026" },
  { title: "Hvorfor integrationslaget er den skjulte AI-strategi", category: "Arkitektur", image: { src: placeholder("art-2", { tone: "ink", width: 800, height: 600 }), alt: "" }, author: "Andreas Nørgaard", date: "3. jun. 2026" },
  { title: "Governance uden bremseklods", category: "Ansvarlighed", image: { src: placeholder("art-3", { tone: "paper", width: 800, height: 600 }), alt: "" }, author: "Andreas Nørgaard", date: "21. maj 2026" },
];

export const faq = {
  eyebrow: "FAQ",
  title: (
    <>
      Ofte stillede <Muted>spørgsmål</Muted>
    </>
  ),
  items: [
    { question: "Hvilke ydelser tilbyder du?", answer: "AI-strategi, data- og integrationsarkitektur, governance samt modernisering og automation. Typisk som en kombination af rådgivning og hands-on design." },
    { question: "Hvordan ser en typisk proces ud?", answer: "Vi starter med en afklaring af use-cases og antagelser, tegner arkitekturen, bygger i små leverancer og forankrer drift og ejerskab til sidst." },
    { question: "Bliver jeg involveret undervejs?", answer: "Ja. Løsninger, der skal holde i driften, kræver dem, der skal bruge dem. Vi arbejder i korte iterationer med løbende feedback." },
    { question: "Hvad modtager jeg, når projektet er færdigt?", answer: "Dokumentation, arkitekturtegninger, prototyper og en plan for drift og videreudvikling — alt i formater I selv kan arbejde videre i." },
    { question: "Kan du arbejde med vores eksisterende systemer?", answer: "Det er reglen snarere end undtagelsen. De fleste forløb handler om at få mere ud af det landskab, der allerede er." },
  ] satisfies FaqItem[],
};

export const contact = {
  brand: "Andreas",
  eyebrow: "Skal vi tale sammen?",
  title: (
    <>
      Lad os skabe <Muted>noget sammen</Muted>
    </>
  ),
  highlight: {
    title: "Resultatdrevne løsninger",
    text: "Vi forfiner løsningen gennem feedback og test for at sikre den bedste oplevelse i drift.",
  },
  form: {
    heading: "Skriv til mig",
    name: "Navn",
    email: "E-mail",
    message: "Besked",
    submit: "Send besked",
  },
};

export const footer = {
  description: (
    <>
      Fokuseret på at skabe klare og anvendelige AI-løsninger, der forbinder strategi, data og drift — så <strong>organisationer kan handle</strong> med tillid.
    </>
  ),
  phone: { label: "(+45) 12 34 56 78", href: "tel:+4512345678" },
  email: { label: "hej@andreasnoergaard.dk", href: "mailto:hej@andreasnoergaard.dk" },
  newsletter: { title: "Nyhedsbrev", placeholder: "dig@firma.dk", button: "Tilmeld" },
  columns: [
    {
      title: "Navigation",
      links: [
        { label: "Hjem", href: "/an-ui" },
        { label: "Fokus", href: "#fokus" },
        { label: "Cases", href: "#cases" },
        { label: "Kontakt", href: "#kontakt" },
        { label: "Komponenter", href: "/an-ui/components" },
      ],
    },
    {
      title: "Socialt",
      links: [
        { label: "LinkedIn", href: "https://www.linkedin.com", external: true },
        { label: "GitHub", href: "https://github.com", external: true },
      ],
    },
  ],
  brand: "Andreas",
  copyright: "© 2026 Andreas Nørgaard · AI Solutions Architect",
};

export const achievements: Achievement[] = [
  { title: "Årets AI-arkitekt", meta: [{ label: "Anerkendelse", value: "Digital Awards" }, { label: "År", value: "2025" }] },
  { title: "Bedste integrationsløsning", meta: [{ label: "Anerkendelse", value: "IT-Branchen" }, { label: "År", value: "2024" }] },
  { title: "Excellence i governance", meta: [{ label: "Anerkendelse", value: "Dansk IT" }, { label: "År", value: "2024" }] },
  { title: "Moderniseringsprisen", meta: [{ label: "Anerkendelse", value: "Version2" }, { label: "År", value: "2023" }] },
];

export const statsRow = {
  trust: { avatars: results.rating.avatars, label: "4k+ stoler på mig", rating: 5 },
  stats: [
    { value: 150, label: "Vellykkede projekter", text: "Designet til organisationer i mange brancher." },
    { value: 7, suffix: "+", label: "Års erfaring", text: "Moderne og effektfokuserede løsninger." },
    { value: 80, label: "Kunder", text: "Samarbejde med startups, koncerner og det offentlige." },
  ],
};

export const infoCards = [
  { label: "Adresse", value: <>Nørregade 12, 1.<br />9000 Aalborg</> },
  { label: "Åbningstider", value: "Dagligt 08–17" },
  { label: "Telefon", value: "(+45) 12 34 56 78", href: "tel:+4512345678" },
  { label: "E-mail", value: "hej@andreasnoergaard.dk", href: "mailto:hej@andreasnoergaard.dk" },
];
