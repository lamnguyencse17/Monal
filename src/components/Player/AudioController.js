import React, { Component } from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import ProgressBar from "./ProgressBar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { togglePlay } from "../actions/music";

class AudioController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    };
  }
  setProgress = (progress) => {
    this.setState({ progress });
  };
  handlePlay = () => {
    this.props.togglePlay(this.props.audioObject);
    setInterval(() => {
      let progress = this.props.audioObject.getProgress() * 100;
      this.setProgress(progress);
    }, 1000);
  };
  render() {
    const { audioObject } = this.props;
    return (
      <>
        <div className="control-row">
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
                "&:hover": {
                  color: "white",
                },
              }}
            />
          )}
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
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ togglePlay }, dispatch);
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AudioController)
);
