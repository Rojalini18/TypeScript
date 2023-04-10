import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const Payment = () => {
  const context: any = useContext(Context);
  const location: any = useLocation();
  const nav = useNavigate();
  const { id } = location?.state;

  const handleBook = (id: any) => {
    context.setParkingSlot(
      context.parkingSlot?.map((vehicle: any) => {
        if (id === vehicle.id) {
          return {
            ...vehicle,
            isBook: false,
            checkInTime: "",
            checkOutTime: "",
            vehicleNumber: "",
            parkingSpaceNumber: "",
          };
        } else {
          return vehicle;
        }
      })
    );
  };

  const navToParking: any = () => {
    nav("/parking");
  };

  return (
    <div
      style={{
        height: "100px",
        width: "500px",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        border: "1px solid black",
        margin: "auto",
      }}
    >
      <Typography
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "150px",
          marginTop: "15px",
        }}
      >
        Payment Successful !
      </Typography>
      <Button
        style={{
          color: "white",
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "200px",
          marginTop: "10px",
        }}
        onClick={() => {
          handleBook(id);
          navToParking();
        }}
      >
        Home
      </Button>
    </div>
  );
};
