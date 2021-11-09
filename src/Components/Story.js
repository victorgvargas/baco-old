import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import IconButton from "./IconButton";

export default function Story({ imgUrl }) {
  const ImgContainer = styled.div`
    width: 97px;
    height: 172px;
    margin: 3px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    background-color: ${imgUrl ? "none" : "black"};
    background-image: url("${imgUrl}");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  `;

  return (
    <ImgContainer>{imgUrl ? null : <IconButton icon="add" />}</ImgContainer>
  );
}

Story.propTypes = {
  imgUrls: PropTypes.string,
};
