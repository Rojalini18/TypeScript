import axios from "axios";

const api = axios.create({
  url: "https://httpstat.us/200",
});

export const vehicleData = (currentData: any) => {
  const vehicle = JSON.stringify({ vehicle_details: currentData });
  api.post("/vehicle_details", vehicle);
};
