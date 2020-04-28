export default class AudioInterface {
  constructor(src, onEnded = () => {}) {
    this.audio = new Audio(src);
    this.audio.onended = () => {
      onEnded(this.audio);
    };
  }
  getSource = () => {
    return this.audio;
  };
  togglePlay = (interval) => {
    if (this.audio.paused && !this.audio.ended) {
      this.audio.play();
    } else {
      clearInterval(interval);
      this.audio.pause();
    }
  };
  getProgress = () => {
    return this.audio.currentTime / this.audio.duration;
  };
  setCurrentTime = (progress) => {
    this.audio.currentTime = (progress / 100) * this.audio.duration;
    return this.getProgress();
  };
  getAudioName = () => {
    return this.audio.currentSrc;
  };
  isPlaying = () => {
    return !this.audio.paused;
  };
}
