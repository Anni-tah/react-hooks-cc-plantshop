import React, { useEffect } from "react";

function PlantCard({plants}) {
  
  return (
    <li className="card" data-testid="plant-item">
      <img src={plants.image || "https://via.placeholder.com/400"} alt={plants.name} />
      <h4>{plants.name}</h4>
      <p>Price: {plants.price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
