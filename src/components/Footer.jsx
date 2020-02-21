import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import { Link } from "gatsby";
import { Flex } from "grid-emotion";
import Logo from "../images/logo_zenops.svg";

const Footer = ({ isCase }) => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer class="container py-5">
        <div class="row">
          <div class="col-12 col-md">
            <img src={Logo} className="navbar-brand" />
            <small class="d-block mb-3 text-muted">© 1998-2020</small>
          </div>
          <div class="col-6 col-md">
            <h5>Offres</h5>
            <ul class="list-unstyled text-small">
              <li>
                <a class="text-muted" href="#">
                  Moderniser
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Simplifier
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Sécuriser
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li>
                <a class="text-muted" href="#">
                  FAQ
                </a>
              </li>
              <li>
                <a class="text-muted" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-md">
            <h5>À propos</h5>
            <ul class="list-unstyled text-small">
              <li>
                <a class="text-muted" href="#">
                  Team
                </a>
              </li>
              <li>
                <button class="btn btn-primary" type="button" value="Input">
                  Contactez-nous !
                </button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* {isCase ? (
          <React.Fragment>
            <StyledLink to="/">Return to home</StyledLink>
            <div>Contact Us</div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div>
              Copyright &copy; {year} by{' '}
              <a href="https://github.com/LekoArts/gatsby-starter-portfolio-bella">Bella GitHub Repository</a>. Pictures
              by <a href="https://unsplash.com/">Unsplash</a>. Illustrations by{' '}
              <a href="https://undraw.co/illustrations">Undraw</a>.
            </div>
            <div>Snapchat &mdash; Musicaly &mdash; Twitter</div>
          </React.Fragment>
        )} */}
    </div>
  );
};

export default Footer;

Footer.propTypes = {
  isCase: PropTypes.bool
};

Footer.defaultProps = {
  isCase: false
};
