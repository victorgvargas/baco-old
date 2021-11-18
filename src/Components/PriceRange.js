import { Icon } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function PriceRange({ range }) {
  return (
    <Box display="inline">
      {new Array(5).fill("").map((icon, index) =>
        index < range ? (
          <Icon fontSize="inherit">attach_money</Icon>
        ) : (
          <Icon fontSize="inherit" sx={{ color: "lightgray" }}>
            attach_money
          </Icon>
        )
      )}
    </Box>
  );
}
