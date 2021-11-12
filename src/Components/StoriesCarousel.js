import React from "react";
// import Stories from "react-insta-stories";
import styled from "styled-components";
import Story from "./Story";

const HideScrollbarWrapper = styled.div`
  display: flex;
  padding-left: 3px;
  z-index: 0;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

// const Overlay = styled.div`
//   position: absolute;
//   z-index: 1;
// `;

export default function StoriesCarousel({ imgUrls }) {
  // const [storyOpened, setStoryOpened] = useState(false);

  return (
    <HideScrollbarWrapper>
      <Story />
      {imgUrls.map((url, index) => (
        <Story key={index} imgUrl={url} />
      ))}
      {/* <Overlay>
        <Stories
          stories={imgUrls}
          defaultInterval={1500}
          width={"100vw"}
          height={"100vh"}
        />
      </Overlay> */}
    </HideScrollbarWrapper>
  );
}
