import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { answersArrayType } from "../Pages/Question";
import questionData from "../questionData.json";

type qusetionIdicatorType = {
  answersArray: answersArrayType;
  id: number;
};

export type quesionType = {
  id: number;
  question: string;
  answer: Array<string> | string;
  questionOption: Array<string>;
  option: Array<string>;
};

const QuestionNotification = ({ answersArray, id }: qusetionIdicatorType) => {
  return (
    <Box
      sx={{
        paddingTop: "20px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {questionData.map((quesion: quesionType) => {
        const isAnswered =
          answersArray[quesion.id - 1].length > 0 ? true : false;
        let highlight = false;
        if (Number(id) === quesion.id) {
          highlight = true;
        }
        return (
          <Square
            key={quesion.id}
            highlight={highlight}
            isAnswered={isAnswered}
            id={quesion.id}
          ></Square>
        );
      })}
    </Box>
  );
};

export default QuestionNotification;

type circleType = {
  id: number;
  isAnswered: boolean;
  highlight: boolean;
};

const Square = ({ id, isAnswered, highlight }: circleType): JSX.Element => {
  return (
    <Link to={`/questions/${id}`}>
      <Box
        sx={{
          bgcolor: isAnswered ? "#ffa500" : "black",
          border: highlight ? "3px solid teal " : "",
          width: "50px",
          height: "50px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {id}
      </Box>
    </Link>
  );
};
