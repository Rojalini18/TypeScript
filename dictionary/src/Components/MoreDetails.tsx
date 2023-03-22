import React from 'react'
import { Paper, Box } from "@mui/material";
import ReactAudioPlayer from 'react-audio-player';
import { textType } from "./Main";

type WordProp = {
  showText: textType;
};

const MoreDetails = ({ showText }: WordProp) => {

  return (
    <div>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "50%",
          margin: "0 auto",
          bgcolor: "wheat",
        }}
      >
        <Box fontSize="15px" > {showText.word} </Box>
        <Box fontSize="15px" > {showText.phonetic} </Box>
      </Paper>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margin: "auto",
          padding: "10px 50px",
          marginTop: "20px",
        }}
      >
        <ReactAudioPlayer
          src={showText?.phonetics[0].audio}
          autoPlay
          controls
        />
      </Paper>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margin: "auto",
          padding: "5px 5px",
          marginTop: "10px",
        }}
      >
        {showText?.meanings.map((meaning: any, index: number) => (
          <div key={index}>
            <Box fontSize="15px">{meaning.partOfSpeech}</Box>
            <br />
            {meaning.definitions.map((definition: any, i: number) => (
              <div key={index + i}>
                <Box fontSize="15px" >{definition.definition}</Box>
                <br />
                <Box fontSize="15px" >Example: {definition.example}</Box>
                <br />
              </div>
            ))}
          </div>
        ))}
      </Paper>
    </div>
  );
};

export default MoreDetails;