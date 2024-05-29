import React, { useState } from "react";
import {
  Box,
  Typography,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";
import zero from "../assets/images/zero.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <Box
      display={"flex"}
      sx={{
        justifyContent: "space-between",
        position: "absolute",
        backgroundColor: "transparent",
        color: "white",
        width: "100%",
        maxWidth: "100vw",
        left: "50%",
        transform: "translateX(-50%)",
        py: 5,
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: { xs: "none", lg: "flex", md: "flex", sm: "none" },
          paddingLeft: "100px",
        }}
      >
        <Typography sx={{ fontSize: "28px", lineHeight: "32.81px" }}>
          Panto
        </Typography>
      </Box>

      <Box
        sx={{ display: { xs: "block", lg: "none", md: "none", sm: "flex" } }}
        px={"20px"}
      >
        <IconButton onClick={toggleDrawer(true)} color="inherit">
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 250 }}>
            <List>
              {["Furniture", "Shop", "About Us", "Contact Us"].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>

      <Box
        sx={{
          textDecoration: "none",
          display: { xs: "none", lg: "flex", md: "flex", sm: "none" },
          lineHeight: "21.09px",
          textAlign: "center",
          alignItems: "center",
        }}
        gap={7}
      >
        <Link
          to="/products"
          style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
          display={"flex"}
        >
          Furniture
          <div>
            <KeyboardArrowDownIcon
              sx={{
                fontSize: "18px",
                textAlign: "center",
                alignItems: "center",
              }}
            />
          </div>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
          to="/products"
        >
          Shop
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
          to="/whychooseus"
        >
          About Us
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
          to="/footer"
        >
          Contact Us
        </Link>
      </Box>

      <Box px={"100px"} position={"relative"}>
        <ShoppingBagIcon
          sx={{
            position: "absolute",
            color: "white",
            alignItems: "center",
            width: "34px",
            height: "34px",
          }}
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
        <Box position={"absolute"} top={"5px"} right={"65px"}>
          <img src={zero} alt="" width={"20px"} height={"25px"} />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
