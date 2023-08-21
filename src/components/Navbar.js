import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Navbar() {
  const Navigate = useNavigate();

  const ItemCount = JSON.parse(localStorage.getItem("cartItem"))?.length;
  return (
    <Box className="navbar" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}></IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ cursor: "pointer" }}
            onClick={() => Navigate("/")}>
            TeeRex Store
          </Typography>
          <Button color="inherit" onClick={() => Navigate("/checkout")}>
            Products
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={ItemCount} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
