import { Button, Drawer, IconButton, Stack } from "@mui/material";
import { logo } from "../utils/constants";
import ReorderIcon from "@mui/icons-material/Reorder";
import { categories } from "../utils/categories";
import { useNavigate } from "react-router-dom";

const SideBar = ({ open, setOpen, selected, setSelected }) => {
  const navigate = useNavigate();
  return (
    <Drawer
      PaperProps={{
        sx: {
          width: "250px",
          bgcolor: "#0f0f0f",
          mt: "8px",
          maxHeight: "100vh",
        },
      }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Stack ml={2} direction="row" gap={4}>
        <IconButton
          onClick={() => setOpen(!open)}
          sx={{
            color: "white",
            fontSize: "40px",
            "&:hover": {
              border: "1px solid gray",
            },
          }}
        >
          <ReorderIcon />
        </IconButton>
        <img src={logo} alt="logo" height={40} />
      </Stack>
      <Stack mt={3} pl={2} alignItems="start">
        {categories.map((category, index) => (
          <Button
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "start",
              color: "white",
              my: "2px",
              textTransform: "capitalize",
              background: selected === category.name ? "#888" : "",
              "&:hover": {
                backgroundColor: "#555",
              },
            }}
            startIcon={<category.icon sx={{ mr: "10px" }} />}
            key={index}
            onClick={() => {
              setSelected(category.name);
              setOpen(false);
              navigate("/");
            }}
          >
            {category.name}
          </Button>
        ))}
      </Stack>
    </Drawer>
  );
};

export default SideBar;
