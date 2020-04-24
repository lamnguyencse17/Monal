import React, { Component } from "react";
import Sidebar from "../../Sidebar";
import Playbar from "./Playbar";

export default class Player extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <Playbar />
      </>
    );
  }
}
