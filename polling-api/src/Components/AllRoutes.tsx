import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "./Posts";
import RawJSON from "./RawJSON";
import axios from "axios";

export type dataType = any[];

function AllRoutes() {
  const [data, setData] = useState<dataType>([]);
  const [selectPage, setSelectPage] = useState<number>(1);

  var intervalTime: NodeJS.Timer;
  var pages: number = 0;

  const getData = (): void => {
    const api = async (): Promise<void> => {
      const response = await axios.get(
        ` http://hn.algolia.com/api/v1/search_by_date?tags=story&query=bar&page=${pages}`
      );
      if (!response?.data?.exhaustiveNbHits) {
        setData((prev: dataType): dataType => [...prev, response?.data?.hits]);
        pages = pages + 1;
      } else {
        clearInterval(intervalTime);
      }
    };
    api();
  };

  React.useEffect(() => {
    getData();
    intervalTime = setInterval(getData, 10000);
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Posts
              data={data}
              selectPage={selectPage}
              setSelectPage={setSelectPage}
            />
          }
        />
        <Route path="/rawjson" element={<RawJSON />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
