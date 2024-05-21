import React from "react";
import { Link } from "react-router-dom";

function Film({ img, title, id, onClick }) {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <Link to={`/film/${id}`}>
      <div className="flex flex-col items-center">
        <h1 className="text-center text-xl mb-2">{title}</h1>
        <img
          src={img}
          alt="pelicula"
          className="max-w-full"
          onClick={handleClick}
        />
      </div>
    </Link>
  );
}

export default Film;
