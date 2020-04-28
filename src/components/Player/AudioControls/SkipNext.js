import React, { PureComponent } from "react";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PropTypes from "prop-types";
export default class SkipNext extends PureComponent {
  render() {
    return (
      <>
        <SkipNextIcon
          style={{
            color: "#ea98a4",
            fontSize: "3rem",
          }}
          onClick={this.props.nextAudioObject}
        />
      </>
    );
  }
}

SkipNext.propTypes = {
  nextAudioObject: PropTypes.func.isRequired,
};
