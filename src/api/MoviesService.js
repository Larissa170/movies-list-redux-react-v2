import axios from "axios";

const API_KEY = "a67bae5684a4c439bddc5967fc090eb6";
const BASE_URL = "https://api.themoviedb.org/3/";
const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
  static getMovies(){
    return axios(withBaseUrl("movie/popular"));
  }

  static getMovieDatail(id){
    return axios(withBaseUrl(`movie/${id}`));
  }
}
