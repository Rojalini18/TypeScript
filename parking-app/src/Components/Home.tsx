import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Home = () => {
  const [slot, setSlot] = useState<string>("");
  const context: any = useContext(Context);
  const nav = useNavigate();

  const handleSlot = () => {
    let arr = [];
    for (let i = 0; i < parseInt(slot); i++) {
      let obj = {
        id: i + 1,
        vehicleNumber: "",
        checkInTime: "",
        checkOutTime: "",
        parkingSpaceNumber: "",
        isBook: false,
      };
      arr.push(obj);
    }
    context.setParkingSlot(arr);
    nav("/parking");
  };

  return (
    <div
      style={{
        border: "1px solid black",
        backgroundColor: "whitesmoke",
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        margin: "auto",
        marginTop: "200px",
      }}
    >
      <div
        style={{
          height: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          gap: "25px",
        }}
      >
        <TextField
          variant="outlined"
          label="Parking Space"
          value={slot}
          onChange={(e) => {
            setSlot(e.target.value);
          }}
        />
        <Button
          style={{ backgroundColor: "black", color: "white" }}
          disabled={!slot}
          onClick={handleSlot}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
