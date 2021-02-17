import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";
import Nav from "./Nav";
import AddMovies from "./AddMovies";
const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <Nav movies={movies} />
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
      <AddMovies />
    </div>
  );
};
export default MovieList;
