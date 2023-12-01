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

//   useEffect(() => {
//     var requestOptions = {
//       method: 'GET',
//       redirect: 'follow'
//     };
    
//     fetch("https://uat.omfysgroup.com/qpotapp/getAllmenus?user_name=OMI-0076", requestOptions)
//       .then(response => response.text())
//       .then(result => {console.log(result)
//       var menu=JSON.parse(result)
//     alert(menu[0].main_menu_id)})
//       .catch(error => console.log('error', error));
//   }, []);
//   return (
//     <Layout>
//       <Sider trigger={null} collapsible collapsed={collapsed}>
//         <div className="logo" >
//         <h2 className='text-white fs-5 text-center py-3 mb-0'>
//           <span className='sm-logo'><img src="" /></span>
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
//                 alert(key)
//                 navigate(key);
                
//               }
//           }}
//           items={[
//             {
//               key:'',
//               icon: <AiOutlineDashboard className='fs-4'/>,
//               label: 'Dashboard',
//             },
//             {
//               key: 'Administrator',
//               icon: <AiOutlineDashboard className='fs-4'/>,
//               label: 'Administrator',
//               children:[
//                 {
//                   key: '/usermanagement',
//                   icon: <AiOutlineDashboard className='fs-4'/>,
//                   label: 'User Management',
//                 },
//                 {
//                   key: '/projectmanagement',
//                   icon: <AiOutlineDashboard className='fs-4'/>,
//                   label: 'Project Management',
//                 },
//                 {
//                   key: '/autestallocation',
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
        
        
        
//       </Layout>
//     </Layout>
//   );
// };

// export default MainLayout;


// import React, { useState, useEffect } from 'react';
// import { Layout, Menu } from 'antd';
// import { AiOutlineDashboard } from 'react-icons/ai';
// import { Outlet, useNavigate } from 'react-router-dom';

// const { Header, Sider, Content } = Layout;

// const MainLayout = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const navigate = useNavigate();

//   const [menuItems, setMenuItems] = useState([]);

//   useEffect(() => {
//     fetch('https://demo.omfysgroup.com/qpotapp/getAllmenus?user_name=OMI-0076')
//       .then((response) => response.json())
//       .then((data) => {

//         alert(data);

//         // for(var i=0;i<data.length;i++)
//         // {
//           // if(data[i].sub_menu).length > 0)
//           // {
//           //   alert(data[i].sub_menu.sub_menu_action_name+"-------"+data[i].sub_menu.sub_menu_name);
//           // }
//         // }

//         const transformedMenuItems = data.map((menuItem) => {
          
//           if (menuItem.sub_menu.length > 0) {
//             alert(menuItem.main_menu_name);
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
//       <Sider trigger={null} collapsible collapsed={collapsed}>
//         <div className='logo'>
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
//       <Layout className='site-layout'>
//         {/* Content goes here */}
//       </Layout>
//     </Layout>
//   );
// };

// export default MainLayout;


// import React, { useState, useEffect } from 'react';
// import { Layout, Menu } from 'antd';
// import { AiOutlineDashboard } from 'react-icons/ai';
// import { Outlet, useNavigate } from 'react-router-dom';

// const { Header, Sider, Content } = Layout;

// const MainLayout = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const navigate = useNavigate();

//   const [menuItems, setMenuItems] = useState([]);

//   useEffect(() => {
//     fetch('https://demo.omfysgroup.com/qpotapp/getAllmenus?user_name=OMI-0076')
//       .then((response) => response.json())
//       .then((data) => {

//         alert(data);

//         const transformedMenuItems = data.map((menuItem) => {
          
//           if (menuItem.sub_menu.length > 0) {
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
//       <Sider trigger={null} collapsible collapsed={collapsed}>
//         <div className='logo'>
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
//         >
//           {menuItems.map((menuItem) => {
//             if (menuItem.children) {
//               return (
//                 <Menu.SubMenu key={menuItem.key} icon={menuItem.icon} title={menuItem.label}>
//                   {menuItem.children.map((childMenuItem) => (
//                     <Menu.Item key={childMenuItem.key} icon={childMenuItem.icon}>
//                       {childMenuItem.label}
//                     </Menu.Item>
//                   ))}
//                 </Menu.SubMenu>
//               );
//             } else {
//               return (
//                 <Menu.Item key={menuItem.key} icon={menuItem.icon}>
//                   {menuItem.label}
//                 </Menu.Item>
//               );
//             }
//           })}
//         </Menu>
//       </Sider>
//       <Layout className='site-layout'>
//         <Outlet />
//       </Layout>
//     </Layout>
//   );
// };

// export default MainLayout;

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// export default class Menu extends Component {
//     constructor(props) {
//         super(props);
        
//         this.state = {
//             menus: []
//         };
//     }
//     handleClick = (event) => {
//       event.preventDefault();
//       const dropdownMenu = event.target.nextElementSibling;
//       dropdownMenu.classList.toggle("show");
//     }
//     componentDidMount(){
//         var requestOptions = {
//             method: 'GET',
//             redirect: 'follow'
//           };
//           const win =window.sessionStorage;
//         const value = win.getItem('username');

//           fetch("https://demo.omfysgroup.com/qpotapp/getAllmenus?user_name="+value, requestOptions)
//             .then(response => response.text())
//             .then(result => {
//                 console.log(result)
//                 var data=JSON.parse(result)
//                 this.setState({
//                     menus: data
//                 });
//             })
//             .catch(error => console.log('error', error));
//     }

//     render() {
//         return (
//           <div className='dashboard'>
//             <div className="dashboard-nav" style={{backgroundColor: 'black'}} >
//               <header style={{backgroundColor:'rgb(33, 150, 243)'}}>
//                 <a href="#!" className="menu-toggle" >
//                   <i className="fas fa-bars"></i>
//                 </a>
//                 <img src="logoqpot.jpeg" style={{width: '98%',borderRadius: '10px',marginLeft:'-7px',height: '49px'}}/>
//               </header>
//               <nav className="dashboard-nav-list">
//                 {/* <a href="/cards" className="dashboard-nav-item active">
//                   <i className="fas fa-tachometer-alt"></i> Dashboard
//                 </a> */}
//                 {this.state.menus.map((menu, index) => (
//                   <div key={index} className='dashboard-nav-dropdown'>
//                     <a href={menu.main_menu_link} className="dashboard-nav-item dashboard-nav-dropdown-toggle" id="myMenu" onClick={this.handleClick}>
//                       <i className="fas fa-list"></i> {menu.main_menu_name}
//                     </a>
//                     <div className='dashboard-nav-dropdown-menu'>
//                       {menu.sub_menu.map((subMenu, subIndex) => (
//                         <a key={subIndex} href={subMenu.sub_menu_action_name} className="dashboard-nav-dropdown-item"> <i className="subMenu.sub_menu_icon"></i>{subMenu.sub_menu_name}</a>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </nav>
//             </div>
//           </div>
//         )
//       }
// }


import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { AiOutlineDashboard } from 'react-icons/ai';
import { Outlet, useNavigate } from 'react-router-dom';
import api from './BaseURL';
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  var base_url = api.defaults.baseURL;
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const win =window.sessionStorage;
    const value = win.getItem('username');
    var url = base_url+"getAllmenus??user_name="+value;
    fetch(url)
    // fetch("https://demo.omfysgroup.com/qpotapp/getAllmenus??user_name="+value)
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
      {/* <Sider trigger={null} collapsible collapsed={collapsed}>
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
      </Sider> */}
      <Layout className='site-layout'>
        {/* <Outlet /> */}
      </Layout>
    </Layout>
  );
};

export default MainLayout;
