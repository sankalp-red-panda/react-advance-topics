import React, { useState, createContext } from "react";

export const MovieContext = createContext();
export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    { name: "Harry potter", price: "$10", id: 1231 },
    { name: "Game of thrones", price: "$54", id: 4321 },
    { name: "Machinist", price: "$23", id: 6535 },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
