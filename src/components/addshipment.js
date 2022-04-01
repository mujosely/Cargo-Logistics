import React from 'react'
import Dashboard from "../views/dashboard"

const Addshipment = () => {
  const payment=(e)=>{
    document.getElementById("pay").style.display="block";
  }
  return (
      <Dashboard>
   <div className="am-pagebody" style={{marginLeft:"270px", marginTop:"100px",marginRight:"50px"}}>
  <div className="card pd-20 pd-sm-40">
    <h6 className="card-body-title">Add new shipment</h6>
    <p className="mg-b-20 mg-sm-b-30"> Connect people with their pproducts with effective means of transport.</p>
    <div className="form-layout">
      <div className="row mg-b-25">
        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label" style={{color:"black"}}>Customer names: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="customername"  placeholder=" customer names" />
          </div>
        </div>{/* col-4 */}
        
        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label" style={{color:"black"}}>Email address: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="email"  placeholder=" email address" />
          </div>
        </div>{/* col-4 */}
        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label" style={{color:"black"}}>Name of product: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="productname"  placeholder=" product/Cargo" />
          </div>
        </div>{/* col-4 */}
        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label" style={{color:"black"}}>Origin: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="origin"  placeholder=" origin" />
          </div>
        </div>{/* col-4 */}

        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label" style={{color:"black"}}>Destination: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="destination"  placeholder=" product/Cargo" />
          </div>
        </div>{/* col-4 */}

        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label" style={{color:"black"}}> Product code: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="productcode"  placeholder=" Product code" />
          </div>
        </div>{/* col-4 */}
        {/* <div className="col-lg-8"> */}
        
        <div className="col-lg-4">
          <div className="form-group mg-b-10-force">
            <label className="form-control-label"style={{color:"black"}}> Shipment mode: <span className="tx-danger">*</span></label>
            <select className="form-control select2" data-placeholder="choose chipment mode">
              <option label="choose chipment mode" />
              <option value="land">Land Transport</option>
              <option value="air">Air Transport</option>
              <option value="water">Water Transport</option>
            
            </select>
          </div>
        </div>{/* col-4 */}
        <div className="col-lg-4">
          <div className="form-group mg-b-10-force">
            <label className="form-control-label" style={{color:"black"}}> Status: <span className="tx-danger">*</span></label>
            <select className="form-control select2" data-placeholder="Choose status">
              <option label="Choose status" />
              <option value="pending">Pending</option>
              <option value="picked">picked up</option>
              <option value="intransit">In Transit</option>
              <option value="cancelled">Cancelled</option>
              <option value="delivered">delivered</option>
            
            
            </select>
          </div>
        </div>{/* col-4 */}

      </div>{/* row */}
      <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label" style={{color:"black"}}>Pickup date: <span className="tx-danger">*</span></label>
            <input className="form-control" type="date" name="pickeddate"  placeholder="Enter pickup date" />
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label" style={{color:"black"}}>Expected delivery: <span className="tx-danger">*</span></label>
            <input className="form-control" type="date" name="expecteddate"  placeholder="Enter expected delivery date" />
          </div>
        </div>

        <div className="col-lg-4">
          <div className="form-group mg-b-10-force">
            <label className="form-control-label" style={{color:"black"}}> Address: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="address"  placeholder="Enter address" />
          </div>
          </div>
        </div>{/* col-8 */}
       
 
      <div className="form-layout-footer">
        <button className="btn btn-info mg-r-5" onClick={payment}>Submit </button>
        <button className="btn btn-secondary">Cancel</button>
      </div>{/* form-layout-footer */}
    </div>{/* form-layout */}
<div className='paymant-roll'>
    
        <div className='paymant-mode'style={{ height:"200px", width:"300px", background:"blue", marginLeft:"3%", display:"none" }} id="pay">
        <h1 > Payment mode</h1>
      
        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          
         
  <option selected 
  > select payment mode</option>
  <option value="1" >Eaypall</option>
  <option value="2">Equity</option>
  <option value="3">Bk</option>
  
</select> <br></br>
<button type="button" class="btn btn-primary">pay</button>


        </div>
        </div>
        </ div>


    
{/* card */}
  


    </Dashboard>
  )
}

export default Addshipment