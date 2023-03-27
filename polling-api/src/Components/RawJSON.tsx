import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useLocation, useNavigate, NavigateFunction } from "react-router-dom";

const RawJSON = ({data}: any) => {
  const setState: unknown = useLocation().state;
  const navigate: NavigateFunction = useNavigate();
  const handleBack = (): void => {
    navigate(-1);
  };

  if (!setState) {
    return (
      <div>
        <Box>Can not find data here!</Box>
        <Button onClick={handleBack} variant="contained">
          Back
        </Button>
      </div>
    );
  }

  return (
    <Box
      sx={{
        border: "2px solid black",
        backgroundColor:"lightgrey",
        margin: "auto",
        padding: "5px",
      }}
    >
      <Box sx={{ marginLeft: "650px", fontSize: "25px", fontWeight: "bold" }}>
        Raw-JSON Data
      </Box>
      <Box
        sx={{
          border: "2px solid black",
          margin: "5px",
          padding: "5px",
        }}
      >
        <h5>{JSON.stringify(setState)}</h5>
      </Box>
      <Box
        sx={{
          marginLeft: "700px",
          fontSize: "25px",
          fontWeight: "bold"
        }}
      >
        <Button variant="contained" onClick={handleBack}>
          Back
        </Button>
      </Box>
    </Box>
  );
};

export default RawJSON;
