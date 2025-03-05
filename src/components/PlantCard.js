import React from "react";

function PlantCard({plant, onUpdatePlant}) {
  const isInStock=plant.isInStock?? true;
  function handleInStock(e){
    e.preventDefault();

    fetch(`http://localhost:6001/plants/${plant.id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({isInStock:!isInStock}),
    })
    .then((r)=>r.json())
    .then((updatedPlant)=>onUpdatePlant(updatedPlant))
    .catch((error)=>console.error("Error updating item", error))
  }
  
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image || "https://via.placeholder.com/400"} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
        <button className={isInStock? "primary" :"outOfStock"} onClick={handleInStock}>
          {isInStock ? "In Stock" : "Out of Stock"}
        </button>
    </li>
  );
}

export default PlantCard;
