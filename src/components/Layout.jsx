/* eslint no-unused-expressions: 0 */

import React from "react";
import PropTypes from "prop-types";

import SEO from "./SEO";
import "../../src/style/style.scss";
import theme from "../../config/theme";

const Layout = ({ children }) => (
  <React.Fragment>
    <SEO />
    {children}
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired
};

export default Layout;
