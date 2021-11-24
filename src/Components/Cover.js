import React from "react";
import PropTypes from "prop-types";
import IconButton from "../Components/IconButton";
import { Box } from "@mui/system";

export default function Cover({ styles }) {
  return (
    <Box sx={styles}>
      <IconButton icon="arrow_back" variant="text" />
    </Box>
  );
}

Cover.defaultProps = {
  styles: {
    height: "25vh",
    backgroundImage: "url('/bar.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
  },
};

Cover.propTypes = {
  styles: PropTypes.object,
};
