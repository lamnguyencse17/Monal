import React, { Component } from "react";

export default class Playbar extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }
  render() {
    this.handlePlay = () => {
      let audio = new Audio(
        "http://localhost:3000/api/music?file=8972ecadTest.mp3"
      );
      audio.play();
    };
    return (
      <div className="playbar">
        {this.state.data === null ? (
          <></>
        ) : (
          <audio controls src={[this.state.data]} />
        )}
        <button onClick={this.handlePlay}>Play Me</button>
      </div>
    );
  }
}
