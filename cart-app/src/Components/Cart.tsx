import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoopIcon from "@mui/icons-material/Loop";
import RecyclingIcon from "@mui/icons-material/Recycling";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";

export const Cart = () => {
  const [counterOne, setCounterOne] = useState<any>(0);
  const [counterTwo, setCounterTwo] = useState<any>(0);
  const [counterThree, setCounterThree] = useState<any>(0);
  const [counterFour, setCounterFour] = useState<any>(0);
  const [viewItemOne, setViewItemOne] = useState<any>(true);
  const [viewItemTwo, setViewItemTwo] = useState<any>(true);
  const [viewItemThree, setViewItemThree] = useState<any>(true);
  const [viewItemFour, setViewItemFour] = useState<any>(true);

  return (
    <>
      <div
        style={{
          width: 300,
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          <div>
            <ShoppingCartIcon
              style={{ width: 55, height: 45, marginTop: 20 }}
            ></ShoppingCartIcon>
          </div>
          <div
            style={{
              backgroundColor: "#199f9d",
              color: "white",
              fontSize: 30,
              width: 50,
              height: 40,
              borderRadius: 20,
              marginTop: 20,
              paddingLeft: 35,
            }}
          >
            {counterOne + counterTwo + counterThree + counterFour}
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            Items
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 18,
            gap: 5,
          }}
        >
          <button
            style={{
              width: 60,
              height: 50,
              backgroundColor: "#3cb371",
              borderRadius: 10,
            }}
            onClick={() => {
              setCounterOne(0);
              setCounterTwo(0);
              setCounterThree(0);
              setCounterFour(0);
            }}
          >
            <LoopIcon></LoopIcon>
          </button>
          <button
            style={{
              width: 60,
              height: 50,
              backgroundColor: "#2563eb",
              borderRadius: 10,
            }}
            onClick={() => {
              setCounterOne(0);
              setCounterTwo(0);
              setCounterThree(0);
              setCounterFour(0);
              setViewItemOne(false);
              setViewItemTwo(false);
              setViewItemThree(false);
              setViewItemFour(false);
            }}
          >
            <RecyclingIcon></RecyclingIcon>
          </button>
        </div>
        {viewItemOne && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 18,
              gap: 5,
            }}
          >
            <button
              style={{
                backgroundColor: counterOne === 0 ? "#ffd507" : "#2563eb",
                width: 100,
                height: 50,
                color: "white",
                fontSize: 30,
                borderRadius: 10,
              }}
            >
              {counterOne}
            </button>
            <button
              style={{
                width: 60,
                height: 50,
                backgroundColor: "grey",
                borderRadius: 10,
              }}
              onClick={() => {
                setCounterOne(counterOne + 1);
              }}
            >
              <AddCircleOutlineIcon></AddCircleOutlineIcon>
            </button>
            <button
              style={{
                width: 60,
                height: 50,
                backgroundColor: "#9ad6e7",
                borderRadius: 10,
              }}
              onClick={() => {
                setCounterOne(counterOne - 1);
              }}
            >
              <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
            </button>
            <button
              style={{
                width: 60,
                height: 50,
                backgroundColor: "red",
                borderRadius: 10,
              }}
              onClick={() => {
                setCounterOne(0);
                setViewItemOne(false);
              }}
            >
              <DeleteIcon></DeleteIcon>
            </button>
          </div>
        )}
        {viewItemTwo && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 18,
              gap: 5,
            }}
          >
            <button
              style={{
                backgroundColor: counterTwo === 0 ? "#ffd507" : "#2563eb",
                width: 100,
                height: 50,
                color: "white",
                fontSize: 30,
                borderRadius: 10,
              }}
            >
              {counterTwo}
            </button>
            <button
              style={{
                width: 60,
                height: 50,
                backgroundColor: "grey",
                borderRadius: 10,
              }}
              onClick={() => {
                setCounterTwo(counterTwo + 1);
              }}
            >
              <AddCircleOutlineIcon></AddCircleOutlineIcon>
            </button>
            <button
              style={{
                width: 60,
                height: 50,
                backgroundColor: "#9ad6e7",
                borderRadius: 10,
              }}
              onClick={() => {
                setCounterTwo(counterTwo - 1);
              }}
            >
              <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
            </button>
            <button
              style={{
                width: 60,
                height: 50,
                backgroundColor: "red",
                borderRadius: 10,
              }}
              onClick={() => {
                setCounterTwo(0);
                setViewItemTwo(false);
              }}
            >
              <DeleteIcon></DeleteIcon>
            </button>
          </div>
        )}
        {viewItemThree && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 18,
              gap: 5,
            }}
          >
            <button
              style={{
                backgroundColor: counterThree === 0 ? "#ffd507" : "#2563eb",
                width: 100,
                height: 50,
                color: "white",
                fontSize: 30,
                borderRadius: 10,
              }}
            >
              {counterThree}
            </button>
            <button
              style={{
                width: 60,
                height: 50,
                backgroundColor: "grey",
                borderRadius: 10,
              }}
              onClick={() => {
                setCounterThree(counterThree + 1);
              }}
            >
              <AddCircleOutlineIcon></AddCircleOutlineIcon>
            </button>
            <button
              style={{
                width: 60,
                height: 50,
                backgroundColor: "#9ad6e7",
                borderRadius: 10,
              }}
              onClick={() => {
                setCounterThree(counterThree - 1);
              }}
            >
              <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
            </button>
            <button
              style={{
                width: 60,
                height: 50,
                backgroundColor: "red",
                borderRadius: 10,
              }}
              onClick={() => {
                setCounterThree(0);
                setViewItemThree(false);
              }}
            >
              <DeleteIcon></DeleteIcon>
            </button>
          </div>
        )}
        {viewItemFour && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 18,
              gap: 5,
            }}
          >
            <button
              style={{
                backgroundColor: counterFour === 0 ? "#ffd507" : "#2563eb",
                width: 100,
                height: 50,
                color: "white",
                fontSize: 30,
                borderRadius: 10,
              }}
            >
              {counterFour}
            </button>
            <button
              style={{
                width: 60,
                height: 50,
                backgroundColor: "grey",
                borderRadius: 10,
              }}
              onClick={() => {
                setCounterFour(counterFour + 1);
              }}
            >
              <AddCircleOutlineIcon></AddCircleOutlineIcon>
            </button>
            <button
              style={{
                width: 60,
                height: 50,
                backgroundColor: "#9ad6e7",
                borderRadius: 10,
              }}
              onClick={() => {
                setCounterFour(counterFour - 1);
              }}
            >
              <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
            </button>
            <button
              style={{
                width: 60,
                height: 50,
                backgroundColor: "red",
                borderRadius: 10,
              }}
              onClick={() => {
                setCounterFour(0);
                setViewItemFour(false);
              }}
            >
              <DeleteIcon></DeleteIcon>
            </button>
          </div>
        )}
      </div>
    </>
  );
};
