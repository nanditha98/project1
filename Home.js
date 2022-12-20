import React from "react";

// import { Link } from "react-router-dom";
import "./Home.css";
import { Navbar,Nav,NavDropdown } from "react-bootstrap";
import SearchUser from "../Search/Search";


function Home(){
    let user=JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    function logOut(){
        localStorage.clear();
        window.location.href="register";
    }
    return(
    
        <Navbar bg="light" variant="light">
            <Nav className="mr-auto nav_bar_wrapper">
                <div className="logo">
                <img src=".\images\Defence_Research_and_Development_Organisation_Logo.png" alt="logo" />
                {
                    localStorage.getItem('user-info') 
                }
                </div>               
            </Nav>
           
            <SearchUser/>
           
            <Nav>
                <NavDropdown title={user && user.name}>
                    <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
        
        
            
        
    )
}

export default Home;