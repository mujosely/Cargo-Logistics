import React, { useState } from "react";
import Dashboard2 from "../views/dashboard2";
import axios from "axios";

const Odering = () => {
  const [address, setAddress] =  useState("");
  const [enq_Code, setEnq_Code] =  useState("");
  const [status_Shipment, setStatus_Shipment] =  useState("");
  const [status_Payment, setStatus_Payment] =  useState("");
  const [product, setProduct] =  useState("");
  const [date_Arriv, setDate_Arriv] =  useState("");
  const [employee, setEmployee] =  useState("");

  const [successMessage, setSuccessMessage] = useState("");
const [errorMessage, setErrorMessage] = useState("");

const onFinish = (e) => {
  e.preventDefault();
  setSuccessMessage("");
  setErrorMessage("");
console.log("my dt")
  axios.post(`https://cargoapp.herokuapp.com/api/enquiry`, {
      order_address: e.target.address.value.toString(),
      order_enq_Code: e.target.enq_Code.value.toString(),
      order_status_Shipment: e.target.status_Shipment.value.toString(),
      order_status_Payment: e.target.status_Payment.value.toString(),
      order_product: e.target.product.value.toString(),
      order_date_Arriv: e.target.date_Arriv.value,
      order_employee: e.target.employee.value.toString(),
    }).then((res) => {
      console.log("uyghuygyugyiu",res.data);
      const { message } = res.data;
      setSuccessMessage(message);
      setAddress("");
      setEnq_Code("");
      setStatus_Shipment("");
      setStatus_Payment("");
      setProduct("");
      setDate_Arriv("");
      setEmployee("");
    })
    .catch((err) => {
      try {
        const { message } = err.response.data;
        setErrorMessage(message);
      } catch (e) {
        setErrorMessage(err.message);
      }
    });
};
  return (
   

    <Dashboard2> 
        <div className="am-pagebody" style={{marginLeft:"300px", marginTop:"100px",marginRight:"50px"}}>
  <div className="card pd-20 pd-sm-40">
    <h6 className="card-body-title">Add new shipment</h6>
    <p className="mg-b-20 mg-sm-b-30"> Connect people with their pproducts with effective means of transport.</p>
    <div className="form-layout">
      <div className="row mg-b-25">
        <form   onFinish={onFinish}
        >
        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label" style={{color:"black"}}>Customer names: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="firstname"  rules={[{ required: true }]} placeholder=" customer names" value={address} onChange={(t) => setAddress(t.target.value)} />
          </div>
        </div>{/* col-4 */}
        
        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label" style={{color:"black"}}>Email address: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="email"  rules={[{ required: true }]} placeholder=" email address" value={enq_Code} onChange={(t) => setEnq_Code(t.target.value)} />
          </div>
        </div>{/* col-4 */}
        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label" style={{color:"black"}}>Name of product: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="lastname"  rules={[{ required: true }]} placeholder=" product/Cargo" value={status_Shipment} onChange={(t) => setStatus_Shipment(t.target.value)}/>
          </div>
        </div>{/* col-4 */}
        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label" style={{color:"black"}}>Origin: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="lastname"  rules={[{ required: true }]}  placeholder=" origin" value={status_Payment} onChange={(t) => setStatus_Payment(t.target.value)} />
          </div>
        </div>{/* col-4 */}

        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label" style={{color:"black"}}> Destination: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="lastname"  rules={[{ required: true }]} placeholder=" Destination" value={product} onChange={(t) => setProduct(t.target.value)}/>
          </div>
        </div>{/* col-4 */}
        {/* <div className="col-lg-8"> */}
        
        
        
        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label" style={{color:"black"}}>Date: <span className="tx-danger">*</span></label>
            <input className="form-control" type="date" name="date"  rules={[{ required: true }]} placeholder="Enter expected delivery date" value={date_Arriv} onChange={(t) => setDate_Arriv(t.target.value)}/>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="form-group mg-b-10-force">
           
            <label className="form-control-label" style={{color:"black"}}> Desciptions: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text-area" name=""  rules={[{ required: true }]}  placeholder="Enter address" value={employee} onChange={(t) => setEmployee(t.target.value)}/>
            
          </div>
        </div>{/* col-8 */}
        

      <div className="form-layout-footer">
      {successMessage !== "" && (
          <div className="text-success">{successMessage}</div>
        )}
        {errorMessage !== "" && (
          <div style={{ color: "red" }}>{errorMessage}</div>
        )}
        <button className="btn btn-info mg-r-5">Submit </button>
        <button className="btn btn-secondary">Cancel</button>
        
      </div>{/* form-layout-footer */}
      </form>
    </div>{/* form-layout */}
    
  </div>{/* card */}
  
  </div>
  </div>

    </Dashboard2>
  )
}

export default Odering