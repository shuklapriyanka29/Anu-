import React, { useState, useEffect } from 'react';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
   UserOutlined,
  // VideoCameraOutlined,
} from '@ant-design/icons';
import Cards from './Cards'
import { Layout, Menu, theme } from 'antd';
import { AiOutlineDashboard } from 'react-icons/ai';
import { Outlet, useNavigate } from 'react-router-dom';
import { Dropdown } from 'antd';
import { Avatar } from 'antd';
import TaskCreation from './TaskCreation'
import RunAutomation from './RunAutomation'
import Omfyslogo from './download-modified.png'
import qpotlogo1 from './qpotlogo1.jpeg'
import api from './BaseURL';
const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  var base_url = api.defaults.baseURL;
  const [collapsed, setCollapsed] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
//   const navigate = useNavigate();

  const handleLogout = () => {
  //  alert("logout");
    win.clear();
  //setUsername('');
  //setPassword('');
    window.location.href = "/";
  };
  const removeTrigger =() =>{
    var colorXhange= document.getElementsByClassName("trigger");
    if(colorXhange.length > 0)
    {
      colorXhange[0].classList.remove("trigger");
    }
     
  
      }
  useEffect(() => {
    setInterval(removeTrigger,500);
    const clearSessionStorageAndRedirect = () => {
      // Check if session storage is cleared
      if (!sessionStorage.length) {
        // Redirect to login page
        window.location.href = "/";
      }
    };
    

    // Redirect if cleared
    clearSessionStorageAndRedirect();
  }, []);
 
  const [imageSrc, setImageSrc] = useState("https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50")

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  const menu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item  onClick={handleLogout}> Logout</Menu.Item>
     
    </Menu>
  );
  const win =window.sessionStorage;
  const value = win.getItem('username');
  useEffect(() => {
    const storedMenuData = sessionStorage.getItem('menuItems');
    // alert("storedMenuData======="+typeof(storedMenuData))
    // alert("storedMenuData======="+storedMenuData);
    if (storedMenuData) {
      const data = JSON.parse(storedMenuData);
      //alert("---------"+typeof(data));
//alert("==========data======"+storedMenuData)
      const transformedMenuItems = data.map((menuItem) => {
  //       alert("======working===")
        if (menuItem.sub_menu && menuItem.sub_menu.length) {
          //  alert("======if condition=======")
          return {
            key: menuItem.main_menu_id,
            icon: <AiOutlineDashboard className='fs-4' />,
            label: menuItem.main_menu_name,
            children: menuItem.sub_menu.map((subMenuItem) => ({
              key: subMenuItem.sub_menu_action_name,
              icon: <AiOutlineDashboard className='fs-4' />,
              label: subMenuItem.sub_menu_name,
            })),
          };
        } else {
    //       alert("======else condition=======");
      //     console.log("-----------"+menuItem.main_menu_name);
          return {
            
            key: menuItem.main_menu_action_name,
            icon: <AiOutlineDashboard className='fs-4' />,
            label: menuItem.main_menu_name,
          };
        }
      });

      setMenuItems(transformedMenuItems);
    }
  //   // const win =window.sessionStorage;
  //   //     const value = win.getItem('username');
    
  //   var url = base_url+"getAllmenus?user_name="+value;

  //   fetch(url)
  //   // fetch('https://demo.omfysgroup.com/qpotapp/getAllmenus?user_name='+value)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const transformedMenuItems = data.map((menuItem) => {
  //         if (menuItem.sub_menu && menuItem.sub_menu.length) {
  //           return {
  //             key: menuItem.main_menu_id,
  //             icon: <AiOutlineDashboard className='fs-4' />,
  //             label: menuItem.main_menu_name,
  //             children: menuItem.sub_menu.map((subMenuItem) => ({
  //               key: subMenuItem.sub_menu_action_name,
  //               icon: <AiOutlineDashboard className='fs-4' />,
  //               label: subMenuItem.sub_menu_name,
  //             })),
  //           };
  //         } else {
  //           return {
  //             key: menuItem.main_menu_action_name,
  //             icon: <AiOutlineDashboard className='fs-4' />,
  //             label: menuItem.main_menu_name,
  //           };
  //         }
  //       });
       
  //       setMenuItems(transformedMenuItems);
  //     })
  //     .catch((error) => console.error('Error fetching menu items:', error));
  }, []
  );
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate=useNavigate();
 
  const [userData, setUserData] = useState({});
  useEffect(() => {
    var url2 = base_url+"userProfile?user_name="+value;
    fetch(url2)
    // fetch('https://uat.omfysgroup.com/qpotapp/userProfile?user_name='+value)
      .then(response => response.json())
      .then(data => setUserData(data));
  }, []);
  const creationDate = new Date(userData.creation_date);
// alert("creationDate"+creationDate)
  // Fetch the date string in the desired format
  const formattedDate = creationDate.toLocaleDateString();
  return (
    <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo' style={{background:'#2196F3'}}>
          <h2 className='text-white fs-5 text-center py-3 mb-0'>
            {/* <span className='sm-logo'>
              <img src='' />
            </span>
            
            <span className='lg-logo'></span> */}
            <span className='sm-logo'>
              <img src={Omfyslogo} style={{ width: '61%',marginTop: '-15px'}} />
            </span>
            <span className='lg-logo'> <img src={Omfyslogo} className='omfyslogo' />
             <img src={qpotlogo1} className='qpotimg'/></span>
          </h2>
        </div>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['']}
          onClick={({ key }) => {
            if (key === 'signout') {
              // handle logout functionality here
            } else {
              navigate(key);
            }
          }}
        >
          {menuItems.map((menuItem) => {
            if (menuItem.children) {
              return (
                <Menu.SubMenu key={menuItem.key} icon={menuItem.icon} title={menuItem.label}>
                  {menuItem.children.map((childMenuItem) => (
                    <Menu.Item key={childMenuItem.key} icon={childMenuItem.icon}>
                      {childMenuItem.label}
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              );
            } else {
              return (
                <Menu.Item key={menuItem.key} icon={menuItem.icon}>
                  {menuItem.label}
                </Menu.Item>
              );
            }
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
         <Header style={{ padding: 0, background: '#2196F3' }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
       <div style={{float:'right',marginRight: '23px'}}>
       <Dropdown overlay={menu} placement="bottomLeft">
       <Avatar size="square" icon={<UserOutlined />} />
  </Dropdown>
  </div>
          </Header>
        <Content
          style={{
            // margin: '24px 16px',
            // padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
       <div class="main-body" style={{margin:'20px'}}>
    
         
   
    <div class="row gutters-sm">
      <div class="col-md-4 mb-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-column align-items-center text-center">
            
      
         <form action="upload.php" method="post" encType="multipart/form-data">
      <label htmlFor="fileToUpload">
        <div
          className="profile-pic"
          style={{
            backgroundImage: `url(${imageSrc})`,
          }}
        >
          <span className="fa fa-camera"></span>
          <span>Change Image</span>
        </div>
      </label>
      <input
        type="file"
        name="fileToUpload"
        id="fileToUpload"
        onChange={handleImageChange}
      />
    </form>

              <div class="mt-3">
                <h4>{userData.first_name} {userData.last_name}</h4>
                <p class="text-secondary mb-1"> {userData.user_type}</p>
                <p class="text-muted font-size-sm"></p>
                 <button class="btn " style={{backgroundColor:'#2196F3',color:"white"}} onClick={handleLogout}>Logout</button>
            
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div class="col-md-8">
        <div class="card mb-3">
          <div class="card-body">
            
                
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">User Id</h6>
              </div>
              <div class="col-sm-3 text-secondary">
              {userData.user_name}
              </div>
              <div class="col-sm-3">
                <h6 class="mb-0">User Type </h6>
              </div>
              <div class="col-sm-3 text-secondary">
              {userData.user_type}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">First Name</h6>
              </div>
              <div class="col-sm-3 text-secondary">
              {userData.first_name} 
              </div>
              <div class="col-sm-3">
                <h6 class="mb-0">Last Name </h6>
              </div>
              <div class="col-sm-3 text-secondary">
              {userData.last_name}
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Email Id</h6>
              </div>
              <div class="col-sm-3 text-secondary">
              {userData.email_address}
              </div>
              <div class="col-sm-3">
                <h6 class="mb-0">Contact Number</h6>
              </div>
              <div class="col-sm-3 text-secondary">
              {userData.contact_number} 
              </div>
            </div>
            <hr />
            <div class="row">
            <div class="col-sm-3">
                <h6 class="mb-0">User Creation Date</h6>
              </div>
              <div class="col-sm-3 text-secondary">
              {userData.creation_date}
              </div>
              <div class="col-sm-3">
                <h6 class="mb-0">Status </h6>
              </div>
              <div class="col-sm-3 text-secondary">
              {userData.is_active} 
              </div>
            </div>
            <hr />

            <hr />
            <div class="row">
              <div class="col-sm-12">
                {/* <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
         </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;