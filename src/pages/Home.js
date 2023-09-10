import React , {useState} from 'react'
import HeroBanner from '../components/HeroBanner'
import {Box} from '@mui/material';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';






function Home() {
  const [exercises,setExercises]=useState([])
  const [bodyParts,setBodyParts]=useState('all')
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises setExercises={setExercises}
      bodyPart={bodyParts} setBodyPart={setBodyParts}/>
      <Exercises
      setExercises={setExercises}
      exercises={exercises}
      bodyParts={bodyParts} />
    </Box>

  )
}

export default Home