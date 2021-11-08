import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Img = styled.img`
  width: 97px;
  height: 172px;
  margin: 3px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

export default function Stories({ imgUrls }) {
  return imgUrls.map((url) => <Img src={url} />);
}

Stories.propTypes = {
  imgUrls: PropTypes.array,
};
