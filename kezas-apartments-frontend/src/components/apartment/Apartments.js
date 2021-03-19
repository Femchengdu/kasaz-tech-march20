import React from "react";
import KasazHero from "../hero/KasazHero";
import Banner from "../banner/Banner";
import ApartmentContainer from "./ApartmentContainer";
const Apartments = () => {
  return (
    <>
      <KasazHero hero="roomsHero">
        <Banner title="kasaz" />
      </KasazHero>
      <ApartmentContainer />
    </>
  );
};

export default Apartments;
