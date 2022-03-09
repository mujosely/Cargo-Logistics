import React from "react";
import Home from "../views/home";
// import ContactUs from  "../views/contact"
import TrackPage from "../views/track";
import AboutUs from "../views/about";
import Userdashboard from "../views/dashboard";
import Allshipment from "../components/allshipment";
import Addshipment from "../components/addshipment";
import Product from "../components/product";
import Employer from "../components/employer";
import Customer from "../components/customer";
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
        <Route path="/userdash" element={<Userdashboard />}></Route>
        <Route path="/allship" element={<Allshipment />}></Route>
        <Route path="/addship" element={<Addshipment/>}></Route> 
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/employer" element={<Employer/>}></Route>
        <Route path="/customer" element={<Customer/>}></Route>
        
    

        

           
    </Routes>
  );
};
export default Index;