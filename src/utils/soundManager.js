import { Howl } from 'howler';

class SoundManager {
  constructor() {
    this.sounds = {};
    this.isMuted = false;
  }

  // Create sound instances with common effects
  loadSound(key, src, options = {}) {
    this.sounds[key] = new Howl({
      src,
      volume: 0.5,
      ...options,
    });
  }

  play(key) {
    if (!this.isMuted && this.sounds[key]) {
      this.sounds[key].play();
    }
  }

  stop(key) {
    if (this.sounds[key]) {
      this.sounds[key].stop();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  setVolume(key, volume) {
    if (this.sounds[key]) {
      this.sounds[key].volume(volume);
    }
  }
}

export const soundManager = new SoundManager();

// Load Pokemon sounds (using data URLs for embedded sounds)
export const initSounds = () => {
  // Poke ball throw sound (beep sound)
  soundManager.loadSound('poke-click', 'data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==');
  
  // Menu navigation sound
  soundManager.loadSound('menu-nav', 'data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==');
  
  // Success/confirm sound
  soundManager.loadSound('success', 'data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==');

  // Hover sound
  soundManager.loadSound('hover', 'data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==');
};
