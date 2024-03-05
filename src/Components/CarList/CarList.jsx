import React from "react";
import CarCard from "./CarCard"; // Import the CarCard component
import Cars from "../Data/Data.json";

const CarList = () => {
  return (
    <div className='car-list'>
      {/* Iterate over each car in the Cars array and render a CarCard for each one */}
      {Cars.map((car, index) => (
        <CarCard
          key={index} // Provide a unique key for each CarCard
          brand={car.brand}
          country={car.country}
          founded_year={car.founded_year}
          popular_models={car.popular_models}
        />
      ))}
    </div>
  );
};

export default CarList;
