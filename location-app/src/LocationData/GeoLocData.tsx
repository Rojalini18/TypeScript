import { useEffect, useState } from "react";

interface ILocation {
  latt: number;
  long: number;
}

export const GeoLocData = () => {
  const [currLocation, setCurrLocation] = useState<ILocation | null>(null);

  useEffect(() => {
    const getData = (position: any) => {
      const { latitude, longitude } = position.coords;
      const updatedLocation: ILocation = {
        latt: latitude,
        long: longitude,
      };
      setCurrLocation(updatedLocation);
    };
    const getError = (error: any) => {
      console.log(error);
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getData, getError);
    } else {
      console.log("Can not get current position");
    }
  }, []);

  return currLocation;
};
