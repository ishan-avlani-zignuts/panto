import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import img1 from "../assets/images/Group 48095438 (1).svg";
import arrow from "../assets/images/Vector.svg";
import { useMediaQuery } from "@mui/material";

const Experiences = () => {
  const isXs = useMediaQuery("(max-width:600px)");

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          display: "flex",
          paddingTop: "240px",
        }}
        justifyContent={{ xs: "center", md: "left" }}
      >
        <img src={img1} alt="" style={{ maxWidth: "100%", height: "auto" }} />
      </Grid>
      <Grid item xs={12} md={6} margin={"auto"}>    
        <Box
          display="flex"
          flexDirection="column"
          alignItems={{ xs: "center", md: "flex-start" }}
          marginTop={{ md: "40px" }}
          margin={{ xs: "auto" }}
        > 
          <Typography
            fontSize={"18px"}
            lineHeight={"21px"}
            color={"#E58411"}
            paddingBottom={"20px"}
            paddingTop={"30px"}
          >
            EXPERIENCES
          </Typography>
          <Typography
            fontSize={{ xs: "35px", md: "42px" }}
            lineHeight={"49px"}
            color={"#1E1E1E"}
            fontWeight={"bold"}
            paddingBottom={"10px"}
            textAlign={{ xs: "center", md: "left" }}
          >
            We Provide You The <br /> Best Experience
          </Typography>
          <Typography
            fontSize={{ xs: "15px", md: "18px" }}
            lineHeight={"33.3px"}
            color={"#1E1E1E"}
            paddingBottom={"10px"}
            textAlign={{ xs: "center", md: "left" }}
          >
            You don’t have to worry about the result because all of these{" "}
            {!isXs && <br />} interiors are made by people who are professionals
            in their fields {!isXs && <br />} with an elegant and luxurious
            style and with premium quality {!isXs && <br />} materials
          </Typography>
          <Typography textAlign="left" color="#E58411" fontSize="14px">
            More Info <img src={arrow} alt="" />
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Experiences;
