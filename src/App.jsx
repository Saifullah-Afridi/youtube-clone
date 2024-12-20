import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import VideoDetail from "./components/VideoDetail";
import ChannelDetail from "./components/ChannelDetail";
import NavBar from "./components/NavBar";
import SearchFeed from "./components/SearchFeed";
import { Box } from "@mui/material";

const App = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("New");
  return (
    <Box sx={{ bgcolor: "#1f1f1f", minHeight: "90vh" }}>
      <BrowserRouter>
        <NavBar open={open} setOpen={setOpen} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Feed
                open={open}
                setOpen={setOpen}
                selected={selected}
                setSelected={setSelected}
              />
            }
          />
          <Route
            path="/video/:id"
            exact
            element={
              <VideoDetail
                open={open}
                setOpen={setOpen}
                selected={selected}
                setSelected={setSelected}
              />
            }
          />
          <Route
            path="/channel/:id"
            exact
            element={
              <ChannelDetail
                open={open}
                setOpen={setOpen}
                selected={selected}
                setSelected={setSelected}
              />
            }
          />
          <Route
            path="/search/:searchTerm"
            exact
            element={
              <SearchFeed
                open={open}
                setOpen={setOpen}
                selected={selected}
                setSelected={setSelected}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
