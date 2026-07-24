import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GameHUD } from './components/GameHUD';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { initSounds, soundManager } from './utils/soundManager';

function App() {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    initSounds();
  }, []);

  const handleSoundToggle = () => {
    const newMutedState = soundManager.toggleMute();
    setIsMuted(newMutedState);
    soundManager.play('poke-click');
  };

  return (
    <Router>
      <div className="app-shell">
        <Header onSoundToggle={handleSoundToggle} isMuted={isMuted} />
        <GameHUD />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
