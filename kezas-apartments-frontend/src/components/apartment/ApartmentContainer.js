import React, { useContext } from "react";
import { ApartmentContext } from "../../context/appContext";
import ApartmentList from "./ApartmentList";

const ApartmentContainer = () => {
  const { sortedApartments } = useContext(ApartmentContext);

  return <ApartmentList apartments={sortedApartments} />;
};

export default ApartmentContainer;
