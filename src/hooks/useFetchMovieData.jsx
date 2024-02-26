import { useEffect, useState } from "react";

export default function useFetchMovieData(movieType) {
  const [movies, setMovies] = useState([]);
  const urlPage = ["now_playing", "popular", "top_rated"];
  const fetchMovieData = (id) => {
    let url = "";
    if (urlPage.includes(movieType)) {
      url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    } else {
      url = `https://api.themoviedb.org/3/search/movie?query=${id}&language=en-US`;
    }
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Zjg2N2MyYjNiNDRjZmE0NzAxODdlMWRlNjQxMDM2MiIsInN1YiI6IjY1ZDlhNzNlNzJkODU1MDE4NWJjMjg0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FqL3Q9yYDvDnMzUrMmzh3La6rywFBrKqFUyOikf3fjM",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        console.log("API response ", response);
        console.log(response.dates);

        if (response.results) {
          setMovies(response.results);
        } else {
          console.error("API response does not obtained", response);
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchMovieData(movieType);
    //console.log(movieType);
  }, [movieType]);

  return movies;
}
