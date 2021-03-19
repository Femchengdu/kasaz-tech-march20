import React, { useContext } from "react";
import { ApartmentContext } from "../../context/appContext";
import ApartmentList from "./ApartmentList";

const ApartmentContainer = () => {
  const { sortedApartments, loading } = useContext(ApartmentContext);

  if (loading) {
    return <div>Loading.....</div>;
  }

  return <ApartmentList apartments={sortedApartments} />;
};

export default ApartmentContainer;
