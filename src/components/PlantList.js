import React, {useEffect, useState } from "react";
import PlantCard from "./PlantCard";


function PlantList() {
  const [plantsl, setPlantsl]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then((r)=>r.json())
    .then((data)=>setPlantsl(data))
    .catch((error)=>{
      console.error('Error updating Item',error)
    })
  },[])
  return (
    <ul className="cards">{plantsl.map((plant)=>(
      <PlantCard key={plant.id} plants={plant}/>
    ))}</ul>
  );
}

export default PlantList;
