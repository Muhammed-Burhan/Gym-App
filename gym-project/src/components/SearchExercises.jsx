/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Box, Stack, Button, TextField, Typography } from "@mui/material";
import { fetchData, exercisesOptions } from "../utils/fetchData";
import HorizontalScorllbar from "./HorizontalScorllbar";
import PropTypes from "prop-types";

const SearchExercises = ({ setExercises, setBodyPart, bodyPart }) => {
  const [search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exercisesOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  // const handleSearch = async (e) => {
  //   if (search) {
  //     const exercisesData = await fetchData(
  //       "https://exercisedb.p.rapidapi.com/exercises",
  //       exercisesOptions
  //     );

  //     const exercisesSearch = exercisesData.filter(
  //       (exercises) =>
  //         exercises.name.toLowerCase().includes(search) ||
  //         exercises.target.toLowerCase().includes(search) ||
  //         exercises.bodyPart.toLowerCase().includes(search) ||
  //         exercises.equipment.toLowerCase().includes(search)
  //     );
  //     setExercises(exercisesSearch);
  //     setSearch("");
  //   }
  // };
  const handleSearch = async (e) => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exercisesOptions
      );

      const exercisesSearch = exercisesData.filter(
        (exercises) =>
          exercises.name.toLowerCase().includes(search.toLowerCase()) ||
          exercises.target.toLowerCase().includes(search.toLowerCase()) ||
          exercises.bodyPart.toLowerCase().includes(search.toLowerCase()) ||
          exercises.equipment.toLowerCase().includes(search.toLowerCase())
      );

      setExercises(exercisesSearch);
      setSearch("");
    } else {
      // If search is empty, reset the exercises to the original data
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exercisesOptions
      );
      setExercises(exercisesData);
      console.log(exercisesData);
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
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScorllbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

SearchExercises.propTypes = {
  setExercises: PropTypes.func,
  setBodyPart: PropTypes.func,
  bodyPart: PropTypes.string,
};

export default SearchExercises;
