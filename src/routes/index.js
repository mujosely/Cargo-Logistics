import React from "react";
import Home from "../views/home";
// import ContactUs from  "../views/contact"
import TrackPage from "../views/track";
import AboutUs from "../views/about";



import { Routes , Route } from "react-router-dom"; 
const Index = () => {
  
      return(
      <Routes>
       
        <Route exact path="/" element={<Home />}></Route>
        {/* <Route exact path="/Contactus" element={<ContactUs/>}></Route>*/}
        <Route path="/TrackPage" element={<TrackPage/>}></Route>
        <Route exact path="/AboutUs" element={<AboutUs />}></Route> 
    

        

           
    </Routes>
  );
};
export default Index;