import { Icon } from "@mui/material";
import React from "react";

export default function PriceRange({ range }) {
  return new Array(5).map((icon, index) =>
    index < range ? (
      <Icon>attach_money</Icon>
    ) : (
      <Icon sx={{ color: "lightgray" }}>attach_money</Icon>
    )
  );
}
