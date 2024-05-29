import React from "react";
import Navbar from "../components/Navbar";
import { Box, Button, Typography, TextField } from "@mui/material";
import hero_img from "../assets/images/Rectangle 1441.svg";
import SearchIcon from "@mui/icons-material/Search";
const Home = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          height: "1084px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={hero_img}
          alt=""
          style={{ width: "100%", height: "1084px", objectFit: "cover" }}
        />
        <Box position={"absolute"} zIndex={1} top={"140px"}>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "30px", lg: "80px", md: "65px", sm: "50px" },
                alignItems: "center",
                textAlign: "center",
                lineHeight: {
                  xs: "50px",
                  md: "90px",
                  lg: "104px",
                  sm: "60px",
                },
                color: "white",
              }}
            >
              Make Your Interior More <br /> Minimalistic & Modern
            </Typography>
          </Box>
          <Box sx={{ marginTop: { xs: "30px", md: "20px" } }}>
            <Typography
              sx={{
                fontSize: {
                  xs: "15px",
                  md: "25px",
                  lg: "25px",
                  sm: "22px",
                },
                textAlign: "center",
                color: "white",
              }}
            >
              Turn your room with panto into a lot more minimalist <br /> and
              modern with ease and speed
            </Typography>
          </Box>
          <Box
            sx={{
              textAlign: "left",
              color: "white",
              border: "1px solid white",
              justifyContent: "space-between",
              display: "flex",
              marginInline: "auto",
              borderRadius: "42px",
              overflow: "hidden",
              marginTop: { xs: "60px", md: "20px" },
              backgroundColor: "#494B4D",
              width: { xs: "70%", sm: "90%", md: "344px" },
              height: "56px",
            }}
            px={2}
            py={0.5}
          >
            {/* <TextField
              sx={{
                color: "white",
                textAlign: "center",
                alignItems: "center",
                display: "flex",
                border: "none",
              }}
              InputProps={{
                placeholder: "Search Furniture",
                style: { color: "#FFFFFF", fontSize: "18px", border: "none" },
              }}
            /> */}
            <TextField
              placeholder="Search Furniture"
              sx={{
                flex: 1,
                color: "white",
                textAlign: "center",
                display: "flex",
                alignItems: "start",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                  "&:hover fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                  fontSize: "18px",
                  textAlign: "center",
                },
              }}
              InputProps={{
                style: { color: "#FFFFFF", fontSize: "18px" },
              }}
            />
            <Box
              sx={{
                backgroundColor: "orange",
                borderRadius: "100%",
                width: "40px",
                height: "40px",
                textAlign: "center",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                marginTop: "7px",
              }}
            >
              <Button>
                <SearchIcon sx={{ color: "white" }} />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
