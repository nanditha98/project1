import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';



function Register(){

    useEffect(()=>{
        if(localStorage.getItem('user-info')) 
        {
            window.location.href="/login"
        }
    })
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const [password,setPassword]=useState("");

 async function signUp(){
    let item={name,password,email};
    console.log(item);

    let results=await fetch("http://localhost:8000/api/register",{
        method:'POST',
        body:JSON.stringify(item),
        headers:{
            "Content-Type":'application/json',
            "Accept":'application/json'
        }
    })
    results=await results.json();
    localStorage.setItem('user-info',JSON.stringify(results))
    console.warn("results",results);
    window.location.href="/login"
}
    return(
        <div className='col-sm-6 offset-sm-3'>
            <h2>Register Page</h2>
            <input type="text" className='form-control' placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} />
            <input className="form-control" type="text"  placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input className="form-control" type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <br/>
            <button className='btn btn-primary' onClick={signUp}>Sign Up</button>
            Need an Account?
            <Link to="/" element={<Login/>}>Login</Link>
        </div>

    )
}
export  default Register;