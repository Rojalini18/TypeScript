import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "40px",
        background: "teal",
        color: "white",
        display: "flex",
        justifyContent: "space-around",
        fontWeight: "bold",
        fontSize: "30px",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/map">Map</Link>
    </div>
  );
};

export default Navbar;
