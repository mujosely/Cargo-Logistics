import React from 'react'
import Dashboard from "../views/dashboard"
import "./admin.css";

const Admin = () => {
  return (
      <Dashboard>
        <div className="serch_button" >
     

</div>

   <div className='userships' style={{marginLeft:"300px", marginTop:"100px",marginRight:"50px"}}>
  

   <div className="form-control-wrapper" >
  <input type="search" className="form-control bd-0" placeholder="Search Here..." style={{fontSize: "20px"}} />
</div>
<button id="searchBtn" className="btn btn-orange"><i className="fa fa-search" /></button>


  <div className="table-responsive">
  <table className="table table-white mg-b-0 tx-12">
    <tbody>
      <tr>
        <td className="pd-l-20 tx-center">
          {/* <img src="../img/img1.jpg" className="wd-36 rounded-circle" alt="Image" /> */}
        </td>
        <td>
          <a href="#" className="tx-inverse tx-14 tx-medium d-block">Mark MUTANGANA</a>
          <span className="tx-11 d-block">TRANSID CODE: 1234567890</span>
        </td>
        <td className="tx-12">
          <span className="square-8 bg-success mg-r-5 rounded-circle" /> Cargo delivered
        </td>
        <td>March 21, 2022 8:34pm</td>
      </tr>
      <tr>
        <td className="pd-l-20 tx-center">
          {/* <img src="../img/img2.jpg" className="wd-36 rounded-circle" alt="Image" /> */}
        </td>
        <td>
          <a href="#" className="tx-inverse tx-14 tx-medium d-block">Karemera Alice</a>
          <span className="tx-11 d-block">TRANSID CODE: 1234567890</span>
        </td>
        <td className="tx-12">
          <span className="square-8 bg-warning mg-r-5 rounded-circle" /> Cargo picked
        </td>
        <td>Jan 21, 2022 8:34am</td>
      </tr>
      <tr>
        <td className="pd-l-20 tx-center">
          {/* <img src="../img/img3.jpg" className="wd-36 rounded-circle" alt="Image" /> */}
        </td>
        <td>
          <a href="#" className="tx-inverse tx-14 tx-medium d-block"> Mugisha Andrew</a>
          <span className="tx-11 d-block">TRANSID CODE: 1234567890</span>
        </td>
        <td className="tx-12">
          <span className="square-8 bg-success mg-r-5 rounded-circle" /> Cargo delivered
        </td>
        <td>Apr 10, 2021 4:40pm</td>
      </tr>
      <tr>
        <td className="pd-l-20 tx-center">
          {/* <img src="../img/img5.jpg" className="wd-36 rounded-circle" alt="Image" /> */}
        </td>
        <td>
          <a href="#" className="tx-inverse tx-14 tx-medium d-block">Ariel T. Hall</a>
          <span className="tx-11 d-block">TRANSID CODE: 1234567890</span>
        </td>
        <td className="tx-12">
          <span className="square-8 bg-warning mg-r-5 rounded-circle" /> Cargo picked
        </td>
        <td>Feb 02, 2022 6:45pm</td>
      </tr>
      <tr>
        <td className="pd-l-20 tx-center">
          {/* <img src="../img/img4.jpg" className="wd-36 rounded-circle" alt="Image" /> */}
        </td>
        <td>
          <a href="#" className="tx-inverse tx-14 tx-medium d-block">John L. Goulette</a>
          <span className="tx-11 d-block">TRANSID CODE: 1234567890</span>
        </td>
        <td className="tx-12">
          <span className="square-8 bg-pink mg-r-5 rounded-circle" /> Cargo in Transit
        </td>
        <td>Mar 30, 2020 10:30am</td>
      </tr>
      <tr>
        <td className="pd-l-20 tx-center">
          {/* <img src="../img/img5.jpg" className="wd-36 rounded-circle" alt="Image" /> */}
        </td>
        <td>
          <a href="#" className="tx-inverse tx-14 tx-medium d-block">John Ntwari</a>
          <span className="tx-11 d-block">TRANSID CODE: 1234567890</span>
        </td>
        <td className="tx-12">
          <span className="square-8 bg-pink mg-r-5 rounded-circle" /> Cargo in Transit
        </td>
        <td>Mar 30, 2021 10:30am</td>
      </tr>
      <tr>
        <td className="pd-l-20 tx-center">
          {/* <img src="../img/img2.jpg" className="wd-36 rounded-circle" alt="Image" /> */}
        </td>
        <td>
          <a href="#" className="tx-inverse tx-14 tx-medium d-block">Karmen F. Brown</a>
          <span className="tx-11 d-block">TRANSID CODE: 1234567890</span>
        </td>
        <td className="tx-12">
          <span className="square-8 bg-warning mg-r-5 rounded-circle" /> Cargo picked
        </td>
        <td>Jan 21, 2022 8:34am</td>
      </tr>

      <tr>
        <td className="pd-l-20 tx-center">
          {/* <img src="../img/img5.jpg" className="wd-36 rounded-circle" alt="Image" /> */}
        </td>
        <td>
          <a href="#" className="tx-inverse tx-14 tx-medium d-block">John L. Goulette</a>
          <span className="tx-11 d-block">TRANSID CODE: 1234567890</span>
        </td>
        <td className="tx-12">
          <span className="square-8 bg-pink mg-r-5 rounded-circle" /> Cargo in Transit
        </td>
        <td>Mar 30, 2021 10:30am</td>
      </tr>

    </tbody>
  </table>
</div>


<div className="card-footer tx-12 pd-y-15 bg-transparent bd-t bd-gray-200">
  <a href="#"><i className="fa fa-angle-down mg-r-5" />View All shipments History</a>
</div>


   </div>
  


    </Dashboard>
  )
}

export default Admin;