import React, { Component } from "react";
import PropTypes from "prop-types";
import AudioInterface from "./Audio/AudioInterface";
import ProgressBar from "./ProgressBar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { togglePlay, nextAudio, prevAudio } from "../actions/music";
import SkipNext from "./AudioControls/SkipNext";
import SkipPrev from "./AudioControls/SkipPrev";
import PlayPauseButton from "./AudioControls/PlayPauseButton";

class AudioController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioObject: new AudioInterface(
        "http://localhost:3000/api/music?file=8972ecadTest.mp3",
        this.props.togglePlay
      ),
      progress: 0,
    };
  }
  setProgress = (progress) => {
    this.setState({ progress });
  };
  handlePlay = () => {
    this.props.togglePlay(this.state.audioObject);
    setInterval(() => {
      let progress = this.state.audioObject.getProgress() * 100;
      this.setProgress(progress);
    }, 1000);
  };
  nextAudioObject = () => {
    let newAudio = new AudioInterface(
      this.props.queue[0],
      this.props.togglePlay
    );
    this.props.nextAudio(this.state.audioObject, newAudio);
    this.setState({
      ...this.state,
      audioObject: newAudio,
    });
  };
  prevAudioObject = () => {
    let newAudio = new AudioInterface(
      this.props.history.length == 1
        ? this.props.history[0]
        : this.props.history[-1],
      this.props.togglePlay
    );
    this.props.prevAudio(this.state.audioObject, newAudio);
    this.setState({
      ...this.state,
      audioObject: newAudio,
    });
  };
  render() {
    const { audioObject, progress } = this.state;
    const { play } = this.props;
    return (
      <>
        <div className="control-row">
          <SkipPrev prevAudioObject={this.prevAudioObject} />
          <PlayPauseButton play={play} handlePlay={this.handlePlay} />
          <SkipNext nextAudioObject={this.nextAudioObject} />
        </div>
        <ProgressBar
          progress={progress}
          audioObject={audioObject}
          setProgress={this.setProgress}
        />
      </>
    );
  }
}

AudioController.propTypes = {
  togglePlay: PropTypes.func.isRequired,
  nextAudio: PropTypes.func.isRequired,
  prevAudio: PropTypes.func.isRequired,
  play: PropTypes.bool.isRequired,
  audio: PropTypes.string,
  queue: PropTypes.array.isRequired,
  history: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    audio: state.music.audio,
    play: state.music.play,
    queue: state.music.queue,
    history: state.music.history,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ togglePlay, nextAudio, prevAudio }, dispatch);
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AudioController)
);
