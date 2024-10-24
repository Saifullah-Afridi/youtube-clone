import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { fetchData } from "../utils/fetchFromApi";
import Main from "./Main";
import { Box } from "@mui/material";

const Feed = ({ open, setOpen }) => {
  const [selected, setSelected] = useState("New");

  useEffect(() => {
    fetchData(`search?part=snippet&q=${selected}`);
  }, []);
  return (
    <Box bgcolor="#1f1f1f" height="92vh" border="2px solid red">
      <SideBar
        open={open}
        setOpen={setOpen}
        selected={selected}
        setSelected={setSelected}
      />
      <Main selected={selected} />
    </Box>
  );
};

export default Feed;
