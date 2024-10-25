import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { fetchData } from "../utils/fetchFromApi";
import Main from "./Main";
import { Box } from "@mui/material";

const Feed = ({ open, setOpen }) => {
  const [selected, setSelected] = useState("New");
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
      <Main selected={selected} videos={videos} />
    </Box>
  );
};

export default Feed;
