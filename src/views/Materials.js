import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import img1 from "../assets/images/Group 48095439.svg";
import arrow from "../assets/images/Vector.svg";
import { useMediaQuery } from "@mui/material";

const Materials = () => {
  const isXs = useMediaQuery("(max-width:600px)");

  return (
    <Grid
      container
      spacing={2}
      sx={{ paddingTop: { xs: "100px" }, paddingBottom: "200px" }}
    >
      {!isXs ? (
        <>
          <Grid item xs={12} md={6} margin={"auto"}>
            <Box
              display={"table"}
              margin={"auto"}
              marginTop={{ md: "40px" }}
              textAlign={{ xs: "center", md: "left" }}
            >
              <Typography
                fontSize={"18px"}
                lineHeight={"21px"}
                color={"#E58411"}
                paddingBottom={"20px"}
                paddingTop={"30px"}
              >
                MATERIALS
              </Typography>
              <Typography
                fontSize={{ xs: "35px", md: "42px" }}
                lineHeight={"49px"}
                color={"#1E1E1E"}
                fontWeight={"bold"}
                paddingBottom={"10px"}
                textAlign={{ xs: "center", md: "left" }}
              >
                Very Serious <br /> Materials For Making <br /> Furniture
              </Typography>
              <Typography
                fontSize={{ xs: "15px", md: "18px" }}
                lineHeight={"33.3px"}
                color={"#1E1E1E"}
                paddingBottom={"10px"}
                textAlign={{ xs: "center", md: "left" }}
              >
                Because panto was very serious about designing furniture for our{" "}
                {!isXs && <br />}
                environment, using a very expensive and famous capital but at a{" "}
                {!isXs && <br />}
                relatively low price
              </Typography>
              <Typography color="#E58411" fontSize="14px">
                More Info <img src={arrow} alt="" />
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              paddingTop: "240px",
            }}
            justifyContent={{ xs: "center", md: "right" }}
          >
            <img
              src={img1}
              alt=""
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
        </>
      ) : (
        <>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              paddingTop: "240px",
            }}
            justifyContent={{ xs: "center", md: "right" }}
          >
            <img
              src={img1}
              alt=""
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>

          <Grid item xs={12} md={6} margin={"auto"}>
            <Box
              display={"table"}
              margin={"auto"}
              marginTop={{ md: "40px" }}
              textAlign={{ xs: "center", md: "left" }}
            >
              <Typography
                fontSize={"18px"}
                lineHeight={"21px"}
                color={"#E58411"}
                paddingBottom={"20px"}
                paddingTop={"30px"}
              >
                MATERIALS
              </Typography>
              <Typography
                fontSize={{ xs: "35px", md: "42px" }}
                lineHeight={"49px"}
                color={"#1E1E1E"}
                fontWeight={"bold"}
                paddingBottom={"10px"}
              >
                Very Serious <br /> Materials For Making <br /> Furniture
              </Typography>
              <Typography
                fontSize={"18px"}
                lineHeight={"33.3px"}
                color={"#1E1E1E"}
                paddingBottom={"10px"}
              >
                Because panto was very serious about designing furniture for our{" "}
                {!isXs && <br />}
                environment, using a very expensive and famous capital but at a{" "}
                {!isXs && <br />}
                relatively low price
              </Typography>
              <Typography color="#E58411" fontSize="14px">
                More Info <img src={arrow} alt="" />
              </Typography>
            </Box>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Materials;
