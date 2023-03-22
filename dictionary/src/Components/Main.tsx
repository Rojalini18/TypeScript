import React, { useCallback, useEffect, useState } from 'react'
import { Button, CircularProgress, TextField, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import RandomWord from './RandomWord';
import SearchWord from './SearchWord';

export type textType = {
  word: string;
  phonetic: string;
  phonetics: any[];
  meanings: any[];
};

const Main = () => {
  const [word, setWord] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [searchedText, setSearchedText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Array<textType>>([]);
  const [textDefinition, setTextDefinition] = useState<string>("");
  const [randomWord, setRandomWord] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("https://random-words-api.vercel.app/word")
      .then((response: any) => {
        setWord(response.data[0].word);
        setTextDefinition(response.data[0].definition);
        setLoading(false);
      })
      .catch((error: any) => {
        setLoading(false);
      });
  }, []);

  const handleSubmit = useCallback(
    (event: any) => {
      event.preventDefault();
      setRandomWord(false);
      setLoading(true);
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchedText}`)
        .then((response: any) => {
          setLoading(false);
          setSearchResults(response.data);
        })
        .catch((error) => console.error(error));
    },
    [searchedText]
  );

  return (
    <div>
      <form action="" onSubmit={handleSubmit} style={{
        display: "flex", justifyContent: "center", alignItems: "center", margin: "auto",
        gap: "30px", marginTop: "50px"
      }}>
        <TextField
          autoFocus
          placeholder="Type Here..."
          value={searchedText}
          onChange={(e) => setSearchedText(e.target.value)}
        />
        <Button
          sx={{ transform: "scale(1.5)" }}
          type="submit"
          variant="contained"
        >
          <SearchIcon></SearchIcon>
        </Button>
      </form>
      {loading ? (
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <CircularProgress />
        </Box>
      ) : randomWord ? (
        <Box>
          <RandomWord word={word} definition={textDefinition} />
        </Box>
      ) : (
        <Box>
          <SearchWord words={searchResults} />
        </Box>
      )}
    </div>
  );
};

export default Main;