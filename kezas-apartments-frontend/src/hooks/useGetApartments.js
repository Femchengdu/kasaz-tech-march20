import { useEffect, useState } from "react";
import { fetchApartments } from "../utils/fetchApartments";

const useGetApartments = () => {
  const [apartments, setApartments] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await fetchApartments();
      if (data) {
        setApartments(data);
      }
    })();
  }, []);
  return apartments;
};

export default useGetApartments;
