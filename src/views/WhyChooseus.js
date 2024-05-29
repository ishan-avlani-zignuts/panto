import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import arrow from "../assets/images/Vector.svg";
const WhyChooseUS = () => {
  return (
    <>
      <Grid container display="flex" justifyContent="center" py={14}>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            margin: "auto",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "42px",
              lineHeight: "49.22px",
              fontWeight: "bold",
              textAlign: { xs: "center", md: "left" },
              display: "inline-block",
            }}
          >
            Why <br />
            Choosing Us
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingTop: { xs: "50px" },
            alignItems: { xs: "center", md: "left", sm: "left" },
          }}
        >
          <Box
            sx={{
              textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Luxury Facilities
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "16px" },
                lineHeight: {
                  xs: "23.6px",
                  sm: "25.6px",
                  md: "27.6px",
                  lg: "29.6px",
                },
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              The advantage of hiring a workspace <br /> with us is that gives
              you comfortable <br /> service and all-around facilities.
            </Typography>
            <Typography color={"#E58411"} fontSize={"16px"}>
              More Info <img src={arrow} alt="" />
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            paddingTop: { xs: "50px" },
            flexDirection: "column",
            alignItems: { xs: "center" },
          }}
        >
          <Box
            sx={{
              textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Affordable Price
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "14px", lg: "16px" },
                lineHeight: {
                  xs: "23.6px",
                  sm: "25.6px",
                  md: "27.6px",
                  lg: "29.6px",
                },
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              You can get a workspace of the highest <br /> quality at an
              affordable price and still <br /> enjoy the facilities that are
              only here.
            </Typography>
            <Typography color={"#E58411"} fontSize={"16px"}>
              More Info <img src={arrow} alt="" />
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingTop: { xs: "50px" },
            alignItems: { xs: "center", md: "left" },
          }}
        >
          <Box
            sx={{
              textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Many Choices
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "16px" },
                lineHeight: {
                  xs: "23.6px",
                  sm: "25.6px",
                  md: "27.6px",
                  lg: "29.6px",
                },
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              We provide many unique work space <br /> choices so that you can
              choose the <br />
              workspace to your liking.
            </Typography>
            <Typography color={"#E58411"} fontSize={"16px"}>
              More Info <img src={arrow} alt="" />
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default WhyChooseUS;
