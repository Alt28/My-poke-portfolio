import { useState } from 'react';
import { motion } from 'framer-motion';
import { soundManager } from '../utils/soundManager';

export const PokemonCard = ({ 
  title, 
  description, 
  icon, 
  color = 'bg-pokemon-yellow',
  onClick,
  expandable = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    soundManager.play('poke-click');
    if (expandable) {
      setIsExpanded(!isExpanded);
    }
    onClick?.();
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: expandable ? { scale: 1.05, rotate: 1 } : { scale: 1.02 },
  };

  const contentVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { height: 'auto', opacity: 1 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className={`${color} ${expandable ? 'cursor-pointer' : ''} p-6 pixel-border transition-all`}
      onClick={handleClick}
      onMouseEnter={() => soundManager.play('hover')}
    >
      <div className="text-4xl mb-4 text-center">{icon}</div>
      <h3 className="font-pixel text-lg text-pokemon-gray mb-2 text-center">{title}</h3>
      <p className="text-sm text-pokemon-gray text-center">{description}</p>
      
      {expandable && (
        <motion.div
          variants={contentVariants}
          initial="collapsed"
          animate={isExpanded ? 'expanded' : 'collapsed'}
          className="mt-4 pt-4 border-t-2 border-pokemon-gray"
        >
          <p className="text-xs text-pokemon-gray">Click to expand content...</p>
        </motion.div>
      )}
    </motion.div>
  );
};
