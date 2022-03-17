import React from "react";
 import "./footer.css";


 const Footer=()=>{
     return(
       <>
        
      <div className="footer-container">
      <div className="container1">
      <div className=" ft-container1">
      <h2> title</h2>
        <p> Cargo logistics is one of the world's leading logistics campanies.
            it strong market position lies in the seafreight, airfreight,contract 
            logistics and 
            overland businesses"</p>
        
        </div>
        <div className=" ft1-container1">
        <h4> contact info</h4>
    <br></br>
    <p> Box 3233
    <p> +250780273245</p>
    </p>

    <p> cargologistics@gmail.com</p>
        
        </div>

        </div>
        <div className="container2">
        <div className=" ft1-container2">
        <h6> copyright &copy; 2022 corgo logistics </h6> 
        
        </div>
        <div className=" ft2-container2">
        <div className="navbar-right">
            
            <a href="../">Home</a>
            <a href="../about">About </a>
            <a href="/login">update</a>


            <a href="/signup">services</a>
            <a href="/login">contact</a>
           
    
</div>
        
        </div>

        </div>
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7B5844" fill-opacity="1" d="M0,32L30,74.7C60,117,120,203,180,213.3C240,224,300,160,360,117.3C420,75,480,53,540,74.7C600,96,660,160,720,192C780,224,840,224,900,186.7C960,149,1020,75,1080,80C1140,85,1200,171,1260,213.3C1320,256,1380,256,1410,256L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>

        </div>

   </>
            
     )
 }
export default Footer;