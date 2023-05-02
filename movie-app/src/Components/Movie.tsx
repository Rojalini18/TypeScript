import axios from "axios";
import { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import { ClipLoader } from "react-spinners";

interface IMovie {
  Title: string;
  Year: string;
  Poster: string;
  Plot: string;
}

interface Props {
  contentType: "movie" | "series";
}

export const Movie = ({ contentType }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movie, setMovie] = useState<IMovie[]>([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setPage((prevPage) => prevPage + 1);
    });
    fetchMovies(page + 1);
  };

  const apiUrl =
    contentType === "movie"
      ? "http://www.omdbapi.com/?apikey=d2b2703d&type=movie&s="
      : "http://www.omdbapi.com/?apikey=d2b2703d&type=series&s=";

  const fetchMovies = (page = 1) => {
    axios
      .get(`${apiUrl}${searchQuery}&page=${page}`)
      .then((res: any) => {
        const data = res.data;
        if (data.Response === "True") {
          setMovie((prevMovies) => [...prevMovies, ...data.Search]);
          setError("");
        } else {
          setError(res.data.Error);
        }
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (searchQuery) {
      fetchMovies(page);
      setIsLoading(false);
    }
  }, [page]);

  return (
    <div>
      <h2
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginLeft: 135,
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        {contentType === "movie" ? "Search a movie..." : "Search a series..."}
      </h2>
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 2,
          marginLeft: 83,
          marginBottom: 25,
          gap: 5,
        }}
      >
        <input
          style={{ flex: 1, height: 50 }}
          placeholder={
            contentType === "movie"
              ? "Enter Movie Name.."
              : "Enter Series Name.."
          }
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button style={{ flex: 1, height: 55 }}>
          <MdSearch
            name="search"
            color="black"
            style={{
              width: 60,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => fetchMovies()}
          />
        </button>
      </div>
      {error ? (
        <p style={{ fontSize: 25, fontWeight: "bold", marginLeft: 100 }}>
          {error}
        </p>
      ) : (
        <div>
          {movie && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(30%, 1fr))",
                gridGap: "20px",
              }}
            >
              {movie.map((movie) => (
                <div style={{ marginBottom: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between",
                      height: "100%",
                    }}
                  >
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <div style={{ textAlign: "center" }}>
                      <p
                        style={{
                          fontSize: 15,
                          fontWeight: "bold",
                          margin: "10px 0 5px 0",
                        }}
                      >
                        Title: {movie.Title}
                      </p>
                      <p
                        style={{
                          fontSize: 15,
                          fontWeight: "bold",
                          margin: "5px 0",
                        }}
                      >
                        Year Of Release: {movie.Year}
                      </p>
                      <p
                        style={{
                          fontSize: 15,
                          fontWeight: "bold",
                          marginBottom: 15,
                        }}
                      >
                        Plot: {movie.Plot}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {movie?.length > 0 && !isLoading && (
            <button
              onClick={handleLoadMore}
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginLeft: 180,
                marginBottom: 50,
              }}
            >
              Load More
            </button>
          )}
          {isLoading && (
            <div style={{ justifyContent: "center", alignItems: "center" }}>
              <ClipLoader size="large" color="blue" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
