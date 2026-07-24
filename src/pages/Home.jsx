import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrainerCard } from '../components/TrainerCard';
import { PokemonSkillCard } from '../components/PokemonSkillCard';

const skills = [
  { pokemon:'FRONTEND', type:'Interface engineering', sprite:'01', skills:['React','Vue','Tailwind','Motion'] },
  { pokemon:'INTELLIGENCE', type:'AI & data', sprite:'02', skills:['Python','ML','Analysis','AI'] },
  { pokemon:'BACKEND', type:'Systems & services', sprite:'03', skills:['Node','SQL','Firebase','APIs'] },
  { pokemon:'GAME DEV', type:'Interactive worlds', sprite:'04', skills:['Unity','C#','Godot','Design'] },
];

const missions = [
  { id:'01', title:'Trainer Archive', area:'About me', to:'/about', reward:'Skills + story', description:'Access background data, equipped abilities, and the full experience log.' },
  { id:'02', title:'Mission Log', area:'Selected work', to:'/projects', reward:'Case studies', description:'Inspect completed builds, prototypes, and experiments from the field.' },
  { id:'03', title:'Comms Station', area:'Contact', to:'/contact', reward:'New connection', description:'Open a secure channel for projects, collaborations, and opportunities.' },
];

export const Home = () => {
  const [selectedMission, setSelectedMission] = useState(1);
  const mission = missions[selectedMission];
  return (
    <main className="page-wrap">
      <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.55}}><TrainerCard /></motion.div>

      <section className="mission-select" aria-labelledby="mission-title">
        <div className="mission-heading"><div><p className="eyebrow">WORLD MAP</p><h2 id="mission-title">CHOOSE A QUEST</h2></div><span>Use ↑ ↓ to select</span></div>
        <div className="mission-console">
          <div className="mission-list" role="tablist" aria-label="Portfolio quests">
            {missions.map((item,index) => <button role="tab" aria-selected={selectedMission === index} className={selectedMission === index ? 'selected' : ''} key={item.id} onMouseEnter={() => setSelectedMission(index)} onFocus={() => setSelectedMission(index)} onClick={() => setSelectedMission(index)}><span>{item.id}</span><div><strong>{item.title}</strong><small>{item.area}</small></div><b>›</b></button>)}
          </div>
          <motion.div className="mission-preview" key={mission.id} initial={{opacity:0,x:12}} animate={{opacity:1,x:0}}>
            <div className="radar-map"><div className="radar-sweep"/><i/><span>{mission.id}</span></div>
            <p className="eyebrow">QUEST {mission.id}</p><h3>{mission.title}</h3><p>{mission.description}</p>
            <div className="mission-reward"><span>REWARD</span><strong>{mission.reward}</strong></div>
            <Link to={mission.to}>START QUEST <span>→</span></Link>
          </motion.div>
        </div>
      </section>

      <section style={{marginTop:82}} aria-labelledby="abilities-title">
        <p className="eyebrow" style={{textAlign:'center'}}>LOADED MOVESET</p>
        <h2 id="abilities-title" className="section-title">CORE ABILITIES</h2>
        <div className="skills-grid">{skills.map((skill) => <PokemonSkillCard key={skill.pokemon} {...skill} />)}</div>
      </section>
      <section className="stats-panel" aria-label="Portfolio statistics">
        {[['15+','Projects'],['10+','Clients'],['500+','Hours'],['20+','Technologies']].map(([value,label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </section>
    </main>
  );
};
