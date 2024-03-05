import React from "react";

const CarCard = ({ selectedItem }) => {
  // Kontrollera om selectedItem är definierad innan du använder den för att undvika fel
  if (!selectedItem) {
    return <div>No car selected</div>;
  }

  return (
    <div className='car-card'>
      <h2>{selectedItem.brand}</h2>
      <p>Country: {selectedItem.country}</p>
      <p>Founded Year: {selectedItem.founded_year}</p>
      <p>
        Popular Models:{" "}
        {selectedItem.popular_models && selectedItem.popular_models.join(", ")}
      </p>
    </div>
  );
};

export default CarCard;
