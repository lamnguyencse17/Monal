import React, { Component } from "react";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import MainPage from "./MainPage";
import Auth from "./Auth/Auth";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <>
        <Switch>
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route
            exact
            path="/"
            render={(props) => <MainPage auth={this.auth} {...props} />}
          />
          <Route
            path="/callback"
            render={(props) => <Callback auth={this.auth} {...props} />}
          />
        </Switch>
        <Navbar auth={this.auth} />
        <div className="brand">Monal</div>
        <footer>
          Monal <br /> Copyrighted 2020
        </footer>
      </>
    );
  }
}

export default App;
