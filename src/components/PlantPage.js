import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants]=useState([]);
  const [searchTerm, setSearchTerm]=useState("");


  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then((r)=>r.json())
    .then((data)=>setPlants(data))
    .catch((error)=>{
      console.error('Error updating Item',error)
    })
  },[]);

  //display plants depending on search
function displayPlants(){
 return searchTerm ? 
  plants.filter((plant)=>
  plant.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
  plant.price.toString().includes(searchTerm)
)
  :plants;
  
}

//function add new plant
function handleAddPlants(newPlant){
  setPlants([...plants,newPlant]);

}

//update plant
 
function handleUpdatePlant(updatedPlant){
  const updatedPlants= plants.map((plant)=>
    plant.id===updatedPlant.id? updatedPlant : plant
  );

  setPlants(updatedPlants);
}
  

 
  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlants}/>
      <Search onSearch={setSearchTerm}/>
      <PlantList displayPlants={displayPlants()} onUpdatePlant={handleUpdatePlant} />
    </main>
  );
}

export default PlantPage;
