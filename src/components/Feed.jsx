import React, { useState } from "react";
import SideBar from "./SideBar";
import { Box, Drawer } from "@mui/material";
import Main from "./Main";

const Feed = ({ open, setOpen }) => {
  const [selected, setSelected] = useState("");
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
