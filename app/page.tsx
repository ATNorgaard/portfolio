import { ScrollExperience } from "./ScrollExperience";
import { SplitWords } from "./SplitWords";
import { linkedinPosts, LINKEDIN_ACTIVITY_URL } from "../content/linkedin-posts";

const postDate = new Intl.DateTimeFormat("da-DK", { day: "numeric", month: "long", year: "numeric" });

const capabilities = [
  {
    number: "01",
    title: "AI-retning & eksekvering",
    text: "Fra nøgtern vurdering af muligheder til løsninger, der virker i den daglige drift. Jeg forbinder strategi, prioritering og teknisk eksekvering.",
  },
  {
    number: "02",
    title: "Data- & integrationsarkitektur",
    text: "Robuste dataflows og integrationsmønstre, der reducerer kompleksitet og gør nye digitale initiativer lettere at skalere.",
  },
  {
    number: "03",
    title: "Governance & ansvarlighed",
    text: "Klare rammer for ejerskab, kvalitet, sikkerhed og sporbarhed, så innovation kan ske med tillid og uden at miste kontrollen.",
  },
  {
    number: "04",
    title: "Modernisering & automation",
    text: "Pragmatiske forbedringer af processer og systemlandskaber med fokus på mindre friktion, lavere afhængighed og bedre beslutninger.",
  },
];

const cases = [
  {
    tag: "Arkitektur",
    title: "En fælles integrationsrygrad",
    text: "Et fragmenteret systemlandskab blev samlet omkring fælles datamodeller, tydelige kontrakter og genbrugelige integrationsmønstre. Det skabte et mere stabilt fundament for både drift, analyse og nye AI-initiativer.",
  },
  {
    tag: "Adoption",
    title: "AI fra eksperiment til praksis",
    text: "En organisation blev hjulpet fra spredte enkeltforsøg til en fælles, ansvarlig AI-praksis med relevante use cases, guardrails, træning og løbende fokus på den reelle effekt.",
  },
  {
    tag: "Generativ AI",
    title: "Hurtigere vej til de rette kompetencer",
    text: "En AI-understøttet løsning gjorde det lettere at sammenholde komplekse behov med tilgængelige kompetencer og gav beslutningstagere et bedre grundlag for at handle hurtigt.",
  },
  {
    tag: "Computer vision",
    title: "Maskinsyn i bevægelse",
    text: "Computer vision og robotstyring blev kombineret, så varierende objekter kunne identificeres, analyseres og håndteres adaptivt i et miljø med høje krav til præcision og tempo.",
  },
  {
    tag: "Optimering",
    title: "Data, energi og bedre timing",
    text: "En kompleks optimeringsmodel blev gjort mere anvendelig og robust ved at koble energipriser, vejrdata og drift sammen i en løsning, der balancerede økonomi, komfort og miljøhensyn.",
  },
  {
    tag: "Modernisering",
    title: "Nyt liv til kritiske systemer",
    text: "Ældre forretningskritiske løsninger blev moderniseret med en klarere arkitektur, bedre brugeroplevelse og et fundament, der kunne udvikles videre uden at sætte den eksisterende drift over styr.",
  },
];

const experience = [
  {
    years: "2025 — nu",
    company: "Combine A/S",
    role: "AI-Lead",
    text: "Retning og levering på tværs af AI, data, arkitektur og forretningsudvikling — fra de første ledelsesdialoger til løsninger i drift.",
  },
  {
    years: "2021 — 2025",
    company: "DIS / CREADIS",
    role: "Consulting Software Engineer",
    text: "Rådgivning og udvikling af digitale løsninger inden for AI, software, cloud, IoT, automation og modernisering.",
  },
  {
    years: "2018 — 2019",
    company: "Elgiganten",
    role: "Sælger, AV & IT",
    text: "Teknisk rådgivning og salg med fokus på at oversætte behov til konkrete valg for kunden.",
  },
  {
    years: "2014 — 2016",
    company: "Forsvaret",
    role: "Sanitetssoldat",
    text: "Ansvar, ro og handlekraft i situationer, hvor samarbejde og gode beslutninger er afgørende.",
  },
];

export default function Home() {
  return (
    <main>
      <ScrollExperience />
      <a className="skip-link" href="#main-content">
        Gå til indhold
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Andreas Nørgaard, forsiden">
          AN<span>/</span>
        </a>
        <nav aria-label="Primær navigation">
          <a href="#om">Om</a>
          <a href="#fokus">Fokus</a>
          <a href="#erfaring">Erfaring</a>
          <a href="#projekter">Projekter</a>
          <a href="#vaerktoej">Værktøj</a>
          <a href="#indlaeg">Indlæg</a>
        </nav>
        <a className="header-contact" href="#kontakt" data-magnetic>
          Sig hej <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy" id="main-content">
          <p className="eyebrow">AI · DATA · ARKITEKTUR</p>
          <h1 id="hero-title">
            <SplitWords text={"Jeg gør AI\n*anvendelig* i\nvirkeligheden."} />
          </h1>
          <p className="hero-intro">
            Jeg hjælper virksomhedsledere med at skelne mellem støj og reelle skift — og
            omsætter beslutninger til data, arkitektur og løsninger, der kan drives.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#projekter" data-magnetic>
              Se udvalgte projekter <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link light" href="mailto:atnoergaard@gmail.com">
              Start en samtale <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="hero-location">Aalborg · Danmark · Arbejder globalt</p>
        </div>

        <figure className="hero-portrait">
          <img
            src="/andreas-portrait.webp"
            alt="Sort-hvidt portræt af Andreas Nørgaard"
            width="1344"
            height="1792"
          />
          <figcaption>
            <span>Andreas Nørgaard</span>
            <span>AI Solutions Architect</span>
          </figcaption>
        </figure>
        <div className="scroll-cue" aria-hidden="true">
          <span>Scroll</span>
          <i />
        </div>
      </section>

      <div className="motion-band" aria-hidden="true">
        <div>
          <span>AI-STRATEGI</span><i>•</i><span>DATAARKITEKTUR</span><i>•</i>
          <span>ANSVARLIG ADOPTION</span><i>•</i><span>EKSEKVERING</span><i>•</i>
          <span>AI-STRATEGI</span><i>•</i><span>DATAARKITEKTUR</span><i>•</i>
          <span>ANSVARLIG ADOPTION</span><i>•</i><span>EKSEKVERING</span><i>•</i>
        </div>
      </div>

      <section className="section about" id="om" aria-labelledby="about-title">
        <div className="section-label" data-reveal="left">
          <span>01</span>
          <p>Om mig</p>
        </div>
        <div className="about-content" data-skew>
          <h2 id="about-title" data-reveal="words">
            <SplitWords text={"Teknologi skal kunne\n*forklares*, før den kan skaleres."} />
          </h2>
          <div className="about-columns stagger-group">
            <p data-reveal="up">
              Der sker utroligt meget inden for AI. Det meste fortjener hverken hypen eller
              frygten. Jeg arbejder tæt nok på teknologien til at se forskel på et reelt skift
              og endnu en bølge af støj.
            </p>
            <p data-reveal="up">
              Min rolle er at skabe det overblik, ledere har brug for — og bygge bro mellem
              forretningsbehov, data, arkitektur og de teams, der skal få forandringen til at
              fungere i praksis.
            </p>
          </div>
          <aside className="princip" aria-label="Arbejdsprincip" data-reveal="scale" data-parallax="18">
            <span>Mit arbejdsprincip</span>
            <p>Forretningen først. Teknologien med. Ingen hype.</p>
          </aside>
        </div>
      </section>

      <section className="section capabilities" id="fokus" aria-labelledby="capabilities-title" data-spotlight>
        <div className="section-label light-label" data-reveal="left">
          <span>02</span>
          <p>Fokus</p>
        </div>
        <div className="capabilities-content" data-skew>
          <div className="section-heading-row">
            <h2 id="capabilities-title" data-reveal="words">
              <SplitWords text="Fra ambition til drift." />
            </h2>
            <p data-reveal="up">
              Jeg bevæger mig mellem ledelsesrummet og det tekniske maskinrum — med blik for
              både retning, realisme og eksekvering.
            </p>
          </div>
          <div className="capability-list stagger-group">
            {capabilities.map((item) => (
              <article className="capability-item" key={item.number} data-reveal="cascade">
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section experience" id="erfaring" aria-labelledby="experience-title">
        <div className="section-label" data-reveal="left">
          <span>03</span>
          <p>Erfaring</p>
        </div>
        <div className="experience-content" data-skew>
          <div className="section-heading-row dark-text">
            <h2 id="experience-title" data-reveal="words">
              <SplitWords text="Teknisk dybde. Forretningsmæssigt udsyn." />
            </h2>
            <p data-reveal="up">
              En baggrund fra rådgivning, softwareudvikling, salg og Forsvaret har lært mig at
              gøre komplekse situationer håndterbare — og få forskellige fagligheder til at
              arbejde mod samme mål.
            </p>
          </div>
          <div className="timeline stagger-group">
            {experience.map((item) => (
              <article className="timeline-item" key={item.years} data-reveal="cascade">
                <p className="timeline-years">{item.years}</p>
                <div>
                  <h3>{item.company}</h3>
                  <p className="timeline-role">{item.role}</p>
                </div>
                <p className="timeline-text">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="education-strip stagger-group" data-parallax="14">
            <div data-reveal="scale">
              <span>Uddannelse</span>
              <strong>MSc, Biomedical Engineering & Informatics</strong>
              <p>Aalborg Universitet · 2016 — 2021</p>
            </div>
            <div data-reveal="scale">
              <span>Udvalgte certificeringer</span>
              <strong>Azure AI Fundamentals · Azure Fundamentals</strong>
              <p>Suppleret med Scrum Master og cybersikkerhed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section projects" id="projekter" aria-labelledby="projects-title" data-spotlight>
        <div className="section-label light-label" data-reveal="left">
          <span>04</span>
          <p>Udvalgte projekter</p>
        </div>
        <div className="projects-content" data-skew>
          <div className="section-heading-row">
            <h2 id="projects-title" data-reveal="words">
              <SplitWords text="Komplekse problemer. Klare bevægelser." />
            </h2>
            <p data-reveal="up">
              Et udvalg af anonymiserede opgaver. Detaljerne varierer, men mønstret er det
              samme: forstå problemet, skab retning og byg noget, organisationen kan bære.
            </p>
          </div>
          <div className="case-grid stagger-group">
            {cases.map((item, index) => (
              <article className="case-card" key={item.title} data-reveal="card" data-tilt>
                <div className="case-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{item.tag}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <a
            className="tool-feature"
            id="vaerktoej"
            href="https://loesningsbygger.anconsult.app"
            target="_blank"
            rel="noreferrer"
            data-reveal="card"
          >
            <div className="tool-copy">
              <div className="case-meta">
                <span>Værktøj</span>
                <span>Live</span>
              </div>
              <h3>Løsningsbygger</h3>
              <p>
                Et letvægtsværktøj til samtalen mellem ledelse og teknikere om en data- og
                AI-løsning. Seks lag, 31 teknologier, seks AI-behov og en regelmotor, der
                oversætter valg til beslutninger med ejer. Prøv det selv, og del løsningen med
                et link.
              </p>
            </div>
            <span className="button button-light" data-magnetic>
              Åbn Løsningsbygger <span aria-hidden="true">↗</span>
            </span>
          </a>

          <p className="tool-more" data-reveal="left">
            <a className="text-link" href="/vaerktoejer">
              Se alle værktøjer <span aria-hidden="true">→</span>
            </a>
          </p>
        </div>
      </section>

      <section className="section posts" id="indlaeg" aria-labelledby="posts-title">
        <div className="section-label" data-reveal="left">
          <span>05</span>
          <p>Seneste indlæg</p>
        </div>
        <div className="posts-content" data-skew>
          <div className="section-heading-row dark-text">
            <h2 id="posts-title" data-reveal="words">
              <SplitWords text="Tanker fra feedet." />
            </h2>
            <p data-reveal="up">
              Jeg skriver jævnligt på LinkedIn om AI, data og det, der sker mellem
              ledelsesbeslutningen og teknikken. Her er de seneste.
            </p>
          </div>
          <div className="post-grid stagger-group">
            {linkedinPosts.map((post, index) => (
              <article
                className={index === 0 ? "post-card post-featured" : "post-card"}
                key={post.date + post.tag}
                data-reveal="card"
              >
                <div className="case-meta">
                  <span>{post.tag}</span>
                  <time dateTime={post.date}>{postDate.format(new Date(post.date))}</time>
                </div>
                <h3>{post.hook}</h3>
                <div className="post-body">
                  {post.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
                <a className="text-link post-link" href={post.href} target="_blank" rel="noreferrer">
                  Læs på LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
          <a
            className="text-link posts-all"
            href={LINKEDIN_ACTIVITY_URL}
            target="_blank"
            rel="noreferrer"
            data-reveal="up"
          >
            Se alle indlæg på LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="contact" id="kontakt" aria-labelledby="contact-title">
        <p className="eyebrow" data-reveal="up">EN GOD SAMTALE ER ET GODT STED AT STARTE</p>
        <h2 id="contact-title" data-reveal="words">
          <SplitWords text={"Skal vi gøre det\nkomplekse *klart?*"} />
        </h2>
        <p className="contact-intro" data-reveal="up">
          Jeg er altid åben for en nysgerrig samtale om AI, data, arkitektur og det, der skal
          til for at skabe reel bevægelse.
        </p>
        <div className="contact-links" data-reveal="line">
          <a href="mailto:atnoergaard@gmail.com">atnoergaard@gmail.com ↗</a>
          <a href="tel:+4527246784">+45 27 24 67 84 ↗</a>
          <a href="https://www.linkedin.com/in/atnoergaard" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#top" aria-label="Tilbage til toppen">
          AN<span>/</span>
        </a>
        <p>Andreas Nørgaard · AI Solutions Architect</p>
        <a href="#top">Til toppen ↑</a>
      </footer>
    </main>
  );
}
