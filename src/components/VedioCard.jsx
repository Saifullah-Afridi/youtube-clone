import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const VedioCard = ({ video }) => {
  const { id } = video;
  const { snippet } = video;
  const { thumbnails } = snippet;
  console.log(video);

  return (
    <Grid item x={4}>
      <Link to="">
        <CardMedia
          component="img"
          image={thumbnails?.high?.url}
          alt="thumbnail"
          width={thumbnails?.high?.width}
          hight={thumbnails?.high?.hight}
        ></CardMedia>
        <CardContent>
          <Typography>{snippet?.title}</Typography>
          <Typography>{snippet?.channelTitle}</Typography>
          <Typography>{snippet?.publishTime}</Typography>
        </CardContent>
      </Link>
    </Grid>
  );
};

export default VedioCard;
