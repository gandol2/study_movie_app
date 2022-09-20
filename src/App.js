import React from "react";
import "./App.css";
import Home from "./routes/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import Nav from "./components/Nav";
import Movies from "./routes/Movies";
import MovieDetails from "./routes/MovieDetails";

function App(props) {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top_rated" element={<Movies title={"최고평점"} />} />
        <Route path="/popular" element={<Movies title={"인기영화"} />} />
        <Route path="/now_playing" element={<Movies title={"상영중"} />} />
        <Route path="/upcoming" element={<Movies title={"개봉예정"} />} />
        <Route path="/details/:id" element={<MovieDetails />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
