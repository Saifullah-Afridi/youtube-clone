import { CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const VedioCard = ({ video }) => {
  return (
    <Link
      to={`/video/${video?.id?.videoId}`}
      style={{ textDecoration: "none" }}
    >
      <CardMedia
        component="img"
        sx={{ borderRadius: "12px" }}
        image={video?.snippet?.thumbnails?.medium?.url}
        alt="thumbnail"
        width={video?.snippet?.thumbnails?.medium?.width}
        hight={video?.snippet?.thumbnails?.medium?.hight}
      ></CardMedia>
      <CardContent>
        <Typography sx={{ color: "white" }}>{video?.snippet?.title}</Typography>
        <Link
          style={{ textDecoration: "none" }}
          to={`/channel/${video?.snippet?.channelId}`}
        >
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
        </Link>
        <Typography variant="body2" color="gray">
          {video?.snippet?.publishTime}
        </Typography>
      </CardContent>
    </Link>
  );
};

export default VedioCard;
