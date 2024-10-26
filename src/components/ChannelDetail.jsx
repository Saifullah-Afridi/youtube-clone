import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "./../utils/fetchFromApi";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
import SideBar from "./SideBar";

const ChannelDetail = ({ open, setOpen, selected, setSelected }) => {
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
    <Box sx={{ minHeight: "98vh", mt: "10px" }} border="2px solid red">
      <SideBar
        open={open}
        setOpen={setOpen}
        selected={selected}
        setSelected={setSelected}
      />
      <ChannelCard channelDetail={channelDetail} />
      <Videos videos={videos} />
    </Box>
  );
};

export default ChannelDetail;
