import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    if (!fetchUrl) {
      console.warn("fetchUrl is undefined in Row:", title);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(fetchUrl);
        const results = response?.data?.results;

        if (Array.isArray(results)) {
          setMovies(results);
        } else {
          console.warn("Invalid results in response for:", title);
          setMovies([]);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies([]);
      }
    };

    fetchData();
  }, [fetchUrl, title]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); // close existing trailer
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          if (!url) throw new Error("Trailer not found");
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.error("Trailer error:", error);
          alert("Trailer not found for this movie.");
        });
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {Array.isArray(movies) &&
          movies.map((movie) => {
            const imagePath = isLargeRow ? movie?.poster_path : movie?.backdrop_path;
            if (!imagePath) return null;

            return (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
                src={`${base_url}${imagePath}`}
                alt={movie?.name || movie?.title || "Movie Poster"}
              />
            );
          })}
      </div>

      {trailerUrl && (
        <div className="row__youtube">
          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </div>
  );
};

export default Row;



