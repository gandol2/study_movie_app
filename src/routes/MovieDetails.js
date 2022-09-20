import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function MovieDetails(props) {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [movieId, setMovieId] = useState(0);

  async function getMovieAPI() {
    if (0 === movieId) return;

    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=fcecf39d28dea79f3b8e656e71ed7ffb&language=ko`
    );
    setDetails(result.data);
    console.log(result.data);
  }

  useEffect(() => {
    getMovieAPI();
  }, [movieId]);

  useEffect(() => {
    setMovieId(params.id);
  }, [params.id]);

  return (
    <>
      <h1>영화 상세정보</h1>
      <div className="movie__poster">
        <img
          className="movie__poster_img"
          width={100}
          src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
        />
        <div className="movie__adult">{!details.adult ? "19" : null}</div>
      </div>
      <div>
        {details.title}
        {/* {details.original_title} */}
      </div>
      <div>{details.tagline}</div>
      <div>{details.runtime}분</div>
      <div>{details.overview}</div>
      <div>{details.release_date}</div>
      <div>{details.status}</div>
      <div>{details.vote_average}</div>
      <div>
        {details.genres?.map((ele) => (
          <div>{ele.name}</div>
        ))}
      </div>
      <div>
        {details.production_companies.map((ele, idx) => (
          <img
            key={idx}
            className="movie__poster_img"
            width={100}
            src={`https://image.tmdb.org/t/p/original${ele.logo_path}`}
          />
        ))}
      </div>
    </>
  );
}

export default MovieDetails;
