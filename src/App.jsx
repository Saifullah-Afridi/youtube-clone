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
  return (
    <Box sx={{ bgcolor: "#1f1f1f" }}>
      <BrowserRouter>
        <NavBar open={open} setOpen={setOpen} />
        <Routes>
          <Route
            path="/"
            exact
            element={<Feed open={open} setOpen={setOpen} />}
          />
          <Route path="/video/:id" exact element={<VideoDetail />} />
          <Route path="/channel/:id" exact element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
