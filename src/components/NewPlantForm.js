import React, {useState}from "react";

function NewPlantForm({onAddPlant}) {
  const [formData, setFormData]=useState({
    name:"",
    image:"",
    price:"",
   

  });

  function handleChange(e){
    const name=e.target.name;
    const value=e.target.value;

    setFormData({
      ...formData, [name]:value,
    });
  }

  function handleSubmit(e){
   e.preventDefault();
   const newPlant={...formData,isInStock: true}

fetch("http://localhost:6001/plants",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify(newPlant),
})
.then((r)=>r.json())
.then((addedPlant)=>{
  onAddPlant(addedPlant)

  //reser form 
  setFormData({
    name:"",
    image:"",
    price:"",
  
   })
})
.catch((error)=>console.error(" Error posting data",error));
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
