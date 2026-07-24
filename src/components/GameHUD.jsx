import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { BattleSystem } from './BattleSystem';

const areas = {
  '/': { code: '00', label: 'Base Camp', objective: 'Choose your next quest', progress: 72 },
  '/about': { code: '01', label: 'Trainer Archive', objective: 'Review skills and experience', progress: 84 },
  '/projects': { code: '02', label: 'Mission Log', objective: 'Inspect selected projects', progress: 93 },
  '/contact': { code: '03', label: 'Comms Station', objective: 'Open a communication link', progress: 100 },
};

const menu = [
  ['/', 'BASE CAMP', 'Home'],
  ['/about', 'TRAINER DATA', 'About'],
  ['/projects', 'MISSION LOG', 'Projects'],
  ['/contact', 'COMMS', 'Contact'],
];

export const GameHUD = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [battleOpen, setBattleOpen] = useState(false);
  const area = areas[pathname] || areas['/'];

  useEffect(() => {
    const close = window.setTimeout(() => setOpen(false), 0);
    return () => window.clearTimeout(close);
  }, [pathname]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key.toLowerCase() === 'm' && !['INPUT','TEXTAREA'].includes(document.activeElement?.tagName)) setOpen(value => !value);
      if (event.key === 'Escape') { setOpen(false); setBattleOpen(false); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const startBattle = () => { setOpen(false); setBattleOpen(true); };
    window.addEventListener('start-battle', startBattle);
    return () => window.removeEventListener('start-battle', startBattle);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = open || battleOpen ? 'hidden' : previousOverflow;
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open, battleOpen]);

  return (
    <>
      <button className={`menu-orb${open ? ' open' : ''}`} onClick={() => setOpen(value => !value)} aria-label={open ? 'Close game menu' : 'Open game menu'} aria-expanded={open}>
        <i/><span>{open ? '×' : 'M'}</span>
      </button>

      <AnimatePresence>
        {open && <>
          <motion.button className="menu-backdrop" aria-label="Close menu" onClick={() => setOpen(false)} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} />
          <motion.aside className="pause-menu" initial={{opacity:0,scale:.94,y:20}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:.96,y:14}} transition={{type:'spring',stiffness:360,damping:30}}>
            <div className="pause-top"><div><p>GAME PAUSED</p><h2>FIELD MENU</h2></div><span>PRESS M</span></div>
            <div className="pause-player"><div className="pause-avatar">CB</div><div><small>PLAYER ONE · LV. 21</small><strong>CLARENCE BAYNA</strong><div className="pause-xp"><i style={{width:`${area.progress}%`}} /></div><p>{area.progress * 10} / 1000 XP</p></div></div>
            <nav className="pause-nav">{menu.map(([to,title,subtitle],index) => <NavLink to={to} end={to === '/'} key={to}><span>0{index}</span><div><strong>{title}</strong><small>{subtitle}</small></div><b>›</b></NavLink>)}</nav>
            <div className="current-quest"><small>CURRENT OBJECTIVE</small><p><i/> {area.objective}</p></div>
            <button className="battle-launch" onClick={() => { setOpen(false); setBattleOpen(true); }}><span>BATTLE</span><div><strong>START TRAINING</strong><small>Fight a production bug</small></div><b>→</b></button>
          </motion.aside>
        </>}
      </AnimatePresence>
      <AnimatePresence>{battleOpen && <BattleSystem onClose={() => setBattleOpen(false)} />}</AnimatePresence>
    </>
  );
};
