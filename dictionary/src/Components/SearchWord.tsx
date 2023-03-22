import React, { useState } from 'react';
import { Paper, Button, Box } from '@mui/material';
import MoreDetails from './MoreDetails';
import { textType } from "./Main";

type searchProp = {
  words: Array<textType>;
};

const SearchWord = ({ words }: searchProp) => {
  const [showMoreDetails, setShowMoreDetails] = useState<boolean>(false);
  const [textDetails, setTextDetails] = useState<any>();

  return (
    <Paper
      sx={{
        width: "400px",
        backgroundColor: "beige",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        margin: "auto",
        padding: "10px 40px",
        marginTop: "30px",
        borderRadius: "5px",
      }}
    >
      {!showMoreDetails ? (
        <div>
          {words?.map((word: any, index: any) => (
            <div key={index}>
              <Box fontSize="25px" fontWeight="bold">{word.word}</Box>
              <br />
              <Box fontSize="25px" fontWeight="bold">{word?.meanings[0]?.definitions[0].definition}</Box>
              <br />
              <Box sx={{justifyContent: "center", alignItems: "center",textAlign:"center", margin:"auto"}}>
              <Button
                onClick={(e) => {
                  setShowMoreDetails(true);
                  setTextDetails(word);
                }}
                variant="contained"
              >
                More Details
              </Button>
              </Box>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <MoreDetails showText={textDetails} />
        </div>
      )}
    </Paper>
  );
};

export default SearchWord;