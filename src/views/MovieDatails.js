import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";

export const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    MoviesService.getMovieDatail(id).then(({ data }) => {
      setMovie(data);
    });
  }, [id]);

  return (
    <section className="movie-datail">
      <div className="container">
        <div className="row gx-5">
          <div className="col-6">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt=""
            />
          </div>
          <div className="col=6">
            <h1>{movie.title}</h1>
            <ul>
              <li>Budget: {movie.budget}</li>
              <li>Original language: {movie.original_language}</li>
              <li>Popularity: {movie.popularity}</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
