import React from "react";
import "./CarCard.css";

const CarCard = ({ selectedItem }) => {
  return (
    <div className='car-card'>
      <h2>{selectedItem ? selectedItem.brand : ""}</h2>
      <p>Country: {selectedItem ? selectedItem.country : ""}</p>
      <p>Founded Year: {selectedItem ? selectedItem.founded_year : ""}</p>
      <p>
        Popular Models:
        {selectedItem ? selectedItem.popular_models.join(", ") : ""}
      </p>
    </div>
  );
};

export default CarCard;
