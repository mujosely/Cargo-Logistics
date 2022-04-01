import React from 'react'
import "./tracks.css";
import Dashboard2 from '../views/dashboard2';
const Tracks = () => {
  return (
      <Dashboard2>
        <div className="trackside">
         <div className="track-code">
         
           <input type="text" name = "track" placeholder='Enter tracking code'/>
           
           <button type="button" class="btn btn-secondary pd-x-25 active" style={{fontSize: '20px', fontWeight: 'bold'}}>Track Results</button>
           </div>
           
        <div className="track">
          
          <div className="card pd-20 pd-sm-40" >
  
  <div className="table-wrapper">
    <table id="datatable1" className="table display responsive nowrap">
      <thead>
        <tr>
          <th className="wd-15p" style={{fontSize: '17px', fontWeight: 'bold', marginLeft:'-20px'}}>Type</th>
          <th className="wd-15p" style={{fontSize: '17px', fontWeight: 'bold', marginLeft:'-20px'}}> Shipment informtion</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
        
          <td style={{fontSize: '17px', fontWeight: 'bold'}}>Shipment mode:</td>
          <td></td>
   
        </tr>
        <tr>
          <td style={{fontSize: '17px', fontWeight: 'bold', marginLeft:'20px'}}>Shipment status:</td>
          <td></td>
   
        </tr>
        <tr>
          <td style={{fontSize: '17px', fontWeight: 'bold', marginLeft:'20px'}}>Pick-up date:</td>
          <td></td>
    
        </tr>
        <tr>
          <td style={{fontSize: '17px', fontWeight: 'bold', marginLeft:'20px'}}>Expected delivery time:</td>
          <td></td>
        
        </tr>
        
        
        
      </tbody>
    </table>
  </div>{/* table-wrapper */}
</div>{/* card */}
</div>
</div>
      </Dashboard2>
 
  )
}

export default Tracks