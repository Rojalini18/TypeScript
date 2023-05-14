import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CreateActivity = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [sportType, setSportType] = useState("");
  const [startDateLocal, setStartDateLocal] = useState("");
  const [elapsedTime, setElapsedTime] = useState(0);
  const [description, setDescription] = useState("");
  const [distance, setDistance] = useState(0);
  const [trainer, setTrainer] = useState(0);
  const [commute, setCommute] = useState(0);

  const nav = useNavigate();
  const handleCreateActivity = async () => {
    try {
      const access_token = localStorage.getItem("accessToken");
      await axios.post(
        "https://www.strava.com/api/v3/activities",
        {
          name,
          type,
          start_date_local: startDateLocal,
          elapsed_time: elapsedTime,
          description,
          distance,
          trainer: Boolean(trainer),
          commute: Boolean(commute),
        },
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      );
      nav("/activity");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        width: "12%",
        margin: "auto",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
        boxShadow: "black",
        marginTop: "10px",
        padding: "30px",
        gap: "10px",
      }}
    >
      <div style={{ marginTop: "5px" }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div style={{ marginTop: "5px" }}>
        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>
      <div style={{ marginTop: "5px" }}>
        <input
          type="text"
          placeholder="Sport Type"
          value={sportType}
          onChange={(e) => setSportType(e.target.value)}
        />
      </div>
      <div style={{ marginTop: "5px" }}>
        <input
          style={{ width: "165px" }}
          type="datetime-local"
          value={startDateLocal}
          onChange={(e) => setStartDateLocal(e.target.value)}
        />
      </div>
      <div style={{ marginTop: "5px" }}>
        <input
          type="number"
          placeholder="Elapsed Time"
          value={elapsedTime}
          onChange={(e) => setElapsedTime(parseInt(e.target.value))}
        />
      </div>
      <div style={{ marginTop: "5px" }}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div style={{ marginTop: "5px" }}>
        <input
          type="number"
          placeholder="Distance"
          value={distance}
          onChange={(e) => setDistance(parseInt(e.target.value))}
        />
      </div>
      <div style={{ marginTop: "5px" }}>
        <input
          type="number"
          placeholder="Trainer"
          value={trainer}
          onChange={(e) => setTrainer(parseInt(e.target.value))}
        />
      </div>
      <div style={{ marginTop: "5px" }}>
        <input
          type="number"
          placeholder="Commute"
          value={commute}
          onChange={(e) => setCommute(parseInt(e.target.value))}
        />
      </div>
      <div
        style={{
          width: "101px",
          color: "white",
          backgroundColor: "#f05523",
          border: "1px solid red",
          marginTop: "5px",
          marginLeft: "35px",
        }}
      >
        <button
          onClick={handleCreateActivity}
          disabled={
            !name ||
            !type ||
            !sportType ||
            !startDateLocal ||
            !description ||
            !elapsedTime ||
            !distance ||
            !trainer ||
            !commute
          }
        >
          Create Activity
        </button>
      </div>
    </div>
  );
};
