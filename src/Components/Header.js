import { Box } from "@mui/system";
import React from "react";
import Stories from "react-insta-stories";
import IconButton from "./IconButton";
import imgUrls from "../Assets/story-mocks";

export default function Header() {
  const storiesOpened = false;

  return (
    <Box flexDirection="row" justifyContent="center">
      <IconButton icon="add" />
      <Stories
        stories={imgUrls}
        defaultInterval={1500}
        width={"100vw"}
        height={"100vh"}
      />
    </Box>
  );
}
