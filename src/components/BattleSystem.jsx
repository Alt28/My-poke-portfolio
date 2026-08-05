import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { soundManager } from '../utils/soundManager';
import arceusSprite from '../assets/pokemon/arceus.gif';
import blastoiseSprite from '../assets/pokemon/blastoise.gif';
import charizardBackSprite from '../assets/pokemon/charizard-back.gif';
import megaCharizardBackSprite from '../assets/pokemon/charizard-mega-x-back.gif';
import dragoniteSprite from '../assets/pokemon/dragonite.gif';
import gengarSprite from '../assets/pokemon/gengar.gif';
import megaGengarSprite from '../assets/pokemon/gengar-mega.gif';
import mewtwoSprite from '../assets/pokemon/mewtwo.gif';
import blastoiseBackSprite from '../assets/pokemon/roster/blastoise-back.gif';
import megaBlastoiseBackSprite from '../assets/pokemon/roster/blastoise-mega-back.gif';
import charizardFrontSprite from '../assets/pokemon/roster/charizard-front.gif';
import groudonBackSprite from '../assets/pokemon/roster/groudon-back.gif';
import groudonFrontSprite from '../assets/pokemon/roster/groudon-front.gif';
import primalGroudonBackSprite from '../assets/pokemon/roster/groudon-primal-back.gif';
import kyogreBackSprite from '../assets/pokemon/roster/kyogre-back.gif';
import kyogreFrontSprite from '../assets/pokemon/roster/kyogre-front.gif';
import primalKyogreBackSprite from '../assets/pokemon/roster/kyogre-primal-back.gif';
import lucarioBackSprite from '../assets/pokemon/roster/lucario-back.gif';
import lucarioFrontSprite from '../assets/pokemon/roster/lucario-front.gif';
import megaLucarioBackSprite from '../assets/pokemon/roster/lucario-mega-back.gif';
import rayquazaBackSprite from '../assets/pokemon/roster/rayquaza-back.gif';
import rayquazaFrontSprite from '../assets/pokemon/roster/rayquaza-front.gif';
import megaRayquazaBackSprite from '../assets/pokemon/roster/rayquaza-mega-back.gif';
import venusaurBackSprite from '../assets/pokemon/roster/venusaur-back.gif';
import venusaurFrontSprite from '../assets/pokemon/roster/venusaur-front.gif';
import megaVenusaurBackSprite from '../assets/pokemon/roster/venusaur-mega-back.gif';

const fighterRoster = [
  {
    id: 'lucario',
    name: 'Lucario',
    origin: "RIOLU'S EVOLUTION",
    transformedName: 'Mega Lucario',
    types: ['FIGHTING', 'STEEL'],
    level: 54,
    maxHp: 100,
    frontSprite: lucarioFrontSprite,
    backSprite: lucarioBackSprite,
    transformedSprite: megaLucarioBackSprite,
    transformLabel: 'MEGA EVOLVE',
    transformText: 'Lucarionite is resonating with the Key Stone!',
    transformEffect: 'mega-player',
    transformBonus: 7,
    accent: 'aura',
    moves: [
      { id: 'aura-sphere', name: 'AURA SPHERE', type: 'FIGHTING', min: 20, max: 28, effect: 'aura' },
      { id: 'meteor-mash', name: 'METEOR MASH', type: 'STEEL', min: 19, max: 27, effect: 'meteor' },
      { id: 'extreme-speed', name: 'EXTREME SPEED', type: 'NORMAL', min: 17, max: 23, effect: 'quick' },
      { id: 'close-combat', name: 'CLOSE COMBAT', type: 'SIGNATURE', min: 36, max: 47, effect: 'close-combat', special: true },
    ],
  },
  {
    id: 'blastoise',
    name: 'Blastoise',
    origin: 'SHELLFISH POKEMON',
    transformedName: 'Mega Blastoise',
    types: ['WATER'],
    level: 55,
    maxHp: 115,
    frontSprite: blastoiseSprite,
    backSprite: blastoiseBackSprite,
    transformedSprite: megaBlastoiseBackSprite,
    transformLabel: 'MEGA EVOLVE',
    transformText: 'Blastoisinite is reacting to the Key Stone!',
    transformEffect: 'mega-player',
    transformBonus: 7,
    accent: 'water',
    moves: [
      { id: 'water-pulse', name: 'WATER PULSE', type: 'WATER', min: 19, max: 27, effect: 'water-jet' },
      { id: 'ice-beam', name: 'ICE BEAM', type: 'ICE', min: 18, max: 25, effect: 'ice' },
      { id: 'dark-pulse', name: 'DARK PULSE', type: 'DARK', min: 17, max: 24, effect: 'dark-pulse' },
      { id: 'hydro-cannon', name: 'HYDRO CANNON', type: 'SIGNATURE', min: 38, max: 49, effect: 'hydro-cannon', special: true },
    ],
  },
  {
    id: 'venusaur',
    name: 'Venusaur',
    origin: 'SEED POKEMON',
    transformedName: 'Mega Venusaur',
    types: ['GRASS', 'POISON'],
    level: 55,
    maxHp: 112,
    frontSprite: venusaurFrontSprite,
    backSprite: venusaurBackSprite,
    transformedSprite: megaVenusaurBackSprite,
    transformLabel: 'MEGA EVOLVE',
    transformText: 'Venusaurite is blooming with Mega Energy!',
    transformEffect: 'mega-player',
    transformBonus: 7,
    accent: 'grass',
    moves: [
      { id: 'energy-ball', name: 'ENERGY BALL', type: 'GRASS', min: 19, max: 27, effect: 'energy' },
      { id: 'sludge-bomb', name: 'SLUDGE BOMB', type: 'POISON', min: 18, max: 26, effect: 'sludge' },
      { id: 'earth-power', name: 'EARTH POWER', type: 'GROUND', min: 18, max: 25, effect: 'earth-shot' },
      { id: 'frenzy-plant', name: 'FRENZY PLANT', type: 'SIGNATURE', min: 37, max: 48, effect: 'frenzy-plant', special: true },
    ],
  },
  {
    id: 'charizard',
    name: 'Charizard',
    origin: 'FLAME POKEMON',
    transformedName: 'Mega Charizard X',
    types: ['FIRE', 'FLYING'],
    level: 55,
    maxHp: 105,
    frontSprite: charizardFrontSprite,
    backSprite: charizardBackSprite,
    transformedSprite: megaCharizardBackSprite,
    transformLabel: 'MEGA EVOLVE',
    transformText: "Charizardite X is reacting to Clarence's Key Stone!",
    transformEffect: 'mega-player',
    transformBonus: 7,
    accent: 'fire',
    moves: [
      { id: 'flamethrower', name: 'FLAMETHROWER', type: 'FIRE', min: 20, max: 28, effect: 'fire' },
      { id: 'dragon-claw', name: 'DRAGON CLAW', type: 'DRAGON', min: 18, max: 26, effect: 'claw' },
      { id: 'air-slash', name: 'AIR SLASH', type: 'FLYING', min: 17, max: 24, effect: 'air-slash' },
      { id: 'blast-burn', name: 'BLAST BURN', type: 'SIGNATURE', min: 39, max: 50, effect: 'blast-burn', special: true },
    ],
  },
  {
    id: 'rayquaza',
    name: 'Rayquaza',
    origin: 'SKY HIGH POKEMON',
    transformedName: 'Mega Rayquaza',
    types: ['DRAGON', 'FLYING'],
    level: 70,
    maxHp: 120,
    frontSprite: rayquazaFrontSprite,
    backSprite: rayquazaBackSprite,
    transformedSprite: megaRayquazaBackSprite,
    transformLabel: 'MEGA EVOLVE',
    transformText: 'Rayquaza remembers Dragon Ascent. The sky is opening!',
    transformEffect: 'mega-sky',
    transformBonus: 9,
    accent: 'dragon',
    moves: [
      { id: 'dragon-ascent', name: 'DRAGON ASCENT', type: 'FLYING', min: 25, max: 34, effect: 'dragon-ascent' },
      { id: 'extreme-speed', name: 'EXTREME SPEED', type: 'NORMAL', min: 21, max: 28, effect: 'quick' },
      { id: 'dragon-pulse', name: 'DRAGON PULSE', type: 'DRAGON', min: 21, max: 29, effect: 'dragon-pulse' },
      { id: 'draco-meteor', name: 'DRACO METEOR', type: 'SIGNATURE', min: 43, max: 55, effect: 'draco-meteor', special: true },
    ],
  },
  {
    id: 'kyogre',
    name: 'Kyogre',
    origin: 'SEA BASIN POKEMON',
    transformedName: 'Primal Kyogre',
    types: ['WATER'],
    level: 70,
    maxHp: 125,
    frontSprite: kyogreFrontSprite,
    backSprite: kyogreBackSprite,
    transformedSprite: primalKyogreBackSprite,
    transformLabel: 'PRIMAL REVERSION',
    transformText: 'The Blue Orb is restoring Kyogre to its primal form!',
    transformEffect: 'primal-ocean',
    transformBonus: 9,
    accent: 'ocean',
    moves: [
      { id: 'origin-pulse', name: 'ORIGIN PULSE', type: 'WATER', min: 25, max: 34, effect: 'origin-pulse' },
      { id: 'ice-beam', name: 'ICE BEAM', type: 'ICE', min: 20, max: 28, effect: 'ice' },
      { id: 'thunder', name: 'THUNDER', type: 'ELECTRIC', min: 21, max: 30, effect: 'thunder-strike' },
      { id: 'water-spout', name: 'WATER SPOUT', type: 'SIGNATURE', min: 44, max: 57, effect: 'water-spout', special: true },
    ],
  },
  {
    id: 'groudon',
    name: 'Groudon',
    origin: 'CONTINENT POKEMON',
    transformedName: 'Primal Groudon',
    types: ['GROUND'],
    level: 70,
    maxHp: 125,
    frontSprite: groudonFrontSprite,
    backSprite: groudonBackSprite,
    transformedSprite: primalGroudonBackSprite,
    transformLabel: 'PRIMAL REVERSION',
    transformText: 'The Red Orb is restoring Groudon to its primal form!',
    transformEffect: 'primal-land',
    transformBonus: 9,
    accent: 'land',
    moves: [
      { id: 'precipice-blades', name: 'PRECIPICE BLADES', type: 'GROUND', min: 25, max: 35, effect: 'precipice-blades' },
      { id: 'fire-punch', name: 'FIRE PUNCH', type: 'FIRE', min: 21, max: 29, effect: 'fire' },
      { id: 'solar-beam', name: 'SOLAR BEAM', type: 'GRASS', min: 22, max: 30, effect: 'solar-beam' },
      { id: 'eruption', name: 'ERUPTION', type: 'SIGNATURE', min: 44, max: 57, effect: 'eruption', special: true },
    ],
  },
];

const battleLevels = [
  {
    name: 'Gengar',
    slug: 'gengar',
    rank: 'HAUNTED GATE',
    arena: 'ghost',
    level: 50,
    maxHp: 100,
    sprite: gengarSprite,
    megaSprite: megaGengarSprite,
    canMega: true,
    xp: 250,
    intro: 'A wild Gengar guards the haunted gate!',
    moves: [
      { name: 'SHADOW BALL', effect: 'shadow', min: 11, max: 18 },
      { name: 'DARK PULSE', effect: 'dark', min: 10, max: 16 },
      { name: 'LICK', effect: 'lick', min: 8, max: 14 },
    ],
  },
  {
    name: 'Blastoise',
    slug: 'blastoise',
    rank: 'TIDAL WALL',
    arena: 'water',
    level: 56,
    maxHp: 120,
    sprite: blastoiseSprite,
    xp: 400,
    intro: 'Blastoise rises from the tidal arena!',
    moves: [
      { name: 'WATER PULSE', effect: 'water', min: 13, max: 18 },
      { name: 'HYDRO PUMP', effect: 'water', min: 16, max: 21 },
      { name: 'BITE', effect: 'dark', min: 12, max: 17 },
    ],
  },
  {
    name: 'Dragonite',
    slug: 'dragonite',
    rank: 'DRAGON SKY',
    arena: 'dragon',
    level: 62,
    maxHp: 145,
    sprite: dragoniteSprite,
    xp: 650,
    intro: 'Dragonite descends through the storm clouds!',
    moves: [
      { name: 'DRAGON RUSH', effect: 'dragon', min: 18, max: 24 },
      { name: 'THUNDER PUNCH', effect: 'thunder', min: 16, max: 22 },
      { name: 'WING ATTACK', effect: 'quick', min: 15, max: 20 },
    ],
  },
  {
    name: 'Mewtwo',
    slug: 'mewtwo',
    rank: 'PSYCHIC CORE',
    arena: 'psychic',
    level: 70,
    maxHp: 175,
    sprite: mewtwoSprite,
    xp: 900,
    intro: 'Mewtwo awakens inside the psychic core!',
    moves: [
      { name: 'PSYCHIC', effect: 'psychic', min: 21, max: 27 },
      { name: 'AURA SPHERE', effect: 'psychic', min: 19, max: 25 },
      { name: 'SHADOW BALL', effect: 'shadow', min: 20, max: 26 },
    ],
  },
  {
    name: 'Arceus',
    slug: 'arceus',
    rank: 'FINAL BOSS',
    arena: 'divine',
    level: 80,
    maxHp: 220,
    sprite: arceusSprite,
    xp: 1500,
    intro: 'The Hall of Origin opens. Arceus challenges your chosen partner!',
    moves: [
      { name: 'JUDGMENT', effect: 'judgment', min: 25, max: 32 },
      { name: 'EXTREME SPEED', effect: 'quick', min: 22, max: 28 },
      { name: 'EARTH POWER', effect: 'earth', min: 23, max: 30 },
    ],
  },
];

const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const BattleSystem = ({ onClose }) => {
  const [phase, setPhase] = useState('select');
  const [selectedId, setSelectedId] = useState('charizard');
  const [levelIndex, setLevelIndex] = useState(0);
  const [playerHp, setPlayerHp] = useState(105);
  const [enemyHp, setEnemyHp] = useState(battleLevels[0].maxHp);
  const [turn, setTurn] = useState('player');
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState('Choose a Pokemon partner to enter Victory Road.');
  const [effect, setEffect] = useState(null);
  const [effectSource, setEffectSource] = useState('system');
  const [playerTransformed, setPlayerTransformed] = useState(false);
  const [enemyMega, setEnemyMega] = useState(false);
  const [specialUsed, setSpecialUsed] = useState(false);

  const player = fighterRoster.find(fighter => fighter.id === selectedId) || fighterRoster[3];
  const enemy = battleLevels[levelIndex];
  const finalLevel = levelIndex === battleLevels.length - 1;
  const playerName = playerTransformed ? player.transformedName : player.name;
  const enemyName = enemyMega ? `Mega ${enemy.name}` : enemy.name;
  const potionPower = 28 + (levelIndex * 5);

  const triggerEffect = (name, source) => {
    setEffectSource(source);
    setEffect(name);
  };

  useEffect(() => {
    if (!effect) return undefined;
    const transformationEffect = effect.startsWith('mega-') || effect.startsWith('primal-');
    const longEffect = effect === 'level-up'
      || effect.includes('cannon')
      || effect.includes('plant')
      || effect.includes('meteor')
      || effect.includes('spout')
      || effect === 'eruption'
      || effect === 'close-combat';
    const timer = window.setTimeout(
      () => setEffect(null),
      transformationEffect ? 1700 : (longEffect ? 1150 : 760),
    );
    return () => window.clearTimeout(timer);
  }, [effect]);

  useEffect(() => {
    if (phase !== 'battle' || turn !== 'enemy' || result) return undefined;
    const timer = window.setTimeout(() => {
      const move = enemy.moves[randomBetween(0, enemy.moves.length - 1)];
      const damage = randomBetween(move.min, move.max) + (enemyMega ? 5 : 0);
      const next = Math.max(0, playerHp - damage);
      triggerEffect(move.effect, 'enemy');
      setPlayerHp(next);
      if (next === 0) {
        setResult('lose');
        setMessage(`${enemyName} used ${move.name}. ${playerName} fainted!`);
      } else {
        setMessage(`${enemyName} used ${move.name}. ${playerName} lost ${damage} HP.`);
        setTurn('enemy-hit');
      }
    }, 780);
    return () => window.clearTimeout(timer);
  }, [phase, turn, result, playerHp, playerName, enemy, enemyMega, enemyName]);

  useEffect(() => {
    if (turn !== 'enemy-hit' || result) return undefined;
    const timer = window.setTimeout(() => setTurn('player'), 720);
    return () => window.clearTimeout(timer);
  }, [turn, result]);

  useEffect(() => {
    if (turn !== 'player-transform' || result) return undefined;
    const revealTimer = window.setTimeout(() => {
      setPlayerTransformed(true);
      setMessage(`${player.name} transformed into ${player.transformedName}!`);
    }, 780);
    const finishTimer = window.setTimeout(() => {
      setTurn('player');
    }, 1600);
    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(finishTimer);
    };
  }, [turn, result, player.name, player.transformedName]);

  useEffect(() => {
    if (turn !== 'enemy-mega-wait' || result) return undefined;
    const timer = window.setTimeout(() => {
      setMessage(`${enemy.name} is reacting to its Mega Stone!`);
      triggerEffect('mega-enemy', 'system');
      setTurn('enemy-mega');
    }, 1180);
    return () => window.clearTimeout(timer);
  }, [turn, result, enemy.name]);

  useEffect(() => {
    if (turn !== 'enemy-mega' || result) return undefined;
    const revealTimer = window.setTimeout(() => {
      setEnemyMega(true);
      setMessage(`${enemy.name} Mega Evolved! Its power sharply rose.`);
    }, 780);
    const finishTimer = window.setTimeout(() => {
      setTurn('enemy');
    }, 1600);
    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(finishTimer);
    };
  }, [turn, result, enemy.name]);

  const startLevel = (nextLevel, recovered = false) => {
    const nextEnemy = battleLevels[nextLevel];
    setPhase('battle');
    setLevelIndex(nextLevel);
    setPlayerHp(player.maxHp);
    setEnemyHp(nextEnemy.maxHp);
    setTurn('player');
    setResult(null);
    setPlayerTransformed(false);
    setEnemyMega(false);
    setSpecialUsed(false);
    triggerEffect(recovered ? 'level-up' : null, 'system');
    setMessage(
      recovered
        ? `Full recovery complete. ${player.name} returned to normal form. ${nextEnemy.intro}`
        : `${nextEnemy.intro} ${player.name}, I choose you!`,
    );
  };

  const startCampaign = () => {
    soundManager.play('success');
    startLevel(0);
  };

  const handleMove = (move) => {
    if (turn !== 'player' || result || (move.special && specialUsed)) return;
    soundManager.play(move.special ? 'success' : 'poke-click');
    triggerEffect(move.effect, 'player');
    if (move.special) setSpecialUsed(true);

    const damage = randomBetween(move.min, move.max) + (playerTransformed ? player.transformBonus : 0);
    const next = Math.max(0, enemyHp - damage);
    setEnemyHp(next);

    if (next === 0) {
      setResult('win');
      setMessage(`${playerName} used ${move.name} for ${damage} damage. ${enemyName} fainted!`);
      soundManager.play('success');
    } else if (enemy.canMega && next <= enemy.maxHp / 2 && !enemyMega) {
      setMessage(`${playerName} used ${move.name} for ${damage} damage. Mega Energy is building!`);
      setTurn('enemy-mega-wait');
    } else {
      setMessage(`${playerName} used ${move.name} for ${damage} damage.`);
      setTurn('enemy');
    }
  };

  const transformPlayer = () => {
    if (turn !== 'player' || playerTransformed || result) return;
    soundManager.play('success');
    setMessage(player.transformText);
    triggerEffect(player.transformEffect, 'system');
    setTurn('player-transform');
  };

  const usePotion = () => {
    if (turn !== 'player' || result || playerHp === player.maxHp) return;
    soundManager.play('poke-click');
    const healed = Math.min(potionPower, player.maxHp - playerHp);
    setPlayerHp(current => Math.min(player.maxHp, current + potionPower));
    setMessage(`Clarence used a Hyper Potion. ${playerName} restored ${healed} HP.`);
    triggerEffect('potion', 'system');
    setTurn('enemy');
  };

  const continueCampaign = () => {
    if (finalLevel) {
      setPhase('select');
      setResult(null);
      setMessage('Choose a new partner for another Victory Road run.');
      return;
    }
    startLevel(levelIndex + 1, true);
  };

  const retryLevel = () => startLevel(levelIndex);
  const enemyHpPercent = Math.max(0, (enemyHp / enemy.maxHp) * 100);
  const playerHpPercent = Math.max(0, (playerHp / player.maxHp) * 100);

  return (
    <motion.div className="battle-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.section className="battle-device" role="dialog" aria-modal="true" aria-labelledby="battle-title" initial={{ scale: .92, y: 24 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .94, y: 18 }}>
        <div className="battle-device-top">
          <div className="battle-lens" aria-hidden="true" />
          <div className="battle-lights" aria-hidden="true"><i/><i/><i/></div>
          <div>
            <small>{phase === 'select' ? 'CLARENCE.DEX / PARTY BUILD' : `CLARENCE.DEX / LEVEL ${levelIndex + 1} OF ${battleLevels.length}`}</small>
            <strong id="battle-title">{phase === 'select' ? 'CHOOSE YOUR FIGHTER' : (finalLevel ? 'FINAL BOSS BATTLE' : 'VICTORY ROAD')}</strong>
          </div>
          <button onClick={onClose} aria-label="Exit battle">×</button>
        </div>

        {phase === 'select' ? (
          <div className="fighter-select">
            <div className="fighter-select-heading">
              <div><p className="eyebrow">PARTY TERMINAL</p><h2>SELECT ONE PARTNER</h2></div>
              <p>Every fighter has a unique franchise-inspired moveset, transformation, and one-use signature attack.</p>
            </div>
            <div className="fighter-grid">
              {fighterRoster.map(fighter => (
                <button
                  key={fighter.id}
                  className={`fighter-card ${fighter.accent}${selectedId === fighter.id ? ' selected' : ''}`}
                  onClick={() => setSelectedId(fighter.id)}
                  aria-pressed={selectedId === fighter.id}
                >
                  <span className="fighter-number">#{String(fighterRoster.indexOf(fighter) + 1).padStart(2, '0')}</span>
                  <img src={fighter.frontSprite} alt="" />
                  <strong>{fighter.name}</strong>
                  <small>{fighter.origin}</small>
                  <span className="fighter-types">{fighter.types.join(' / ')}</span>
                </button>
              ))}
            </div>
            <div className="fighter-loadout">
              <div className="loadout-partner">
                <span>SELECTED PARTNER</span>
                <strong>{player.name}</strong>
                <small>{player.transformLabel} → {player.transformedName}</small>
              </div>
              <div className="loadout-moves">
                {player.moves.map(move => <span key={move.id} className={move.special ? 'signature' : ''}>{move.name}</span>)}
              </div>
              <button className="campaign-start" onClick={startCampaign}>ENTER VICTORY ROAD <b>→</b></button>
            </div>
          </div>
        ) : (
          <>
            <div className="battle-stage-strip" aria-label={`Campaign progress: level ${levelIndex + 1} of ${battleLevels.length}`}>
              {battleLevels.map((level, index) => (
                <span
                  key={level.name}
                  className={`${index < levelIndex ? 'cleared' : ''}${index === levelIndex ? ' current' : ''}${index === battleLevels.length - 1 ? ' boss' : ''}`}
                  title={`Level ${index + 1}: ${level.name}`}
                >
                  <b>{index < levelIndex ? '✓' : index + 1}</b>
                  <small>{index === battleLevels.length - 1 ? 'BOSS' : level.name}</small>
                </span>
              ))}
            </div>

            <div className="battle-bezel">
              <div className={`battle-screen arena-${enemy.arena}${effect ? ` fx-${effect}` : ''}`}>
                <div className="arena-decor" aria-hidden="true"><i/><i/><i/></div>
                <div className="battle-scanlines" />
                {effect && <div className={`attack-effect ${effect} from-${effectSource}`} aria-hidden="true">
                  <i/><i/><i/><i/><span/>
                </div>}
                {result ? (
                  <motion.div className="battle-result" initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }}>
                    <div className={`result-emblem ${result}${finalLevel && result === 'win' ? ' champion' : ''}`}>
                      {result === 'win' ? (finalLevel ? '★' : levelIndex + 1) : '!'}
                    </div>
                    <p className="eyebrow">
                      {result === 'win' ? (finalLevel ? 'FINAL BOSS DEFEATED' : `LEVEL ${levelIndex + 1} CLEARED`) : 'BATTLE LOST'}
                    </p>
                    <h2>
                      {result === 'win'
                        ? (finalLevel ? 'VICTORY ROAD CHAMPION!' : `${enemy.name.toUpperCase()} DEFEATED!`)
                        : `RETRY LEVEL ${levelIndex + 1}?`}
                    </h2>
                    <p>
                      {result === 'win'
                        ? (finalLevel
                          ? `${playerName} defeated Arceus and earned ${enemy.xp} XP. All five trials are complete!`
                          : `${playerName} earned ${enemy.xp} XP. HP, transformation, and signature power reset for the next level.`)
                        : `${playerName} needs a full recovery before facing ${enemy.name} again.`}
                    </p>
                    <div>
                      {result === 'win'
                        ? <button onClick={continueCampaign}>{finalLevel ? 'NEW TEAM' : 'NEXT LEVEL'}</button>
                        : <button onClick={retryLevel}>RETRY LEVEL</button>}
                      <button className="secondary" onClick={onClose}>EXIT</button>
                    </div>
                  </motion.div>
                ) : (
                  <>
                    <div className="enemy-zone">
                      <div className="battle-status enemy-status">
                        <div><strong>{enemyName.toUpperCase()}</strong><span>LV. {enemy.level}</span></div>
                        <div className="hp-row"><b>HP</b><div><i style={{ width: `${enemyHpPercent}%` }} /></div><small>{enemyHp}/{enemy.maxHp}</small></div>
                      </div>
                      <motion.div
                        className={`pokemon-battler enemy-pokemon enemy-${enemy.slug}${turn === 'enemy-mega' ? ' is-transforming' : ''}${enemyMega ? ' is-mega' : ''}`}
                        animate={effect && effectSource === 'player' ? { x: [0, -8, 8, -5, 0], filter: ['brightness(1)', 'brightness(2.4)', 'brightness(1)'] } : {}}
                      >
                        <img src={enemyMega ? enemy.megaSprite : enemy.sprite} alt={`${enemyName} battle sprite`} />
                      </motion.div>
                      <span className="battle-shadow enemy-shadow" />
                    </div>

                    <div className="player-zone">
                      <span className="battle-shadow player-shadow" />
                      <motion.div
                        className={`pokemon-battler player-pokemon fighter-${player.id}${turn === 'player-transform' ? ' is-transforming' : ''}${playerTransformed ? ' is-mega' : ''}`}
                        animate={effect && effectSource === 'enemy' ? { x: [0, 7, -7, 4, 0], filter: ['brightness(1)', 'brightness(.3)', 'brightness(1)'] } : {}}
                      >
                        <img src={playerTransformed ? player.transformedSprite : player.backSprite} alt={`${playerName} facing ${enemy.name}`} />
                      </motion.div>
                      <div className="battle-status player-status">
                        <div><strong>{playerName.toUpperCase()}</strong><span>LV. {player.level}</span></div>
                        <div className="hp-row"><b>HP</b><div><i style={{ width: `${playerHpPercent}%` }} /></div><small>{playerHp}/{player.maxHp}</small></div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {!result && <div className="battle-console">
              <div className="battle-message">
                <span>{turn === 'player' ? `YOUR TURN · ${enemy.rank}` : `${enemy.name.toUpperCase()}'S TURN`}</span>
                <p>{message}</p>
                <div className="battle-action-row">
                  <button className={`mega-button${playerTransformed ? ' used' : ''}`} onClick={transformPlayer} disabled={turn !== 'player' || playerTransformed}>
                    <i/><span>{playerTransformed ? player.transformedName.toUpperCase() : player.transformLabel}</span>
                  </button>
                  <button className="potion-button" onClick={usePotion} disabled={turn !== 'player' || playerHp === player.maxHp}>
                    <i>+</i><span>HYPER POTION</span><small>+{potionPower} HP</small>
                  </button>
                </div>
              </div>
              <div className="move-grid roster-moves">
                {player.moves.map(move => (
                  <button
                    key={move.id}
                    className={`${move.special ? 'signature-move' : ''} type-${move.type.toLowerCase()}`}
                    onClick={() => handleMove(move)}
                    disabled={turn !== 'player' || (move.special && specialUsed)}
                  >
                    <span>{move.special ? 'SPECIAL · ONCE' : move.type}</span>
                    <strong>{move.name}</strong>
                    <small>{move.special && specialUsed ? 'USED' : `${move.min + (playerTransformed ? player.transformBonus : 0)}-${move.max + (playerTransformed ? player.transformBonus : 0)} DMG`}</small>
                  </button>
                ))}
              </div>
            </div>}

            <div className="battle-controls" aria-hidden="true"><span className="battle-dpad">+</span><div><i/><i/></div><span className="battle-a">A</span><span className="battle-b">B</span></div>
          </>
        )}
      </motion.section>
    </motion.div>
  );
};
