import React from "react";
import"./header.css"

   

const Header =() =>{
    return(
        
         <div className="header_container">
             <div className= "logo">

             </div>
             <nav className="">
            
                  <div className="ourmenu1">
                      
                <ul >
                
              <li className="active"> <a style={{color:"white"}} href="../">Home</a> </li>

              <li> <a style={{color:"white"}} href="/Services">services</a></li> 
             <div className="submenu-11">
                 <ul>
                 <li>  <a style={{color:"white"}} href="#">  About</a></li>  
              <li> <a style={{color:"white"}} href="#">Contact</a></li> 
              <li>  <a style={{color:"white"}} href="#">Track</a></li>
                 </ul>
             </div>
               
              <li>  <a style={{color:"white"}} href="/AboutUs">  About</a></li>  
              <li> <a style={{color:"white"}} href="/contacting">Contact</a></li> 
              <li>  <a style={{color:"white"}} href="/TrackPage">Track</a></li> 
            </ul> 
         
              </div> 
                
             
             </nav>
         
            </div>
    )
}
export default Header;