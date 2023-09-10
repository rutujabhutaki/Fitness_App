import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';



const Exercises = ({setExercises,exercises,bodyParts}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyParts === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyParts}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyParts]);
  if (!Array.isArray(exercises)) {
    return <div>Loading...</div>;
  }
  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };




  if (!currentExercises.length) return <Loader />;
  return (
    <Box id="exercises" sx={{mt: { lg:'110px'}}}
    mx="50px"
    p="20px">

  <Typography variant="h4" mb="46px">
    Showing Results
  </Typography>
  <Stack direction="row" sx={{gap:{lg:'110px' , xs:'50px'}}}
  flexWrap="wrap" justifyContent="center">
  {currentExercises.map((exercise,index)=>(
      <ExerciseCard key={index} exercise={exercise}/>
      // <p>{exercise.name}</p>
  ))}
  </Stack>
 < Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length >= 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
</Box>
  )
}

export default Exercises