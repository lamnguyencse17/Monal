import React, { Component } from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import ProgressBar from "./ProgressBar";

export default class AudioController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    };
  }
  handlePlay = () => {
    this.props.togglePlayIcon();
    this.props.togglePlayAudio();
    setInterval(() => {
      this.setProgress(this.props.getProgress() * 100);
    }, 1000);
  };
  setProgress = (progress) => {
    this.setState({ progress });
  };
  render() {
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
            setCurrentTime={this.props.setCurrentTime}
            setProgress={this.setProgress}
          />
        </div>
      </>
    );
  }
}
