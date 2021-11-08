import React from "react";
// import Stories from "react-insta-stories";
import imgUrls from "../Assets/story-mocks";
import styled from "styled-components";
import Story from "./Story";

const HideScrollbarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 3px;
  flex-wrap: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function Header() {
  //   const storiesOpened = false;

  return (
    <HideScrollbarWrapper>
      <Story />
      {imgUrls.map((url) => (
        <Story imgUrl={url} />
      ))}
      {/* <Stories
          stories={imgUrls}
          defaultInterval={1500}
          width={"100vw"}
          height={"100vh"}
        /> */}
    </HideScrollbarWrapper>
  );
}
