import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import styled from "styled-components";
import Logo from "./Logo";

const DarkHeader = styled(Box)`
  background-color: #000000;
  border-radius: 5px 5px 0 0;
`;

export default function Header() {
  return (
    <>
      <DarkHeader>
        <Logo />
      </DarkHeader>
      <Divider />
    </>
  );
}
