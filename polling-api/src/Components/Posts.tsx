import {
  Button,
  CircularProgress,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { ChangeEvent } from "react";
import { dataType } from "../Components/AllRoutes";
import { useNavigate, NavigateFunction } from "react-router-dom";

type listType = {
  data: dataType;
  selectPage: number;
  setSelectPage: React.Dispatch<React.SetStateAction<number>>;
};

type datatype = {
  title: string;
  url: string;
  created_at: string;
  author: string;
  objectID: string;
};

const Posts = ({ data, selectPage, setSelectPage }: listType) => {
  const navigate: NavigateFunction = useNavigate();
  const handleSelect = (jsonData: datatype): void => {
    navigate("rawjson", { state: jsonData });
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data.length === 0 ? (
          <>
            <CircularProgress></CircularProgress>
            LOADING...
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TableContainer>
              <Table stickyHeader>
                <TableHead>
                  <TableCell
                    sx={{
                      backgroundColor: "black",
                      border: "1px solid white",
                      color: "white",
                    }}
                    align="center"
                  >
                    TITLE
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "black",
                      border: "1px solid white",
                      color: "white",
                    }}
                    align="center"
                  >
                    URL
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "black",
                      border: "1px solid white",
                      color: "white",
                    }}
                    align="center"
                  >
                    CREATED_AT
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "black",
                      border: "1px solid white",
                      color: "white",
                    }}
                    align="center"
                  >
                    AUTHOR
                  </TableCell>
                </TableHead>
                <TableBody>
                  {data.length &&
                    data[selectPage - 1].map((e: datatype): JSX.Element => {
                      console.log(e);
                      const { author, created_at, title, url, objectID } = e;
                      return (
                        <TableRow
                          key={objectID}
                          onClick={(): void => handleSelect(e)}
                        >
                          <TableCell>{title}</TableCell>
                          <TableCell>{url}</TableCell>
                          <TableCell>{created_at}</TableCell>
                          <TableCell>{author}</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <Box>
              <Pagination
                count={data.length}
                onChange={(e: ChangeEvent<any>, value: number): void =>
                  setSelectPage(value)
                }
                page={selectPage}
              ></Pagination>
            </Box>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Posts;
