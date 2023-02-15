// import React from 'react';
// import './App.css';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// // import Hom from './Hey/Hom/Hom';
// // // import Home from './components/Home/Home';
// import Register from './components/Register/Register';
// // import Login from './components/Login/Login';
// import Home from "./components/Home/Side";
// // import Navbar  from './components/Navbar/Navbar';
// // import SideNav from "./components/Home/SideNav"
// import Side from './components/Home/Side';




// function App() {
//   return (
//     <div className="App">
//      <BrowserRouter>
//      {/* <Navbar/> */}
//      {/* <SideNav/> */}
//      <Side/>
//      <Routes>
//       {/* <Route path='/' element={<Hom/>} />  */}
//        {/* <Route path='/' element={<Login/>} /> */}
//       <Route path='/register' element={<Register/>} /> 
//       <Route path='/home' element={<Home/>} /> 
//      </Routes>
//      </BrowserRouter>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import {
//   BrowserRouter, Routes, Route
// } from 'react-router-dom';
// import { AppProvider } from './Compo/Context';

// import Home from './Compo/Pages/Home/Home';
// import About from './Compo/Pages/About/About';
// import BookList from './Compo/BookList/BookList';
// import BookDetails from './Compo/BookDetails/BookDetails';
// import Helo from './Compo/Heelo';

// function App(){
//   return(
//     <AppProvider>
//     <BrowserRouter>
//       <Routes>
//         <Route path = "/" element = {<Home />}>
//           <Route path = "about" element = {<About />} />
//           <Route path = "book" element = {<BookList />} />
//           <Route path = "/book/:id" element = {<BookDetails />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </AppProvider>
//   )
// }
// export default App;


// import React from "react";
// import Navbar from "./components/Navbar/Navbar";
// import Home from "./Main/Home/Home";
// // import Navbar1 from "./Main/Navbar/Navbar1";
// // import SideNav from "./Main/SideNav/SideNav"


// function App(){
//   return(
//     <div>
//       {/* <Home/> */}
//      {/* <Navbar1/> 
//     <SideNav/> */}
//     <Navbar/>
//     </div>
//   )
// }
// export default App;

// import Form from "./Main/Home/Home";
// function App(){
//   const getData = (data) =>{
//     console.log("coming to react js",data);

//   }
//   return(
// <Form onSubmit={getData}/>
//   )
// }

// export default App;



// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css'
// import { Nav, Navbar } from 'react-bootstrap'
// import SideNav from './Main/SideNav/SideNav';

// function App() {
//   return (
//     <div className="App">
//       <Navbar bg="dark" variant="dark"
//         sticky="top" expand="sm" collapseOnSelect>
//         <Navbar.Brand>
//          {' '}
//           Logo
//         </Navbar.Brand>

//         <Navbar.Toggle className="coloring" />
//         <Navbar.Collapse>
//           <Nav>
//             <Nav.Link href="/home">home</Nav.Link>
//             <Nav.Link href="/Search">Search</Nav.Link>
//             <Nav.Link href="/MachineTranslation">MachineTranslation</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>

//       </Navbar>
//       <div className="content">
//         <SideNav/>
//       </div>
//     </div>
//   );
// }

// export default App;



import React, { useEffect } from "react";
import "./App.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const App = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Vue",
        "Nuxt",
        "NodeJS",
        "Babel",
        "Jquery",
        "ES6",
        "GIT",
        "GITHUB",
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default App;


// npm i -S TagCloud


