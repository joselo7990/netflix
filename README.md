# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

ID DE PELICULA
https://api.themoviedb.org/3/movie/126308?language=es-ES&api_key=af2964833f9387b623327e68d84b87c1

SEARCH PELICULA :

https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=es-ES&api_key=af2964833f9387b623327e68d84b87c1

//https://developer.themoviedb.org/reference/search-movie

const { data: newData, loading: loadingNewDAta } = useFetch(
`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=es-ES&api_key=af2964833f9387b623327e68d84b87c1`
);

FILTROS POR GENEROS
https://api.themoviedb.org/3/genre/movie/list?api_key=af2964833f9387b623327e68d84b87c1&language=es-ES%60

filtros por GENEROS 2
https://api.themoviedb.org/3/discover/movie?api_key=af2964833f9387b623327e68d84b87c1&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28
