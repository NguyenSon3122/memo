import { get} from "./index";

export function getMovie() {
   return  get('https://www.omdbapi.com/?s=man&apikey=4a3b711b');
}
export function searchMovie(searchValue) {
   return get(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
}