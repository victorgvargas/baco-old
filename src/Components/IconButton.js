import React from "react";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import Palette from "../Themes/Palette";
import PropTypes from "prop-types";

export default function IconButton({ icon }) {
  return (
    <Palette>
      <Button
        sx={{
          width: 60,
          height: 60,
          borderRadius: "50%",
        }}
        variant="contained"
      >
        <Icon>{icon}</Icon>
      </Button>
    </Palette>
  );
}

IconButton.propTypes = {
  icon: PropTypes.string,
};
