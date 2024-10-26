import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "./../utils/fetchFromApi";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchData(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data.items[0])
    );
    fetchData(`search?part=snippet&channelId=${id}`).then((data) =>
      setVideos(data.items)
    );
  }, [id]);

  return (
    <Box sx={{ minHeight: "98vh" }}>
      <ChannelCard channelDetail={channelDetail} />
      <Videos videos={videos} />
    </Box>
  );
};

export default ChannelDetail;
