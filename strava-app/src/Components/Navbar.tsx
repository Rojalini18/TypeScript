import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export const Navbar = () => {
  const nav = useNavigate();
  const locationSearch = useLocation().search;
  const code = new URLSearchParams(locationSearch).get("code");

  const handleNavigate = () => {
    nav("/activity");
  };

  const handleAuth = () => {
    window.location.href =
      "http://www.strava.com/oauth/authorize?client_id=107020&response_type=code&redirect_uri=http://localhost:3000?exchange_token&approval_prompt=force&scope=read,activity:read_all,activity:write";
  };

  useEffect(() => {
    if (code !== null) {
      const requestData = {
        client_id: "107020",
        client_secret: "50a8eb9f45b141677571adf6ca2159c42da231f4",
        code,
        grant_type: "authorization_code",
      };
      axios
        .post("https://www.strava.com/oauth/token", requestData)
        .then((response: any) => {
          localStorage.setItem("accessToken", response.data.access_token);
          nav("activity");
        })
        .catch((error: any) => console.error(error));
    }
  }, []);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken !== null) {
      handleNavigate();
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        background: "whitesmoke",
        color: "black",
        display: "flex",
        justifyContent: "space-around",
        fontWeight: "bold",
        fontSize: "30px",
      }}
    >
      <Link to="/">
        <img
          src="data:image/png;base64,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"
          alt="Strava"
          style={{ height: "35px", width: "120px", marginTop: "15px" }}
        ></img>
      </Link>
      <button
        style={{
          backgroundColor: "#f05523",
          color: "white",
          height: "38px",
          width: "100px",
          marginTop: "10px",
          fontSize: "20px",
        }}
        onClick={() => handleAuth()}
      >
        Log In
      </button>
    </div>
  );
};
