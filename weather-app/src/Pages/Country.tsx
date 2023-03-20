import React, { useState, useEffect } from "react";
import { Box, Button, Center, Image } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

const Country = () => {
  const navigate = useNavigate();
  const { country } = useParams();

  interface IWeather {
    capital: string;
    latitude_longitude: any;
    population: number;
    flag: string;
  }

  const [{ capital, latitude_longitude, population, flag }, setdata] =
    useState<IWeather>({
      capital: "",
      latitude_longitude: [],
      population: 0,
      flag: "",
    });

  var handleClick = () => {
    navigate(`/weather/${capital}`);
  };

  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${country}?fullText=true`)
      .then((response: any) => response.json())
      .then((response: any) => setdata(response[0]));
  }, [country]);
  return (
    <div>
      <Center marginTop="150px">
        <Box
          w="550px"
          h="400px"
          bg="teal"
          border="3px solid black"
          margin="auto"
          textAlign="center"
        >
          <Center>
            <Image src={flag} alt="flag" marginTop="5px" height="70px" width="70px" />
          </Center>
          <br />
          <Box fontSize="15px" fontWeight="bold" color="white">Capital: {capital}</Box>
          <br />
          <Box fontSize="15px" fontWeight="bold" color="white">Latitude: {latitude_longitude[0]}</Box>
          <br />
          <Box fontSize="15px" fontWeight="bold" color="white"> Longitude: {latitude_longitude[1]}</Box>
          <br />
          <Box fontSize="15px" fontWeight="bold" color="white">Population: {population}</Box>
          <br />
          <Button onClick={handleClick} data-testid="submitButton" >Capital</Button>
        </Box>
      </Center>
    </div>
  );
};

export default Country;
