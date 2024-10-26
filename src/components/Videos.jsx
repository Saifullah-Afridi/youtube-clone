import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import VedioCard from "./VedioCard";

const Videos = ({ videos }) => {
  return (
    <Box sx={{ width: "80%", mx: "auto" }}>
      <Grid container spacing={4}>
        {videos?.map((video, index) => (
          <Grid item x={12} md={4} key={index}>
            <VedioCard video={video} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Videos;
