
import React, { useState } from 'react';
import "./header.css"

import { Menu, Dropdown, Button, Modal } from 'antd';
import logo from "../assets/logo.JPG";


import "../views/home.css"
import { Form, Input, Checkbox, notification } from 'antd';
import { MailFilled, LockOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';

import cargologistics from "../services/cargologistics"







const Header = () => {

  const { SubMenu } = Menu;

  function handleClick(e) {
    console.log('click', e);
  }




  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const registerUsers = async (values) => {
    console.log('Success:', values);

    const url = "https://cargoapp.herokuapp.com/api/auth/register";
    const response = await fetch(url,{
      method:'POST',
      headers: {
        'Content-Type':'application/json',
        // 'Authorization': 'Bearer ' + 'token'
      },
      body:JSON.stringify(
        {
          "username":values.username.toString(),
          "first_name":values.firstname.toString(),
          "last_name":values.lastname.toString(),
          "email":values.email.toString(),
          "password":values.password.toString()
        })
    })
    const data = await response.json();
    if (response.status === 201){
      console.log('user registered')
    }else{
      console.log(data)
    }
    
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
  const menu = (

    <Menu style={{ background: "#2359D5", }}>

      <Menu.Item >
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          <h3 style={{ textDecoration: "underline", fontSize: "large," }}>Shiping-Trade</h3>
        </a>
      </Menu.Item>
      <Menu.Item>
        <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical" >
          <SubMenu key="sub1" title=" From AFRICAN COUNTRIES"  >
            <Menu.ItemGroup title="Tanzania-Rwanda">
              <Menu.Item key="1">  <a href="#" onClick={showMyModal}>Scheduler by line</a> </Menu.Item >



              <Menu.Item key="2"> land transport</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Kenya-Rwanda">

              <Menu.Item key="1"><a href="booking"><a href="#" onClick={showMyModal}>Scheduler by line</a>   </a></Menu.Item>
              <Menu.Item key="2">land transport </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu></Menu>
      </Menu.Item>
      <Menu.Item>
        <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
          <SubMenu key="sub1" title="ASIA-AFRICA">
            <Menu.ItemGroup title="China-Rwanda">
              <Menu.Item key="1" ><a href="booking"><a href="#" onClick={showMyModal}>Scheduler by line</a>  </a></Menu.Item>
              <Menu.Item key="2"> Schedulerby PORT</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="TURKEY-RWANDA">
              <Menu.Item key="1"> <a href="#" onClick={showMyModal}>Scheduler by line</a></Menu.Item>
              <Menu.Item key="2"> Schedulerby PORT</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu></Menu>
      </Menu.Item>


      <Menu.Item>
        <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
          <SubMenu key="sub1" title="  EUROPE-AFRICA">
            <Menu.ItemGroup title="france-Rwanda">
              <Menu.Item key="1"><a href="#" onClick={showMyModal}>Scheduler by line</a></Menu.Item>
              <Menu.Item key="2"> Schedulerby PORT</Menu.Item>
            </Menu.ItemGroup>


          </SubMenu></Menu>
      </Menu.Item>
      <Menu.Item>
        <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
          <SubMenu key="sub1" title="  OCEANIA-AFRICA">
            <Menu.ItemGroup title="AUSTRALIA-RWANDA" >
              <Menu.Item key="1"><a href="#" onClick={showMyModal}>Scheduler by line</a></Menu.Item>

              <Menu.Item key="2"> Schedulerby PORT</Menu.Item>
            </Menu.ItemGroup>


          </SubMenu></Menu>
      </Menu.Item>
      <Menu.Item>
        <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
          <SubMenu key="sub1" title="  AMERICA-AFRICA">
            <Menu.ItemGroup title="USA-Rwanda">
              <Menu.Item key="1"> <a href="#" onClick={showMyModal}>Scheduler by line</a></Menu.Item>
              <Menu.Item key="2"> Schedulerby PORT</Menu.Item>
            </Menu.ItemGroup>

          </SubMenu></Menu>
      </Menu.Item>


    </Menu>
  );

  const registerUser = async (e) => {
    console.log("hi")
    // e.preventDefault();
    const url = "https://cargoapp.herokuapp.com/api/auth/register";
    const response = await fetch(url,{
      method:'POST',
      headers: {
        'Content-Type':'application/json',
        // 'Authorization': 'Bearer ' + 'token'
      },
      body:JSON.stringify(
        {
          "username":e.target.username.value.toString()?e.target.username.value.toString():null,
          "first name":e.target.firstname.value.toString(),
          "last name":e.target.lastname.value.toString(),
          "email":e.target.email.value.toString(),
          "password":e.target.password.value.toString()
        })
    })
    const data = await response.json();
    if (response.status === 201){
      console.log('registered', data)
    }else{
      console.log(data)
    }
  }



  return (

    <div className="header_container">
      <div className="logo">
        <img src={logo} width="100%" height="100%" marginTop="5%" />

      </div>
      <nav className="">

        <div className="ourmenu1">

          <ul >
            <div className="menu" style={{ display: "flex" }}>
              {/* <li> <a style={{color:"white" ,fontSize:"20px", fontWeight:"bold"}} href="../">Home</a> </li> */}
              <li>  <a style={{ color: "white", fontSize: "20px", fontWeight: "bold" }} href="/">  Home</a></li>
              <Dropdown overlay={menu} placement="bottomLeft" arrow>
                <Button style={{ background: "none", color: "white", border: "none", marginTop: "11px", fontSize: "20px", fontWeight: "bold" }}>services</Button></Dropdown>





              <li> <a style={{ color: "white", fontSize: "20px", fontWeight: "bold" }} href="/contacting" >Contact</a></li>
              <li>  <a style={{ color: "white", fontSize: "20px", fontWeight: "bold" }} href="/TrackPage">Track</a></li>
              <li> <a style={{ color: "white", fontSize: "20px", fontWeight: "bold", marginRight: "300%" }} href="#" onClick={showModal}   >Signup </a></li>
              <li> <a style={{ color: "white", fontSize: "20px", fontWeight: "bold", marginLeft: "90%" }} href="#" onClick={showMyModal}>Login</a> </li>

            </div>
          </ul>
          {/* <a href="#" onClick={showMyModal}>Login</a>  */}
        </div>


      </nav>
      <div className="mymodal">


        <div className="allfromhome">
          <div className="bg-home1">
            <div className="bg-home12">
              <div className="mymain-nav">



              </div>
              <div className="mybutton-b1">

              </ div>
              <div className="myonlymodal">
                <Modal title="PLEASE REGISTER HERE!!!!" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} style={{ backgroundColor: "black" }}>



                  <Form

                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={registerUsers}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    onSubmit={registerUser}

                    style={{

                      marginTop: "10px",
                      marginLeft: "50px",
                      color: "white"
                    }}

                  >
                    <Form.Item
                      label=""
                      name="firstname"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                      style={{ width: "352px", }}
                    >
                      <Input prefix={<UserOutlined />} placeholder=" please enter your firstrname " />
                    </Form.Item>
                    <Form.Item
                      label=""
                      name="lastname"
                      rules={[{ required: true, message: 'Please input your lastname!' }]}
                      style={{ width: "352px", }}
                    >
                      <Input prefix={<UserOutlined />} placeholder=" please enter your username " />
                    </Form.Item>

                    <Form.Item
                      label=""
                      name="email"
                      rules={[{ required: true, message: 'Please input your email!' }]}
                      style={{ width: "352px", }}
                    >
                      <Input prefix={<MailFilled className="site-form-item-icon" />} placeholder=" lpease enter your email " type="email" />

                    </Form.Item>
                    <Form.Item
                      label=""
                      name="username"
                      rules={[{ required: true, message: 'Please enter your username' }]}
                      style={{ width: "352px", }}
                    >
                      <Input prefix={<UserOutlined />} placeholder=" please enter your username "/>
                    </Form.Item>



                    <Form.Item
                      label=""
                      name="password"
                      rules={[{ required: true, message: 'Please enter your password!' }]}
                      style={{ width: "352px", }}
                    >
                      <Input.Password

                        prefix={<LockOutlined className="site-form-item-icon" placeholder="please enter  password" type="password" />}
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Item>



                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                      <Button type="primary" htmlType="submit" style={{ width: "160px", height: "41px", marginLeft: "2%", marginTop: "1px", background: "black" }} >
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>

                </Modal>





                <Modal title=" Login here HERE!!" visible={ismyModalVisible} onOk={myModalOk} onCancel={myModalCancel} style={{ backgroundColor: "black" }}>



                  <Form

                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={registerUser}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"

                    style={{

                      marginTop: "10px",
                      marginLeft: "50px",
                      color: "white"
                    }}

                  >




                    <Form.Item
                      label=""
                      name="Email"
                      rules={[{ required: true, message: 'Please input your email!' }]}
                      style={{ width: "352px", }}
                    >
                      <Input prefix={<MailFilled className="site-form-item-icon" />} placeholder="email " type="email" />

                    </Form.Item>






                    <Form.Item
                      label=""
                      name="Password"
                      rules={[{ required: true, message: 'Please enter your password!' }]}
                      style={{ width: "352px", }}
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
                      <Button type="primary" htmlType="submit" style={{ width: "160px", height: "40px", marginLeft: "2%", marginTop: "1px", background: "#1890FF" }} >
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>

                </Modal>






              </div>

            </div>

          </div>


        </div>
      </div>
    </div>
  )
}

export default Header;