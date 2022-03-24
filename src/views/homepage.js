

import React from "react";




const  Homepage= () => {
return(
   
<>
    
    <header id="header-wrap" data-spy="affix" data-offset-top={55}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <nav className="navbar navbar-default">
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="javascript:void(0)">
                  <img src="images/logo.png" alt="logo" />
                </a>
              </div>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right" id="top-menu">
                  <li className="active"><a href="#iq-home">Home</a></li>
                  <li><a href="#about-us">About Us</a></li>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#screenshots">Screenshots</a></li>
                  <li><a href="#team">Team</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="#contact-us">Contact Us</a></li>
                </ul>
              </div>
              {/* /.navbar-collapse */}
            </nav>
          </div>
        </div>
      </div>
    </header>
    
      
      </>
);
 
    

  
}

export default  Homepage;