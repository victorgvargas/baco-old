import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const Img = styled.img`
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const Box = styled.div`
  padding: 7px;
`;

export default function Banner({ imgUrls }) {
  return (
    <Box>
      <Carousel showThumbs={false} showArrows={false}>
        {imgUrls.map((url, index) => (
          <div key={index}>
            <Img src={url} alt="Banner"></Img>
          </div>
        ))}
      </Carousel>
    </Box>
  );
}
