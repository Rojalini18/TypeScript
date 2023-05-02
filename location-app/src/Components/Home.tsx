import { useContext, useEffect, useState } from "react";
import { GeoLocData } from "../LocationData/GeoLocData";
import { Context } from "../Context/Context";
import { PreviousLocation } from "../Components/PreviousLocation";

export interface ILocationData {
  location_name: string;
  time: string;
  latitude: number;
  longitude: number;
}

export const Home = () => {
  const locationData = GeoLocData();
  const { location, setLocation } = useContext(Context);
  const [currLocation, setCurrLocation] = useState<ILocationData | null>(null);
  const max_loc = 30;

  useEffect(() => {
    const getData = () => {
      const api_key = "4e5675f9bf974b9b91bdb0ee4f8813e2";
      fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${locationData?.latt}+${locationData?.long}&key=${api_key}`
      )
        .then((res) => res.json())
        .then((loc_data) => {
          const updated_loc = {
            location_name: loc_data.results[0].formatted,
            time: new Date().toLocaleString(),
            latitude: +loc_data.results[0].geometry.latt,
            longitude: +loc_data.results[0].geometry.long,
          };
          setCurrLocation(updated_loc);
        })
        .catch((err) => {
          console.error(err);
        });
    };

    if (locationData?.latt && location.length < max_loc) {
      getData();
    }
  }, [locationData, location]);

  useEffect(() => {
    if (currLocation) {
      const setIntervalId = setInterval(() => {
        setLocation((prevLocation) => {
          if (!prevLocation) {
            return [currLocation];
          } else if (prevLocation.length < max_loc) {
            return [...prevLocation, currLocation];
          } else {
            return prevLocation;
          }
        });
        fetch("https://httpstat.us/200", {
          method: "POST",
          body: JSON.stringify(currLocation),
        });
      }, 5000);
      return () => clearInterval(setIntervalId);
    }
  }, [currLocation, setLocation]);

  if (!currLocation) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Location-App</h1>
      <h1 style={{ marginLeft: "-40%" }}>Current Location</h1>
      <h3
        style={{
          marginLeft: "-4%",
          fontSize: "60",
          fontWeight: "bold",
          marginTop: "-15px",
        }}
      >
        {currLocation.location_name}
      </h3>
      <div
        style={{
          marginLeft: "-44%",
          marginTop: "-15px",
          fontSize: "20",
          fontWeight: "bold",
          color: "grey",
        }}
      >
        {currLocation.time}
      </div>
      <PreviousLocation />
    </div>
  );
};
