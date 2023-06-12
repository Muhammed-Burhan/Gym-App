import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Pagination, Box, Stack, Typography } from "@mui/material";
import { fetchData, exercisesOptions } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ bodyPart, exercises, setExercises }) => {
  console.log(exercises);
  return (
    <Box id="exercises" sx={{ lg: { mt: "110px" } }} mt={"50px"} p={"20px"}>
      <Typography variant="h3" mb={"46px"}>
        Showing Results{" "}
      </Typography>
      <Stack
        direction={"row"}
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        {exercises.map((item) => (
          <ExerciseCard key={item.id} exercises={item} />
        ))}
      </Stack>
    </Box>
  );
};

Exercises.propTypes = {
  setExercises: PropTypes.func,
  bodyPart: PropTypes.string,
  exercises: PropTypes.array,
};

export default Exercises;
