import React, { FormEvent } from "react";
import {
  Box,
  Button,
  Radio,
  TextField,
  FormLabel,
  RadioGroup,
  FormControl,
  FormControlLabel,
  InputLabel,
  Select,
  MenuItem,
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
      <Box
        component="form"
        onSubmit={handleOnFormSubmit}
        style={{
          height: "350px",
          width: "280px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "space-between",
          padding: "30px",
          border: "1px solid grey",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        <TextField label="Name" required={true}></TextField>
        <TextField label="Email" required={true}></TextField>
        <TextField label="Phone No." required={true}></TextField>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //value={age}
            label="Age"
            //onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        {/* <Box style={{ gap: "10px" }}>
          <FormControl>
            <FormLabel component={"legend"}>Gender</FormLabel>
            <RadioGroup defaultValue={"female"}>
              <FormControlLabel
                value="male"
                label="Male"
                control={<Radio />}
              ></FormControlLabel>
              <FormControlLabel
                value="female"
                label="Female"
                control={<Radio />}
              ></FormControlLabel>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel component={"legend"}>Language</FormLabel>
            <RadioGroup defaultValue={"English"}>
              <FormControlLabel
                value="English"
                label="English"
                control={<Radio />}
              ></FormControlLabel>
              <FormControlLabel
                value="Hindi"
                label="Hindi"
                control={<Radio />}
              ></FormControlLabel>
            </RadioGroup>
          </FormControl>
        </Box> */}
        <Button variant="contained" type="submit">
          {"submit"}
        </Button>
      </Box>
    </div>
  );
};

export default Home;
