import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

export default function AddMovies() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="name" name="name" value={name} onChange={updateName}></input>
      <input
        type="name"
        name="price"
        value={price}
        onChange={updatePrice}
      ></input>
      <button onSubmit={handleSubmit}>Submit</button>
    </form>
  );
}
