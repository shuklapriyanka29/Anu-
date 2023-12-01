import React, { useState } from 'react';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
   UserOutlined,
  // VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { AiOutlineDashboard } from 'react-icons/ai';
import { Outlet, useNavigate } from 'react-router-dom';
import  Dashboard  from '../pages/Dashboard';


const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate=useNavigate();
  const handleLogout = () => {
    // logout functionality here
  }
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" >
        <h2 className='text-white fs-5 text-center py-3 mb-0'>
          <span className='sm-logo'>DC</span>
          <span className='lg-logo'>Dev Corner</span>
        </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({key})=>{
              if(key=="signout")
              {

              }
              else{
                navigate(key);
              }
          }}

          
          const items={[
            {
              key: '',
              icon: <AiOutlineDashboard className='fs-4'/>,
              label: 'Dashboard',
            },
            {
              key: 'Administrator',
              icon: <AiOutlineDashboard className='fs-4'/>,
              label: 'Administrator',
              children:[
                {
                  key: 'usermanagement',
                  icon: <AiOutlineDashboard className='fs-4'/>,
                  label: 'User Management',
                },
                {
                  key: 'projectmanagement',
                  icon: <AiOutlineDashboard className='fs-4'/>,
                  label: 'Project Management',
                },
                {
                  key: 'autestallocation',
                  icon: <AiOutlineDashboard className='fs-4'/>,
                  label: 'Autotest Allocation',
                },
              ]
            },
            {
              key: 'manualtesting',
              icon: <UploadOutlined className='fs-4'/>,
              label: 'Manual Testing',
            },
            {
              key: 'automationtesting',
              icon: <AiOutlineDashboard className='fs-4'/>,
              label: 'Automation Testing',
              children:[
                {
                  key: 'runautomation',
                  icon: <AiOutlineDashboard className='fs-4'/>,
                  label: 'Run Automation',
                },
                {
                  key: 'reporthistory',
                  icon: <AiOutlineDashboard className='fs-4'/>,
                  label: 'Report History',
                },
              ]
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        
        {/* <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          
        </Header> */}
         <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <div style={{ float: 'right' }}>
            <Menu mode="horizontal" onClick={({ key }) => {
              if (key === 'profile') {
                // handle profile click
              } else if (key === 'logout') {
                handleLogout();
              }
            }}>
            
             
              <Menu.Item key="profile">
                <UserOutlined />
                Profile
              </Menu.Item>
              <Menu.Item key="logout">
                Logout
              </Menu.Item>
            </Menu>
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
          Content
          {/* <Dashboard /> */}
         </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

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
//           <Avatar src="https://example.com/my-image.png"
//       alt="User Image" >
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
//             </Avatar>
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