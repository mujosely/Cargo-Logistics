import React ,{useState,useEffect} from 'react'
import Dashboard from "../views/dashboard";

const Customer = () => {
  let [enquiries, setEnquiries] = useState([]);
  const getData = async() => {
    const shipps = await fetch('https://cargoapp.herokuapp.com/api/customer/', {
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
  return (
      <Dashboard>
       <div className="card pd-20 pd-sm-40" style={{marginLeft:"300px", marginTop:"100px",marginRight:"50px"}}>
        <h6 className="card-body-title">All customers</h6>
        <p className="mg-b-20 mg-sm-b-30">This is the list of all customers in yourr company  who signed up to your pltform</p>
        <div className="table-responsive">
    <table className="table mg-b-0">
      <thead>
        <tr>
          
          <th>Full Name</th>
          <th>Email</th>
          <th>username</th>
          <th>Telephone</th>
    
        </tr>
      </thead>
      <tbody>
      <tbody>
      {enquiries.map((customers, index)=>{
          return (
            <tr key={index}>
              <td>{customers.first_name}</td>
               <td>{customers.email}</td>
              <td>{customers.username}</td> 
              <td>{customers.mobile}</td>
              
            </tr>
          )
        })}
 
      </tbody>
          
      </tbody>
    </table>
  </div>
</div>{/* card */}
      </Dashboard>
    
  )
}

export default Customer