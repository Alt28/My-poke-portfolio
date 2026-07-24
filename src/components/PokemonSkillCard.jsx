import { motion } from 'framer-motion';

export const PokemonSkillCard = ({ pokemon, type, sprite, skills }) => {
  return (
    <motion.div
      className="pokemon-skill-card"
      whileHover={{ translateY: -8 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="pokemon-sprite">{sprite}</div>
      
      <h3 className="pokemon-name">{pokemon}</h3>
      
      <p className="skill-category">{type}</p>
      
      <div className="skill-list">
        {skills.map((skill, idx) => (
          <motion.span
            key={idx}
            className="skill-tag"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
