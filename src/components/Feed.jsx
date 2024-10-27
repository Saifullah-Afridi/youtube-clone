import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { fetchData } from "../utils/fetchFromApi";
import Main from "./Main";
import { Box, Typography } from "@mui/material";

const Feed = ({ open, setOpen, selected, setSelected }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData(`search?part=snippet&q=${selected}`).then((data) =>
      setVideos(data.items)
    );
  }, [selected]);

  return (
    <Box>
      <SideBar
        open={open}
        setOpen={setOpen}
        selected={selected}
        setSelected={setSelected}
      />
      <Typography sx={{ width: "90%", mx: "auto" }} pb={2} color="white">
        {selected} Videos
      </Typography>
      <Main selected={selected} videos={videos} />
    </Box>
  );
};

export default Feed;
