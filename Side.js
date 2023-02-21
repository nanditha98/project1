import React from "react";
// import { Link } from "react-router-dom";
// import "./Home.css";
import { Navbar,Nav,NavDropdown } from "react-bootstrap";
// import Navbar from "../Navbar/Navbar";
function Home(){
    let user=JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    function logOut(){
        localStorage.clear();
        window.location.href="register";
    }
    return(
        <div>
            <Navbar/>
        <Navbar bg="light" variant="light">
            <Nav className="mr-auto nav_bar_wrapper">
                <div className="logo">
                <img src=".\images\Defence_Research_and_Development_Organisation_Logo.png" alt="logo" />
                {
                    localStorage.getItem('user-info') 
                }
                </div>               
            </Nav>
            <Nav>
                <NavDropdown title={user && user.name}>
                    <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar> 
        </div>
         
    )
}

export default Home;

// https://www.makeuseof.com/redirect-user-after-login-react/

// https://betterprogramming.pub/how-to-anonymize-node-js-applications-using-tor-bc233356b163

// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./Side.css"

// function Side(){
//     return(
//         <section className="container-fluid">
//             <div className="row">
//             <div className="spacer2"></div>
//             <div className="container">
//             <div className="row">
//             <div className="col-xl-3 col-lg-3">
//             <div className="navbar-subtoggle"><a id="offcanvas-subtoggle" data- 
// 			toggle="offcanvas" data-target="#submenu" aria-expanded="false" 
// 			className="navbar-toggle offcanvas-toggle js-offcanvas-has-events is-open"> <i className="fa fa-filter" aria- 
// 			hidden="true"></i>&nbsp;Filter </a></div>
//             <div id="offcanvas-left-overlay"></div>
//             <nav id="submenu" className="navbar-offcanvas-left navbar-offcanvas navbar- 
// 			offcanvas-submenu offcanvas-transform js-offcanas-done" role="navigation">
//             <div className="panel panel-primary">
//             <h2><i className="fa fa-filter" aria-hidden="true"></i> &nbsp;FILTER</h2>
//             <div className="panel-heading panel_trigger active"> <a href="#">By 
// 			Category </a> </div>
//             <div className="panel-body panel_content" >
//             <div className="cat-menu">
//             <ul className="metismenu catmenu checkbox checkbox-primary">	
//             <li>
//            <input value= "123456789%2F3" type="checkbox" name="checkbox" id= 
// 		   "resource_checkbox1"  
//         onClick="onCollectionSpecificFilter(this.id)"/>
//        <label for="resource_checkbox1">Public Records (2801286)</label>
//         </li>    
//         <li>
//       <input value= "123456789%2F4" type="checkbox" name="checkbox" id= 
// 	  "resource_checkbox2"  
//       onClick="onCollectionSpecificFilter(this.id)"/>
//      <label for="resource_checkbox2">Private Papers (7429)</label>
//       </li>
//       <li>
//     <input value= "123456789%2F5" type="checkbox" name="checkbox" id= "resource_checkbox3"  
//     onClick="onCollectionSpecificFilter(this.id)"/>
//     <label for="resource_checkbox3">Cartographic Records (207)</label>
//     </li>
//     <li>
//     <input value= "123456789%2F6" type="checkbox" name="checkbox" id= "resource_checkbox4"  
//      onClick="onCollectionSpecificFilter(this.id)"/>
//      <label for="resource_checkbox4">Oriental Records (1075)</label>
//      </li>
//      <li>
//      <input value= "123456789%2F2763466" type="checkbox" name="checkbox" id= 
// 	 "resource_checkbox5"  
//       onClick="onCollectionSpecificFilter(this.id)"/>
//     <label for="resource_checkbox5">Reference Tools (87)</label>
//      </li>                                                                           
//      <li>
//  <input value= "123456789%2F2763507" type="checkbox" name="checkbox" id= "resource_checkbox6"  
//   onClick="onCollectionSpecificFilter(this.id)"/>
//  <label for="resource_checkbox6">Library Collection (3945)</label>
//     </li>
//     </ul>
// 	</div>
//     </div>
//     <div class="clearfix"></div>
            
//             <div className="panel-heading panel_trigger active">
//             <a href="#">By Year</a>
//             </div>
//             <div className="container">
//             <div className="row">
// 		    <div className="spacer1"></div>
//             <div className="col-xl-6">
//             From:
//             <input type="text" name="start_date" id="start_date" value="01-01-5" />
//             </div>
//             <div className="col-xl-6">
//             To:
//            <input type="text" name="end_date" id="end_date" onchange="specificYearFilter()" value="31-12-2009" />
//           </div>
//          <div className="spacer1"></div>
//          <div className="col-xl-12">
// 			<span className="irs js-irs-0">
// 				<span className="irs">
// 					<span className="irs-line" tabindex="0">
// 						<span className="irs-line-left"></span>
// 						<span className="irs-line-mid"></span>
// 						<span className="irs-line-right"></span>
// 					</span>
// 				</span>
// 			</span>
//          <input type="text" id="txtRange" />
//          </div>
//          </div> 
//          </div>
//          <div className="clearfix"></div>
//          <div className="panel-heading panel_trigger active"><a href="#">	
// 		By Keywords
//        </a></div>
//        <div className="panel-body panel_content">
//        <div className="cat-menu">
//        <ul className="metismenu catmenu checkbox checkbox-primary">       
//        <li>
// 	<input className="filter" type="checkbox" name="keywords_1" id="keywords_1"  value="Finance+Department" 
//       onclick="onOtherFilterQuery(this.id);"/>
//     <label for="keywords_1">Finance Department (3805)</label>
// 	 </li>
//      <li>
// 	<input className="filter" type="checkbox" name="keywords_2" id="keywords_2"  
// 	 value="Simla" 
//     onclick="onOtherFilterQuery(this.id);"/>
//    <label for="keywords_2">Simla (2895)</label>
//    </li>
//   <li>
//   <input className="filter" type="checkbox" name="keywords_3" id="keywords_3"  value="Calcutta" 
// onclick="onOtherFilterQuery(this.id);"/>
// <label for="keywords_3">Calcutta (1970)</label>
// </li>	
// <li>
// <input className="filter" type="checkbox" name="keywords_4" id="keywords_4"  value="Ministry+of+Finance" onclick="onOtherFilterQuery(this.id);"/>
// <label for="keywords_4">Ministry of Finance (1935)</label>
// </li>
// <li>
// <input className="filter" type="checkbox" name="keywords_5" id="keywords_5"  value="Bombay" onclick="onOtherFilterQuery(this.id);"/>
// <label for="keywords_5">Bombay (1854)</label>
//  </li>
// </ul>
// </div>
//  </div>                               
// <div className="clearfix"></div>
// <div className="panel-heading panel_trigger active"><a href="#">
									
// 									By Type of Document
// </a></div>
// <div className="panel-body panel_content">
// <div className="cat-menu">
// 	 <ul className="metismenu catmenu checkbox checkbox-primary">
// 	 <li>
// 	<input className="filter" type="checkbox" name="fileType_1" id="fileType_1"  
// 	  value="DOD" onclick="onOtherFilterQuery(this.id);"/>
// 	<label for="fileType_1">Non Digitized Documents (2685019)</label>
// 	</li>	
// 	<li>
// 	<input className="filter" type="checkbox" name="fileType_2" id="fileType_2"  
// 	 value="PDF" onclick="onOtherFilterQuery(this.id);"/>
// 	<label for="fileType_2">Digitized Documents (127227)</label>
// 	</li>	
// 	<li>
// 	<input className="filter" type="checkbox" name="fileType_3" id="fileType_3"  
// 	value="pdf" onclick="onOtherFilterQuery(this.id);"/>
// 	<label for="fileType_3">Digitized Documents (756)</label>
// 	</li>
// 	<li>
//   <input className="filter" type="checkbox" name="fileType_4" id="fileType_4"  
//   value="Digitized+Public+Records%3B+Foreign+and+Political" 
//    onclick="onOtherFilterQuery(this.id);"/>
//  <label for="fileType_4">Digitized Public Records; Foreign and Political (79)</label>
// </li>	
// <li>
// <input className="filter" type="checkbox" name="fileType_5" id="fileType_5"  value="Digitized+Public+Records%3B+Ministry+of+Home+Affairs" onclick="onOtherFilterQuery(this.id);"/>
// <label for="fileType_5">Digitized Public Records; Ministry of Home Affairs (26)</label>
//  </li>		
// </ul>                                           
// </div>
// </div>                                    
// <div className="clearfix"></div>                             
// <div className="panel-heading panel_trigger active"><a href="#">							
// 									By Department & Branch								
// 									</a></div>
//                                     <div className="panel-body panel_content">
//                                         <div className="cat-menu">
//                                             <ul className="metismenu catmenu checkbox checkbox-primary">
// 							<li>
// 								<a href="#" aria-expanded="false">Military (793818) <span class="fa plus-times"></span></a>
// 								<ul aria-expanded="false">									
// 											<li>
// 											<input className="filter" type="checkbox" name="department_0" id="department_0"  value="Military%3A%3AMilitary" onclick="onOtherFilterQuery(this.id);"/>
// 											<label for="department_0">Military (306243)</label>
// 											</li>											
// 											<li>
// 											<input className="filter" type="checkbox" name="department_1" id="department_1"  value="Military%3A%3AGeneral+Orders+By+The+Commander+In+Chief" onclick="onOtherFilterQuery(this.id);"/>
// 											<label for="department_1">General Orders By The Commander In Chief (105119)</label>
// 											</li>											
// 											<li>
// 											<input className="filter" type="checkbox" name="department_2" id="department_2"  value="Military%3A%3AQuarter+Master+General" onclick="onOtherFilterQuery(this.id);"/>
// 											<label for="department_2">Quarter Master General (53329)</label>
// 											</li>
// 																						<li>
// 											<input className="filter" type="checkbox" name="department_3" id="department_3"  value="Military%3A%3ALetters+To+The+Court+Of+Directors" onclick="onOtherFilterQuery(this.id);"/>
// 											<label for="department_3">Letters To The Court Of Directors (36438)</label>
// 											</li>											
// 											<li>
// 											<input className="filter" type="checkbox" name="department_4" id="department_4"  value="Military%3A%3AEstate" onclick="onOtherFilterQuery(this.id);"/>
// 											<label for="department_4">Estate (31870)</label>
// 											</li>										
// 									<span class="text-lg-right">

// 									</span>
// 								</ul>
// 							</li>							
// 							<li>
// 								<a href="#" aria-expanded="false">Home (477715) <span class="fa plus-times"></span></a>
// 								<ul aria-expanded="false">									
// 											<li>
// 											<input className="filter" type="checkbox" name="department_5" id="department_5"  value="Home%3A%3APublic" onclick="onOtherFilterQuery(this.id);"/>
// 											<label for="department_5">Public (287419)</label>
// 											</li>
											
// 											<li>
// 											<input className="filter" type="checkbox" name="department_6" id="department_6"  value="Home%3A%3AJudicial" onclick="onOtherFilterQuery(this.id);"/>
// <label for="department_6">Judicial (30269)</label>
// 											</li>											
// 											<li>
// 											<input className="filter" type="checkbox" name="department_7" id="department_7"  value="Home%3A%3APolitical" onclick="onOtherFilterQuery(this.id);"/>
// 											<label for="department_7">Political (23166)</label>
// 											</li>
											
// 											<li>
// 											<input className="filter" type="checkbox" name="department_8" id="department_8"  value="Home%3A%3APolice" onclick="onOtherFilterQuery(this.id);"/>
// 											<label for="department_8">Police (22587)</label>
// 											</li>
											
// 											<li>
// 											<input className="filter" type="checkbox" name="department_9" id="department_9"  value="Home%3A%3AEstablishment" onclick="onOtherFilterQuery(this.id);"/>
// 											<label for="department_9">Establishment (18361)</label>
// 											</li>								
// 									<span class="text-lg-right">
// 							</span>
// 								</ul>
// 							</li>
							
// 							<li>
// 								<a href="#" aria-expanded="false">Foreign (221819) <span class="fa plus-times"></span></a>
// 								<ul aria-expanded="false">
									
// 											<li>
// 											<input className="filter" type="checkbox" name="department_10" id="department_10"  value="Foreign%3A%3AInternal" onclick="onOtherFilterQuery(this.id);"/>
// 											<label for="department_10">Internal (54491)</label>
// 											</li>
											
// 											<li>
// 											<input className="filter" type="checkbox" name="department_11" id="department_11"  value="Foreign%3A%3AGeneral" onclick="onOtherFilterQuery(this.id);"/>
// 											<label for="department_11">General (43519)</label>
// 											</li>
											
// 											<li>
// 											<input className="filter" type="checkbox" name="department_12" id="department_12"  value="Foreign%3A%3APolitical" onclick="onOtherFilterQuery(this.id);"/>
// 											<label for="department_12">Political (28954)</label>
// 											</li>
											
// 											<li>
// 											<input className="filter" type="checkbox" name="department_13" id="department_13"  value="Foreign%3A%3ASecret" onclick="onOtherFilterQuery(this.id);"/>
// 											<label for="department_13">Secret (27135)</label>
// 											</li>
											
// 											<li>
// 											<input className="filter" type="checkbox" name="department_14" id="department_14"  value="Foreign%3A%3AExternal" onclick="onOtherFilterQuery(this.id);"/>
// 											<label for="department_14">External (21723)</label>
// 											</li>
											
									
// 									<span className="text-lg-right">
										
// 									</span>
// 								</ul>
// 							</li>
							
// 							<li>
// 								<a href="#" aria-expanded="false">Dgims (108307) <span class="fa plus-times"></span></a>
// 								<ul aria-expanded="false">
									
// 											<li>
// 											<input className="filter" type="checkbox" name="department_15" id="department_15"  value="Dgims%3A%3AStores" onclick="onOtherFilterQuery(this.id);"/>
// 											<label for="department_15">Stores (22351)</label>
// 											</li>
											
// 											<li>
// 											<input className="filter" type="checkbox" name="department_16" id="department_16"  value="Dgims%3A%3AI.M.D." onclick="onOtherFilterQuery(this.id);"/>
// 											<label for="department_16">I.M.D. (13127)</label>
// 											</li>
											
// 											<li>
// 											<input className="filter" type="checkbox" name="department_17" id="department_17"  value="Dgims%3A%3AI.M.S." onclick="onOtherFilterQuery(this.id);"/>
// 											<label for="department_17">I.M.S. (11988)</label>
// 											</li>
											
// 											<li>
// 											<input className="filter" type="checkbox" name="department_18" id="department_18"  value="Dgims%3A%3APublic+Health+%28Sanitary%29" onclick="onOtherFilterQuery(this.id);"/>
// 											<label for="department_18">Public Health (Sanitary) (10328)</label>
// 											</li>
											
// 											<li>
// 											<input className="filter" type="checkbox" name="department_19" id="department_19"  value="Dgims%3A%3AMedical+Section" onclick="onOtherFilterQuery(this.id);"/>
// 											<label for="department_19">Medical Section (6837)</label>
// 											</li>
											
									
// 									<span className="text-lg-right">

// 									</span>
// 								</ul>
// 							</li>
							
// 							<li>
// 								<a href="#" aria-expanded="false">Foreign & Political (92975) <span class="fa plus-times"></span></a>
// 								<ul aria-expanded="false">
									
// 											<li>
// 											<input className="filter" type="checkbox" name="department_20" id="department_20"  value="Foreign+%26+Political%3A%3AInternal" onclick="onOtherFilterQuery(this.id);"/>
// 											<label for="department_20">Internal (18701)</label>
// 											</li>
											
// 											<li>
// 											<input className="filter" type="checkbox" name="department_21" id="department_21"  value="Foreign+%26+Political%3A%3AEstablishment" onclick="onOtherFilterQuery(this.id);"/>
// 											<label for="department_21">Establishment (14447)</label>
// 											</li>
											
// 											<li>
// 											<input className="filter" type="checkbox" name="department_22" id="department_22"  value="Foreign+%26+Political%3A%3AGeneral" onclick="onOtherFilterQuery(this.id);"/>
// 											<label for="department_22">General (12941)</label>
// 											</li>
											
// 											<li>
// 											<input className="filter" type="checkbox" name="department_23" id="department_23"  value="Foreign+%26+Political%3A%3AFrontier" onclick="onOtherFilterQuery(this.id);"/>
// 											<label for="department_23">Frontier (10999)</label>
// 											</li>
											
// 											<li>
// 											<input className="filter" type="checkbox" name="department_24" id="department_24"  value="Foreign+%26+Political%3A%3AExternal" onclick="onOtherFilterQuery(this.id);"/>
// 											<label for="department_24">External (7929)</label>
// 											</li>
											
									
// 									<span className="text-lg-right">
										
// 									</span>
// 								</ul>
// 							</li>												
// 											</ul>                                           
//                                         </div>
//                                     </div>                                    

// 									<div className="clearfix"></div>
// 									<div className="panel-heading panel_trigger active"><a href="#">
									
// 									By Place
									
// 									</a></div>
//                                     <div className="panel-body panel_content">
//                                         <div className="cat-menu">

//                                             <ul className="metismenu catmenu checkbox checkbox-primary">

// 													<li>
// 														<input className="filter" type="checkbox" name="place_1" id="place_1"  value="Allahabad" onclick="onOtherFilterQuery(this.id);"/>
// 														<label for="place_1">Allahabad (482)</label>
// 							                        </li>
		
// 													<li>
// 														<input className="filter" type="checkbox" name="place_2" id="place_2"  value="Bharat" onclick="onOtherFilterQuery(this.id);"/>
// 														<label for="place_2">Bharat (203)</label>
// 							                        </li>
		
// 													<li>
// 														<input className="filter" type="checkbox" name="place_3" id="place_3"  value="New+Delhi" onclick="onOtherFilterQuery(this.id);"/>
// 														<label for="place_3">New Delhi (180)</label>
// 							                        </li>
		
// 													<li>
// 														<input className="filter" type="checkbox" name="place_4" id="place_4"  value="Lucknow" onclick="onOtherFilterQuery(this.id);"/>
// 														<label for="place_4">Lucknow (133)</label>
// 							                        </li>
		
// 													<li>
// 														<input className="filter" type="checkbox" name="place_5" id="place_5"  value="Delhi" onclick="onOtherFilterQuery(this.id);"/>
// 														<label for="place_5">Delhi (127)</label>
// 							                        </li>
		
												
			
// 											</ul>                                           
//                                         </div>
//                                     </div>                                    

// 									<div className="clearfix"></div>
// 									<div className="panel-heading panel_trigger active"><a href="#">
									
// 									By Digitized Collection
									
// 									</a></div>
//                                     <div className="panel-body panel_content">
//                                         <div className="cat-menu">

//                                             <ul className="metismenu catmenu checkbox checkbox-primary">

// 													<li>
// 														<input className="filter" type="checkbox" name="subjectCollection_1" id="subjectCollection_1"  value="Digitized+Public+Records" onclick="onOtherFilterQuery(this.id);"/>
// 														<label for="subjectCollection_1">Digitized Public Records (111556)</label>
// 							                        </li>
		
// 													<li>
// 														<input className="filter" type="checkbox" name="subjectCollection_2" id="subjectCollection_2"  value="Home+Political" onclick="onOtherFilterQuery(this.id);"/>
// 														<label for="subjectCollection_2">Home Political (20835)</label>
// 							                        </li>
		
// 													<li>
// 														<input className="filter" type="checkbox" name="subjectCollection_3" id="subjectCollection_3"  value="Ministry+of+Home+Affairs" onclick="onOtherFilterQuery(this.id);"/>
// 														<label for="subjectCollection_3">Ministry of Home Affairs (12388)</label>
// 							                        </li>
		
// 													<li>
// 														<input className="filter" type="checkbox" name="subjectCollection_4" id="subjectCollection_4"  value="%27Mutiny%27+Papers" onclick="onOtherFilterQuery(this.id);"/>
// 														<label for="subjectCollection_4">'Mutiny' Papers (10266)</label>
// 							                        </li>
		
// 													<li>
// 														<input className="filter" type="checkbox" name="subjectCollection_5" id="subjectCollection_5"  value="Foreign+and+Political" onclick="onOtherFilterQuery(this.id);"/>
// 														<label for="subjectCollection_5">Foreign and Political (8854)</label>
// 							                        </li>
		
												
			
// 											</ul>                                           
//                                         </div>
//                                     </div>                                    

// 									<div className="clearfix"></div>
// 									<div className="panel-heading panel_trigger active"><a href="#">
									
//                                     Held By
									
// 									</a></div>
//                                     <div className="panel-body panel_content">
//                                         <div className="cat-menu">

//                                             <ul class="metismenu catmenu checkbox checkbox-primary">

// 					<li>
// 						<input className="filter" type="checkbox" name="organization_1" id="organization_1"  value="National+Archives+of+India" onclick="onOtherFilterQuery(this.id);"/>
// 						<label for="organization_1">National Archives of India (2811648)</label>
// 					</li>
					
// 					<li>
// 						<a href="#" aria-expanded="false">Other Archives (2144) <span class="fa plus-times"></span></a>
// 						<ul aria-expanded="false">
				
// 						<li>
// 							<input className="filter" type="checkbox" name="organization_2" id="organization_2"  value="NAI+Library+-+New+Delhi" onclick="onOtherFilterQuery(this.id);"/>
// 							<label for="organization_2">NAI Library - New Delhi (1356)</label>
// 						</li>
						
// 						<li>
// 							<input className="filter" type="checkbox" name="organization_3" id="organization_3"  value="Repository-3" onclick="onOtherFilterQuery(this.id);"/>
// 							<label for="organization_3">Repository-3 (740)</label>
// 						</li>
						
// 						<li>
// 							<input className="filter" type="checkbox" name="organization_4" id="organization_4"  value="Repository-4" onclick="onOtherFilterQuery(this.id);"/>
// 							<label for="organization_4">Repository-4 (45)</label>
// 						</li>
						
// 						<li>
// 							<input className="filter" type="checkbox" name="organization_5" id="organization_5"  value="Repository-2" onclick="onOtherFilterQuery(this.id);"/>
// 							<label for="organization_5">Repository-2 (3)</label>
// 						</li>
						
// 						</ul>
// 					</li>
// 					</ul>                                           
//                      </div>
//                     </div>                                    
// 					<div class="clearfix"></div>									
//             </div>
//             </nav>
//             </div>
//             </div>
//             </div>
//             </div>    
//         </section>
        
//     )
// }

// export default Side;