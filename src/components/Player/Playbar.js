import React, { Component } from "react";
import Audiosrc from "./Audiosrc";
import AudioController from "./AudioController";
import AudioInterface from "./Audio/AudioInterface";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { togglePlay, setCurrentAudio } from "../actions/music";

class Playbar extends Component {
  constructor(props) {
    super(props);
    this.props.setCurrentAudio(
      "http://localhost:3000/api/music?file=8972ecadTest.mp3"
    );
    this.state = {
      audioObject: new AudioInterface(
        "http://localhost:3000/api/music?file=8972ecadTest.mp3",
        this.props.togglePlay
      ),
    };
  }

  render() {
    return (
      <div className="playbar">
        <Audiosrc audio={this.props.audio} />
        <AudioController audioObject={this.state.audioObject} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    audio: state.music.audio,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ togglePlay, setCurrentAudio }, dispatch);
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Playbar)
);
