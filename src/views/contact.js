import React from 'react'
import HomeLayout2 from '../components/HomeLayout2';
import './contact.css';
const ContactUs = () => {
  return (
      <HomeLayout2>-
    <div className='main_contact'>
        <div className='head_contact'>
           <h1  style={{color: 'rgba(240, 80, 31, 0.603)', font: 0}}> Contact Us</h1>
           
        </div>

        <div  className='input_field'>
          <div className='inputs'>
             <label>First Name: </label>
             <input type="text" name="fname"  placeholder="Enter your first name" required maxLength={20} /> 
          </div>

          <div className='inputs'>
             <label>Last Name: </label>
             <input type="text"  name="lname"  placeholder='Enter your last name' required maxLength={20} /> 
          </div>

          <div className='inputs'>
             <label>Email: </label>
             <input type="email" name="email" placeholder='Enter your email' required maxLength={20} /> 
      </div>
      <div className='inputs'>
         <label>Company: </label>
         <input type="text" name='company' placeholder='enter your company' required maxLength={20} /> 
      </div>
        <div className='inputs'>
          <label>Message: </label>
          <input type="text-area" name='message' required maxLength={20} /> 
       </div>

       <div className='intput_button'>
          <button >Send</button>
       </div> 
       
   </div>
    </div>
    </HomeLayout2>
  )
}

export default ContactUs;
