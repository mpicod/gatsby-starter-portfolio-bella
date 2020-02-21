import React, { Component } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Logo from "../images/logo_zenops.svg";

export default class nav extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#">
            <img src={Logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  A propos <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/pillar"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Offre
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Moderniser
                  </a>
                  <a className="dropdown-item" href="#">
                    Simplifier
                  </a>
                  <a className="dropdown-item" href="#">
                    Sécuriser
                  </a>
                </div>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Métiers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <button
                    className="btn btn-primary"
                    type="button"
                    value="Input"
                  >
                    Contactez-nous !
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
