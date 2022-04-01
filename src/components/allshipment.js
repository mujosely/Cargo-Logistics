import React ,{useState,useEffect} from 'react'
import Dashboard from "../views/dashboard";

const Allshipment = () => {
  let [enquiries, setEnquiries] = useState([]);
  const getData = async() => {
    const shipps = await fetch('https://cargoapp.herokuapp.com/api/enquiry/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIn0.tePpJjhy0G3gxzyG_zaINhA6iWSAN_mM2sP4aWJ84_I'
      }

    });
    let data = await shipps.json()
    if (shipps.status === 200){
      setEnquiries(data);
      console.log(data)
    }else{
      console.log(data)
    }
  }

  useEffect(() => {
    getData();
  }, [])
  // var viewAllShip= Allshipment.map((item)=>{  });
//  <tr key={item.id}> 


  return (
      <Dashboard>
     <div className="card pd-20 pd-sm-40" style={{marginLeft:"300px", marginTop:"100px",marginRight:"50px"}}>
  <h6 className="card-body-title">All shipments</h6>
  <p className="mg-b-20 mg-sm-b-30">List of shipments registered by our customers</p>
  <div className="table-wrapper">
    <table id="datatable1" className="table display responsive nowrap">
      <thead>
        
        <tr>
          <th className="wd-15p">First name</th>
          <th className="wd-15p">Last name</th>
          <th className="wd-20p">Product Code</th>
          <th className="wd-15p">date</th>
          <th className="wd-10p">Orgin</th>
          <th className="wd-10p">Destination</th>
          <th className="wd-25p">E-mail</th>
          <th className="wd-25p">Description</th>
          <th className="wd-25p">Update</th>
        </tr>
      </thead>
      <tbody>
        {enquiries.map((enquiry, index)=>{
          return (
            <tr key={index}>
              <td>{enquiry.address}</td>
               <td>{enquiry.enq_Code}</td>
              <td>{enquiry.date_Arriv}</td> 
              
            </tr>
          )
        })}
 
      </tbody>
    </table>
  </div>{/* table-wrapper */}
</div>{/* card */}

    </Dashboard>
  )

}

export default Allshipment