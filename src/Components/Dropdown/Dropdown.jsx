import "./Dropdown.css";
import Cars from "../Data/Data.json";
import React, { useState } from "react";
import CarCard from "../CarCard/CarCard";

const Dropdown = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (event) => {
    const selectedBrand = event.target.value; //Targets the Value of the event
    console.log("Selected value:", selectedBrand);

    //.find() will search the charactersJson after a match of the selected name
    const selectedItem = Cars.find((item) => {
      console.log("Item value:", item?.brand);
      console.log("Is match:", item?.brand === selectedBrand);
      return item?.brand === selectedBrand;
    });

    //updates the state of "selectedCharacter" to the found character
    setSelectedItem(selectedItem);

    console.log("Selected car brand:", selectedItem);
  };

  //The .map() is to go thru every element in the array.
  //And for every element it returns a new value with a new array. We set the value to
  // something unique for this element and that is the Cars (brand). The output will now
  // be "brand" for every Car of the json array. "Index" is the unique key, that is what
  // differs everyone from each other.
  return (
    <div className='Car-container'>
      <label htmlFor='car-select'>Choose a car:</label>
      <select name='cars' id='car-select' onChange={handleSelectItem}>
        <option value=''>--Please choose an option--</option>
        {Cars.map((Car, index) => (
          <option key={index} value={Car.brand}>
            {Car.brand}
          </option>
        ))}
      </select>

      {selectedItem && <CarCard selectedItem={selectedItem} />}
    </div>
  );
};
export default Dropdown;
