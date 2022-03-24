import React from 'react'
import Dashboard from '../views/dashboard'
const Nemployer = () => {
  return (
    <Dashboard>
    <div className="am-pagebody" style={{marginLeft:"270px", marginTop:"100px",marginRight:"50px"}}>
   <div className="card pd-20 pd-sm-40">
     <h6 className="card-body-title">Add new emplyee</h6>
     <p className="mg-b-20 mg-sm-b-30"> Connect people with their pproducts with effective means of transport.</p>
     <div className="form-layout">
       <div className="row mg-b-25">
         <div className="col-lg-4">
           <div className="form-group">
             <label className="form-control-label" style={{color:"black"}}>First Names: <span className="tx-danger">*</span></label>
             <input className="form-control" type="text" name="fname"  placeholder=" First Name" />
           </div>
         </div>{/* col-4 */}
         
         <div className="col-lg-4">
           <div className="form-group">
             <label className="form-control-label" style={{color:"black"}}>Last Name: <span className="tx-danger">*</span></label>
             <input className="form-control" type="text" name="productname"  placeholder=" LastName" />
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
             <label className="form-control-label" style={{color:"black"}}>Id Number: <span className="tx-danger">*</span></label>
             <input className="form-control" type="text" name="empid"  placeholder="Enter employee Id" />
           </div>
         </div>{/* col-4 */}
 
         <div className="col-lg-4">
           <div className="form-group">
             <label className="form-control-label" style={{color:"black"}}>Company Name: <span className="tx-danger">*</span></label>
             <input className="form-control" type="text" name="company"  placeholder="company name" />
           </div>
         </div>{/* col-4 */}
 
         <div className="col-lg-4">
           <div className="form-group">
             <label className="form-control-label" style={{color:"black"}}> Telephone: <span className="tx-danger">*</span></label>
             <input className="form-control" type="text" name="emptel"  placeholder=" Telephone Number" />
           </div>
         </div>{/* col-4 */}
         {/* <div className="col-lg-8"> */}
         
         
 
       </div>{/* row */}
       <div className="col-lg-4">
           <div className="form-group">
             <label className="form-control-label" style={{color:"black"}}> date: <span className="tx-danger">*</span></label>
             <input className="form-control" type="date" name="pickeddate"  placeholder="Enter pickup date" />
           </div>
         </div>
         
         
         
         </div>{/* col-8 */}
 
       <div className="form-layout-footer">
         <button className="btn btn-info mg-r-5">Add </button>
         <button className="btn btn-secondary">Cancel</button>
       </div>{/* form-layout-footer */}
     </div>{/* form-layout */}
   </div>{/* card */}
   
 
 
     </Dashboard>
  )
}

export default Nemployer;