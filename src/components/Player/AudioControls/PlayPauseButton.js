import React, { PureComponent } from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PropTypes from "prop-types";

export default class PlayPauseButton extends PureComponent {
  render() {
    const { play, handlePlay } = this.props;
    return (
      <>
        {play ? (
          <PauseCircleOutlineIcon onClick={handlePlay} style={styles} />
        ) : (
          <PlayCircleOutlineIcon onClick={handlePlay} style={styles} />
        )}
      </>
    );
  }
}

PlayPauseButton.propTypes = {
  play: PropTypes.bool.isRequired,
  handlePlay: PropTypes.func.isRequired,
};

const styles = {
  color: "#ea98a4",
  fontSize: "3rem",
};
