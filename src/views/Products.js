import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import arrow from "../assets/images/Vector.svg";
import Slider from "react-slick";
import { products } from "../assets/data/Products";
import star from "../assets/images/Group 172.svg";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";
const Products = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: isSmDown ? 1 : isMdDown ? 2 : 4,
    slidesToScroll: isSmDown ? 1 : isMdDown ? 2 : 2,
    initialSlide: 0,
  };
  return (
    <>
      <Box sx={{ backgroundColor: "#F7F7F7", height: "900px", width: "100%" }}>
        <Container className="slider-container">
          <Box>
            <Typography
              sx={{ fontSize: { xs: "35px", md: "42px" }, textAlign: "center" }}
              py={7}
            >
              Best Selling Products
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "6px",
                backgroundColor: "#EEEEEE",
                borderRadius: "44px",
                fontSize: "18px",
                width: "348px",
                height: "57px",
                marginInline: "auto",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "white",
                  borderRadius: "32px",
                  color: "black",
                }}
              >
                <Typography>Chairs</Typography>
              </Button>
              <Button>
                <Typography sx={{ color: "black" }}>Beds</Typography>
              </Button>
              <Button>
                <Typography sx={{ color: "black" }}>Sofa</Typography>
              </Button>
              <Button>
                <Typography sx={{ color: "black" }}>Lamp</Typography>
              </Button>
            </Box>
          </Box>

          <Slider {...settings} style={{ height: "492px" }}>
            {products.map((product) => (
              <Box
                sx={{
                  height: "492.73px",
                  borderRadius: "15px",
                  width: "239px",
                  justifyContent: "center",
                }}
                key={product.id}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#FAFAFA",
                    height: "220px",
                    width: "239px",
                  }}
                >
                  <img
                    src={product.image}
                    width={"223px"}
                    height={"250px"}
                    alt=""
                  />
                </Box>

                <Box
                  backgroundColor={"#FFFFFF"}
                  width={"239px"}
                  py={"20px"}
                  height={"400px"}
                >
                  <Typography
                    sx={{
                      fontSize: "17px",
                      color: "#8D8D8D",
                      paddingLeft: "15px",
                      paddingTop: "5px",
                    }}
                  >
                    {product.category}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "21px",
                      color: "#0D1B39",
                      paddingLeft: "15px",
                      paddingTop: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Box sx={{ paddingTop: "5px", paddingLeft: "15px" }}>
                    <img src={star} alt="" />
                  </Box>

                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    marginInline={"auto"}
                    paddingTop={"45px"}
                  >
                    <Typography
                      sx={{
                        paddingLeft: "15px",
                        fontSize: "21px",
                        fontWeight: "bold",
                        color: "#0D1B39",
                      }}
                    >
                      $ {product.price}
                    </Typography>
                    <Box sx={{ paddingRight: "15px" }}>
                      <Button
                        sx={{
                          backgroundColor: "#0D1B39",
                          borderRadius: "50%",
                          width: "48px",
                          height: "48px",
                        }}
                      >
                        <AddIcon sx={{ color: "white", fontWeight: "bold" }} />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
        </Container>
        <Box
          py={13}
          alignItems={"center"}
          textAlign={"center"}
          justifyContent={"center"}
        >
          <Typography sx={{ fontSize: "18px", color: "#E58411" }}>
            View All <img src={arrow} alt="" />
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Products;
