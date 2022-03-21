import React,{useState} from "react";
import { Modal, Button } from 'antd';
// import 'antd/dist/antd.css';
import HomeLayout from "../components/HomeLayout";
import  "../views/home.css"
import { Form, Input, Checkbox,notification } from 'antd';
import { MailFilled, LockOutlined , UserOutlined,PhoneOutlined } from '@ant-design/icons';
import {Carousel} from 'bootstrap';

import aircraft from "../assets/aircraft.jpeg" 
import stock from "../assets/stock.jpeg"

 import lorrytransport from "../assets/lorrytransport.jpeg" 
 import shiptransport from "../assets/shiptransport.jpeg"
import { Card } from 'antd';
// import cargologistics from "../services/cargologistics";



const { Meta } = Card;





const Home = () => {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
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
      <div className="allfromhome">
      <div className="bg-home1">
      <div className="bg-home12">
      <div className="mymain-nav">
  
<a href="#" onClick={showModal}>SignUp</a> 

</div>
<div className="mybutton-b1">
      <a href="#"><button ><h2><a href="#" onClick={showMyModal} style={{color:"black",fontSize:"small", backgroundColor:"none"}} >Sign-in  </a> </h2></button></a>
        </ div>
        <div className="myonlymodal">
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



<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
<Button type="primary" htmlType="submit"style={{ width: "160px", height: "40px", marginLeft: "2%", marginTop: "1px" ,background:"none" }} >
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






        </div>

        </div>

      </div>
      <div className="mycargo">
        
      </div>
      </div>
      
    </HomeLayout>
    
  )
}

export default Home;