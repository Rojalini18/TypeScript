import React, { useState, useEffect } from "react";
import { Box, Center, Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const Capital = () => {
  const { capital } = useParams();
  interface IWeather {
    temperature: number;
    weather_icons: any;
    wind_speed: number;
    precip: number;
  }

  const [{ temperature, weather_icons, wind_speed, precip }, setdata] =
    useState<IWeather>({
      temperature: 0,
      weather_icons: [],
      wind_speed: 0,
      precip: 0,
    });

  useEffect(() => {
    fetch(
      `http://api.weatherstack.com/current?access_key=8ff1a824a5edf0f0c3a174b1bf2f757c&query=${capital}`
    )
      .then((response: any) => response.json())
      .then((response: any) => setdata(response.current))
      .catch((error: any) => console.log(error));
  }, [capital]);

  return (
    <div>
      <Center marginTop="150px">
        <Box
          w="500px"
          h="300px"
          bg="teal"
          border="3px solid black"
          margin="auto"
          textAlign="center"
        >
          <Center>
            <Image src={weather_icons[0]} alt="flag" marginTop="10px" height="70px" width="70px" />
          </Center>
          <br />
          <Box fontSize="15px" fontWeight="bold" color="white">Temperature: {temperature}</Box>
          <br />
          <Box fontSize="15px" fontWeight="bold" color="white">Wind Speed: {wind_speed}</Box>
          <br />
          <Box fontSize="15px" fontWeight="bold" color="white"> Precipitation: {precip}</Box>
        </Box>
      </Center>
    </div>
  );
};

export default Capital;
