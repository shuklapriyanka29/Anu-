// // import React, { useState } from 'react';

// // import {
// //   MenuFoldOutlined,
// //   MenuUnfoldOutlined,
// //   UploadOutlined,
// //    UserOutlined,
// //   // VideoCameraOutlined,
// // } from '@ant-design/icons';
// // import { Layout, Menu, theme } from 'antd';
// // import { AiOutlineDashboard } from 'react-icons/ai';
// // import { Outlet, useNavigate } from 'react-router-dom';
// // import  Dashboard  from '../pages/Dashboard';


// // const { Header, Sider, Content } = Layout;

// // const MainLayout = () => {
// //   const [collapsed, setCollapsed] = useState(false);
// //   const {
// //     token: { colorBgContainer },
// //   } = theme.useToken();
// //   const navigate=useNavigate();
// //   const handleLogout = () => {
// //     // logout functionality here
// //   }
// //   return (
// //     <Layout>
// //       <Sider trigger={null} collapsible collapsed={collapsed}>
// //         <div className="logo" >
// //         <h2 className='text-white fs-5 text-center py-3 mb-0'>
// //           <span className='sm-logo'>DC</span>
// //           <span className='lg-logo'>Dev Corner</span>
// //         </h2>
// //         </div>
// //         <Menu
// //           theme="dark"
// //           mode="inline"
// //           defaultSelectedKeys={['']}
// //           onClick={({key})=>{
// //               if(key=="signout")
// //               {

// //               }
// //               else{
// //                 navigate(key);
// //               }
// //           }}
// //           items={[
// //             {
// //               key: '',
// //               icon: <AiOutlineDashboard className='fs-4'/>,
// //               label: 'Dashboard',
// //             },
// //             {
// //               key: 'Administrator',
// //               icon: <AiOutlineDashboard className='fs-4'/>,
// //               label: 'Administrator',
// //               children:[
// //                 {
// //                   key: 'usermanagement',
// //                   icon: <AiOutlineDashboard className='fs-4'/>,
// //                   label: 'User Management',
// //                 },
// //                 {
// //                   key: 'projectmanagement',
// //                   icon: <AiOutlineDashboard className='fs-4'/>,
// //                   label: 'Project Management',
// //                 },
// //                 {
// //                   key: 'autestallocation',
// //                   icon: <AiOutlineDashboard className='fs-4'/>,
// //                   label: 'Autotest Allocation',
// //                 },
// //               ]
// //             },
// //             {
// //               key: 'manualtesting',
// //               icon: <UploadOutlined className='fs-4'/>,
// //               label: 'Manual Testing',
// //             },
// //             {
// //               key: 'automationtesting',
// //               icon: <UploadOutlined className='fs-4'/>,
// //               label: 'Automation Testing',
// //               children:[
// //                 {
// //                   key: 'runautomation',
// //                   icon: <AiOutlineDashboard className='fs-4'/>,
// //                   label: 'Run Automation',
// //                 },
// //                 {
// //                   key: 'reporthistory',
// //                   icon: <AiOutlineDashboard className='fs-4'/>,
// //                   label: 'Report History',
// //                 },
// //               ]
// //             },
// //           ]}
// //         />
// //       </Sider>
// //       <Layout className="site-layout">
        
// //         {/* <Header style={{ padding: 0, background: colorBgContainer }}>
// //           {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
// //             className: 'trigger',
// //             onClick: () => setCollapsed(!collapsed),
// //           })}
          
// //         </Header> */}
// //          <Header style={{ padding: 0, background: colorBgContainer }}>
// //           {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
// //             className: 'trigger',
// //             onClick: () => setCollapsed(!collapsed),
// //           })}
// //           <div style={{ float: 'right' }}>
// //             <Menu mode="horizontal" onClick={({ key }) => {
// //               if (key === 'profile') {
// //                 // handle profile click
// //               } else if (key === 'logout') {
// //                 handleLogout();
// //               }
// //             }}>
            
             
// //               <Menu.Item key="profile">
// //                 <UserOutlined />
// //                 Profile
// //               </Menu.Item>
// //               <Menu.Item key="logout">
// //                 Logout
// //               </Menu.Item>
// //             </Menu>
// //           </div>
// //           </Header>
// //         <Content
// //           style={{
// //             margin: '24px 16px',
// //             padding: 24,
// //             minHeight: 280,
// //             background: colorBgContainer,
// //           }}
// //         >
// //           Content<Dashboard />
// //          </Content>
// //       </Layout>
// //     </Layout>
// //   );
// // };

// // export default MainLayout;

// import React, { useState } from 'react';

// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   UploadOutlined,
//    UserOutlined,
//   // VideoCameraOutlined,
// } from '@ant-design/icons';
// import { Layout, Menu, theme } from 'antd';
// import { AiOutlineDashboard } from 'react-icons/ai';
// import { Outlet, useNavigate } from 'react-router-dom';
// import  Dashboard  from '../pages/Dashboard';
// import { Avatar } from 'antd';

// const { Header, Sider, Content } = Layout;

// const MainLayout = () => {
//     const [collapsed, setCollapsed] = useState(false);
//     const {
//       token: { colorBgContainer },
//     } = theme.useToken();
//     const navigate = useNavigate();
  
//     const handleLogout = () => {
//       // logout functionality here
//     };
  
//     const handleMenuClick = ({ key }) => {
//       if (key === 'profile') {
//         // show profile functionality here
//       } else if (key === 'logout') {
//         handleLogout();
//       }
//     };
  
//     return (
//       <Layout>
//         <Layout className="site-layout">
//           <Header style={{ padding: 0, background: colorBgContainer }}>
//             {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//               className: 'trigger',
//               onClick: () => setCollapsed(!collapsed),
//             })}
//             <div style={{ float: 'right' }}>
//               <Avatar src="https://example.com/my-image.png" alt="User Image">
//                 <Menu mode="horizontal" onClick={handleMenuClick}>
//                   <Menu.Item key="profile">
//                     <UserOutlined />
//                     Profile
//                   </Menu.Item>
//                   <Menu.Item key="logout">
//                     Logout
//                   </Menu.Item>
//                 </Menu>
//               </Avatar>
//             </div>
//           </Header>
//         </Layout>
//       </Layout>
//     );
//   };
  

// export default MainLayout;

// // import * as React from 'react';
// // import Box from '@mui/material/Box';
// // import Avatar from '@mui/material/Avatar';
// // import Menu from '@mui/material/Menu';
// // import MenuItem from '@mui/material/MenuItem';
// // import ListItemIcon from '@mui/material/ListItemIcon';
// // import Divider from '@mui/material/Divider';
// // import IconButton from '@mui/material/IconButton';
// // import Typography from '@mui/material/Typography';
// // import Tooltip from '@mui/material/Tooltip';
// // import PersonAdd from '@mui/icons-material/PersonAdd';
// // import Settings from '@mui/icons-material/Settings';
// // import Logout from '@mui/icons-material/Logout';

// // export default function AccountMenu() {
// //   const [anchorEl, setAnchorEl] = React.useState(null);
// //   const open = Boolean(anchorEl);
// //   const handleClick = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };
// //   const handleClose = () => {
// //     setAnchorEl(null);
// //   };
// //   return (
// //     <React.Fragment>
// //       <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
// //         <Typography sx={{ minWidth: 100 }}>Contact</Typography>
// //         <Typography sx={{ minWidth: 100 }}>Profile</Typography>
// //         <Tooltip title="Account settings">
// //           <IconButton
// //             onClick={handleClick}
// //             size="small"
// //             sx={{ ml: 2 }}
// //             aria-controls={open ? 'account-menu' : undefined}
// //             aria-haspopup="true"
// //             aria-expanded={open ? 'true' : undefined}
// //           >
// //             <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
// //           </IconButton>
// //         </Tooltip>
// //       </Box>
// //       <Menu
// //         anchorEl={anchorEl}
// //         id="account-menu"
// //         open={open}
// //         onClose={handleClose}
// //         onClick={handleClose}
// //         PaperProps={{
// //           elevation: 0,
// //           sx: {
// //             overflow: 'visible',
// //             filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
// //             mt: 1.5,
// //             '& .MuiAvatar-root': {
// //               width: 32,
// //               height: 32,
// //               ml: -0.5,
// //               mr: 1,
// //             },
// //             '&:before': {
// //               content: '""',
// //               display: 'block',
// //               position: 'absolute',
// //               top: 0,
// //               right: 14,
// //               width: 10,
// //               height: 10,
// //               bgcolor: 'background.paper',
// //               transform: 'translateY(-50%) rotate(45deg)',
// //               zIndex: 0,
// //             },
// //           },
// //         }}
// //         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
// //         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
// //       >
// //         <MenuItem onClick={handleClose}>
// //           <Avatar /> Profile
// //         </MenuItem>
// //         <MenuItem onClick={handleClose}>
// //           <Avatar /> My account
// //         </MenuItem>
// //         <Divider />
// //         <MenuItem onClick={handleClose}>
// //           <ListItemIcon>
// //             <PersonAdd fontSize="small" />
// //           </ListItemIcon>
// //           Add another account
// //         </MenuItem>
// //         <MenuItem onClick={handleClose}>
// //           <ListItemIcon>
// //             <Settings fontSize="small" />
// //           </ListItemIcon>
// //           Settings
// //         </MenuItem>
// //         <MenuItem onClick={handleClose}>
// //           <ListItemIcon>
// //             <Logout fontSize="small" />
// //           </ListItemIcon>
// //           Logout
// //         </MenuItem>
// //       </Menu>
// //     </React.Fragment>
// //   );
// // }


// import React, { useState } from 'react';

// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   UploadOutlined,
//    UserOutlined,
//   // VideoCameraOutlined,
// } from '@ant-design/icons';
// import { Layout, Menu, theme } from 'antd';
// import { AiOutlineDashboard } from 'react-icons/ai';
// import { Outlet, useNavigate } from 'react-router-dom';
// import  Dashboard  from '../pages/Dashboard';


// const { Header, Sider, Content } = Layout;

// const MainLayout = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   const navigate=useNavigate();
//   const handleLogout = () => {
//     // logout functionality here
//   }
//   return (
//     <Layout>
//       <Sider trigger={null} collapsible collapsed={collapsed}>
//         <div className="logo" >
//         <h2 className='text-white fs-5 text-center py-3 mb-0'>
//           <span className='sm-logo'>DC</span>
//           <span className='lg-logo'>Dev Corner</span>
//         </h2>
//         </div>
//         <Menu
//           theme="dark"
//           mode="inline"
//           defaultSelectedKeys={['']}
//           onClick={({key})=>{
//               if(key=="signout")
//               {

//               }
//               else{
//                 navigate(key);
//               }
//           }}
//           items={[
//             {
//               key: '',
//               icon: <AiOutlineDashboard className='fs-4'/>,
//               label: 'Dashboard',
//             },
//             {
//               key: 'Administrator',
//               icon: <AiOutlineDashboard className='fs-4'/>,
//               label: 'Administrator',
//               children:[
//                 {
//                   key: 'usermanagement',
//                   icon: <AiOutlineDashboard className='fs-4'/>,
//                   label: 'User Management',
//                 },
//                 {
//                   key: 'projectmanagement',
//                   icon: <AiOutlineDashboard className='fs-4'/>,
//                   label: 'Project Management',
//                 },
//                 {
//                   key: 'autestallocation',
//                   icon: <AiOutlineDashboard className='fs-4'/>,
//                   label: 'Autotest Allocation',
//                 },
//               ]
//             },
//             {
//               key: 'manualtesting',
//               icon: <UploadOutlined className='fs-4'/>,
//               label: 'Manual Testing',
//             },
//             {
//               key: 'automationtesting',
//               icon: <UploadOutlined className='fs-4'/>,
//               label: 'Automation Testing',
//               children:[
//                 {
//                   key: 'runautomation',
//                   icon: <AiOutlineDashboard className='fs-4'/>,
//                   label: 'Run Automation',
//                 },
//                 {
//                   key: 'reporthistory',
//                   icon: <AiOutlineDashboard className='fs-4'/>,
//                   label: 'Report History',
//                 },
//               ]
//             },
//           ]}
//         />
//       </Sider>
//       <Layout className="site-layout">
        
//         {/* <Header style={{ padding: 0, background: colorBgContainer }}>
//           {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//             className: 'trigger',
//             onClick: () => setCollapsed(!collapsed),
//           })}
          
//         </Header> */}
//          <Header style={{ padding: 0, background: colorBgContainer }}>
//           {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//             className: 'trigger',
//             onClick: () => setCollapsed(!collapsed),
//           })}
//           <div style={{ float: 'right' }}>
//             <Menu mode="horizontal" onClick={({ key }) => {
//               if (key === 'profile') {
//                 // handle profile click
//               } else if (key === 'logout') {
//                 handleLogout();
//               }
//             }}>
            
             
//               <Menu.Item key="profile">
//                 <UserOutlined />
//                 Profile
//               </Menu.Item>
//               <Menu.Item key="logout">
//                 Logout
//               </Menu.Item>
//             </Menu>
//           </div>
//           </Header>
//         <Content
//           style={{
//             margin: '24px 16px',
//             padding: 24,
//             minHeight: 280,
//             background: colorBgContainer,
//           }}
//         >
//           Content<Dashboard />
//          </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default MainLayout;

import React, { useState,useEffect } from 'react';
import { UserOutlined } from '@ant-design/icons';
import {MenuFoldOutlined, MenuUnfoldOutlined,} from '@ant-design/icons';
import { Avatar, Layout, Menu, theme } from 'antd';
import { AiOutlineDashboard } from 'react-icons/ai';
import {  useNavigate } from 'react-router-dom';
import MyImage from './logo.jpeg';
import api from './BaseURL';
// import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  var base_url = api.defaults.baseURL;
   const win =window.sessionStorage;
  const handleLogout = () => {
   alert("logout");
    win.clear();
  //setUsername('');
  //setPassword('');
    window.location.href = "/";
  };
  const handleprofile=() =>{
    window.location.href = "/profile";
  }
  const menu = (
    <Menu>
      <Menu.Item onClick={handleprofile}>Profile</Menu.Item>
      <Menu.Item  onClick={handleLogout}> Logout</Menu.Item>
     
    </Menu>
  );
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState([]);
  ;
  useEffect(() => {
    const win =window.sessionStorage;
        const value = win.getItem('username');
        var url = base_url+"getAllmenus?user_name="+value;
    // fetch('https://demo.omfysgroup.com/qpotapp/getAllmenus?user_name='+value)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const transformedMenuItems = data.map((menuItem) => {
          if (menuItem.sub_menu.length > 0) {
            alert("SubmenuItem Action")
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

            return {
              key: menuItem.main_menu_action_name,
              icon: <AiOutlineDashboard className='fs-4' />,
              label: menuItem.main_menu_name,
            };
          }
        });
        setMenuItems(transformedMenuItems);
      })
      .catch((error) => console.error('Error fetching menu items:', error));
  }, []);
  return (
    <Layout>
       <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo' style={{background: '#2196F3' }}>
          <h2 className='text-white fs-5 text-center py-3 mb-0'>
            <span className='sm-logo'>
            <img src={MyImage} style={{textAlign:'center'}}/>
            </span>
            {/* <span className='lg-logo'></span>
             <img src="./logo.jpeg"  /> */}
            {/* <span style={{color:''}}>Qpot</span> */}
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
       <div style={{float:'right'}}>
       <Dropdown overlay={menu} placement="bottomLeft">
       <Avatar size="square" icon={<UserOutlined />} />
  </Dropdown>
  </div>
          </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {/* Content<Dashboard /><Cards /> */}
         </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;