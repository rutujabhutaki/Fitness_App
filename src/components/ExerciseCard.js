import React, { useRef } from 'react';import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  const cardRef = useRef(null);
return (
  <Link
  ref={cardRef}
  className="exercise-card"
  to={`/exercise/${exercise.id}`}
  style={cardStyle}
  onClick={() => {
    cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }}
>    <div style={gifContainerStyle}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" style={gifStyle} />
    </div>
    <div style={buttonContainerStyle}>
      <Button variant="contained" color="secondary" sx={buttonStyle}>
        {exercise.bodyPart}
      </Button>
      <Button variant="contained" color="warning" sx={buttonStyle}>
        {exercise.target}
      </Button>
    </div>
    <Typography variant="h5" style={textStyle}>
      {exercise.name}
    </Typography>
  </Link>
) }

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
  textDecoration: 'none',
  marginBottom: '15px',
};

const gifContainerStyle = {
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const gifStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginBottom: '10px',
};

const buttonStyle = {
  borderRadius: '20px',
  textTransform: 'capitalize',
};

const textStyle = {
  fontWeight: 'bold',
  textTransform: 'capitalize',
};

export default ExerciseCard;
