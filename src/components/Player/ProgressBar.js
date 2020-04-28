import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import AudioInterface from "./Audio/AudioInterface";

export default class ProgressBar extends PureComponent {
  render() {
    const { progress, audioObject } = this.props;
    return (
      <>
        <div className="progress-row">
          <CustomSlider
            valueLabelDisplay="off"
            value={progress}
            onChange={(event, value) => {
              audioObject.setCurrentTime(value);
            }}
            step={0.1}
          />
        </div>
      </>
    );
  }
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  audioObject: PropTypes.instanceOf(AudioInterface),
};

const CustomSlider = withStyles({
  root: {
    color: "#ea98a4",
    height: 8,
  },
  thumb: {
    height: 12,
    width: 12,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -2,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);
