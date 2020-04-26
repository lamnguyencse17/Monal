import React, { Component } from "react";
import Audiosrc from "./Audiosrc";
import AudioController from "./AudioController";
import AudioInterface from "./Audio/AudioInterface";

export default class Playbar extends Component {
  constructor() {
    super();
    this.state = {
      audio: new AudioInterface(
        "http://localhost:3000/api/music?file=8972ecadTest.mp3",
        this.togglePlayIcon
      ),
      play: false,
    };
  }
  togglePlayIcon = () => {
    this.setState({ ...this.state, play: !this.state.play });
  };
  render() {
    return (
      <div className="playbar">
        <Audiosrc getSource={this.state.audio.getSource} />
        <AudioController
          togglePlayAudio={this.state.audio.togglePlayAudio}
          play={this.state.play}
          togglePlayIcon={this.togglePlayIcon}
          getProgress={this.state.audio.getProgress}
          setCurrentTime={this.state.audio.setCurrentTime}
        />
      </div>
    );
  }
}
