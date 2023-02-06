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
// import Home from "./Main/Home/Home";
// import Navbar1 from "./Main/Navbar/Navbar1";
// import SideNav from "./Main/SideNav/SideNav"


// function App(){
//   return(
//     <div>
//       {/* <Home/> */}
//      <Navbar1/> 
//     <SideNav/>
//     </div>
//   )
// }
// export default App;

import Form from "./Main/Home/Home";
function App(){
  const getData = (data) =>{
    console.log("coming to react js",data);

  }
  return(
<Form onSubmit={getData}/>
  )
}

export default App;


