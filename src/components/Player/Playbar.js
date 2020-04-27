import React, { Component } from "react";
import Audiosrc from "./Audiosrc";
import AudioController from "./AudioController";
import AudioInterface from "./Audio/AudioInterface";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { togglePlay, setCurrentAudio, pushToQueue } from "../actions/music";

class Playbar extends Component {
  constructor(props) {
    super(props);
    this.props.setCurrentAudio(
      "http://localhost:3000/api/music?file=8972ecadTest.mp3"
    );
    ["d3ea649eOneWay.mp3", "d3839625HongKong1.mp3"].map((song) =>
      this.props.pushToQueue("http://localhost:3000/api/music?file=" + song)
    );
  }
  render() {
    return (
      <div className="playbar">
        <AudioController />
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     audio: state.music.audio,
//   };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { togglePlay, setCurrentAudio, pushToQueue },
    dispatch
  );
}

export default withRouter(connect(null, mapDispatchToProps)(Playbar));
