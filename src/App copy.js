import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import "./App.css";

function App(props) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  async function getMovieAPI() {
    if (0 < movies.length) return;

    const result = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=fcecf39d28dea79f3b8e656e71ed7ffb&language=ko"
    );
    console.log(result.data.results);
    setMovies(result.data.results);
    setLoading(false);
  }

  useEffect(function () {
    getMovieAPI();
  }, []);

  return (
    <>
      {loading ? (
        <div>로딩중...</div>
      ) : (
        movies.map(function (ele) {
          return (
            <Movie
              key={ele.id}
              id={ele.id}
              title={ele.title}
              poster_path={ele.poster_path}
              overview={ele.overview}
              vote_average={ele.vote_average}
              adult={ele.adult}
              original_language={ele.original_language}
              release_date={ele.release_date}
            />
          );
        })
      )}
    </>
  );

  // return (
  //   <>
  //     {loading ? (
  //       <div>로딩중...</div>
  //     ) : (
  //       <>
  //         {movies.map(function (ele, idx) {
  //           return <Movie title={ele.title} />;
  //         })}
  //       </>
  //     )}
  //   </>
  // );
}

export default App;
