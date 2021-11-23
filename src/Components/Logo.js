import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function Logo({ width, height }) {
  const Img = styled.img`
    width: ${width}px;
    height: ${height}px;
    margin: 5px;
  `;

  return <Img src="/icon.svg" />;
}

Logo.defaultProps = {
  width: 50,
  height: 50,
};

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
