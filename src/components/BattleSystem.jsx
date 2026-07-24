import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { soundManager } from '../utils/soundManager';

const moves = [
  { id: 'fire', name: 'FLAMETHROWER', type: 'FIRE', meta: '18–26 DMG', color: 'red' },
  { id: 'claw', name: 'DRAGON CLAW', type: 'DRAGON', meta: '14–20 DMG', color: 'blue' },
  { id: 'blast', name: 'FIRE BLAST', type: 'FIRE', meta: '22–32 DMG', color: 'yellow' },
  { id: 'potion', name: 'USE POTION', type: 'ITEM', meta: '+24 HP', color: 'green' },
];

const enemyMoves = [
  { name: 'SHADOW BALL', effect: 'shadow', min: 11, max: 18 },
  { name: 'DARK PULSE', effect: 'dark', min: 10, max: 16 },
  { name: 'LICK', effect: 'lick', min: 8, max: 14 },
];

const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const BattleSystem = ({ onClose }) => {
  const [playerHp, setPlayerHp] = useState(100);
  const [enemyHp, setEnemyHp] = useState(100);
  const [turn, setTurn] = useState('player');
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState('A wild Gengar appeared! Go, Charizard!');
  const [effect, setEffect] = useState(null);
  const [playerMega, setPlayerMega] = useState(false);
  const [enemyMega, setEnemyMega] = useState(false);

  useEffect(() => {
    if (!effect) return undefined;
    const timer = window.setTimeout(() => setEffect(null), effect.startsWith('mega-') ? 1100 : 720);
    return () => window.clearTimeout(timer);
  }, [effect]);

  useEffect(() => {
    if (turn !== 'enemy' || result) return undefined;
    const timer = window.setTimeout(() => {
      const move = enemyMoves[randomBetween(0, enemyMoves.length - 1)];
      const damage = randomBetween(move.min, move.max) + (enemyMega ? 5 : 0);
      const next = Math.max(0, playerHp - damage);
      setEffect(move.effect);
      setPlayerHp(next);
      if (next === 0) {
        setResult('lose');
        setMessage(`${enemyMega ? 'Mega ' : ''}Gengar used ${move.name}. Charizard fainted!`);
      } else {
        setMessage(`${enemyMega ? 'Mega ' : ''}Gengar used ${move.name}. Charizard lost ${damage} HP.`);
        setTurn('enemy-hit');
      }
    }, 780);
    return () => window.clearTimeout(timer);
  }, [turn, result, playerHp, enemyMega]);

  useEffect(() => {
    if (turn !== 'enemy-hit' || result) return undefined;
    const timer = window.setTimeout(() => setTurn('player'), 720);
    return () => window.clearTimeout(timer);
  }, [turn, result]);

  useEffect(() => {
    if (turn !== 'player-mega' || result) return undefined;
    const timer = window.setTimeout(() => {
      setPlayerMega(true);
      setMessage('Charizard Mega Evolved into Mega Charizard X!');
      setTurn('player');
    }, 900);
    return () => window.clearTimeout(timer);
  }, [turn, result]);

  useEffect(() => {
    if (turn !== 'enemy-mega' || result) return undefined;
    const timer = window.setTimeout(() => {
      setEnemyMega(true);
      setMessage('Gengar Mega Evolved! Its power sharply rose.');
      setTurn('enemy');
    }, 900);
    return () => window.clearTimeout(timer);
  }, [turn, result]);

  const handleMove = (move) => {
    if (turn !== 'player' || result) return;
    soundManager.play('poke-click');
    setEffect(move.id);

    if (move.id === 'potion') {
      const healed = Math.min(24, 100 - playerHp);
      setPlayerHp(current => Math.min(100, current + 24));
      setMessage(`Clarence used a Potion. Charizard restored ${healed} HP.`);
      setTurn('enemy');
      return;
    }

    const ranges = { fire: [18, 26], claw: [14, 20], blast: [22, 32] };
    const damage = randomBetween(...ranges[move.id]) + (playerMega ? 6 : 0);
    const moveMessages = {
      fire: `${playerMega ? 'Mega ' : ''}Charizard used FLAMETHROWER`,
      claw: `${playerMega ? 'Mega ' : ''}Charizard used DRAGON CLAW`,
      blast: `${playerMega ? 'Mega ' : ''}Charizard used FIRE BLAST`,
    };

    const next = Math.max(0, enemyHp - damage);
    setEnemyHp(next);
    if (next === 0) {
      setResult('win');
      setMessage(`${moveMessages[move.id]} for ${damage} damage. Gengar fainted!`);
    } else if (next <= 50 && !enemyMega) {
      setMessage('Gengar is reacting to its Gengarite!');
      setEffect('mega-enemy');
      setTurn('enemy-mega');
    } else {
      setMessage(`${moveMessages[move.id]} for ${damage} damage.`);
      setTurn('enemy');
    }
  };

  const megaEvolve = () => {
    if (turn !== 'player' || playerMega || result) return;
    soundManager.play('success');
    setMessage('Charizardite X is reacting to Clarence’s Key Stone!');
    setEffect('mega-player');
    setTurn('player-mega');
  };

  const resetBattle = () => {
    setPlayerHp(100);
    setEnemyHp(100);
    setTurn('player');
    setResult(null);
    setEffect(null);
    setPlayerMega(false);
    setEnemyMega(false);
    setMessage('A wild Gengar appeared! Go, Charizard!');
  };

  return (
    <motion.div className="battle-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.section className="battle-device" role="dialog" aria-modal="true" aria-labelledby="battle-title" initial={{ scale: .92, y: 24 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .94, y: 18 }}>
        <div className="battle-device-top">
          <div className="battle-lens" aria-hidden="true" />
          <div className="battle-lights" aria-hidden="true"><i/><i/><i/></div>
          <div><small>CLARENCE.DEX</small><strong id="battle-title">TRAINING BATTLE</strong></div>
          <button onClick={onClose} aria-label="Exit battle">×</button>
        </div>

        <div className="battle-bezel">
          <div className={`battle-screen${effect ? ` fx-${effect}` : ''}`}>
            <div className="battle-scanlines" />
            {effect && <div className={`attack-effect ${effect}`} aria-hidden="true">
              <i/><i/><i/><i/><span/>
            </div>}
            {result ? (
              <motion.div className="battle-result" initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }}>
                <div className={`result-emblem ${result}`}>{result === 'win' ? '✓' : '!'}</div>
                <p className="eyebrow">{result === 'win' ? 'BATTLE COMPLETE' : 'SYSTEM FAILURE'}</p>
                <h2>{result === 'win' ? `${playerMega ? 'MEGA CHARIZARD X' : 'CHARIZARD'} WINS!` : 'TRY AGAIN?'}</h2>
                <p>{result === 'win' ? 'Charizard gained 250 XP. Gengar was added to the battle record.' : 'Charizard needs a quick rest before the next round.'}</p>
                <div><button onClick={resetBattle}>REMATCH</button><button className="secondary" onClick={onClose}>EXIT</button></div>
              </motion.div>
            ) : (
              <>
                <div className="enemy-zone">
                  <div className="battle-status enemy-status">
                    <div><strong>{enemyMega ? 'MEGA GENGAR' : 'GENGAR'}</strong><span>LV. 50</span></div>
                    <div className="hp-row"><b>HP</b><div><i style={{ width: `${enemyHp}%` }} /></div><small>{enemyHp}/100</small></div>
                  </div>
                  <motion.div className={`pokemon-battler enemy-pokemon${enemyMega ? ' is-mega' : ''}`} animate={effect && ['fire','claw','blast'].includes(effect) ? { x: [0, -8, 8, -5, 0], filter: ['brightness(1)','brightness(2.4)','brightness(1)'] } : {}}>
                    <img src={enemyMega ? '/pokemon/gengar-mega.gif' : '/pokemon/gengar.gif'} alt={enemyMega ? 'Mega Gengar' : 'Gengar'} />
                  </motion.div>
                  <span className="battle-shadow enemy-shadow" />
                </div>

                <div className="player-zone">
                  <span className="battle-shadow player-shadow" />
                  <motion.div className={`pokemon-battler player-pokemon${playerMega ? ' is-mega' : ''}`} animate={effect && ['shadow','dark','lick'].includes(effect) ? { x: [0, 7, -7, 4, 0], filter: ['brightness(1)','brightness(.3)','brightness(1)'] } : {}}>
                    <img src={playerMega ? '/pokemon/charizard-mega-x-back.gif' : '/pokemon/charizard-back.gif'} alt={playerMega ? 'Mega Charizard X facing Gengar' : 'Charizard facing Gengar'} />
                  </motion.div>
                  <div className="battle-status player-status">
                    <div><strong>{playerMega ? 'MEGA CHARIZARD X' : 'CHARIZARD'}</strong><span>LV. 50</span></div>
                    <div className="hp-row"><b>HP</b><div><i style={{ width: `${playerHp}%` }} /></div><small>{playerHp}/100</small></div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {!result && <div className="battle-console">
          <div className="battle-message">
            <span>{turn === 'player' ? 'YOUR TURN' : 'ENEMY TURN'}</span>
            <p>{message}</p>
            <button className={`mega-button${playerMega ? ' used' : ''}`} onClick={megaEvolve} disabled={turn !== 'player' || playerMega}>
              <i/><span>{playerMega ? 'MEGA ACTIVE' : 'MEGA EVOLVE'}</span>
            </button>
          </div>
          <div className="move-grid">
            {moves.map(move => (
              <button key={move.id} className={move.color} onClick={() => handleMove(move)} disabled={turn !== 'player'}>
                <span>{move.type}</span><strong>{move.name}</strong><small>{move.meta}</small>
              </button>
            ))}
          </div>
        </div>}

        <div className="battle-controls" aria-hidden="true"><span className="battle-dpad">+</span><div><i/><i/></div><span className="battle-a">A</span><span className="battle-b">B</span></div>
      </motion.section>
    </motion.div>
  );
};
