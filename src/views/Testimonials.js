import React from "react";
import Slider from "react-slick";
import { Test } from "../assets/data/CardData";
import star from "../assets/images/Group 48095424.png";
import { Box, Typography, Card, Container, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Footer from "../components/Footer";

const Testimonials = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: isSmDown ? 1 : isMdDown ? 2 : 3,
    slidesToScroll: isSmDown ? 1 : isMdDown ? 2 : 3,
    initialSlide: 0,
  };

  return (
    <>
      <Box pb={12}>
        <Container className="slider-container">
          <Box textAlign="center" mb={4}>
            <Typography sx={{ fontSize: "18px", color: "#E58411" }}>
              Testimonials
            </Typography>
            <Typography sx={{ fontSize: "42px", fontWeight: "bold" }}>
              Our Client Reviews
            </Typography>
          </Box>
          <Slider {...settings}>
            {Test.map((tst) => (
              <Box key={tst.id} px={1} display="flex" justifyContent="center">
                <Card
                  sx={{
                    width: 370,
                    height: 476,
                    borderRadius: 2,
                    position: "relative",
                    backgroundSize: "cover",
                    backgroundImage: `url(${tst.background})`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    mb: 4,
                  }}
                >
                  <Box
                    sx={{
                      left: "15px",
                      bottom: 10,
                      backgroundColor: "rgba(255, 255, 255)",
                      borderRadius: 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      width: "334px",
                      height: "206px",
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "50%",
                        width: "75px",
                        height: "75px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "-45.5px auto 0",
                      }}
                    >
                      <img
                        src={tst.image}
                        alt="User"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          borderRadius: "50%",
                        }}
                      />
                    </Box>
                    <Box textAlign="center" mt={2}>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          lineHeight: "21px",
                          fontWeight: "bold",
                        }}
                      >
                        {tst.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          lineHeight: "14px",
                          mt: 1,
                        }}
                      >
                        {tst.role}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          lineHeight: "16px",
                          mt: 2,
                          mx: 2,
                        }}
                      >
                        {tst.description}
                      </Typography>
                    </Box>
                    <Box mt={2} display="flex" justifyContent="center">
                      <img src={star} alt="rating" />
                    </Box>
                  </Box>
                </Card>
              </Box>
            ))}
          </Slider>
        </Container>
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default Testimonials;
