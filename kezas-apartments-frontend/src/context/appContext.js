import React, { createContext, useState, useEffect, useCallback } from "react";
import useGetApartments from "../hooks/useGetApartments";
import useSortedApartments from "../hooks/useSortedApartments";
const ApartmentContext = createContext();
const ApartmentProvider = ({ children }) => {
  const [apartments, loading] = useGetApartments();
  const [sortedApartments, setSortedApartments] = useSortedApartments([]);

  return (
    <ApartmentContext.Provider
      value={{
        apartments,
        sortedApartments:
          sortedApartments.length > 0 ? sortedApartments : apartments,
        loading,
      }}
    >
      {children}
    </ApartmentContext.Provider>
  );
};

export { ApartmentContext, ApartmentProvider };
