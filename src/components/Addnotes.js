import React from 'react'
import { useState } from 'react';
import { useContext } from "react";
import { noteContext } from "../context/noteContext";

const Addnotes = () => {
    const context = useContext(noteContext); 
    const {addNote} = context ;
    const [note  ,  setNote] = useState({title:"" , description :"" , tag:"default"}); 

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title , note.description , note.tag);  
        console.log("inside click");
    }

    const handleOnChange =(e) =>{
        setNote({...note , [e.target.name]:e.target.value})
        console.log("inside change");
    }

  return (
    <div>
       <div className="container my-3" >
      <h2>Add Note</h2>
      <form className=" center my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name = "title" aria-describedby="emailHelp" onChange={handleOnChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="desciption" className="form-label">Description </label>
          <input
            type="text"
            className="form-control"
            id="desciption"
            name="description"
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick} >
         Add Note
        </button>
      </form>
      <h2>Your Note</h2>
 
  
    </div>


    </div>
  )
}

export default Addnotes