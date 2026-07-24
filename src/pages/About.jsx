import { motion } from 'framer-motion';

const capabilities = [
  { code: '01', title: 'Frontend', copy: 'Interfaces that feel fast, clear, and intentional.', tools: ['React', 'Vue', 'Tailwind', 'Framer'] },
  { code: '02', title: 'Backend', copy: 'Reliable services and practical data systems.', tools: ['Node.js', 'Python', 'SQL', 'Firebase'] },
  { code: '03', title: 'Game Dev', copy: 'Playful mechanics and interactive experiences.', tools: ['Unity', 'C#', 'Godot', 'Game Design'] },
  { code: '04', title: 'Design', copy: 'Useful flows shaped into polished interfaces.', tools: ['Figma', 'UI/UX', 'Prototyping'] },
];

const timeline = [
  ['2023 — NOW', 'UI/UX Designer', 'Freelance'],
  ['2022 — NOW', 'Web Developer', 'Independent projects'],
  ['2021 — NOW', 'Game Developer', 'PLM Game Dev'],
];

export const About = () => (
  <main className="subpage page-wrap">
    <motion.header className="page-intro" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}}>
      <div>
        <p className="eyebrow">TRAINER DATABASE / 01</p>
        <h1>ABOUT THE<br/><span>TRAINER</span></h1>
      </div>
      <p className="page-lede">Computer Science student at PLM, interested in the point where thoughtful design meets dependable engineering.</p>
    </motion.header>

    <section className="about-overview">
      <div className="portrait-panel" aria-label="Clarence Bayna monogram">
        <span>CB</span><small>PLAYER ONE</small>
      </div>
      <div className="bio-panel">
        <p className="eyebrow">PROFILE ENTRY</p>
        <h2>CREATIVE DEVELOPER<br/>BASED IN MANILA.</h2>
        <p>I enjoy turning complicated ideas into approachable products. My work moves between web development, interface design, AI, and game development—always with a focus on clarity and personality.</p>
        <div className="bio-facts">
          <div><small>CLASS</small><strong>CS Student</strong></div>
          <div><small>FOCUS</small><strong>Web + Product</strong></div>
          <div><small>STATUS</small><strong className="online">Open to work</strong></div>
        </div>
      </div>
    </section>

    <section className="subsection">
      <div className="section-heading"><div><p className="eyebrow">EQUIPPED MOVES</p><h2>CAPABILITIES</h2></div><span>04 TOTAL</span></div>
      <div className="capability-list">
        {capabilities.map((item) => (
          <article className="capability-row" key={item.code}>
            <span className="list-code">{item.code}</span>
            <div><h3>{item.title}</h3><p>{item.copy}</p></div>
            <div className="tool-list">{item.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
          </article>
        ))}
      </div>
    </section>

    <section className="subsection experience-section">
      <div className="section-heading"><div><p className="eyebrow">QUEST LOG</p><h2>EXPERIENCE</h2></div></div>
      <div className="timeline-list">{timeline.map(([year,role,place]) => <article key={role}><time>{year}</time><div><h3>{role}</h3><p>{place}</p></div></article>)}</div>
    </section>
  </main>
);
