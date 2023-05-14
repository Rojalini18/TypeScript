import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Activity = () => {
  const nav = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const access_token = localStorage.getItem("accessToken");
        if (access_token) {
          const response = await axios.get(
            "https://www.strava.com/api/v3/athlete/activities",
            {
              headers: { Authorization: `Bearer ${access_token}` },
            }
          );
          //console.log(response.data);
          setData(response.data);
          setLoading(false);
        }
      } catch (error) {
        //console.log(error);
        localStorage.removeItem("accessToken");
        nav("/");
      }
    };
    fetchData();
  }, [nav]);

  return (
    <div>
      <div>
        <button
          style={{
            width: "15%",
            height: "5%",
            backgroundColor: "#f05523",
            border: "2px solid black",
            color: "white",
            fontSize: "20px",
            padding: "5px",
            marginTop: "10px",
            marginBottom: "15px",
            marginLeft: "42%",
          }}
          onClick={() => nav("/create_activity")}
        >
          Create Activity
        </button>
      </div>
      <div>
        {loading ? (
          <div
            style={{
              fontSize: "32px",
              textAlign: "center",
            }}
          >
            Loading...
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "3%",
            }}
          >
            {data.map((el: any, index: any) => (
              <div
                key={index}
                style={{
                  width: "60%",
                  height: "80%",
                  border: "1px solid black",
                  padding: "10px",
                  marginTop: "10px",
                  marginBottom: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p>Name: {el.name}</p>
                <p>Sport type: {el.sport_type}</p>
                <p>Distance: {el.distance}</p>
                <p>Average Speed: {el.average_speed}</p>
                <p>Max Speed: {el.max_speed}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
