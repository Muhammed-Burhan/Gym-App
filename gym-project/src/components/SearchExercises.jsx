/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Box, Stack, Button, TextField, Typography } from "@mui/material";

const SearchExercises = () => {
  const [search, setSearch] = useState("");

  const handleSearch = async (e) => {
    if (search) {
      // const exercises=await fetchData()
    }
  };

  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      mt={"37px"}
      p={"20px"}
    >
      <Typography
        sx={{ textAlignLast: "center", fontSize: { lg: "44px", sm: "33px" } }}
        fontWeight={700}
        mb={"50px"}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position={"relative"} mb={"72px"}>
        <TextField
          sx={{
            input: {
              fontWeight: 700,
              border: "none",
              borderRadius: "4px",
            },
            width: {
              lg: "800px",
              sm: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height={"76px"}
          // value={""}
          onChange={(e) => {
            setSearch(e.target.value.toLocaleLowerCase());
          }}
          placeholder="Search For Exercises"
          value={search}
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: 0,
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
