import React, { useState, useRef } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [asteroid_id, setAsteroid_id] = useState<string>("");
  const [btnDisabledErr, setBtnDisabledErr] = useState<boolean>(true);

  const handleClick = () => {
    navigate(`/asteroid/${asteroid_id}`);
  };

  const handleClickMore = () => {
    navigate("/random_asteroid");
  };

  const handleChange = (value: string) => {
    if (value.length < 0) {
      setBtnDisabledErr(true);
    } else {
      setBtnDisabledErr(false);
    }
    setAsteroid_id(value);
  };

  return (
    <Box
      sx={{
        width: "200vh",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "-200px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "4px",
          minWidth: "20rem",
          maxWidth: "30rem",
        }}
      >
        <TextField
          label="Enter Asteroid id"
          value={asteroid_id}
          onChange={(e) => handleChange(e.target.value)}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          disabled={btnDisabledErr}
        >
          Asteroid
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickMore}
          disabled={btnDisabledErr}
        >
          Random Asteroid
        </Button>
      </Box>
    </Box>
  );
};
