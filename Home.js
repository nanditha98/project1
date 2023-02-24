// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./Home.css";

// function Home(){
//     return(
//         <div className="container">
//          <img src="https://assets.telegraphindia.com/telegraph/2022/Dec/1670407374_untitled-design-2022-12-07t152946-931.jpg"  className="img-fulid" alt="logo"/>
//         </div>
        
//     )
// }
// export default Home;


// import React,{useState} from "react";

// const Form = (props) =>{
//     const[name,setName]=useState("");
//     const handleChange = (e)=>{
//         setName(e.target.value);
        
//     }
// const handleSubmit = (e) =>{
//     e.preventDefault();
//     props.onSubmit(name);
// }
// return(
//     <div>
//         <form onSubmit={handleSubmit}>
//             <input type="text" value={props.name} onChange={handleChange} />
//             <p>{name}</p>
//             <button type="submit">Submit</button>
//         </form>
//     </div>
// )
// }
// export default Form


import { useEffect, useState } from "react";

const Home = () => {
const [authenticated, setauthenticated] = useState(null);
useEffect(() => {
const loggedInUser = localStorage.getItem("authenticated");
if (loggedInUser) {
setauthenticated(loggedInUser);
}
}, []);

if (!authenticated) {
    return <Navigate replace to="/login" />;
} else {
return (
<div>
<p>Welcome to your Dashboard</p>
</div>
);
}
};

export default Home;