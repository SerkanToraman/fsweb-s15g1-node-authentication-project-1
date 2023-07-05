import React from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate =useNavigate();
  const logoutSubmit=()=>{
    console.log("logout")
    axios
    .get(
      "http://localhost:9000/api/auth/logout",{withCredentials: true, credentials: 'include'}
    )
    .then((res) => {
      console.log("logout Yapildi");  
      navigate("/");
    })
    .catch((err)=>{
      navigate("/");
      alert(err.message)
    })

  }
  return (
    <div className="h-12 bg-yellow-300 ">
      <div className="w-6/12 m-auto flex justify-between ">
        <div>Navbar</div>
        <button onClick={logoutSubmit} className="font-bold">Logout</button>
      </div>
    </div>
    
  )
}

export default Navbar