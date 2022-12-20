import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Login(){

    const [username,setUserName]=useState("");
    const[password,setPassword]=useState("");

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            window.location.href="/home";
        }
    },[])

  async  function login(){
        
        let item={username,password};
        console.warn(item);

        let results=await fetch("http://localhost:8000/api/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        results= await results.json();
        localStorage.setItem("user-info",JSON.stringify(results));
        window.location.href="/home"
    }
    return(
        <div className="col-sm-3 offset-sm-6">
            <h1>Login Page</h1>
            <input type="text" placeholder="username" className="form-control" onChange={(e)=>setUserName(e.target.value)} />
<input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
<button className="btn btn-primary" onClick={login}>Login</button>
Already Register ?
<Link to="/register">Register</Link>
        </div>
        
       

    )
}

export default Login;