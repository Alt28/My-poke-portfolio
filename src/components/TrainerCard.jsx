import { Link } from 'react-router-dom';

export const TrainerCard = () => (
  <section className="pokedex-unit" aria-labelledby="trainer-name">
    <div className="dex-panel">
      <span className="dex-hinge" aria-hidden="true" />
      <div className="status-lights" aria-hidden="true"><i/><i/><i/></div>
      <div className="screen-bezel">
        <div className="main-screen">
          <div className="profile-mark">CB</div>
          <p className="eyebrow">TRAINER NO. 021</p>
          <h1 id="trainer-name" className="trainer-name">CLARENCE<br/>BAYNA</h1>
          <p className="trainer-role">Computer Science student crafting thoughtful digital experiences.</p>
          <div className="screen-meta"><span>WEB</span><span>AI</span><span>GAME DEV</span></div>
        </div>
      </div>
      <div className="dex-controls" aria-hidden="true"><span className="dpad"/><span className="control-lines"/></div>
    </div>
    <div className="dex-panel">
      <div className="panel-copy">
        <p className="eyebrow">CURRENT MISSION</p>
        <h2>BUILDING IDEAS<br/>INTO EXPERIENCES.</h2>
        <p>I blend development and design to create useful products with personality—clean interfaces, playful interactions, and code that holds up.</p>
        <div className="action-grid">
          <Link className="dex-action primary" to="/projects">VIEW PROJECTS →</Link>
          <Link className="dex-action" to="/about">TRAINER DATA</Link>
          <Link className="dex-action" to="/contact">SEND MESSAGE</Link>
          <button className="dex-action" onClick={() => window.dispatchEvent(new Event('start-battle'))}>BATTLE SIM</button>
        </div>
        <div className="availability">Available for collaborations</div>
      </div>
    </div>
  </section>
);
