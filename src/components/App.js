import React, { Component } from "react";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import MainPage from "./MainPage";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Switch>
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route exact path="/" render={(props) => <MainPage {...props} />} />
        </Switch>
        <Navbar />
        <div className="brand">Monal</div>
        <footer>
          Monal <br /> Copyrighted 2020
        </footer>
      </>
    );
  }
}

export default App;
