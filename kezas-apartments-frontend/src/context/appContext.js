import React, { createContext, useState, useEffect, useCallback } from "react";

const ApartmentContext = createContext();
const ApartmentProvider = ({ children }) => {
  return (
    <ApartmentContext.Provider
      value={{ sortedApartments: [{ one: "apartment" }] }}
    >
      {children}
    </ApartmentContext.Provider>
  );
};

export { ApartmentContext, ApartmentProvider };
