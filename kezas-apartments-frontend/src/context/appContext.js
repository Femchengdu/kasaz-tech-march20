import React, { createContext, useState, useEffect, useCallback } from "react";
import useGetApartments from "../hooks/useGetApartments";
import useSortedApartments from "../hooks/useSortedApartments";
const ApartmentContext = createContext();
const ApartmentProvider = ({ children }) => {
  const [sortedApartments, setSortedApartments] = useSortedApartments([]);
  const [apartments, loading] = useGetApartments(setSortedApartments);

  return (
    <ApartmentContext.Provider
      value={{
        apartments,
        sortedApartments,
        loading,
      }}
    >
      {children}
    </ApartmentContext.Provider>
  );
};

export { ApartmentContext, ApartmentProvider };
