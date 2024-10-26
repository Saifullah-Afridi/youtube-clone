import React from "react";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";

const ChannelCard = ({ channelDetail }) => {
  console.log(channelDetail);
  function formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "m";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return num?.toString();
  }
  return (
    <Box sx={{ width: "80%", mx: "auto" }} my={2}>
      <Box>
        <img
          src={channelDetail?.brandingSettings?.image?.bannerExternalUrl}
          alt="Youtube Banner"
          width="100%"
          height="250px"
          style={{ borderRadius: "20px" }}
        />
        <Stack direction="row" gap={3} my={5}>
          <Avatar
            alt="channel owner profile picture"
            src={channelDetail?.snippet?.thumbnails?.high?.url}
            sx={{ width: "150px", height: "150px" }}
          />
          <Stack gap={1}>
            <Typography color="white" variant="h5" fontWeight="bold">
              {channelDetail?.snippet?.title}
            </Typography>
            <Stack direction="row" gap={0.5}>
              <Typography color="gray">
                {channelDetail?.snippet?.customUrl} .
              </Typography>
              <Typography color="gray">
                {formatNumber(channelDetail?.statistics?.subscriberCount)}{" "}
                subscribers .
              </Typography>
              <Typography color="gray">
                {formatNumber(channelDetail?.statistics?.videoCount)} videos
              </Typography>
            </Stack>
            <Typography color="gray" variant="body2">
              {channelDetail?.snippet?.description?.slice(0, 26)}...
            </Typography>
            <Button
              sx={{
                alignSelf: "start",
                bgcolor: "gray",
                color: "white",
                textTransform: "capitalize",
                borderRadius: "20px",
                "&:hover": {
                  bgcolor: "#444",
                },
              }}
              variant="contained"
              type="button"
            >
              Subscribe
            </Button>
          </Stack>
        </Stack>
        <Typography color={"white"} variant="h5">
          Videos
        </Typography>
      </Box>
    </Box>
  );
};

export default ChannelCard;
