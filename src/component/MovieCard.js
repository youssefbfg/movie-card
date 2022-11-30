import ReactStars from 'react-stars'
const MovieCard=({el})=>{

    return(
        <div>
            <h3>{el.name}</h3>
            <img src={el.image}/>
            <ReactStars
  count={5}
 value={el.rating}
  size={24}
  color2={'#ffd700'} 
  edit={false}
  />

        </div>
    )
}
export default MovieCard