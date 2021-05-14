import React, { useEffect } from 'react'



const Alert = ({type,msg,removeAlert,List}) => {
  useEffect(()=>{
     const  timeout = setTimeout(()=>{
        removeAlert();
     },3000);
     return()=> clearInterval(timeout)
  },[List]);
   return   <p className={`alert alert-${type}`} >{msg} </p>;

}

export default Alert
