import React, { useContext } from "react";
import { ApartmentContext } from "../../context/appContext";
import getUnique from "../../utils/uniqueValues";
const ApartmentFilter = () => {
  const {
    handleChange,
    maxPrice,
    minPrice,
    price,
    minSqm,
    maxSqm,
    numberOfRooms,
    numberOfBath,
    apartments,
  } = useContext(ApartmentContext);
  const rmNos = getUnique(apartments, "bedroom");
  rmNos.push(0);
  rmNos.sort();

  const rmNosJsx = rmNos.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}{" "}
      </option>
    );
  });

  const bthNos = getUnique(apartments, "bathroom");
  bthNos.push(0);
  bthNos.sort();
  const bthNosJsx = bthNos.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}{" "}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <form className="filter-form">
        {/*select rooms*/}
        <div className="form-group">
          <label htmlFor="bedroom">number of rooms</label>
          <select
            name="bedroom"
            id="bedroom"
            value={numberOfRooms}
            className="form-control"
            onChange={handleChange}
          >
            {rmNosJsx}
          </select>
        </div>
        {/*end of select*/}
        {/*select beds*/}
        <div className="form-group">
          <label htmlFor="bathroom">number of bathrooms</label>
          <select
            name="bathroom"
            id="bathroom"
            value={numberOfBath}
            className="form-control"
            onChange={handleChange}
          >
            {bthNosJsx}
          </select>
        </div>
        {/*end of beds*/}
        {/*start price*/}
        <div className="form-group">
          <label htmlFor="price">apartments under ${price}</label>
          <input
            type="range"
            name="price"
            id="price"
            className="form-control"
            min={minPrice}
            max={maxPrice}
            onChange={handleChange}
            value={price}
          />
        </div>
        {/*end price*/}
        {/*size */}
        <div className="form-group">
          <label htmlFor="size">
            apartment size{" "}
            <em>
              m<sup>2</sup>
            </em>
          </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSqm"
              id="size"
              value={minSqm}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSqm"
              id="size"
              value={maxSqm}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of size*/}
      </form>
    </section>
  );
};
export default ApartmentFilter;
