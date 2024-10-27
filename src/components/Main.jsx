import { Box, Typography } from "@mui/material";
import React from "react";
import Videos from "./Videos";

const Main = ({ selected, videos }) => {
  return (
    <Box>
      <Box sx={{ width: "90%", mx: "auto" }}>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default Main;
