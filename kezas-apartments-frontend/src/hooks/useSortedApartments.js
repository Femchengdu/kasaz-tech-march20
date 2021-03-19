import { useState } from "react";

const useSortedApartments = () => {
  const [sortedApartments, setSortedApartments] = useState([]);
  return [sortedApartments, setSortedApartments];
};

export default useSortedApartments;
