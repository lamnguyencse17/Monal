import React, { PureComponent } from "react";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PropTypes from "prop-types";

export default class SkipPrev extends PureComponent {
  render() {
    return (
      <>
        <SkipPreviousIcon
          style={{
            color: "#ea98a4",
            fontSize: "3rem",
          }}
          onClick={this.props.prevAudioObject}
        />
      </>
    );
  }
}

SkipPrev.propTypes = {
  prevAudioObject: PropTypes.func.isRequired,
};
