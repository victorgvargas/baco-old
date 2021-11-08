import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import IconButton from "./IconButton";

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export default function Story({ imgUrl }) {
  const ImgContainer = styled.div`
    width: 97px;
    height: 172px;
    margin: 3px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${imgUrl ? "none" : "black"}};
  `;

  return (
    <ImgContainer>
      {imgUrl ? <Img src={imgUrl} /> : <IconButton icon="add" />}
    </ImgContainer>
  );
}

Story.propTypes = {
  imgUrls: PropTypes.string,
};
