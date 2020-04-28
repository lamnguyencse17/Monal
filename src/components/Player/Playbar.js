import React, { Component } from "react";
import AudioController from "./AudioController";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setCurrentAudio, pushToQueue } from "../actions/music";
import PropTypes from "prop-types";

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

Playbar.propTypes = {
  setCurrentAudio: PropTypes.func.isRequired,
  pushToQueue: PropTypes.func.isRequired,
};
// function mapStateToProps(state) {
//   return {
//     audio: state.music.audio,
//   };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCurrentAudio, pushToQueue }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(Playbar));
