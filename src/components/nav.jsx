import React, { Component } from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import Logo from "../images/logo_zenops.svg";

const SimpleLink = props => (
  <li className="nav-item active">
    <a
      className="nav-link"
      // {...(l.primary.link ? { href: l.primary.link.url } : {})}
      {...(props.link.primary.link && { href: props.link.primary.link.url })}
    >
      {console.log(props, "link")}
      {props.link.primary.label.text}A
    </a>
  </li>
);

const Nav = () => {
  return (
    <StaticQuery
      query={graphql`
        query navQuery {
          prismicLayout {
            data {
              nav {
                primary {
                  label {
                    text
                  }
                  link {
                    url
                  }
                }
                items {
                  sub_nav_link_label {
                    text
                  }
                  sub_nav_link {
                    url
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            {console.log(data)}
            <a className="navbar-brand" href="/">
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
                {data.prismicLayout.data.nav.map(l => {
                  return l.primary.link ? (
                    <li className="nav-item active">
                      <a
                        className="nav-link"
                        // {...(l.primary.link ? { href: l.primary.link.url } : {})}
                        href={l.primary.link.url}
                        // {...(l.primary.link && { href: l.primary.link.url })}
                      >
                        {l.primary.label.text}
                      </a>
                    </li>
                  ) : (
                    <li className="nav-item dropdown text-white">
                      <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {l.primary.label.text}
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        {l.items.map(i => (
                          <a
                            className="dropdown-item"
                            href={i.sub_nav_link.url}
                          >
                            {i.sub_nav_link_label.text}
                          </a>
                        ))}
                      </div>
                    </li>
                  );
                })}
                {/* <li className="nav-item active">
                  <a className="nav-link" href="/">
                    À propos
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
                </li> */}
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
      )}
    />
  );
};

export default Nav;
