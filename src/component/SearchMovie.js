
import ReactStars from 'react-stars'
const SearchMovie=({setInput,setRatingg})=>{
   
    const ratingChanged = (newRating) => {
        setRatingg (newRating)
      }
    return(
        <div> 
            <input type='text'  onChange={(e)=>(setInput(e.target.value))}/>
            <ReactStars
  count={5}
  onChange={ratingChanged}
  size={24}
  color2={'#ffd700'} />
        </div>
    )
}
export default SearchMovie