import React from "react";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import Palette from "../Themes/Palette";
import PropTypes from "prop-types";

export default function IconButton({ icon, styles, variant }) {
  return (
    <Palette>
      <Button sx={styles} variant={variant}>
        <Icon>{icon}</Icon>
      </Button>
    </Palette>
  );
}

IconButton.defaultProps = {
  icon: "add",
  styles: {
    width: 60,
    height: 60,
    borderRadius: "50%",
  },
  variant: "contained",
};

IconButton.propTypes = {
  icon: PropTypes.string,
  styles: PropTypes.object,
  variant: PropTypes.string,
};
