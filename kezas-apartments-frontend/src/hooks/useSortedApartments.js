import { useState } from "react";

const useSortedApartments = (apartments) => {
  const [sortedApartments, setSortedApartments] = useState(apartments);
  return [sortedApartments, setSortedApartments];
};

export default useSortedApartments;
