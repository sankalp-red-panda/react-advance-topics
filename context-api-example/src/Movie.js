import React from "react";

export default function Movie({ name, price }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  );
}
