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
  text-align: center;
`;

export default function Banner({ imgUrls }) {
  return (
    <Box>
      <Carousel 
        showThumbs={false} 
        showArrows={false} 
        infiniteLoop 
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const style = {
            margin: '0 1px',
            backgroundColor: '#000000', 
            borderRadius: '50%',
            cursor: 'pointer' 
          };
          const activeStyle = isSelected ? {...style, border: '1px solid #e65100', boxShadow: '0 2px 2px #666'} : {...style};

          return (
            <span
              style={activeStyle}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            >&emsp;
            </span>
          );
        }}>
        {imgUrls.map((url, index) => (
          <div key={index}>
            <Img src={url} alt="Banner"></Img>
          </div>
        ))}
      </Carousel>
    </Box>
  );
}
