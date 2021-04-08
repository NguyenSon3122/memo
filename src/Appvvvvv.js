import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Home from './components/home'
// import About from './components/about'
// import Login from './components/login'
import Header from '../src/components/Header'
import Movie from '../src/components/Movie'
import Search from "./components/Search";
import { connect } from "react-redux";
import { getMovieAll,searchMovieAll } from "./action";


const Appvvvvv = (props) => {
  const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";
  // const [loading, setLoading] = useState(true);
  // const [movies, setMovies] = useState([]);
  // const [error, setErrroMessage] = useState(null);

    useEffect(() => {
        // async function getApi() {
        //     let respon = await props.getMovie();
        //    return respon
        // }
        props.getMovie();
        // async function hello() {
        //     await new Promise(resolve => setTimeout(resolve, 3000));
        //     console.log('Hello World!');
        // }
        // hello();

    },[])
    function search (searchValue){
        // alert(searchValue)
        // dispatch({
        //     type: "SEARCH_MOVIES_REQUEST"
        // });
        //
        // fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
        //     .then(response => response.json())
        //     .then(jsonResponse => {
        //         if (jsonResponse.Response === "True") {
        //             dispatch({
        //                 type: "SEARCH_MOVIES_SUCCESS",
        //                 payload: jsonResponse.Search
        //             });
        //         } else {
        //             dispatch({
        //                 type: "SEARCH_MOVIES_FAILURE",
        //                 error: jsonResponse.Error
        //             });
        //         }
        //     });
        props.searchMovie(searchValue);
    };

     const { movies, error, loading } = props.data;
    console.log('movie',movies)
    console.log('error',error)
  return (
      // <Router>
      //   <div>
      //     <ul>
      //       <li>
      //         <Link to="/">Home</Link>
      //       </li>
      //       <li>
      //         <Link to="/about">About</Link>
      //       </li>
      //       <li>
      //         <Link to="/login">login</Link>
      //       </li>
      //     </ul>
      //
      //     <hr />
      //     <Switch>
      //       <Route exact path="/">
      //         <Home />
      //       </Route>
      //       <Route path="/about">
      //         <About />
      //       </Route>
      //       <Route path="/login">
      //         <Login />
      //       </Route>
      //     </Switch>
      //   </div>
      // </Router>
      <div className="App">
        <Header text="HOOKED"/>
        <Search search={search}/>

        <p className="App-intro">Sharing a few of our favourite movies</p>
          <div className="movies">
              {(loading && error !== 'null')  ?  (
              <span>loading...</span>
          ) : (error !== null) ? (
                  <div className="error">{error}</div>
              ) : (
                  (movies || []).map((movie,index) =>
                          <Movie key={index} movie={movie} />
                      )
              )}

          </div>
      </div>
  );
}

 const mapStateToProps = state => {
    console.log( state.getMovieReducer);
    return {
        data : state.getMovieReducer
    }
};
const mapDispatchToProps = dispatch => {
    return {
        getMovie ()  {
            dispatch(getMovieAll());
        },
        searchMovie(value){
            dispatch(searchMovieAll(value))
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Appvvvvv);
