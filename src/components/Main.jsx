import { Box, Typography } from "@mui/material";
import React from "react";

const Main = ({ selected }) => {
  return (
    <Box sx={{ mt: "1rem" }}>
      <Box sx={{ width: "90%", mx: "auto" }}>
        <Typography color="white">{selected}</Typography>
      </Box>
    </Box>
  );
};

export default Main;
