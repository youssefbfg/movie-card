import MovieCard from "./MovieCard"

const MovieList=({movies,input,ratingg})=>{
    console.log(movies,"testttt")
    return(
        <div>
          {
            movies
            .filter((el)=>
                el.name.toLowerCase().includes(input.toLowerCase().trim()) &&
                el.rating >= ratingg
            )
            .map(el =>
               <MovieCard el={el}/>
            
            )
          }
        </div>
    )
}
export default MovieList
