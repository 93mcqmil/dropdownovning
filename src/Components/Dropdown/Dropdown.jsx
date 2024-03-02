import "./Dropdown.css";
import Cars from "../Data/Data.json";

const Dropdown = () => {
  return (
    <>
      <div className='Dropdown-container'>
        <label for='car-select'>Choose a car:</label>

        <select name='cars' id='car-select'>
          <option value=''>--Please choose an option--</option>
          {Cars.map((Car) => (
            <option value=''>{Car.brand}</option>
          ))}
        </select>
      </div>
    </>
  );
};
export default Dropdown;
