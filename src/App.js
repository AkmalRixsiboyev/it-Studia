import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name,setName]= useState("");
  const [list,setList]= useState([]);
  const [isEditing,setIsEditing]= useState(false);
  const [editID,setEditID]= useState(null);
  const [alert,setAlert]= useState( {show: false, msg:"", type: "" });

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (!name){

    }else if(name && isEditing){

    }else {
      const newItem ={id:new Date().getTime().toString(),title:name};
      setList([...list, newItem]);
    }
  };

  return(
      <section className={'section-center'}>

      </section>
  )
}

export default App
