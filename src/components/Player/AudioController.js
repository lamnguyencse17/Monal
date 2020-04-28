import React, { Component } from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import AudioInterface from "./Audio/AudioInterface";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ProgressBar from "./ProgressBar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { togglePlay, nextAudio, prevAudio } from "../actions/music";

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
    console.log(this.state.audioObject.getAudioName());
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
    console.log(this.props.history[0]);
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
    const { audioObject } = this.state;
    return (
      <>
        <div className="control-row">
          <SkipPreviousIcon
            style={{
              color: "#ea98a4",
              fontSize: "3rem",
            }}
            onClick={this.prevAudioObject}
          />
          {this.props.play ? (
            <PauseCircleOutlineIcon
              onClick={this.handlePlay}
              style={{ color: "#ea98a4", fontSize: "3rem" }}
            />
          ) : (
            <PlayCircleOutlineIcon
              onClick={this.handlePlay}
              style={{
                color: "#ea98a4",
                fontSize: "3rem",
              }}
            />
          )}
          <SkipNextIcon
            style={{
              color: "#ea98a4",
              fontSize: "3rem",
            }}
            onClick={this.nextAudioObject}
          />
        </div>
        <div className="progress-row">
          <ProgressBar
            progress={this.state.progress}
            audioObject={audioObject} // passed from parent
            setProgress={this.setProgress}
          />
        </div>
      </>
    );
  }
}

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
