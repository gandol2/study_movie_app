import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import "./Movies.css";

function Movies(props) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [apiUrl, setApiUrl] = useState("");

  async function getMovieAPI() {
    console.log(movies.length);
    console.log(apiUrl);
    // if (0 < movies.length) return;
    if (!apiUrl) return;

    const result = await axios.get(apiUrl);
    console.log(result);
    setMovies((prev) => result.data.results);
    console.log("set------");
    setLoading(false);
  }

  useEffect(() => {
    document.title = props.title;

    switch (props.title) {
      case "최고평점":
        setApiUrl(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=fcecf39d28dea79f3b8e656e71ed7ffb&language=ko"
        );
        break;
      case "인기영화":
        setApiUrl(
          "https://api.themoviedb.org/3/movie/popular?api_key=fcecf39d28dea79f3b8e656e71ed7ffb&language=ko"
        );
        break;
      case "상영중":
        setApiUrl(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=fcecf39d28dea79f3b8e656e71ed7ffb&language=ko&region=KR"
        );
        break;
      case "개봉예정":
        setApiUrl(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=fcecf39d28dea79f3b8e656e71ed7ffb&language=ko&region=KR"
        );
        break;
      default:
        setApiUrl("");
        break;
    }
  }, [props.title]);

  useEffect(() => {
    getMovieAPI();
  }, [apiUrl]);
  return (
    <>
      {loading ? (
        <div>로딩중...</div>
      ) : (
        <>
          <h1 className="title">{props.title}</h1>
          {movies?.map(function (ele) {
            return (
              <Link key={ele.id} to={`/details/${ele.id}`}>
                <Movie
                  id={ele.id}
                  title={ele.title}
                  poster_path={ele.poster_path}
                  overview={ele.overview}
                  vote_average={ele.vote_average}
                  adult={ele.adult}
                  original_language={ele.original_language}
                  release_date={ele.release_date}
                />
              </Link>
            );
          })}
        </>
      )}
    </>
  );
}

export default Movies;
