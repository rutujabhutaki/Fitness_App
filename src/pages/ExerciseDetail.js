import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';


function ExerciseDetail() {
  const [exerciseDetail,setExerciseDetail] = useState({})
  const {id} = useParams();
  const [exerciseVideos,setExerciseVideos]=useState([])
  const [targetMuscleExercise,setTargetMuscleExercises]=useState([])
  const [equipmentExercises,setEquipmentExercises]=useState([])

  useEffect(()=>{
    const fetchExercisesData = async () =>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      const exerciseDetailData=await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
      const exerciseVideoData= await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions)
      const targetMuscleExerciseData= await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions)
      const equipmentExerciseData= await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions)
  
      setExerciseDetail(exerciseDetailData)
      setExerciseVideos(exerciseVideoData.contents)

      setTargetMuscleExercises(targetMuscleExerciseData)
      setEquipmentExercises( equipmentExerciseData)
      console.log(equipmentExerciseData)
    }
    fetchExercisesData();
  },[id])

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      {/* <SimilarExercises targetMuscleExercises={targetMuscleExercise} equipmentExercises={equipmentExercises} /> */}
    </Box>
  )
}

export default ExerciseDetail