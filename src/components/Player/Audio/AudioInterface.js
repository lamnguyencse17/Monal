export default class AudioInterface {
  constructor(src, onEnded = () => {}) {
    this.audio = new Audio(src);
    this.audio.onended = onEnded;
  }
  getSource = () => {
    return this.audio;
  };
  togglePlayAudio = () => {
    if (this.audio.paused && !this.audio.ended) {
      this.audio.play();
    } else {
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
}
