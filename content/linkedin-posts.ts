/**
 * Curated LinkedIn posts shown in the "Seneste indlæg" section.
 *
 * Newest first. The first entry is featured. To add a post: copy the hook and
 * the opening paragraphs, set the date, and paste the post permalink into
 * `href` (or leave the activity feed URL until you have it).
 */
export type LinkedInPost = {
  /** ISO date, e.g. "2026-09-14". */
  date: string;
  /** Short theme label shown in the card meta row. */
  tag: string;
  /** The opening line of the post. */
  hook: string;
  /** Opening paragraphs after the hook. Keep it to what fits a card. */
  paragraphs: string[];
  /** Link to the post itself, or to the activity feed. */
  href: string;
};

export const LINKEDIN_ACTIVITY_URL = "https://www.linkedin.com/in/atnoergaard/recent-activity/all/";

export const linkedinPosts: LinkedInPost[] = [
  {
    date: "2026-09-14",
    tag: "AI-debatten",
    hook: "Jeg kan efterhånden læse to opslag om AI og nå at forberede mig på både civilisationens undergang og en forestående børsnotering, inden jeg får kvælt den første kop kaffe.",
    paragraphs: [
      "Den ene mener, at vi slet ikke forstår, hvad der er på vej. Den anden mener, at det hele passer mistænkeligt godt med, at nogen snart skal sælge aktier.",
      "Når folk omkring de store AI-labs udtaler sig, har jeg derfor lidt svært ved at skelne mellem teknisk indsigt, oprigtig bekymring og en god salgstale. Det kan selvfølgelig også være lidt af det hele.",
      "Jeg synes bare, det er lidt finurligt, når dem, der puster mest til ilden, også har en brandslukker til salg…",
    ],
    href: LINKEDIN_ACTIVITY_URL,
  },
  {
    date: "2026-09-11",
    tag: "Ledelse & fundament",
    hook: "“AI er en ledelsesbeslutning.”",
    paragraphs: [
      "Det er en groft forsimplet formulering, der gør det alt for nemt at pege opad, når AI-adoptionen ikke udvikler sig som forventet.",
      "Bag de fleste AI-løsninger ligger en række mindre synlige valg om integrationer, masterdata, data warehouse, governance og orkestrering. Her gemmer en stor del af arbejdet, omkostningerne og usikkerheden sig.",
      "Ledelsen behøver ikke kende forskellen på Kafka, Fabric og Snowflake. Den skal kunne se, hvad ambitionen kræver af data, systemer, kompetencer og investeringer.",
    ],
    href: LINKEDIN_ACTIVITY_URL,
  },
  {
    date: "2026-09-09",
    tag: "FÆLLES AI Implementering",
    hook: "I en verden, hvor AI fylder mere og mere i vores tekstuelle og visuelle videndeling, er det virkelig opfriskende at se nogen samle en hel konference med tusch på papir.",
    paragraphs: [
      "I mit oplæg tog jeg fat på den infrastruktur, som AI skal spille sammen med: integration, masterdata, datawarehouse, governance og orkestrering.",
      "Jeg præsenterede fire tilgange til at bygge fundamentet: én samlet platform, best-of-breed, egenudvikling og hybrid. Hver med sine kompromiser på hastighed, kontrol, omkostninger og leverandørafhængighed.",
    ],
    href: LINKEDIN_ACTIVITY_URL,
  },
];
