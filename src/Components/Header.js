import { Box } from "@mui/system";
import React from "react";
// import Stories from "react-insta-stories";
import IconButton from "./IconButton";
import imgUrls from "../Assets/story-mocks";
import Stories from "./Stories";

export default function Header() {
  //   const storiesOpened = false;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        overflowX: "scroll",
        paddingLeft: "3px",
        flexWrap: "nowrap",
      }}
    >
      <IconButton icon="add" />
      <Stories imgUrls={imgUrls} />
      {/* <Stories
        stories={imgUrls}
        defaultInterval={1500}
        width={"100vw"}
        height={"100vh"}
      /> */}
    </Box>
  );
}
