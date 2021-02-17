import React from "react";

export default function Nav({ movies }) {
  return (
    <div>
      <h1>Sankalp</h1>
      <p>List of movie:{movies.length}</p>
    </div>
  );
}
