import React from "react";
import "./HomeLayout2.css";
   import Header from "./header";
 import Footer from "./footer";
 
const HomeLayout2 = ({ children }) => {
  return (
    <div className="home-contain" >
        <div className="home-contain1">
        <Header />  
        <div style={{minHeight:"0vh"}}> {children}</div>
        <Footer /> 
      </div>
    </div>
  )
}
export default HomeLayout2;