import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function FilmDetail() {
  const { filmId } = useParams();

  const { data, loading } = useFetch(
    `https://api.themoviedb.org/3/movie/${filmId}?language=es-ES&api_key=af2964833f9387b623327e68d84b87c1&append_to_response=credits`
  );

  if (loading) return null;
  return (
    <div className="flex flex-col md:flex-row">
      <img
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt="pelicula"
        className="w-full md:w-1/2 h-auto md:h-screen"
      />
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center bg-black bg-opacity-75">
        <h1 className="text-4xl font-bold text-white mb-4">{data.title}</h1>
        <p className="text-lg text-white mb-2">{data.overview}</p>
        <p className="text-lg text-gray-300 mb-2">
          Lenguaje Original: {data.original_language}
        </p>
        <p className="text-lg text-gray-300">Puntaje: {data.vote_average}</p>
        {/* Otros detalles de la película */}
      </div>
    </div>
  );
}

export default FilmDetail;
