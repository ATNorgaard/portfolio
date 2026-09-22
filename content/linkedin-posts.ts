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
    date: "2026-09-22",
    tag: "Modeltest",
    hook: "Hele mit feed har i en uge delt den samme sætning: “Modellen kan ikke hallucinere”.",
    paragraphs: [
      "Det er noget af et løfte at give på vegne af en maskine.",
      "Så jeg brugte et par aftener på at bygge et testmiljø, hvor Jev og Opus 5 fik nøjagtig de samme sager, de samme spørgsmål og den samme facitliste.",
      "Modellen kan ikke svare uden for de svarmuligheder, du selv har defineret. Den kan til gengæld udmærket vælge det forkerte af dem. I denne test skete det én gang, med 95 procents sikkerhed.",
    ],
    href: LINKEDIN_ACTIVITY_URL,
  },
  {
    date: "2026-09-20",
    tag: "Hverdags-AI",
    hook: "Kære store AI-labs.",
    paragraphs: [
      "Kunne vi få almindelig hushjælp lidt længere op på jeres roadmap? Gerne et sted før menneskehedens potentielle undergang.",
      "Jeg sidder her på stuegulvet og tænker, at der må være en ganske fornuftig forretning i AI, der samler legetøj op, lægger vasketøj sammen og finder ud af, hvad der lugter i køleskabet.",
      "Jeg stiller gerne mit hjem til rådighed som testmiljø. Børnene sørger løbende for nye variationer, så I skal heller ikke bekymre jer om at løbe tør for træningsdata.",
    ],
    href: LINKEDIN_ACTIVITY_URL,
  },
  {
    date: "2026-09-18",
    tag: "Ledelse & praksis",
    hook: "Topledelsen har ambitionerne for AI. Domæneeksperterne skal få dem til at fungere i praksis.",
    paragraphs: [
      "Begge parter har travlt, og begge er afgørende for vækst og drift. Men ambitionerne tager ikke altid højde for hverdagen, og erfaringerne fra hverdagen når ikke altid frem til dem, der sætter retningen.",
      "Jeg tror, vi nogle gange forveksler manglende fremdrift med manglende motivation. For dem, der får tandhjulene til at dreje, betyder AI i første omgang ofte mere arbejde.",
      "Derfor tror jeg, at en af de vigtigste roller i AI lige nu er den, der kan sætte sig mellem topledelsen og domæneeksperterne.",
    ],
    href: LINKEDIN_ACTIVITY_URL,
  },
];
