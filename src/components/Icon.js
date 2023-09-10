import { AlarmSharp } from '@mui/icons-material';
import React from 'react';
import ALL from '../assets/icons/all.png'
const Icon = ({ item }) => {
  // Map body part names to their corresponding icons
  const iconMap = {
    chest:ALL,
    waist:ALL,
    legs: ALL,
    back: ALL,
    all:ALL ,
    shoulders:ALL,
    lowerarms:ALL,
    lowerlegs:ALL,
    neck:ALL,
    shoulder:ALL,
    upperarms:ALL,
    upperlegs:ALL,

    // Add more mappings for other body parts as needed
  };

  // Get the icon URL based on the item (body part) name
  const iconUrl = iconMap[item.replace(/\s+/g, "").toLowerCase()];
  if(iconUrl){
  return <img src={iconUrl} alt={item} style={{ width: '40px', height: '40px' }} />;
  }
  else{
    return <img src='../assets/icons/all.png' alt={item} style={{ width: '40px', height: '40px' }} />;

  }
};

export default Icon;