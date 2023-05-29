import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "teal",
        color: "white",
        display: "flex",
        justifyContent: "space-around",
        fontWeight: "bold",
        fontSize: "25px",
        padding: "10px",
      }}
    >
      Welcome to the App!
    </div>
  );
};

export default Navbar;
