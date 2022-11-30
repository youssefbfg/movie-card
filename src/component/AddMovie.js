import {useState} from "react";
import Modal from 'react-modal';

const AddMovie=({AddHanlder})=>{
    const[modalIsOpen,setIsOpen]=useState(false)
    const[name,setName]=useState("")
    console.log(name)
    const[date,setDate]=useState("")
    const[type,setType]=useState("")
    const[description,setDescription]=useState("")
    const[seasons,setSeasons]=useState("")
    const[rating,setRating]=useState("")
    const[image,setImage]=useState("")
    const open=()=>{
        setIsOpen(true)
    }
    const close=()=>{
        setIsOpen(false)
    }
    const addMovie=()=>{
        const movie={
            name,date,type,description,seasons,rating,image
        }
        AddHanlder(movie)

close()

    }
    return(
        <div>
           <button onClick={open} >Add movie</button>

           <Modal isOpen={modalIsOpen}>
            <div>
            <label>Name</label>
          <input type="text" onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div>
            <label>Rating</label>
          <input type="number" onChange={(e)=>setRating(e.target.value)}/>
          </div>
          <div>
            <label>image</label>
          <input type="text" onChange={(e)=>setImage(e.target.value)}/>
          </div>
          <div>
            <label>Description</label>
          <input type="text" onChange={(e)=>setDescription(e.target.value)} />
          </div>
          <div>
            <label>type</label>
          <input type="text" onChange={(e)=>setType(e.target.value)}/>
          </div>
          <div>
            <label>Date</label>
          <input type="number" onChange={(e)=>setDate(e.target.value)}/>
          </div>
          <div>
            <label>Seasons</label>
          <input type="text" onChange={(e)=>setSeasons(e.target.value)}/>
          </div>
          <div>
            <button onClick={close}>close</button>
            <button onClick={addMovie}>submit</button>
          </div>
           </Modal>
        </div>
    )
}
export default AddMovie