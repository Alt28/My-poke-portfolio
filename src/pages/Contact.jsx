import { useState } from 'react';
import { motion } from 'framer-motion';

const channels = [
  ['EMAIL','contact@example.com','mailto:contact@example.com','@'],
  ['GITHUB','ClarenceBayna','https://github.com','GH'],
  ['LINKEDIN','Clarence','https://linkedin.com','IN'],
];

export const Contact = () => {
  const [sent, setSent] = useState(false);
  const handleSubmit = (event) => { event.preventDefault(); setSent(true); };
  return (
    <main className="subpage page-wrap">
      <header className="page-intro contact-intro">
        <div><p className="eyebrow">COMMUNICATION LINK / 03</p><h1>LET'S BUILD<br/><span>SOMETHING.</span></h1></div>
        <p className="page-lede">Have a project, idea, or opportunity in mind? Send a transmission and I’ll get back to you.</p>
      </header>
      <section className="contact-layout">
        <div className="contact-aside">
          <div className="signal-card"><span className="signal-ring"><i/></span><div><small>CONNECTION STATUS</small><strong>Online & available</strong></div></div>
          <p>I’m currently open to freelance projects, internships, and collaborations involving web development or product design.</p>
          <div className="channel-list">{channels.map(([label,value,href,icon]) => <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" key={label}><span>{icon}</span><div><small>{label}</small><strong>{value}</strong></div><b>↗</b></a>)}</div>
        </div>
        <div className="message-console">
          <div className="console-top"><span>NEW TRANSMISSION</span><div><i/><i/><i/></div></div>
          {sent ? (
            <motion.div className="sent-state" initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}}><span>✓</span><h2>MESSAGE READY</h2><p>Thanks for reaching out. Your transmission has been received.</p><button onClick={() => setSent(false)}>SEND ANOTHER</button></motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="field-row"><label><span>YOUR NAME</span><input name="name" placeholder="Enter your name" required /></label><label><span>EMAIL ADDRESS</span><input type="email" name="email" placeholder="you@example.com" required /></label></div>
              <label><span>SUBJECT</span><input name="subject" placeholder="What would you like to build?" required /></label>
              <label><span>MESSAGE</span><textarea name="message" rows="7" placeholder="Tell me a little about your idea..." required /></label>
              <div className="form-bottom"><small>Typical response time: 24–48 hours</small><button type="submit">SEND TRANSMISSION →</button></div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};
