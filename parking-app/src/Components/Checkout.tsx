import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";
import { vehicleData } from "../API/API";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import Button from "@mui/material/Button";

export const Checkout = () => {
  const [vehicle, setVehicle] = useState<any>([]);
  const [price, setPrice] = useState<number>();
  const context: any = useContext(Context);
  const location: any = useLocation();
  const nav = useNavigate();
  const { id } = location?.state;

  const payment = (id: any) => {
    const initial_time: any = context.parkingSlot[id - 1]["checkInTime"];
    const final_time: any = context.parkingSlot[id - 1]["checkOutTime"];

    setVehicle(context.parkingSlot[id - 1]);

    const timeInterval: any = parseFloat(
      (
        (final_time.getTime() - initial_time.getTime()) /
        (1000 * 60 * 60)
      ).toFixed(4)
    );

    const RoundFigTimeInterval: any = Math.ceil(timeInterval);
    if (RoundFigTimeInterval <= 2) {
      setPrice(10.0);
    } else {
      setPrice(parseInt((10 + (RoundFigTimeInterval - 2) * 10).toFixed(0)));
    }
  };

  const handleClick = () => {
    vehicleData(vehicle);
    navToPayment();
  };

  const navToPayment = () => {
    nav(`/payment`, {
      state: {
        id: id,
      },
    });
  };
  useEffect(() => {
    payment(id);
  }, []);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {Object.keys(vehicle).length > 0 && (
        <div>
          <Table
            style={{
              border: "2px solid black",
              margin: "auto",
              marginTop: "150px",
            }}
          >
            <TableBody>
              {[
                { label: "Vehicle Number", value: vehicle.vehicleNumber },
                {
                  label: "Parking Space Number",
                  value: vehicle.parkingSpaceNumber,
                },
                {
                  label: "Check In Time",
                  value: vehicle.checkInTime.toString(),
                },
                {
                  label: "Check Out Time",
                  value: vehicle.checkOutTime.toString(),
                },
                { label: "Amount", value: `$ ${price}` },
              ].map((row) => (
                <TableRow key={row.label}>
                  <TableCell>{row.label}</TableCell>
                  <TableCell>{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <Button
              style={{ color: "white", backgroundColor: "black" }}
              variant="contained"
              onClick={() => nav("/parking")}
            >
              Back
            </Button>
            <Button
              style={{ color: "white", backgroundColor: "black" }}
              variant="contained"
              onClick={handleClick}
            >
              Pay $ {price}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
