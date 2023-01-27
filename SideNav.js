import React from "react";
import "./SideNav.css";

function SideNav(){
    return(
        <section class="container-fluid">
<div class="row">
    <div class="spacer2"></div>
    <div class="container">
        <div class="row">
            <div class="col-xl-3 col-lg-3">
                
                <div class="navbar-subtoggle"> <a id="offcanvas-subtoggle" data-toggle="offcanvas" data-target="#submenu" aria-expanded="false" class="navbar-toggle offcanvas-toggle"> <i class="fa fa-filter" aria-hidden="true"></i>&nbsp;Filter </a> </div>
                
                <div id="offcanvas-left-overlay"></div>
                <nav id="submenu" class="navbar-offcanvas-left navbar-offcanvas navbar-offcanvas-submenu" role="navigation">
                    <div class="panel panel-primary">
                        <h2><i class="fa fa-filter" aria-hidden="true"></i> &nbsp;FILTER</h2>
                        <div class="panel-heading panel_trigger active"> <a href="#">By Category</a> </div>
                        <div class="panel-body panel_content">
                            <div class="cat-menu">
                                <ul class="metismenu catmenu checkbox checkbox-primary">
                                
                                    <li>
                                        <input value= "123456789%2F3" type="checkbox" name="checkbox" id= "resource_checkbox1"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox1">Public Records (2806148)</label>
                                    </li>
                                
                                    <li>
                                        <input value= "123456789%2F4" type="checkbox" name="checkbox" id= "resource_checkbox2"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox2">Private Papers (7429)</label>
                                    </li>
                                
                                    <li>
                                        <input value= "123456789%2F5" type="checkbox" name="checkbox" id= "resource_checkbox3"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox3">Cartographic Records (207)</label>
                                    </li>
                                
                                    <li>
                                        <input value= "123456789%2F6" type="checkbox" name="checkbox" id= "resource_checkbox4"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox4">Oriental Records (2303)</label>
                                    </li>
                                
                                    <li>
                                        <input value= "123456789%2F2763466" type="checkbox" name="checkbox" id= "resource_checkbox5"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox5">Reference Tools (87)</label>
                                    </li>
                                
                                    <li>
                                        <input value= "123456789%2F2763507" type="checkbox" name="checkbox" id= "resource_checkbox6"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox6">Library Collection (3983)</label>
                                    </li>
                                
                                    <li>
                                        <input value= "123456789%2F2818664" type="checkbox" name="checkbox" id= "resource_checkbox7"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox7">INA Papers (1251) 
                        </label>
                        </li>                               
                        </ul>
                        </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="panel-heading panel_trigger active">
                                        <a href="#">By Year</a>
                                    </div>
                                    <div class="container">
                                        <div class="row">
											<div class="spacer1"></div>
                                            <div class="col-xl-6">
                                                From:
                                                <input type="text" name="start_date" id="start_date" value="01-01-5" />
                                            </div>
                                            <div class="col-xl-6">
                                                To:
                                                <input type="text" name="end_date" id="end_date" onchange="specificYearFilter()" value="31-12-2023" />
                                            </div>
                                            <div class="spacer1"></div>
                                            <div class="col-xl-12">
                                                <input type="text" id="txtRange" />
                                            </div>
                                        </div> 
                                    </div>
                                    <div class="clearfix"></div>
<div class="panel-heading panel_trigger active"><a href="#">By Keywords</a></div>
                            <div class="panel-body panel_content">
                            <div class="cat-menu">
                            <ul class="metismenu catmenu checkbox checkbox-primary">
                            <li>
                                        <input value= "123456789%2F3" type="checkbox" name="checkbox" id= "resource_checkbox1"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox1">Public Records (2806148)</label>
                                    </li>
                                
                                    <li>
                                        <input value= "123456789%2F4" type="checkbox" name="checkbox" id= "resource_checkbox2"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox2">Private Papers (7429)</label>
                                    </li>
                                
                                    <li>
                                        <input value= "123456789%2F5" type="checkbox" name="checkbox" id= "resource_checkbox3"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox3">Cartographic Records (207)</label>
                                    </li>
                                
                                    <li>
                                        <input value= "123456789%2F6" type="checkbox" name="checkbox" id= "resource_checkbox4"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox4">Oriental Records (2303)</label>
                                    </li>
                                
                                    <li>
                                        <input value= "123456789%2F2763466" type="checkbox" name="checkbox" id= "resource_checkbox5"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox5">Reference Tools (87)</label>
                                    </li>
                                
                                    <li>
                                        <input value= "123456789%2F2763507" type="checkbox" name="checkbox" id= "resource_checkbox6"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox6">Library Collection (3983)</label>
                                    </li>
                                
                                    <li>
                                        <input value= "123456789%2F2818664" type="checkbox" name="checkbox" id= "resource_checkbox7"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox7">INA Papers (1251) 
                        </label>
                        </li>
                            </ul>
                            </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="panel-heading panel_trigger active"><a href="#">
									
									By Type of Document
									
									</a></div>
                            <div class="panel-body panel_content">
                            <div class="cat-menu">
                            <ul class="metismenu catmenu checkbox checkbox-primary">
                            <li>
                                        <input value= "123456789%2F3" type="checkbox" name="checkbox" id= "resource_checkbox1"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox1">Public Records (2806148)</label>
                                    </li>
                                
                                    <li>
                                        <input value= "123456789%2F4" type="checkbox" name="checkbox" id= "resource_checkbox2"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox2">Private Papers (7429)</label>
                                    </li>
                                
                                    <li>
                                        <input value= "123456789%2F5" type="checkbox" name="checkbox" id= "resource_checkbox3"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox3">Cartographic Records (207)</label>
                                    </li>
                                
                                    <li>
                                        <input value= "123456789%2F6" type="checkbox" name="checkbox" id= "resource_checkbox4"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox4">Oriental Records (2303)</label>
                                    </li>
                                
                                    <li>
                                        <input value= "123456789%2F2763466" type="checkbox" name="checkbox" id= "resource_checkbox5"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox5">Reference Tools (87)</label>
                                    </li>
                                
                                    <li>
                                        <input value= "123456789%2F2763507" type="checkbox" name="checkbox" id= "resource_checkbox6"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox6">Library Collection (3983)</label>
                                    </li>
                                
                                    <li>
                                        <input value= "123456789%2F2818664" type="checkbox" name="checkbox" id= "resource_checkbox7"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox7">INA Papers (1251) 
                        </label>
                        </li>
                        </ul>
                        </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="panel-heading panel_trigger active"><a href="#">
									
									By Department & Branch
									
									</a></div>
                    <div class="panel-body panel_content">
                    <div class="cat-menu">
                     <ul class="metismenu catmenu checkbox checkbox-primary">
                     <li>
                                        <input value= "123456789%2F3" type="checkbox" name="checkbox" id= "resource_checkbox1"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox1">Public Records (2806148)</label>
                                    </li>
                                
                                    <li>
                                        <input value= "123456789%2F4" type="checkbox" name="checkbox" id= "resource_checkbox2"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox2">Private Papers (7429)</label>
                                    </li>
                                
                                    <li>
                                        <input value= "123456789%2F5" type="checkbox" name="checkbox" id= "resource_checkbox3"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox3">Cartographic Records (207)</label>
                                    </li>
                                
                                    <li>
                                        <input value= "123456789%2F6" type="checkbox" name="checkbox" id= "resource_checkbox4"  onClick="onCollectionSpecificFilter(this.id)"/>
                                        <label for="resource_checkbox4">Oriental Records (2303)</label>
                      </li>                               
                        <li>
    <input value= "123456789%2F2763466" type="checkbox" name="checkbox" id= "resource_checkbox5"  onClick="onCollectionSpecificFilter(this.id)"/>
                        <label for="resource_checkbox5">Reference Tools (87)</label>
                          </li>                            
                           <li>
        <input value= "123456789%2F2763507" type="checkbox" name="checkbox" id= "resource_checkbox6"  onClick="onCollectionSpecificFilter(this.id)"/>
                        <label for="resource_checkbox6">Library Collection (3983)</label>
                        </li>                          
                        <li>
<input value= "123456789%2F2818664" type="checkbox" name="checkbox" id= "resource_checkbox7"  onClick="onCollectionSpecificFilter(this.id)"/>
                    <label for="resource_checkbox7">INA Papers (1251) 
                    </label>
                    </li> 
                    </ul>
                    </div>
                    </div>
                    <div class="clearfix"></div>
                    </div>
                    </nav>
                    </div>
                    </div>
                    </div>
                    </div>
                    </section>

    )
}
export default SideNav

