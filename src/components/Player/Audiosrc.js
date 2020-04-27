import React, { Component } from "react";

export default class Audiosrc extends Component {
  render() {
    return (
      <>
        {this.props.audio === null ? (
          <></>
        ) : (
          <audio src={this.props.audio} type="audio/mpeg" preload="none" />
        )}
      </>
    );
  }
}