import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchFromApi";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ReactPlayer from "react-player";
import Videos from "./Videos";
import SideBar from "./SideBar";

const VideoDetail = ({ open, setOpen, selected, setSelected }) => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  useEffect(() => {
    fetchData(`videos?part=contentDetails,snippet,statistics&id=${id}`).then(
      (data) => setVideo(data.items[0])
    );
    fetchData(`search?part=id,snippet&relatedToVideoId=${id}`).then((data) =>
      setRelatedVideos(data.items)
    );
  }, [id]);

  return (
    <>
      <SideBar
        open={open}
        setOpen={setOpen}
        selected={selected}
        setSelected={setSelected}
      />
      <Grid container minHeight="90vh" width="95%" mx="auto" gap="20px">
        <Grid items xs={12} md={7} sx={{ boxShadow: "large" }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            width="100%"
          />
          <Typography mt={2} color="white" variant="h6">
            {video?.snippet?.title}
          </Typography>
          <Stack direction={"row"} justifyContent="space-between">
            <Stack direction="row" gap={1}>
              <Stack>
                <Avatar
                  src={video?.snippet?.thumbnails?.high?.url}
                  sx={{ width: "50px", height: "50px" }}
                />
              </Stack>
              <Stack>
                <Typography color="gray">
                  {video?.snippet?.channelTitle}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" gap={1}>
              <Typography color="gray">
                {video?.statistics?.viewCount} views
              </Typography>
              <Typography color="gray">
                {video?.statistics?.likeCount} likes
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid items xs={12} md={4}>
          <Stack gap={1}>
            {relatedVideos?.map((relatedVideo, index) => (
              <Card
                key={index}
                sx={{ bgcolor: "transparent", boxShadow: "none" }}
              >
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/video/${relatedVideo?.videoId}`}
                >
                  <Stack direction="row" gap={1}>
                    <CardMedia
                      component="img"
                      sx={{ maxWidth: "200px" }}
                      src={relatedVideo?.snippet?.thumbnails?.medium?.url}
                    />
                    <CardContent sx={{ bgcolor: "#1f1f1f1f", color: "gray" }}>
                      <Typography color="white" variant="body2">
                        {relatedVideo?.snippet?.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        fontWeight="300"
                        fontSize="14px"
                      >
                        {relatedVideo?.snippet?.channelTitle}
                      </Typography>
                    </CardContent>
                  </Stack>
                </Link>
              </Card>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default VideoDetail;
