import React from "react";
import { BsFilter } from "react-icons/bs";

const FilterMenuNav = () => {
  // TODO: Add the filter here
  const isOpen = false;
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <button onClick={() => {}} type="button" className="nav-btn">
            <BsFilter className="nav-icon" />
          </button>
          <a>Kasaz</a>
        </div>
        {/**Your search list can go here */}
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <div>Filter Component?</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default FilterMenuNav;
