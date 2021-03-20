import React from "react";
import "./App.css";
import FilterMenuNav from "./components/filter/FilterMenuNav";
import Apartments from "./components/apartment/Apartments";
const App = () => {
  return (
    <div>
      <FilterMenuNav />
      <Apartments />
    </div>
  );
};

export default App;
