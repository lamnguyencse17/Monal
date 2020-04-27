import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

export default class ProgressBar extends Component {
  render() {
    const { progress, audioObject } = this.props;
    return (
      <>
        <PrettoSlider
          valueLabelDisplay="off"
          aria-label="pretto slider"
          value={progress}
          onChange={(event, value) => {
            audioObject.setCurrentTime(value);
          }}
          step={0.1}
        />
      </>
    );
  }
}

const PrettoSlider = withStyles({
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
