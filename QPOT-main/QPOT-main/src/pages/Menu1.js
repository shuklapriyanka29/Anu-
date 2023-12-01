

import React, { useState, useEffect } from 'react';

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
import { Avatar } from 'antd';

const { Header, Sider, Content } = Layout;

const Menu1 = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
//   const navigate = useNavigate();
  useEffect(() => {
    fetch('https://demo.omfysgroup.com/qpotapp/getAllmenus?user_name=OMI-1050')
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
  const handleLogout = () => {
    // logout functionality here
  }
  return (
    <Layout>
     <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo'>
          <h2 className='text-white fs-5 text-center py-3 mb-0'>
            <span className='sm-logo'>
              <img src='' />
            </span>
            <span className='lg-logo'>Dev Corner</span>
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
          items={menuItems}
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
          <Avatar src="https://example.com/my-image.png"
      alt="User Image" >
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
            </Avatar>
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
          Content<Dashboard />
         </Content>
      </Layout>
    </Layout>
  );
};

export default Menu1;