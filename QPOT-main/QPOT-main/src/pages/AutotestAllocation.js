
// import React, { useState, useEffect } from 'react';

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
// import Table from './Table'
// import TaskCreation from './TaskCreation'
// const { Header, Sider, Content } = Layout;

// const AutotestAllocation = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   const navigate=useNavigate();
//   const handleLogout = () => {
//     // logout functionality here
//   }
//   const [menuItems, setMenuItems] = useState([]);
//   useEffect(() => {
//     fetch('https://demo.omfysgroup.com/qpotapp/getAllmenus?user_name=OMI-1050')
//       .then((response) => response.json())
//       .then((data) => {
//         const transformedMenuItems = data.map((menuItem) => {
//           if (menuItem.sub_menu && menuItem.sub_menu.length) {
//             return {
//               key: menuItem.main_menu_id,
//               icon: <AiOutlineDashboard className='fs-4' />,
//               label: menuItem.main_menu_name,
//               children: menuItem.sub_menu.map((subMenuItem) => ({
//                 key: subMenuItem.sub_menu_action_name,
//                 icon: <AiOutlineDashboard className='fs-4' />,
//                 label: subMenuItem.sub_menu_name,
//               })),
//             };
//           } else {
//             return {
//               key: menuItem.main_menu_action_name,
//               icon: <AiOutlineDashboard className='fs-4' />,
//               label: menuItem.main_menu_name,
//             };
//           }
//         });
//         setMenuItems(transformedMenuItems);
//       })
//       .catch((error) => console.error('Error fetching menu items:', error));
//   }, []);
//   return (
//     <Layout>
//        <Sider trigger={null} collapsible collapsed={collapsed}>
//         <div className='logo' style={{backgroundColor: '#2196F3' }}>
//           <h2 className='text-white fs-5 text-center py-3 mb-0'>
//             <span className='sm-logo'>
//               <img src='' />
//             </span>
//             <span className='lg-logo'>Dev Corner</span>
//           </h2>
//         </div>
//         <Menu
//           theme='dark'
//           mode='inline'
//           defaultSelectedKeys={['']}
//           onClick={({ key }) => {
//             if (key === 'signout') {
//               // handle logout functionality here
//             } else {
//               navigate(key);
//             }
//           }}
//           items={menuItems}
//         />
//       </Sider>
//       <Layout className="site-layout">
        
//         {/* <Header style={{ padding: 0, background: colorBgContainer }}>
//           {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//             className: 'trigger',
//             onClick: () => setCollapsed(!collapsed),
//           })}
          
//         </Header> */}
//          <Header style={{ padding: 0, background:  '#2196F3' }}>
//           {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//             className: 'trigger',
//             onClick: () => setCollapsed(!collapsed),
//           })}
//           <div style={{ float: 'right' }}>
//           <Avatar src="https://example.com/my-image.png" alt="User Image">
//   <Menu mode="horizontal" onClick={({ key }) => {
//     if (key === 'profile') {
//       // handle profile click
//     } else if (key === 'logout') {
//       handleLogout();
//     }
//   }}>
//     <Menu.Item key="profile">
//       <UserOutlined />
//       Profile
//     </Menu.Item>
//     <Menu.Item key="logout">
//       Logout
//     </Menu.Item>
//   </Menu>
// </Avatar>

//           </div>
//           </Header>
//         <Content
//           style={{
//             // margin: '24px 16px',
//             // padding: 24,
//             minHeight: 280,
//             background: colorBgContainer,
//           }}
//         >
//        <TaskCreation />
//          </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default AutotestAllocation;


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
const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
//   const navigate = useNavigate();
const win =window.sessionStorage;
  const handleLogout = () => {
  //  alert("logout");
    win.clear();
  //setUsername('');
  //setPassword('');
    window.location.href = "/";
  };
  useEffect(() => {
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
  const handleprofile=() =>{
    window.location.href = "/profile";
  }
  const menu = (
    <Menu>
      <Menu.Item onClick={handleprofile}>Profile</Menu.Item>
      <Menu.Item  onClick={handleLogout}> Logout</Menu.Item>
     
    </Menu>
  );
  useEffect(() => {
    const win =window.sessionStorage;
        const value = win.getItem('username');
    fetch('https://demo.omfysgroup.com/qpotapp/getAllmenus?user_name='+value)
      .then((response) => response.json())
      .then((data) => {
        const transformedMenuItems = data.map((menuItem) => {
          if (menuItem.sub_menu && menuItem.sub_menu.length) {
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
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate=useNavigate();
 
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
        <TaskCreation />
         </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;