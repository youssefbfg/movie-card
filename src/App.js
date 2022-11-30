import { useState } from 'react';

import './App.css';
import {moviesData} from "./movieData.js"
import MovieList from './component/MovieList';
import AddMovie from './component/AddMovie';
import SearchMovie from './component/SearchMovie';

function App() {
  const[movies,setMovies]=useState(moviesData)
  const [input,setInput]=useState("")
  const[ratingg,setRatingg]=useState(0)
  console.log(movies)
  const AddHanlder=(newmovie)=>{
setMovies([...movies,newmovie])
  }

  return (
    <div className="App">
      <h1>NETFLIX</h1>
      <SearchMovie setInput={setInput} setRatingg={setRatingg}/>
     <MovieList  movies={movies} input={input} ratingg={ratingg}/>
     <AddMovie AddHanlder={AddHanlder}/>
    </div>
  );
}

export default App;
