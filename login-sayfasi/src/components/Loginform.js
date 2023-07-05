import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


function LoginForm (){
    const navigate =useNavigate();

  //const {loginHandleSubmitContext,isLoggedIn} = useContext(AuthContext);

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({mode:'onChange'
  })

  const loginHandleSubmit=(data)=>{
    axios
    .post(
      "http://localhost:9000/api/auth/login",data,{withCredentials: true, credentials: 'include'}

    )
    .then((res) => {
      console.log("Yeni urun kayıt res > ", res.data);  
      navigate("/peoplelist");
    })
    .catch((err)=>{
      navigate("/");
      alert("eksik bilgi")
    })

  }

  


  return(  
<form onSubmit={handleSubmit(loginHandleSubmit)} className="flex flex-col items-center gap-2">
    <label htmlFor="title "> Username</label>
    <input
    type="text"
    placeholder="Username"
    {...register("username", { required: "Please enter a name" })}
    />
    {errors?.username && <p>{errors.username.message}</p>}
    <label htmlFor="title "> Password</label>
    <input
    type="text"
    placeholder="Password"
    {...register("password", { required: "Please enter password" })}
    />
    {errors?.password && <p>{errors.password.message}</p>}
    <button type="submit" className="font-bold">Login</button>
</form>

  )
}


export default LoginForm;