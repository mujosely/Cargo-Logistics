
import React,{useState} from "react";
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import HomeLayout from "../components/HomeLayout";
import  "../views/home.css"
import { Form, Input, Checkbox } from 'antd';
import { MailFilled, LockOutlined , UserOutlined,PhoneOutlined } from '@ant-design/icons';
import {Carousel} from 'react-bootstrap';

import aircraft from "../assets/aircraft.jpeg" 
import stock from "../assets/stock.jpeg"

import lorrytransport from "../assets/lorrytransport.jpeg" 
import shiptransport from "../assets/shiptransport.jpeg"
import { Card } from 'antd';

const { Meta } = Card;

 








const Homepage = () => {
  
  
  
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ismyModalVisible, setIsmyModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    // signign
    


  };

  const showMyModal = () => {
    setIsmyModalVisible(true);

  };
  const myModalOk = () => {
    setIsmyModalVisible(false);
  };
  const myModalCancel = () => {
    setIsmyModalVisible(false);
    


  };

  return (


    <HomeLayout>
      <div className="home-container-child " style={{height:"40vh"}}>
        <div className="home1">
      <div className="mymain-nav">
      <a href="../">Home</a> 
      
        <a href="#" onClick={showModal}>SignUp</a> 
       
        <a href="/TrackPage">Track</a>
        </div>
        <div className="back-b">
          
      
        <a href="#"><button style={{ width: "170px", height: "50px", marginLeft: "70%", marginTop: "100%",color:"white" }}><h2><a href="#" onClick={showMyModal} >Sign-in  </a> </h2></button></a>
                
       
        </div>
      
        
        
           
      

    
        </div>
         <Modal title="PLEASE REGISTER HERE!!!!" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}   style={{  backgroundColor: "black" }}>
      
      
        
         <Form

name="basic"
labelCol={{ span: 8 }}
wrapperCol={{ span: 16 }}
initialValues={{ remember: true }}
onFinish={onFinish}
onFinishFailed={onFinishFailed}
autoComplete="off"

style={{
 
  marginTop:"10px",
  marginLeft: "50px",
  color: "white"}}

>
<Form.Item
  label=""
  name="First name"
  rules={[{ required: true, message: 'Please input your username!' }]}
  style={{ width: "352px",  }}
>
  <Input prefix={<UserOutlined />} placeholder=" please enter your firstrname " />
</Form.Item>
<Form.Item
  label=""
  name="Last name"
  rules={[{ required: true, message: 'Please input your lastname!' }]}
  style={{ width: "352px",  }}
>
  <Input prefix={<UserOutlined />} placeholder=" please enter your username " />
</Form.Item>

<Form.Item
  label=""
  name="Email"
  rules={[{ required: true, message: 'Please input your email!' }]}
  style={{ width: "352px",  }}
>
<Input prefix={<MailFilled className="site-form-item-icon" />} placeholder=" lpease enter your email " type="email" />
  
</Form.Item>
<Form.Item
  label=""
  name="Mobile"
  rules={[{ required: true, message: 'Please enter your phone number' }]}
  style={{ width: "352px",  }}
>
  <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="  please enter your phone number" type="string" />
</Form.Item>



<Form.Item
  label=""
  name="Password"
  rules={[{ required: true, message: 'Please enter your password!' }]}
  style={{ width: "352px",  }}
>
  <Input.Password  

prefix={<LockOutlined className="site-form-item-icon" placeholder="please enter  password" type="password" />}
type="password"
placeholder="Password"
/>
</Form.Item>

{/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
  <Checkbox>Remember me</Checkbox>
</Form.Item> */}

<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
  <Button type="primary" htmlType="submit"style={{ width: "160px", height: "40px", marginLeft: "2%", marginTop: "1px" ,background:"black" }} >
    Submit
  </Button>
</Form.Item>
</Form>

      </Modal>

        
      <Modal title=" Login here HERE!!" visible={ismyModalVisible} onOk={myModalOk} onCancel={myModalCancel}  style={{  backgroundColor: "black" }}>
      
      
      
         <Form

name="basic"
labelCol={{ span: 8 }}
wrapperCol={{ span: 16 }}
initialValues={{ remember: true }}
onFinish={onFinish}
onFinishFailed={onFinishFailed}
autoComplete="off"

style={{
 
  marginTop:"10px",
  marginLeft: "50px",
  color: "white"}}

>


  
    
<Form.Item
  label=""
  name="Email"
  rules={[{ required: true, message: 'Please input your email!' }]}
  style={{ width: "352px",  }}
>
<Input prefix={<MailFilled className="site-form-item-icon" />} placeholder="email " type="email" />
  
</Form.Item>






<Form.Item
  label=""
  name="Password"
  rules={[{ required: true, message: 'Please enter your password!' }]}
  style={{ width: "352px",  }}
>
  <Input.Password  

prefix={<LockOutlined className="site-form-item-icon" placeholder="email or phone number" type="email" />}
type="password"
placeholder="Password"
/>
</Form.Item>

<Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
  <Checkbox>Remember me</Checkbox>
</Form.Item>

<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
  <Button type="primary" htmlType="submit"style={{ width: "160px", height: "40px", marginLeft: "2%", marginTop: "1px" ,background:"#7B5844" }} >
    Submit
  </Button>
</Form.Item>
</Form>

      </Modal>
      {/* signinmodal */}

      

 <div className="content" style={{background:"#33383B", marginTop:"650px", width:"100%",height:"150vh"}}>

<div className="content_f">
< div className="content-kf1">
<Card>
   
   <Carousel




          variant="dark"
          className="slide Carousel-fade container-corousel">
            <Carousel.Item>
             <img src={ aircraft} height="600px" width="1000px" textAlign="center"/>
             <Carousel.Caption >
               <h1 style={{color:"white"}}> mydsdfdgfchgvjhkbjnl 1</h1>
               <h2> air fright</h2>
              <h2 > 3 campanies in 8 counties and 40 cities</h2>
             </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
             <img src={lorrytransport } height="600px" width="1000px" textAlign="center"/>
             <Carousel.Caption>
               <h1 style={{color:"white"}}>  mysecond</h1>
               <h2>Land Transport </h2>
              <h2 > 3 campanies in 8 counties and 40 cities</h2>
             </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
             <img src={shiptransport}height="600px" width="1000px" marginLeft="2%
             " textAlign="center"/>
             <Carousel.Caption>
               <h1 style={{color:"white"}}> my third</h1>
               <h2> Ocean freight</h2>
              <h2 > 3 campanies in 8 counties and 40 cities</h2>
             </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
             <img src={stock}height="600px" width="1000px" textAlign="center"/>
             <Carousel.Caption>
               <h1 style={{color:"white"}}> my four</h1>
               alt="Third slide"

             </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
  
     <h2> we  provide services across global </h2> 
  </Card>,



  </div>
<div className="content-kf2">
<Card>
   
   <Carousel




          variant="dark"
          className="slide Carousel-fade container-corousel">
            <Carousel.Item>
             <img src={ aircraft} height="600px" width="1000px" textAlign="center"/>
             <Carousel.Caption >
               <h1 style={{color:"white"}}> mydsdfdgfchgvjhkbjnl 1</h1>
               <h2> air fright</h2>
              <h2 > 3 campanies in 8 counties and 40 cities</h2>
             </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
             <img src={lorrytransport } height="600px" width="1000px" textAlign="center"/>
             <Carousel.Caption>
               <h1 style={{color:"white"}}>  mysecond</h1>
               <h2>Land Transport </h2>
              <h2 > 3 campanies in 8 counties and 40 cities</h2>
             </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
             <img src={shiptransport}height="600px" width="1000px" marginLeft="2%
             " textAlign="center"/>
             <Carousel.Caption>
               <h1 style={{color:"white"}}> my third</h1>
               <h2> Ocean freight</h2>
              <h2 > 3 campanies in 8 counties and 40 cities</h2>
             </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
             <img src={stock}height="600px" width="1000px" textAlign="center"/>
             <Carousel.Caption>
               <h1 style={{color:"white"}}> my four</h1>
               alt="Third slide"

             </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
  
     <h2> we  provide services across global </h2> 
  </Card>,


{/* <Card>
   
   <Carousel




          variant="dark"
          className="slide Carousel-fade container-corousel">
            <Carousel.Item>
             <img src={ aircraft} height="600px" width="1000px" textAlign="center"/>
             <Carousel.Caption >
               <h1 style={{color:"white"}}> </h1>
              
             </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
             <img src={lorrytransport } height="600px" width="1000px" textAlign="center"/>
             <Carousel.Caption>
               <h1 style={{color:"white"}}>  mysecond</h1>
               <h2>Land Transport </h2>
              <h2 > 10 campanies in 12 counties and 60 cities</h2>
             </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
             <img src={shiptransport}height="600px" width="1000px" marginLeft="2%
             " textAlign="center"/>
             <Carousel.Caption>
               <h1 style={{color:"white"}}> my third</h1>
               <h2> Ocean freight</h2>
              <h2 > 6 campanies in 5 counties and 20 cities</h2>
             </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
             <img src={stock}height="600px" width="1000px" textAlign="center"/>
             
             <Carousel.Caption>
               <h1 style={{color:"white"}}> my four</h1>
               alt="cvbnjmkl;"
              <h2> Smart Ware house</h2>
              <h2 > cove 10000</h2>
               <h3>sdfghjk</h3>

             </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
  
     <h2> we  provide services across global </h2> 
  </Card>, */}
          
          

  </div>

  {/* < div className="content-kf3">
  
  
  </div> */}

  </div>
        </div>

     
      </div>
    </HomeLayout>


  )
}

export default Homepage;