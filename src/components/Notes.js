import React from 'react'
import { useEffect } from 'react';
import { useContext } from "react";
import { noteContext } from "../context/noteContext";
import Addnotes from './Addnotes';
import Noteitems from './Noteitems';


export const Notes = () => {
    const context = useContext(noteContext); 
  const {notes , getNotes} = context ; 
 useEffect(()=>{
  getNotes(); 
 }, [])
  return (
     <>
     <Addnotes/>
    <div className='row my-3'>{notes.map((note)=>{
        return <Noteitems key={note._id} note ={note }/>
      })}</div>
      </>
  )
}

export default Notes ; 