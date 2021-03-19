import { useEffect, useState } from "react";
import { fetchApartments } from "../utils/fetchApartments";

const useGetApartments = (initSortedApartmentCB) => {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await fetchApartments();
        if (data) {
          setApartments(data);
          setLoading(false);
          initSortedApartmentCB(data);
        }
      } catch (err) {
        console.log("Fetch error :", err.message);
        setError(true);
      }
    })();
  }, []);
  return [apartments, loading, error];
};

export default useGetApartments;
