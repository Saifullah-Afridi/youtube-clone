import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { fetchData } from "../utils/fetchFromApi";
import Main from "./Main";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const SearchFeed = ({ open, setOpen, selected, setSelected }) => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box>
      <SideBar
        open={open}
        setOpen={setOpen}
        selected={selected}
        setSelected={setSelected}
      />
      <Typography sx={{ width: "90%", mx: "auto" }} pb={2} color="white">
        Search Videos
      </Typography>
      <Main selected={selected} videos={videos} />
    </Box>
  );
};

export default SearchFeed;
