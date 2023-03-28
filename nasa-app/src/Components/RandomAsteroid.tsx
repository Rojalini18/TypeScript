import React, { useEffect, useState } from "react";
import { Typography, Box, Grid, Paper } from "@mui/material";
import axios from "axios";

interface AsteroidDetails {
  name: string;
  nasa_jpl_url: string;
  is_potentially_hazardous_asteroid: boolean;
}

export const RandomAsteroid = () => {
  const [error, setError] = useState(false);
  const [data, setData] = useState<AsteroidDetails>({
    name: "",
    nasa_jpl_url: "",
    is_potentially_hazardous_asteroid: false,
  });

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=MXfBwkyieEoJ1xPt4FLhIidBolP4Z1qcHxg0AJI2"
      )
      .then((response: any) => {
        const asteroidId = response.data.near_earth_objects;
        const randomAstId = asteroidId[Math.floor(Math.random() * asteroidId.length)];
        setData(randomAstId);
      })
      .catch((error:any) => {
        //console.log(error);
        setError(true);
      });
  }, []);

  return (
    <Grid container sx={{ justifyContent: "center", marginTop: "50px" }}>
      <Grid
        item
        sx={{
          flex: 1,
          minWidth: "30rem",
          maxWidth: "30rem",
          margin: "auto"
        }}
      >
        <Paper
          sx={{
            padding: "10px",
            borderRadius: "4px",
            backgroundColor: "#fff",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)"
          }}
        >
          <Typography
            sx={{
              marginBottom: "2rem",
              fontWeight: "bold",
              fontSize: "1.5rem",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "130px"
            }}
          >
            Asteroid Details
          </Typography>
          <Typography
            sx={{
              marginBottom: "1rem",
              fontSize: "1rem",
            }}
          >
            name: {data.name}
          </Typography>
          <Typography
            sx={{
              marginBottom: "1rem",
              fontSize: "1rem",
            }}
          >
            nasa_jpl_url: {data.nasa_jpl_url}
          </Typography>
          <Typography
            sx={{
              marginBottom: "1rem",
              fontSize: "1rem",
            }}
          >
            is_potentially_hazardous_asteroid:
            {data.is_potentially_hazardous_asteroid.toString()}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
