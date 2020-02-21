import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import { Link } from "gatsby";
import { Flex } from "grid-emotion";
import Logo from "../images/logo_zenops.svg";
import Saltstack from "../images/ss.svg";

const PartnersBanner = ({ isCase }) => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center mt-4">
      <div className="roq">
        <ul className="featured-partners">
          <li>
            <img src={Saltstack} />
          </li>
          <li>
            <img src={Saltstack} />
          </li>
          <li>
            <img src={Saltstack} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PartnersBanner;

PartnersBanner.propTypes = {
  isCase: PropTypes.bool
};

PartnersBanner.defaultProps = {
  isCase: false
};
