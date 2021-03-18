import axios from "axios";
import { listApartmentsUrl } from "../config/appData";

export const fetchApartments = async () => {
  try {
    return await axios.get(listApartmentsUrl);
  } catch (error) {
    console.log("Error :", error.message);
  }
};
