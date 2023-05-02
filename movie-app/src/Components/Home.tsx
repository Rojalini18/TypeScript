import React, { useState } from "react";
import { Movie } from "./Movie";
import { Episode } from "./Episode";

const Home = () => {
  const [contentType, setContentType] = useState<
    "movie" | "series" | "episode"
  >("movie");

  return (
    <div
      style={{
        width: "30%",
        margin: "auto",
        marginTop: 20,
      }}
    >
      <h1
        style={{
          fontSize: 25,
          fontWeight: "bold",
          marginLeft: 125,
          marginBottom: 10,
        }}
      >
        Movies-App
      </h1>
      <select
        value={contentType}
        style={{
          width: "50%",
          marginLeft: 90,
          borderColor: "black",
          backgroundColor: "whitesmoke",
          padding: "10px",
          borderRadius: "2px",
        }}
        onChange={(e) => setContentType(e.target.value as "movie" | "series")}
      >
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>

      {contentType === "episode" ? (
        <Episode />
      ) : (
        <Movie contentType={contentType} />
      )}
    </div>
  );
};

export default Home;
