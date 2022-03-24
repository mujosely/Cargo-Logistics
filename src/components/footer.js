import React from "react";
 import "./footer.css";
 import logo from "../assets/logo.JPG";


 const Footer=()=>{
     return(
       <>
       
     
       <footer className="iq-footer white-bg text-center">
  <div className="container">
    <div className="row">
      <div className="col-md-10 col-md-offset-1">
        <div className="footer-info iq-mt-50 iq-mb-30">
        <img src={logo} width="25%" height="90%" />
         
    
          <p>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12">
        <div className="footer-copyright iq-ptb-20">Copyright @ <span id="copyright"> 2022</span> <a href="javascript:void(0)" className="text-green">Cargo logistics system.</a> All Rights Reserved </div>
      </div>
    </div>
  </div>
</footer>
   </>
            
     )
 }
export default Footer;