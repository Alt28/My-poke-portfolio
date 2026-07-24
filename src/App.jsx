import { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GameHUD } from './components/GameHUD';
import { Home } from './pages/Home';
import { initSounds, soundManager } from './utils/soundManager';

const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Projects = lazy(() => import('./pages/Projects').then(module => ({ default: module.Projects })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));

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
          <Suspense fallback={<div className="route-loader" role="status"><i/><span>LOADING DATA...</span></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
