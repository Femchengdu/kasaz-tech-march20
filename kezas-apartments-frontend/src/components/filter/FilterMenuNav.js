import React, { useContext } from "react";
import { BsFilter } from "react-icons/bs";
import { ApartmentContext } from "../../context/appContext";
import ApartmentFilter from "./ApartmentFilter";

const FilterMenuNav = () => {
  const { isOpen, setIsOpen } = useContext(ApartmentContext);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className="nav-btn"
          >
            <BsFilter className="nav-icon" />
          </button>
          <a>Kasaz</a>
        </div>
        <div
          id="mySidenav"
          className={
            isOpen ? "sidenav mySideNavOpen" : "sidenav mySideNavClose"
          }
        >
          <ApartmentFilter />
        </div>
      </div>
    </nav>
  );
};

export default FilterMenuNav;
