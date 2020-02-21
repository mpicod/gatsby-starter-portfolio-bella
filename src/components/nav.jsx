import React, { Component } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Logo from "../images/logo_zenops.svg";

export default class nav extends Component {
  render() {
    return (
      <div className="container">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="#">
            <img src={Logo} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  A propos <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
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
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="#">
                    Moderniser
                  </a>
                  <a class="dropdown-item" href="#">
                    Simplifier
                  </a>
                  <a class="dropdown-item" href="#">
                    Sécuriser
                  </a>
                </div>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Métiers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <button class="btn btn-primary" type="button" value="Input">
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
