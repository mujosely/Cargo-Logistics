import React from 'react'
import Dashboard from "../views/dashboard"

const Addshipment = () => {
  return (
      <Dashboard>
   <div className="am-pagebody" style={{marginLeft:"230px", marginTop:"100px",marginRight:"50px"}}>
  <div className="card pd-20 pd-sm-40">
    <h6 className="card-body-title">Add new shipment</h6>
    <p className="mg-b-20 mg-sm-b-30"> Connect people with their pproducts with effective means of transport.</p>
    <div className="form-layout">
      <div className="row mg-b-25">
        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label">Customer names: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="firstname"  placeholder="Enter customer names" />
          </div>
        </div>{/* col-4 */}
        
        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label">Email address: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="email"  placeholder="Enter email address" />
          </div>
        </div>{/* col-4 */}
        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label">Name of product: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="lastname"  placeholder="Enter product/Cargo" />
          </div>
        </div>{/* col-4 */}
        {/* <div className="col-lg-8"> */}
        <div className="col-lg-4">
          <div className="form-group mg-b-10-force">
            <label className="form-control-label"> Address: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="address"  placeholder="Enter address" />
          </div>
          </div>
        </div>{/* col-8 */}
        <div className="col-lg-4">
          <div className="form-group mg-b-10-force">
            <label className="form-control-label"> Shipping Category: <span className="tx-danger">*</span></label>
            <select className="form-control select2" data-placeholder="Choose category">
              <option label="Choose category" />
              <option value="USA">Road Transport</option>
              <option value="UK">Air Transport</option>
              <option value="China">Water Transport</option>
            
            </select>
          </div>
        </div>{/* col-4 */}
      </div>{/* row */}
      <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label">Picking date: <span className="tx-danger">*</span></label>
            <input className="form-control" type="date" name="lastname"  placeholder="Enter picking date" />
          </div>
        </div>

      <div className="form-layout-footer">
        <button className="btn btn-info mg-r-5">Submit </button>
        <button className="btn btn-secondary">Cancel</button>
      </div>{/* form-layout-footer */}
    </div>{/* form-layout */}
  </div>{/* card */}
  


    </Dashboard>
  )
}

export default Addshipment