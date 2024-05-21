import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Body from "./component/Body";
import FilmDetail from "./component/FilmDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/film/:filmId" element={<FilmDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
