import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import { fetchData ,exerciseOptions} from '../utils/fetchData';



const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
      console.log(bodyPartsData);
    };

    fetchExercisesData();
  }, []);


  const handleSearch = async()=>{
        if(search){
           const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
           // console.log(exerciseData);

           const searchedExercises= exerciseData.filter(
             (exercise)=>exercise.name.toLowerCase().includes(search)
             || exercise.target.toLowerCase().includes(search)
             || exercise.equipment.toLowerCase().includes(search)
             || exercise.bodyPart.toLowerCase().includes(search)
           );
           window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

           setSearch('')
           setExercises(searchedExercises)

        }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{
        fontSize: { lg: '44px', xs: '30px', mb: '70px', textAlign: 'center' }
      }}>
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Stack direction="row" alignItems="center" spacing={2} mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text" />
        <Button className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px'
          }}

          onClick={handleSearch}
        >
          Search
        </Button>
      </Stack>
      <Box sx={{position:'relative' , width: '100%' , p:'20px' , maxWidth: '1200px'}}>
      <HorizontalScrollBar data={bodyParts}  setBodyPart={setBodyPart} bodyParts={bodyPart} bodyPart />



      </Box>
    </Stack>
  )
}

export default SearchExercises;