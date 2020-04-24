import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    const { isAuthenticated, login, logout } = this.props.auth;
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            {isAuthenticated() ? (
              <Link to="#" onClick={logout}>
                Logout
              </Link>
            ) : (
              <Link to="#" onClick={login}>
                Start
              </Link>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}
