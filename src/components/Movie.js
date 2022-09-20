import PropTypes from "prop-types";
import "./Movie.css";

function Movie(props) {
  return (
    <div className="movie__data">
      <div className="movie__poster">
        <img
          className="movie__poster_img"
          width={100}
          src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
        />
        <div className="movie__adult">{!props.adult ? "19" : null}</div>
      </div>

      <h3 className="movie__title">{props.title}</h3>
      <div className="movie__overview">{props.overview.slice(0, 100)}...</div>
      <div className="movie__vote">
        ({props.vote_average} / 10){" "}
        {Array(Number(props.vote_average.toFixed(0)))
          .fill(0)
          .map((ele, idx) => (
            <span key={idx}>⭐</span>
          ))}
      </div>

      <div className="movie__lang">{props.original_language}</div>
      <div className="movie__date movie__info">{props.release_date}</div>
      <div className="movie__id movie__info">영화ID : {props.id}</div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  adult: PropTypes.bool.isRequired,
  original_language: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
};

export default Movie;
