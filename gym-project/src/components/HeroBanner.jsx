import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", sx: "70px" },
        ml: { sm: "50px" },
      }}
      position={"relative"}
      p={"20x"}
    >
      <Typography color={"#FF2625"} fontWeight={600} fontFamily={"26px"}>
        Fitness Club
      </Typography>

      <Typography
        fontWeight={"700"}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mt={"30px"}
        mb={"23px"}
      >
        Sweat , Smile <br /> And Repeat
      </Typography>

      <Typography fontSize={"22px"} lineHeight={"35px"} mb={"80px"}>
        Check out the most effective exercises
      </Typography>
      <Button
        href="#exercises"
        variant="contained"
        sx={{ backgroundColor: "#FF2625", p: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color={"#FF2625"}
        sx={{
          opacity: 0.4,
          display: {
            lg: "block",
            xs: "none",
          },
        }}
        fontSize={"200px"}
      >
        Exercises
      </Typography>
      <img
        className="hero-banner-img"
        src={HeroBannerImage}
        alt="Hero section image"
      />
    </Box>
  );
};

export default HeroBanner;
