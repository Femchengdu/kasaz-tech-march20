import React, { createContext, useState, useEffect, useCallback } from "react";
import useGetApartments from "../hooks/useGetApartments";
import useSortedApartments from "../hooks/useSortedApartments";
import useDisplayMenu from "../hooks/useDisplayMenu";
const ApartmentContext = createContext();
const ApartmentProvider = ({ children }) => {
  const [sortedApartments, setSortedApartments] = useSortedApartments([]);
  const [apartments, loading] = useGetApartments(setSortedApartments);
  const [numberOfRooms, setNumberOfRooms] = useState(0);
  const [numberOfBath, setNumberOfBath] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minSqm, setMinSqm] = useState(0);
  const [maxSqm, setMaxSqm] = useState(0);
  const [isOpen, setIsOpen] = useDisplayMenu();
  console.log("laod");
  // Filter here
  const filterApartments = useCallback(() => {
    let tempApartments = [...apartments];
    if (numberOfRooms !== 0) {
      tempApartments = tempApartments.filter(
        (item) => item["bedroom"] === numberOfRooms
      );
    }
    if (numberOfBath !== 0) {
      console.log("Filter called!", numberOfRooms);
      tempApartments = tempApartments.filter(
        (item) => item["bathroom"] === numberOfBath
      );
    }

    // Filter by price
    tempApartments = tempApartments.filter((item) => item.price <= price);

    //Filter by maxSize
    tempApartments = tempApartments.filter(
      (item) => item.sqm >= minSqm && item.sqm <= maxSqm
    );
    console.log("temp app bath :", tempApartments, maxSqm);
    setSortedApartments(tempApartments);
  }, [numberOfRooms, apartments, numberOfBath, price, minSqm, maxSqm]);

  useEffect(() => {
    let maxPrice = Math.max(...apartments.map((item) => item.price));
    let maxSize = Math.max(...apartments.map((item) => item.sqm));

    setMaxPrice(maxPrice);
    setPrice(maxPrice);
    setMaxSqm(maxSize);

    // Fill this out as needed
  }, [apartments]);

  // Filtered Apartments
  useEffect(() => {
    filterApartments();
    // Fill this out as needed
  }, [filterApartments]);
  // Form change
  const handleChange = (event) => {
    const { type, name, value } = event.target;
    console.log("event vals :", type, name, value);
    if (name === "bedroom") {
      setNumberOfRooms(parseInt(value));
    } else if (name === "bathroom") {
      setNumberOfBath(parseInt(value));
    } else if (name === "price") {
      setPrice(parseInt(value));
    } else if (name === "maxSqm") {
      const intVal = parseInt(value);
      if (intVal > minSqm) {
        setMaxSqm(intVal);
      }
    } else if (name === "minSqm") {
      const intVal = parseInt(value);
      if (intVal < maxSqm && intVal >= 0) {
        setMinSqm(intVal);
      }
    }
  };
  return (
    <ApartmentContext.Provider
      value={{
        handleChange,
        apartments,
        sortedApartments,
        loading,
        numberOfRooms,
        numberOfBath,
        maxPrice,
        minPrice,
        price,
        maxSqm,
        minSqm,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </ApartmentContext.Provider>
  );
};

export { ApartmentContext, ApartmentProvider };
