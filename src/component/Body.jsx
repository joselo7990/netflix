import Film from "./Film";
import { useFetch } from "../hooks/useFetch";
import { useState, useEffect } from "react";
import Search from "./Search";

function Body() {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [genresLoading, setGenresLoading] = useState("false");
  const [genresSelected, setGenresSelected] = useState([]);
  const { data, loading } = useFetch(
    "https://api.themoviedb.org/3/trending/all/week?language=es-ES&api_key=af2964833f9387b623327e68d84b87c1"
  );
  const { data: genres, loading: loadingGenres } = useFetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=af2964833f9387b623327e68d84b87c1&language=es-ES%60"
  );

  useEffect(() => {
    if (!input) setSearchResults([]);
    // sin input no realiza busqueda
    //else , cada vez que pasa algo en input Hace la busqueda
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=es-ES&api_key=af2964833f9387b623327e68d84b87c1`
    )
      .then((response) => response.json())
      .then((data) => setSearchResults(data.results))

      .catch((error) => console.error(error));
  }, [input]); // Cada vez q cambia el input

  const handleInput = (event) => {
    const value = event.target.value;
    setInput(value);
  };

  const handleClick = (genresId) => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=af2964833f9387b623327e68d84b87c1&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genresId}`
    )
      .then((response) => response.json())
      .then((film) => {
        setGenresSelected(film.results);
        setGenresLoading("true");
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {}, []);
  if (loading) return null;

  if (loadingGenres) return null;

  return (
    <div>
      <Search
        handleClick={handleClick}
        handleInput={handleInput}
        input={input}
      />
      <div className="grid grid-cols-2 md:grid-cols-4">
        {genres.genres.map((gen) => (
          <button
            key={gen.id}
            className="bg-red-500 text-white px-3 py-1 mr-3 rounded mt-1"
            type="buton"
            onClick={() => handleClick(gen.id)}
          >
            {gen.name}
          </button>
        ))}
      </div>
      {genresSelected && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-center">
          {genresSelected.map((movie) => (
            <Film
              key={movie.id}
              img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              title={movie.title || movie.name}
              id={movie.id}
              onClick={() => handleClick(movie.id)}
            />
          ))}
        </div>
      )}

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-5">
          {searchResults.map((movie) => (
            <Film
              key={movie.id}
              img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              title={movie.title || movie.name}
              id={movie.id}
              onClick={() => handleClick(movie.id)}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-center">
          {data.results.map((movie) => (
            <Film
              key={movie.id}
              img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              title={movie.title || movie.name}
              id={movie.id}
              onClick={() => handleClick(movie.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Body;
