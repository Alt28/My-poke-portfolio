export const PokemonSkillCard = ({ pokemon, type, sprite, skills, disableMotion = false }) => {
  return (
    <div className={`pokemon-skill-card${disableMotion ? '' : ' skill-card-enter'}`}>
      <div className="pokemon-sprite">{sprite}</div>
      <h3 className="pokemon-name">{pokemon}</h3>
      <p className="skill-category">{type}</p>
      <div className="skill-list">
        {skills.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
      </div>
    </div>
  );
};
