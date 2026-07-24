import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  { id:'001', title:'Pokémon Portfolio', description:'A playful portfolio experience inspired by classic handheld Pokédex hardware.', category:'web', type:'Web Experience', tools:['React','Vite','Motion'], status:'Complete', tone:'yellow' },
  { id:'002', title:'Game Prototype', description:'An indie game prototype exploring pixel art, feedback loops, and level design.', category:'game', type:'Interactive', tools:['Unity','C#','Game Design'], status:'Complete', tone:'blue' },
  { id:'003', title:'Mobile UI System', description:'A flexible mobile product concept with reusable patterns and accessible flows.', category:'design', type:'Product Design', tools:['Figma','UI/UX','Design System'], status:'Complete', tone:'red' },
  { id:'004', title:'Commerce Platform', description:'A full-stack storefront focused on clear discovery and a smooth checkout path.', category:'web', type:'Full Stack', tools:['React','Node.js','MongoDB'], status:'Complete', tone:'green' },
  { id:'005', title:'Realtime Chat', description:'A responsive messaging application with presence and realtime updates.', category:'web', type:'Application', tools:['React','Socket.io','Firebase'], status:'Complete', tone:'purple' },
  { id:'006', title:'Motion Toolkit', description:'Reusable animation components for adding purposeful motion to interfaces.', category:'web', type:'Open Source', tools:['React','Framer','GSAP'], status:'In progress', tone:'orange' },
];

const filters = [['all','All entries'],['web','Web'],['game','Games'],['design','Design']];

export const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const visible = filter === 'all' ? projects : projects.filter(project => project.category === filter);
  return (
    <main className="subpage page-wrap">
      <header className="page-intro">
        <div><p className="eyebrow">PROJECT ARCHIVE / 02</p><h1>SELECTED<br/><span>ENTRIES</span></h1></div>
        <p className="page-lede">A collection of experiments and products spanning web, games, and interface design.</p>
      </header>
      <div className="project-toolbar">
        <div className="filter-tabs" role="group" aria-label="Filter projects">
          {filters.map(([id,label]) => <button key={id} className={filter === id ? 'active' : ''} onClick={() => setFilter(id)}>{label}</button>)}
        </div>
        <span>{String(visible.length).padStart(2,'0')} ENTRIES FOUND</span>
      </div>
      <motion.section layout className="project-grid">
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <motion.article layout initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} exit={{opacity:0,scale:.97}} className="project-card" key={project.id}>
              <div className={`project-visual ${project.tone}`}><span>{project.id}</span><div className="project-orbit">{index + 1}</div></div>
              <div className="project-body">
                <div className="project-meta"><span>NO. {project.id}</span><span>{project.status}</span></div>
                <p className="project-type">{project.type}</p>
                <h2>{project.title}</h2><p>{project.description}</p>
                <div className="project-footer"><div>{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div><button onClick={() => setSelectedProject(project)} aria-label={`Inspect ${project.title}`}>↗</button></div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.section>
      <AnimatePresence>
        {selectedProject && <>
          <motion.button className="project-modal-backdrop" aria-label="Close project details" onClick={() => setSelectedProject(null)} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} />
          <motion.div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" initial={{opacity:0,scale:.94,y:28}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:.96,y:20}}>
            <div className={`modal-visual ${selectedProject.tone}`}><span>ENTRY NO. {selectedProject.id}</span><div className="project-orbit">{selectedProject.id}</div><button onClick={() => setSelectedProject(null)} aria-label="Close project details">×</button></div>
            <div className="modal-copy"><p className="eyebrow">{selectedProject.type} / {selectedProject.status}</p><h2 id="project-dialog-title">{selectedProject.title}</h2><p>{selectedProject.description}</p><div className="modal-stat"><span>DEPLOYED WITH</span><div>{selectedProject.tools.map(tool => <b key={tool}>{tool}</b>)}</div></div><div className="modal-actions"><button>VIEW CASE STUDY →</button><button className="secondary">SOURCE CODE ↗</button></div></div>
          </motion.div>
        </>}
      </AnimatePresence>
    </main>
  );
};
