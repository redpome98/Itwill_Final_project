import { useState } from "react";
import "./index.css";
import MovieHeader from "./components/MovieHeader";
import MovieList from "./components/MovieList";
import MovieFooter from "./components/MovieFooter";
import useFetchMovieData from "./hooks/useFetchMovieData";

function App() {
  const [movieType, setMovieType] = useState("now_playing");
  const movies = useFetchMovieData(movieType);
  const handleMovies = (id) => {
    console.log(id);
    setMovieType(id);
  };
  return (
    <>
      <MovieHeader onMovieData={handleMovies} />
      <MovieList movies={movies} />
      <MovieFooter />
    </>
  );
}

export default App;
