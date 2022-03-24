import React from 'react'
// import booking from "../assets/booking.jpeg"
import Header from '../components/header';
import Footer from '../components/footer';
import './booking.css';


const  Booking = () => {
    return(
        <>
       < Header></Header>
        <div className="booking-information">
        
             <div className='background-ft1'>
             </div>
             
           <div className='backgroud-data' >
           <div className='backgroud-data1' >
           
           </div>
           <div className='backgroud-data2' >
             <div className='background-ftdata'>
               <h1> </h1>
              <h1> Schedule by line</h1>
             </div>
             
           <div className='backgroud-ft2' >
             
           <div className='data-ft1' >
             
           <select class="form-select" aria-label="Default select example" 
           style={{ width: "50%", height: "40px", background:"#7B5844" }}>
  <option selected>please choose the orgin</option>
  <option value="1">ChINA</option>
  <option value="2">FRAMCE</option>
  <option value="3">TURKEY</option>
  <option value="3">KENYA</option>
  <option value="3">Tanzania</option>
  <option value="3">USA</option>
  <option value="3">AUSTRALIA</option>

</select>
&nbsp;


           </div>
           <div className='data-ft2' >
           <select class="form-select" aria-label="Default select example" 
           style={{ width: "50%", height: "40px", background:"#7B5844" }}>
  <option selected>please choose the destination</option>
  <option value="1">RWANDA</option>
  
  

</select> 
           </div>
           <div className='data-ft3' >
           <select class="form-select" aria-label="Default select example" 
           style={{ width: "50%", height: "40px", background:"#7B5844" }}>
  <option selected>please choose the orgin</option>
  <option value="1">ChINA</option>
  <option value="2">FRAMCE</option>
  <option value="3">TURKEY</option>
  <option value="3">KENYA</option>
  <option value="3">Tanzania</option>
  <option value="3">USA</option>
  <option value="3">AUSTRALIA</option>

</select>
           </div>


         
        
               </div>
               
           
           </div>
           
           </div>
           
            
            
            
        </div>

    <Footer></Footer>
    </>

         
    );

    

}
 export default Booking;