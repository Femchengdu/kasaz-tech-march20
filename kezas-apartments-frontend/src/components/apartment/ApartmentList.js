import React from "react";
import Apartment from "./Apartment";
const ApartmentList = ({ apartments }) => {
  if (apartments.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately, no apartments match your filter criteria</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {apartments.map((item) => (
          <Apartment key={item.id} room={item} />
        ))}
      </div>
    </section>
  );
};
export default ApartmentList;
