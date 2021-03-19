import React, { createContext, useState, useEffect, useCallback } from "react";

const ApartmentContext = createContext();
const ApartmentProvider = ({ children }) => {
  return (
    <ApartmentContext.Provider value={{}}>{children}</ApartmentContext.Provider>
  );
};

export { ApartmentContext, ApartmentProvider };
