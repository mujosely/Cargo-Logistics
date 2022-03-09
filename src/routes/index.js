import React from "react";
import Home from "../views/home";
// import ContactUs from  "../views/contact"
import TrackPage from "../views/track";
import AboutUs from "../views/about";
import Userdashboard from "../views/dashboard";
import SignIn from "../views/signin"
import SignUp from "../views/signup"

import { Routes , Route } from "react-router-dom"; 
const Index = () => {
  
      return(
      <Routes>
       
        <Route exact path="/" element={<Home />}></Route>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        {/* <Route exact path="/Contactus" element={<ContactUs/>}></Route>*/}
        <Route path="/TrackPage" element={<TrackPage/>}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route> 
        <Route exact path="/Userdashbord" element={<Userdashboard />}></Route>
    

        

           
    </Routes>
  );
};
export default Index;