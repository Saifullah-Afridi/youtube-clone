import React, { useState } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import { logo } from "../utils/constants";
import { Box, IconButton, Input, Paper, Stack, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ open, setOpen }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
    setSearch("");
  };
  return (
    <Box bgcolor="#1e1d1b" height="60px" mb={3}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        px={2}
        pt={1}
        alignItems="center"
      >
        <Stack direction="row" gap={2}>
          <IconButton
            onClick={() => {
              setOpen(true);
            }}
            sx={{
              bgcolor: "white",
              "&:hover": {
                backgroundColor: "gray",
              },
            }}
          >
            <ReorderIcon />
          </IconButton>
          <Link to="/" style={{ cursor: "pointer" }}>
            <img src={logo} alt="logo" height={40} />
          </Link>
        </Stack>
        <Paper
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "40px",
            gap: "10px",
            mx: "10px",
            px: "5px",
            bgcolor: "#121212",
            border: "1px solid white",
          }}
        >
          <Input
            disableUnderline
            size="small"
            sx={{
              border: "none",
              outline: "none",
              px: "10px",
              color: "#e2e2e2",
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <IconButton
            type="submit"
            sx={{
              color: "#e2e2e2e2",
              "&:hover": {
                bgcolor: "gray",
              },
            }}
          >
            <Search />
          </IconButton>
        </Paper>
      </Stack>
    </Box>
  );
};

export default NavBar;
