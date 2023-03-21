import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useLocation, useNavigate, NavigateFunction } from "react-router-dom";

const RawJSON = () => {
  const setState: unknown = useLocation().state;
  const navigate: NavigateFunction = useNavigate();
  const handleBack = (): void => {
    navigate(-1);
  };

  if (!setState) {
    return (
      <div>
        <Box>Can not find data here!</Box>
        <Button onClick={handleBack} variant="contained">Back</Button>
      </div>
    );
  }

  return (
    <Box>
      <Box>Raw-JSON Data</Box>
      <br/>
      <Box>{JSON.stringify(setState)}</Box>
      <br/>
      <Button variant="contained" onClick={handleBack}>Back</Button>
    </Box>
  );
};

export default RawJSON;
