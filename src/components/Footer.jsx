import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import { Link } from "gatsby";
import { Flex } from "grid-emotion";

const Wrapper = styled.footer`
  background: ${props => props.theme.colors.greyDark};
  color: ${props => props.theme.colors.greyLight};
  a {
    color: ${props => props.theme.colors.bg};
    &:hover {
      color: ${props => props.theme.colors.primaryLight};
    }
  }
`;

const Inner = styled(Flex)`
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    justify-content: center;
    flex-direction: column;
    text-align: center;
    div:last-child {
      margin-top: 1rem;
    }
  }
`;

const StyledLink = styled(Link)`
  transform: translateX(0);
  transition: all 200ms ease-out;
  &:before {
    content: "←";
    padding-right: 8px;
  }
  &:hover {
    color: ${props => props.theme.colors.bg};
    transform: translateX(-6px);
  }
`;

const Footer = ({ isCase }) => {
  const year = new Date().getFullYear();
  return (
    <Wrapper>
      <Inner justifyContent="space-between" p={4}>
        <footer class="container py-5">
          <div class="row">
            <div class="col-12 col-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="d-block mb-2"
                role="img"
                viewBox="0 0 24 24"
                focusable="false"
              >
                <title>Product</title>
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path>
              </svg>
              <small class="d-block mb-3 text-muted">© 2017-2019</small>
            </div>
            <div class="col-6 col-md">
              <h5>Features</h5>
              <ul class="list-unstyled text-small">
                <li>
                  <a class="text-muted" href="#">
                    Cool stuff
                  </a>
                </li>
                <li>
                  <a class="text-muted" href="#">
                    Random feature
                  </a>
                </li>
                <li>
                  <a class="text-muted" href="#">
                    Team feature
                  </a>
                </li>
                <li>
                  <a class="text-muted" href="#">
                    Stuff for developers
                  </a>
                </li>
                <li>
                  <a class="text-muted" href="#">
                    Another one
                  </a>
                </li>
                <li>
                  <a class="text-muted" href="#">
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5>Resources</h5>
              <ul class="list-unstyled text-small">
                <li>
                  <a class="text-muted" href="#">
                    Resource
                  </a>
                </li>
                <li>
                  <a class="text-muted" href="#">
                    Resource name
                  </a>
                </li>
                <li>
                  <a class="text-muted" href="#">
                    Another resource
                  </a>
                </li>
                <li>
                  <a class="text-muted" href="#">
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5>Resources</h5>
              <ul class="list-unstyled text-small">
                <li>
                  <a class="text-muted" href="#">
                    Business
                  </a>
                </li>
                <li>
                  <a class="text-muted" href="#">
                    Education
                  </a>
                </li>
                <li>
                  <a class="text-muted" href="#">
                    Government
                  </a>
                </li>
                <li>
                  <a class="text-muted" href="#">
                    Gaming
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5>About</h5>
              <ul class="list-unstyled text-small">
                <li>
                  <a class="text-muted" href="#">
                    Team
                  </a>
                </li>
                <li>
                  <a class="text-muted" href="#">
                    Locations
                  </a>
                </li>
                <li>
                  <a class="text-muted" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a class="text-muted" href="#">
                    Terms
                  </a>
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
      </Inner>
    </Wrapper>
  );
};

export default Footer;

Footer.propTypes = {
  isCase: PropTypes.bool
};

Footer.defaultProps = {
  isCase: false
};
