import { NavLink } from 'react-router-dom';

export const Header = ({ onSoundToggle, isMuted }) => (
  <header className="site-header">
    <div className="header-inner">
      <NavLink to="/" className="brand" aria-label="Clarence portfolio home">
        <span className="brand-lens" aria-hidden="true" />
        <span className="brand-copy"><strong>CLARENCE.DEX</strong><span>Trainer portfolio</span></span>
      </NavLink>
      <button className="sound-toggle" onClick={onSoundToggle} aria-label={isMuted ? 'Turn sound on' : 'Turn sound off'}>{isMuted ? '×' : '♪'}</button>
    </div>
  </header>
);
