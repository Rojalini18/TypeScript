import React, { FormEvent } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate: NavigateFunction = useNavigate();
  const handleOnFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("submited");
    navigate("questions/1");
  };

  return (
    <div className="headding">
      <Box sx={{ marginTop: "10px", fontSize: "25px", fontWeight: "bold" }}>
        Registration Form{" "}
      </Box>
      <Box
        component="form"
        onSubmit={handleOnFormSubmit}
        style={{
          height: "400px",
          width: "280px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "space-between",
          padding: "30px",
          border: "1px solid grey",
          borderRadius: "5px",
          marginTop: "20px",
          gap: "2px",
        }}
      >
        <TextField
          id="outlined-number"
          label="Name"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Email"
          type="email"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Age"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Phone Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl>
          <FormLabel>Language</FormLabel>
          <RadioGroup row>
            <FormControlLabel
              value="English"
              control={<Radio />}
              label="English"
            />
            <FormControlLabel value="Hindi" control={<Radio />} label="Hindi" />
            <FormControlLabel value="Odia" control={<Radio />} label="Odia" />
          </RadioGroup>
        </FormControl>
        <Button variant="contained" type="submit">
          {"submit"}
        </Button>
      </Box>
    </div>
  );
};

export default Home;
