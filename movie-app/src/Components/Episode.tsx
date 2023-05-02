import { useState } from "react";
import axios from "axios";
import { MdSearch } from "react-icons/md";

interface IEpisode {
  Title: string;
  Year: string;
  Poster: string;
  Plot: string;
}

export const Episode = () => {
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [searchSeason, setSearchSeason] = useState<string>("");
  const [searchEpisode, setSearchEpisode] = useState<string>("");
  const [episodeData, setEpisodeData] = useState<IEpisode>();
  const [error, setError] = useState<string>("");

  const fetchEpisodeData = () => {
    const apiUrl = `http://www.omdbapi.com/?apikey=d2b2703d&type=episode&t=${searchTitle}&season=${searchSeason}&episode=${searchEpisode}`;
    axios
      .get(apiUrl)
      .then((res) => {
        if (res.data.Response === "True") {
          setEpisodeData(res.data);
          setError("");
        } else {
          setError(res.data.Error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginLeft: 130,
          marginTop: 5,
          marginBottom: 2,
        }}
      >
        Search an Episode...
      </h2>
      <div
        style={{
          display: "flex",
          marginLeft: -50,
          marginTop: 5,
          marginBottom: 5,
          gap: 5,
        }}
      >
        <input
          style={{ flex: 1, padding: 5, borderRadius: 2 }}
          placeholder="Title"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        <input
          style={{ flex: 1, padding: 2, borderRadius: 2 }}
          type="number"
          placeholder="Season"
          value={searchSeason}
          onChange={(e) => setSearchSeason(e.target.value)}
        />
        <input
          style={{ flex: 1, padding: 2, borderRadius: 2 }}
          type="number"
          placeholder="Episode"
          value={searchEpisode}
          onChange={(e) => setSearchEpisode(e.target.value)}
        />
      </div>
      <div
        style={{
          width: "50%",
          height: 50,
          backgroundColor: "black",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 100,
          marginTop: 10,
          marginBottom: 25,
        }}
      >
        <MdSearch
          name="search"
          size={50}
          color="white"
          style={{ padding: 2 }}
          onClick={() => fetchEpisodeData()}
        />
      </div>
      {error ? (
        <p style={{ fontSize: 25, fontWeight: "bold", marginLeft:55 }}>{error}</p>
      ) : (
        <div>
          {episodeData && (
            <div>
              <img
                src={episodeData.Poster}
                alt="Poster"
                style={{
                  width: 200,
                  height: 200,
                  marginTop: 5,
                  marginLeft: 110,
                }}
              />
              <p style={{ fontSize: 15, fontWeight: "bold", marginLeft: 170 }}>
                Title: {episodeData.Title}
              </p>
              <p
                style={{ fontSize: 15, fontWeight: "bold", marginLeft: 140 }}
              >{`Year Of Release: ${episodeData.Year}`}</p>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginBottom: 20,
                  marginLeft: 30,
                }}
              >
                Plot: {episodeData.Plot}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
