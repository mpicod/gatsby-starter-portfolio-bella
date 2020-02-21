/* eslint no-unused-expressions: 0 */

import React from "react";
import PropTypes from "prop-types";
import { injectGlobal } from "react-emotion";
import { ThemeProvider } from "emotion-theming";

import SEO from "./SEO";
import theme from "../../config/theme";

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <SEO />
      {children}
    </React.Fragment>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired
};

export default Layout;
