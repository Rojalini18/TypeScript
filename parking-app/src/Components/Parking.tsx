import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";
import { TextField, Typography, Button } from "@mui/material";

export const Parking = () => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const [vehicleNumber, setVehicleNumber] = useState<string>("");
  const [isSlotFull, setIsSlotFull] = useState<boolean>(false);
  const context: any = useContext(Context);
  const nav = useNavigate();

  const navToHome = () => {
    nav("/");
  };

  const parkingempty = () => {
    const parked = context.parkingSlot.filter(
      (vehicle: any) => vehicle.isBook === true
    );
    if (parked.length === context.parkingSlot.length) {
      setIsSlotFull(true);
    } else {
      setConfirm(true);
    }
  };

  const vehicleUpdates = () => {
    const randomId: number = context.parkingSlot.findIndex(
      (vehicle: any) => vehicle.isBook === false
    );
    context.setParkingSlot(
      context.parkingSlot.map((vehicle: any) => {
        if (randomId + 1 === vehicle.id) {
          return {
            ...vehicle,
            vehicleNumber: vehicleNumber,
            checkInTime: new Date(),
            parkingSpaceNumber: vehicle.id,
            isBook: true,
          };
        } else return vehicle;
      })
    );
    setConfirm(false);
    setVehicleNumber("");
  };

  const checkoutTimeUpdates = (id: any) => {
    context.setParkingSlot(
      context.parkingSlot.map((vehicle: any) => {
        if (id === vehicle.id) {
          return {
            ...vehicle,
            checkOutTime: new Date(),
          };
        } else return vehicle;
      })
    );
  };

  return (
    <div
      style={{
        overflowY: "auto",
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      <div style={{ display: "flex", opacity: confirm ? 0 : 1 }}>
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "10%",
            display: "flex",
            alignItems: "center",
            backgroundColor: "grey",
          }}
        >
          <Button
            style={{
              backgroundColor: "black",
              color: "white",
              position: "relative",
              right: "-1.8%",
            }}
            title="Back"
            onClick={navToHome}
          >
            Go Back
          </Button>
          <Button
            style={{
              backgroundColor: "black",
              color: "white",
              position: "relative",
              right: "-80%",
            }}
            title="Vehicle Registration"
            onClick={() => {
              parkingempty();
            }}
          >
            Register Vehicles
          </Button>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "20px",
            marginRight: "40px",
            marginTop: "100px",
            gap: "40px",
            position: "fixed",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {context.parkingSlot?.length > 0 &&
            context.parkingSlot.map((vehicle: any, index: number) => {
              return (
                <div key={index}>
                  <div
                    style={{
                      height: "150px",
                      width: "100px",
                      backgroundColor: "white",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Button
                      sx={{
                        width: "110px",
                        height: "120px",
                        backgroundColor: "black",
                        color: "white",
                      }}
                      variant="contained"
                      disabled={vehicle.isBook}
                    >
                      {vehicle.id}
                    </Button>
                    {vehicle.isBook && (
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          marginTop: "8px",
                          marginLeft: "10px",
                        }}
                        onClick={() => {
                          checkoutTimeUpdates(vehicle.id);
                          nav(`/checkout`, {
                            state: {
                              id: vehicle.id,
                            },
                          });
                        }}
                      >
                        Clear
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {confirm && (
        <div
          style={{
            width: "30%",
            border: "1px solid black",
            backgroundColor: "whitesmoke",
            alignItems: "center",
            justifyContent: "center",
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
              alignItems: "center",
              justifyContent: "center",
              gap: "25px",
              padding: "10px",
            }}
          >
            <TextField
              variant="outlined"
              label="Enter Vehicle Number"
              autoComplete="off"
              value={vehicleNumber}
              onChange={(e: any) => {
                setVehicleNumber(e.target.value);
              }}
            />
            <Button
              variant="contained"
              disabled={!vehicleNumber}
              style={{ backgroundColor: "black", color: "white" }}
              onClick={() => {
                vehicleUpdates();
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      )}
      {isSlotFull && (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "300px",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "red",
              gap: "10px",
              padding: "10px",
            }}
          >
            <Typography>No space available!</Typography>
            <Button
              style={{
                backgroundColor: "black",
                color: "red",
                fontSize: "10px",
              }}
              onClick={() => {
                setIsSlotFull(false);
              }}
            >
              Clear
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
