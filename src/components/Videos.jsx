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
import { Link } from "react-router-dom";

const Videos = ({ videos }) => {
  return (
    <Box>
      <Grid container spacing={4}>
        {videos.map((video, index) => (
          <Grid item x={12} md={4} key={index}>
            <Link
              to={`/video/${video?.id?.videoId}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <CardMedia
                component="img"
                sx={{ borderRadius: "12px" }}
                image={video?.snippet?.thumbnails?.high?.url}
                alt="thumbnail"
                width={video?.snippet?.thumbnails?.high?.width}
                hight={video?.snippet?.thumbnails?.high?.hight}
              ></CardMedia>
              <CardContent>
                <Typography sx={{ color: "white" }}>
                  {video?.snippet?.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "15px",
                    fontWeight: "400",
                    color: "gray",
                    mt: "2px",
                  }}
                >
                  {video?.snippet?.channelTitle}
                </Typography>
                <Typography variant="body2" color="gray">
                  {video?.snippet?.publishTime}
                </Typography>
              </CardContent>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Videos;
