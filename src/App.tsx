import { useEffect, useState, type FormEvent } from "react";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { clientMarks, divisions, projects, team, values, type Project } from "./content";

const emailAddress = "Jacob@agoentle.co.za";
const phoneNumber = "082 534 2679";

function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`brand-mark ${className}`}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Ago Entle architectural mark"
    >
      <path d="M7 56V8h50v48H7Z" />
      <path d="M17 56V19h30v37" />
      <path d="M27 56V30h10v26" />
      <path d="M7 8 32 30 57 8" />
    </svg>
  );
}

function ArchitecturalArt({ className }: { className: string }) {
  return (
    <div className={className} aria-hidden="true">
      <div className="page-hero-grid" />
      <div className="page-hero-arch page-arch-outer"><span /></div>
      <div className="page-hero-arch page-arch-mid"><span /></div>
      <div className="page-hero-arch page-arch-inner" />
      <Mark className="page-intro-mark" />
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <header className="site-header">
      <Link to="/" className="wordmark" aria-label="Ago Entle Group home">
        <Mark />
        <span>
          AGO ENTLE <small>GROUP</small>
        </span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span>{menuOpen ? "Close" : "Menu"}</span>
        <span className={`menu-icon ${menuOpen ? "is-open" : ""}`} aria-hidden="true">
          <i />
          <i />
        </span>
      </button>
      <nav
        id="primary-navigation"
        className={`primary-nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Main navigation"
      >
        <NavLink to="/about">About</NavLink>
        <NavLink to="/expertise">Expertise</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/people">People</NavLink>
        <Link className="nav-contact" to="/contact">
          Start a project <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <Link to="/" className="footer-lockup">
        <Mark />
        <span>AGO ENTLE GROUP</span>
      </Link>
      <p>Built with Excellence. Led with Purpose.</p>
      <div className="footer-links">
        <Link to="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
        <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
        <a href="tel:+27825342679">{phoneNumber}</a>
      </div>
      <small>South Africa · © {new Date().getFullYear()} Ago Entle Group</small>
    </footer>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow"><span />{children}</p>;
}

function ArrowLink({
  to,
  children,
  light = false,
}: {
  to: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link className={`arrow-link ${light ? "arrow-link-light" : ""}`} to={to}>
      <span>{children}</span><b aria-hidden="true">↗</b>
    </Link>
  );
}

function DivisionList({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`division-list ${compact ? "division-list-compact" : ""}`}>
      {divisions.map((division) => (
        <Link
          to={`/expertise/${division.slug}`}
          className={`division-row ${division.tone}`}
          key={division.slug}
        >
          <span className="division-index">{division.number}</span>
          <span className="division-title">{division.name}</span>
          <span className="division-descriptor">{division.descriptor}</span>
          <span className="row-arrow" aria-hidden="true">↗</span>
        </Link>
      ))}
    </div>
  );
}

function ProjectTile({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className={`project-tile project-tile-${index % 3}`}
      aria-label={`${project.client}: ${project.title}. View project`}
    >
      <div className="project-art">
        <img className={`project-image-${project.imageFit}`} src={project.image} alt={project.imageAlt} loading="lazy" />
        <span className="art-index" aria-hidden="true">AE — {String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="project-caption">
        <div><span className="project-category">{project.category}</span><h3>{project.title}</h3></div>
        <span className="project-arrow" aria-hidden="true">↗</span>
      </div>
    </Link>
  );
}

function SelectedWork({ limit }: { limit?: number }) {
  const items = (limit ? projects.filter((project) => project.featured).slice(0, limit) : projects);
  return (
    <div className="project-grid">
      {items.map((project, index) => <ProjectTile project={project} index={index} key={project.slug} />)}
    </div>
  );
}

function ClientGallery({ layout }: { layout: "marquee" | "grid" }) {
  const categories = ["Events & PR", "Web Design"];

  return (
    <div className={`client-mark-groups client-mark-groups-${layout}`}>
      {categories.map((category, categoryIndex) => {
        const clients = clientMarks.filter((client) => client.category === category);
        return (
          <section className="client-mark-group" key={category} aria-label={`${category} clients`}>
            <h3>{category}</h3>
            {layout === "marquee" ? (
              <div className="client-marquee" aria-label={`${category} partners and clients`}>
                <div className={`client-marquee-track ${categoryIndex === 1 ? "client-marquee-reverse" : ""}`}>
                  {[0, 1].map((copy) => (
                    <div className="client-marquee-sequence" aria-hidden={copy === 1} key={copy}>
                      {clients.map((client) => (
                        <div className="client-logo" key={client.name}>
                          <img src={client.image} alt="" loading="lazy" />
                          <span>{client.name}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="client-names">
                {clients.map((client) => (
                  <div className="client-logo" key={client.name}>
                    <img src={client.image} alt="" loading="lazy" />
                    <span>{client.name}</span>
                  </div>
                ))}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-copy">
            <Eyebrow>Independent by nature. Connected by purpose.</Eyebrow>
            <h1>We don't just<br />create. We <em>build</em><br />what matters.</h1>
            <div className="hero-bottom">
              <p>From powerful narratives to unforgettable experiences, we turn bold ideas into brands, platforms and moments that leave a lasting impact.</p>
              <div className="hero-actions">
                <ArrowLink to="/work" light>Explore our work</ArrowLink>
                <ArrowLink to="/about" light>Discover the group</ArrowLink>
              </div>
            </div>
          </div>
          <div className="hero-architecture" aria-hidden="true">
            <div className="hero-grid" />
            <div className="hero-arch arch-outer"><span /></div>
            <div className="hero-arch arch-mid"><span /></div>
            <div className="hero-arch arch-inner" />
            <Mark className="hero-mark" />
            <div className="hero-coordinate">25°44' S<br />28°11' E</div>
            <div className="hero-caption">A house for ideas<br />built to go further.</div>
          </div>
          <div className="hero-scroll"><span />Scroll to explore</div>
          <span className="hero-side-label">STRATEGY / CREATIVITY / IMPACT</span>
        </section>

        <section className="manifesto section-wrap" id="philosophy">
          <div className="manifesto-intro">
            <Eyebrow>01 / What the name means</Eyebrow>
            <p>Our name is our way of seeing the world.</p>
          </div>
          <div className="meaning-grid">
            <article className="meaning-block">
              <span className="meaning-number">01</span>
              <h2>AGO<span>.</span></h2>
              <p>To build.</p>
              <div className="meaning-lines" aria-hidden="true"><i /><i /><i /></div>
            </article>
            <article className="meaning-block meaning-entle">
              <span className="meaning-number">02</span>
              <h2>ENTLE<span>.</span></h2>
              <p>Beautiful.</p>
              <div className="meaning-lines" aria-hidden="true"><i /><i /><i /></div>
            </article>
          </div>
          <div className="manifesto-foot">
            <span>Built with Excellence.</span>
            <span>Led with Purpose.</span>
          </div>
        </section>

        <section className="disciplines section-wrap">
          <div className="section-heading">
            <div><Eyebrow>02 / What we bring together</Eyebrow><h2>Four disciplines.<br /><em>One vision.</em></h2></div>
            <p>Different ways of making progress. One connected team to make it real.</p>
          </div>
          <DivisionList />
          <ArrowLink to="/expertise">Explore all expertise</ArrowLink>
        </section>

        <section className="work-section section-wrap">
          <div className="section-heading work-heading">
            <div><Eyebrow>03 / Selected work</Eyebrow><h2>The work<br />speaks<span>.</span></h2></div>
            <p>Real partnerships. Ambitious briefs. Work made to travel further than the moment.</p>
          </div>
          <SelectedWork limit={3} />
          <p className="project-image-note">Project visuals are matched to the corresponding entries in the supplied company profile.</p>
          <div className="work-footer"><span>01 — 03 / SELECTED PROJECTS</span><ArrowLink to="/work" light>View all work</ArrowLink></div>
        </section>

        <section className="impact-section">
          <div className="impact-orbit" aria-hidden="true"><Mark /></div>
          <div className="impact-inner">
            <Eyebrow>04 / Proof in the doing</Eyebrow>
            <h2>Impact isn't<br /><em>an accident.</em></h2>
            <p className="impact-intro">A few measures from work where the brief and the outcome are clear.</p>
            <div className="impact-stats">
              <article><strong>R300<span>m</span></strong><p>Campaign budget managed<br /><small>MTN SA — Summer Campaign Launch</small></p></article>
              <article><strong>R700<span>m+</span></strong><p>Advertising value equivalent reported<br /><small>SAMA30 — Nominee Announcements</small></p></article>
              <article><strong>R2<span>m</span></strong><p>Media coverage within one week<br /><small>Kolisi Foundation × Kellogg's</small></p></article>
            </div>
            <p className="impact-note">Figures are reported in the company profile and are attributed to the named projects.</p>
          </div>
        </section>

        <section className="clients-section section-wrap">
          <div className="client-head"><Eyebrow>05 / In good company</Eyebrow><h2>Built alongside<br />good people.</h2></div>
          <ClientGallery layout="marquee" />
          <p className="client-note">Selected partners and clients from the profile's Events &amp; PR and Web Design pages.</p>
        </section>

        <section className="team-preview section-wrap">
          <div className="team-preview-copy"><Eyebrow>06 / People with purpose</Eyebrow><h2>Built by people.<br /><em>Made for people.</em></h2><p>A multidisciplinary team working across strategy, production, media and design.</p><ArrowLink to="/people">Meet the team</ArrowLink></div>
          <div className="team-names">
            {team.map((person, index) => <div key={person.name}><span>0{index + 1}</span><p>{person.name}</p><small>{person.role}</small></div>)}
          </div>
        </section>

        <section className="closing-cta">
          <Mark className="closing-mark" />
          <Eyebrow>Ready when you are</Eyebrow>
          <h2>Great things are<br /><em>built together.</em></h2>
          <p>Have a vision worth bringing to life? Let's build something meaningful.</p>
          <div className="cta-actions"><ArrowLink to="/contact" light>Start a project</ArrowLink><ArrowLink to="/contact" light>Get in touch</ArrowLink></div>
        </section>
      </main>
    </>
  );
}

function PageIntro({ label, title, copy }: { label: string; title: React.ReactNode; copy: string }) {
  return (
    <section className="page-intro">
      <ArchitecturalArt className="page-architecture" />
      <Eyebrow>{label}</Eyebrow>
      <h1>{title}</h1>
      <p>{copy}</p>
    </section>
  );
}

function About() {
  return (
    <main>
      <PageIntro label="The house / About the group" title={<>A name with<br /><em>a purpose.</em></>} copy="Ago means building. Entle means beautiful. Together, they describe the work we believe in: purposeful construction, made with care." />
      <section className="about-story section-wrap">
        <Eyebrow>Our story</Eyebrow>
        <div><h2>We build the things<br />that move <em>people.</em></h2><p>Ago Entle Group is a South African multidisciplinary creative and strategic partner. We bring media, experiences, branding and consulting together to help ambitious ideas become meaningful work.</p><p>Our mission is to deliver high-impact services and experiences through bold thinking, creative execution and lasting impact. Our vision is to become one of Africa's most influential creative and strategic groups.</p></div>
      </section>
      <section className="values-section">
        <div className="section-wrap values-inner"><div><Eyebrow>What guides us</Eyebrow><h2>Principles in<br /><em>practice.</em></h2></div><div className="values-list">{values.map((value, i) => <div key={value}><span>0{i + 1}</span><h3>{value}</h3><span aria-hidden="true">↗</span></div>)}</div></div>
      </section>
      <section className="section-wrap about-divisions"><Eyebrow>How we make it happen</Eyebrow><h2>One group.<br /><em>Four ways forward.</em></h2><DivisionList compact /></section>
      <section className="about-clients section-wrap">
        <div className="section-heading">
          <div><Eyebrow>Partners &amp; clients</Eyebrow><h2>In good<br /><em>company.</em></h2></div>
          <p>A selection of names and marks featured in the company profile.</p>
        </div>
        <ClientGallery layout="grid" />
      </section>
      <CTA />
    </main>
  );
}

function Expertise() {
  return (
    <main>
      <PageIntro label="The house / Expertise" title={<>Four ways<br />to <em>build.</em></>} copy="The right mix of strategic thinking and hands-on delivery, shaped around what your ambition needs." />
      <section className="expertise-page-list section-wrap"><Eyebrow>Our disciplines</Eyebrow>{divisions.map((division) => <article className={`expertise-detail ${division.tone}`} key={division.slug}><div><span>{division.number} / DISCIPLINE</span><h2>{division.name}</h2><p className="expertise-descriptor">{division.descriptor}</p></div><div><p>{division.description}</p><ul>{division.services.map((service) => <li key={service}>{service}</li>)}</ul><ArrowLink to={`/expertise/${division.slug}`}>Explore division</ArrowLink></div></article>)}</section>
      <CTA />
    </main>
  );
}

function DivisionPage() {
  const { slug } = useParams();
  const division = divisions.find((item) => item.slug === slug);
  if (!division) return <NotFound />;
  return (
    <main>
      <PageIntro label={`Expertise / ${division.number}`} title={<>{division.name.replace("Ago Entle ", "")}<br /><em>{division.descriptor}</em></>} copy={division.description} />
      <section className={`division-page section-wrap ${division.tone}`}><Eyebrow>What we do</Eyebrow><h2>Ideas into<br /><em>action.</em></h2><ul className="service-list">{division.services.map((service, index) => <li key={service}><span>0{index + 1}</span>{service}<span aria-hidden="true">↗</span></li>)}</ul></section>
      <section className="section-wrap related-work"><div className="section-heading"><div><Eyebrow>Selected projects</Eyebrow><h2>Made to<br /><em>matter.</em></h2></div><p>See how our work brings ideas into the world.</p></div><SelectedWork limit={3} /><ArrowLink to="/work">Explore all work</ArrowLink></section>
      <CTA />
    </main>
  );
}

function Work() {
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(projects.map((project) => project.category))];
  const filtered = projects.filter((project) => category === "All" || project.category === category);
  return (
    <main>
      <PageIntro label="The house / Selected work" title={<>The work<br /><em>speaks.</em></>} copy="A selection of the ideas, partnerships and experiences we've helped bring to life." />
      <section className="work-page section-wrap">
        <p className="project-image-note">Project visuals are matched to the corresponding entries in the supplied company profile.</p>
        <div className="filter-bar" aria-label="Filter projects">
          <span>Filter by discipline</span>
          <div>{categories.map((item) => <button type="button" className={category === item ? "active" : ""} aria-pressed={category === item} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div>
        </div>
        <p className="results-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? "project" : "projects"}</p>
        <SelectedWorkItems items={filtered} />
      </section>
      <CTA />
    </main>
  );
}

function SelectedWorkItems({ items }: { items: Project[] }) {
  return <div className="project-grid">{items.map((project, index) => <ProjectTile project={project} index={index} key={project.slug} />)}</div>;
}

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFound />;
  return (
    <main>
      <PageIntro label={`Selected work / ${project.category}`} title={<>{project.client}<br /><em>{project.title}</em></>} copy={project.summary} />
      <section className="project-detail section-wrap">            <div className="project-detail-art"><img className={`project-image-${project.imageFit}`} src={project.image} alt={project.imageAlt} /><span>{project.client}</span></div><div className="project-detail-copy"><Eyebrow>Project overview</Eyebrow><h2>Built for<br /><em>the moment.</em></h2><p>{project.summary}</p>{project.outcome && <div className="project-outcome"><span>Reported outcome</span><strong>{project.outcome}</strong></div>}<p className="project-disclaimer">Project detail is based on information available in the company profile. Further case-study detail can be added when confirmed.</p></div></section>
      <section className="section-wrap related-work"><Eyebrow>Continue exploring</Eyebrow><h2>More work<br /><em>in motion.</em></h2><SelectedWork limit={3} /><ArrowLink to="/work">Back to all work</ArrowLink></section>
      <CTA />
    </main>
  );
}

function People() {
  return (
    <main>
      <PageIntro label="The house / People" title={<>The people<br />behind the <em>purpose.</em></>} copy="A multidisciplinary team building across content, production, media, strategy, project management and design." />
      <section className="people-section section-wrap"><Eyebrow>Leadership & team</Eyebrow><div className="people-grid">{team.map((person, index) => <article className="person-tile" key={person.name}><div className="person-art"><img src={person.image} alt={`Portrait of ${person.name}`} loading="lazy" /><span aria-hidden="true">AE / 0{index + 1}</span></div><div><h2>{person.name}</h2><p>{person.role}</p></div></article>)}</div></section>
      <CTA />
    </main>
  );
}

function Contact() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Project enquiry from ${String(form.get("name"))}`;
    const body = [
      `Name: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `Company / organisation: ${form.get("company") || "Not provided"}`,
      `Service of interest: ${form.get("service") || "Not specified"}`,
      `Budget range: ${form.get("budget") || "Not provided"}`,
      "",
      "Project description:",
      String(form.get("description")),
    ].join("\n");
    setMessage("Your email app should open with your enquiry. Nothing is sent until you review and send it there.");
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main>
      <PageIntro label="The house / Contact" title={<>Let's build<br /><em>something good.</em></>} copy="Tell us what you're imagining. We'll start with a conversation." />
      <section className="contact-section section-wrap">
        <div className="contact-details"><Eyebrow>Start a conversation</Eyebrow><h2>Good work<br />starts <em>here.</em></h2><p>Tell us where you want to go. We'll help you find a way to build it.</p><a href={`mailto:${emailAddress}`}>{emailAddress}<span aria-hidden="true">↗</span></a><a href="tel:+27825342679">{phoneNumber}<span aria-hidden="true">↗</span></a><small>South Africa</small></div>
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>Your name<input name="name" autoComplete="name" required /></label>
            <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
            <label>Company / organisation <span>Optional</span><input name="company" autoComplete="organization" /></label>
            <label>Service of interest<select name="service" defaultValue=""><option value="">Choose a discipline</option>{divisions.map((division) => <option value={division.name} key={division.slug}>{division.name}</option>)}</select></label>
            <label>Budget range <span>Optional</span><select name="budget" defaultValue=""><option value="">Prefer not to say</option><option>Under R25,000</option><option>R25,000 – R100,000</option><option>R100,000 – R500,000</option><option>R500,000+</option><option>To be discussed</option></select></label>
            <label className="form-wide">Tell us about your project<textarea name="description" rows={5} required /></label>
          </div>
          <button type="submit" className="submit-button">Prepare email enquiry <span aria-hidden="true">↗</span></button>
          <p className="form-note">This form prepares an email in your email app; it does not transmit or store your information on this website.</p>
          <p className="form-status" role="status">{message}</p>
        </form>
      </section>
    </main>
  );
}

function CTA() {
  return <section className="closing-cta interior-cta"><Mark className="closing-mark" /><Eyebrow>Let's make it matter</Eyebrow><h2>Great things are<br /><em>built together.</em></h2><p>Have a vision worth bringing to life? Let's build something meaningful.</p><ArrowLink to="/contact" light>Start a conversation</ArrowLink></section>;
}

function NotFound() {
  return <main className="not-found"><ArchitecturalArt className="page-architecture" /><Eyebrow>404 / Not found</Eyebrow><h1>This space<br /><em>isn't built yet.</em></h1><p>The page you're looking for may have moved.</p><ArrowLink to="/">Return home</ArrowLink></main>;
}

function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollReset />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/expertise/:slug" element={<DivisionPage />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
        <Route path="/people" element={<People />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
