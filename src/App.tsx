import { useState } from 'react'
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Check, Code2, Copy, Github, Linkedin, Mail, Menu, X } from 'lucide-react'
import SectionHeading from './components/SectionHeading'
import { projects } from './data/projects'

const contactEmail = 'nivetikarajasekar@gmail.com'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

const skills = [
  { title: 'Backend engineering', detail: 'C# · .NET · REST APIs · Entity Framework · LINQ' },
  { title: 'Frontend development', detail: 'React · TypeScript · JavaScript · HTML · CSS' },
  { title: 'Data & architecture', detail: 'SQL · Kafka · API design · Service integration' },
  { title: 'Cloud & tools', detail: 'Azure · Git · CI/CD fundamentals · AI-assisted workflows' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail)
      setEmailCopied(true)
    } catch {
      window.location.href = `mailto:${contactEmail}`
    }
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Nivi home" onClick={closeMenu}>nivi<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`navigation ${menuOpen ? 'navigation-open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="availability-dot" /> SOFTWARE ENGINEER · OPEN TO WHAT'S NEXT</div>
            <h1>Building useful things.<br /><span>Making them</span> <em>matter.</em></h1>
            <p className="hero-intro">I'm Nivi — a software engineer focused on building reliable backend systems and thoughtful web experiences. I like understanding how things work, then making them work better.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="text-link" href="#about">A little about me <ArrowRight size={16} /></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract decorative illustration">
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-orbit orbit-three" />
            <div className="art-core"><Code2 size={43} strokeWidth={1.3} /><span>curious by design</span></div>
            <span className="art-label label-top">THINK / BUILD</span><span className="art-label label-bottom">LEARN / REPEAT</span>
            <span className="art-spark spark-one">✳</span><span className="art-spark spark-two">✳</span>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
          <div className="hero-index"><span>01</span><i /> 04</div>
        </section>

        <section className="about section-wrap section-block" id="about">
          <SectionHeading eyebrow="01 / A LITTLE CONTEXT" title={<>Engineer by craft.<br /><span>Curious by nature.</span></>} />
          <div className="about-content">
            <p className="about-lead">I enjoy working at the intersection of <strong>solid engineering and practical problem-solving.</strong></p>
            <div className="about-detail"><p>My experience spans backend APIs, data access, enterprise workflows, and application integrations. I care about readable code, understanding the problem before reaching for a solution, and building systems other people can maintain.</p><p>Right now, I'm strengthening my full-stack foundation across .NET, React, and AI — one concept and one project at a time.</p><a className="inline-link" href="#contact">Have a project in mind? <ArrowUpRight size={16} /></a></div>
          </div>
          <div className="principles"><div><span>01</span><h3>Stay curious</h3><p>Ask why, explore deeply, and keep learning.</p></div><div><span>02</span><h3>Build with intent</h3><p>Choose clarity and maintainability over cleverness.</p></div><div><span>03</span><h3>Keep improving</h3><p>Small, consistent progress compounds.</p></div></div>
        </section>

        <section className="expertise section-wrap section-block" id="expertise">
          <SectionHeading eyebrow="02 / WHAT I WORK WITH" title={<>Tools are useful.<br /><span>How you use them matters.</span></>} description="A growing toolkit for solving real engineering problems." />
          <div className="skill-list">{skills.map((skill, index) => <article className="skill-row" key={skill.title}><span className="skill-number">0{index + 1}</span><h3>{skill.title}</h3><p>{skill.detail}</p></article>)}</div>
          <div className="learning-note"><span className="note-star">✳</span><p><strong>Always in progress.</strong> Deepening my understanding of .NET internals, modern React patterns, system design, and applied AI.</p></div>
        </section>

        <section className="work section-wrap section-block" id="work">
          <div className="work-heading"><SectionHeading eyebrow="03 / SELECTED WORK" title={<>Problems first.<br /><span>Technology second.</span></>} description="A snapshot of the kinds of systems and experiences I enjoy building." /><a className="text-link work-top-link" href="#contact">Discuss a collaboration <ArrowUpRight size={16} /></a></div>
          <div className="project-grid">{projects.map((project) => <article className={`project-card ${project.accent}`} key={project.number}><div className="project-top"><span>{project.number} / PROJECT</span></div><div className="project-visual"><div className="visual-frame"><span className="visual-dot" /><span className="visual-dot" /><span className="visual-dot" /><div className="visual-content"><div className="visual-line line-wide" /><div className="visual-line line-short" /><div className="visual-panel"><Code2 size={25} strokeWidth={1.4} /><span>{project.category}</span></div><div className="visual-line line-mid" /></div></div></div><div className="project-copy"><span className="project-category">{project.category}</span><h3>{project.name}</h3><p>{project.description}</p><div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
          <p className="project-disclaimer">Enterprise project descriptions are intentionally generalized to respect confidentiality. More detail can be shared where appropriate.</p>
        </section>

        <section className="contact section-wrap section-block" id="contact">
          <div className="contact-panel"><div className="contact-decoration">✳</div><span className="eyebrow">04 / YOUR TURN</span><h2>Good work starts<br />with a <em>conversation.</em></h2><p>Have an interesting problem, an opportunity, or an idea worth exploring? I'd love to hear about it.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${contactEmail}`}><Mail size={16} /> Email me <ArrowUpRight size={17} /></a><button className="button button-secondary" type="button" onClick={copyEmail}>{emailCopied ? <Check size={16} /> : <Copy size={16} />}{emailCopied ? 'Copied!' : 'Copy email'}</button></div><a className="contact-email" href={`mailto:${contactEmail}`}>{contactEmail}</a><span className="contact-small">Usually the best way to reach me is by email.</span></div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><a className="wordmark footer-mark" href="#home">nivi<span>.</span></a><p>Designed with curiosity. Built with care.</p><div className="social-links"><a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="#home" aria-label="Back to top"><ArrowUpRight size={18} /></a></div><span className="copyright">© {new Date().getFullYear()} Nivi</span></footer>
    </div>
  )
}
