import React, { useEffect, useState } from "react";
import { Paper, Button, Box } from "@mui/material";
import axios from "axios";

type randomWordProp = {
  word: string;
  definition: string;
};

const RandomWord = ({ word, definition }: randomWordProp) => {
  const [wordDetails, setWordDetails] = useState<Array<any>>([]);
  const [randomWordDetails, setrandomWordDetails] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("https://dictionary-api-rojalinidas.vercel.app/word")
      .then((response: any) => {
        setWordDetails(response.data);
      })
      .catch((error: any) => console.error(error));
  }, []);
  return (
    <Paper
      sx={{
        width: "300px",
        backgroundColor: "beige",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
        margin: "auto",
        padding: "10px 40px",
        marginTop: "30px",
        borderRadius: "5px",
      }}
    >
      <Box fontSize="25px" fontWeight="bold">
        Word of the Day!
      </Box>
      <br />
      <Box fontSize="25px" fontWeight="bold">
        Word : {word}
      </Box>
      <br />
      <Box fontSize="25px" fontWeight="bold">
        Definition : {definition}
      </Box>
      <br />
      <Button onClick={() => setrandomWordDetails(true)} variant="contained">
        See More...
      </Button>
      <br />
    </Paper>
  );
};

export default RandomWord;
