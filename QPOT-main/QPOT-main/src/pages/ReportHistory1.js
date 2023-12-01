
import React, { useState, useEffect } from 'react';
import Omfyslogo from './download-modified.png'
import qpotlogo1 from './qpotlogo1.jpeg'
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import DownloadIcon from '@mui/icons-material/Download';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
   UserOutlined,
  // VideoCameraOutlined,
} from '@ant-design/icons';
import { MDBDataTable } from 'mdbreact';
import Cards from './Cards'
import { Layout, Menu, theme } from 'antd';
import { AiOutlineDashboard } from 'react-icons/ai';
import { Outlet, useNavigate } from 'react-router-dom';
import { Dropdown } from 'antd';
import { Avatar } from 'antd';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
const { Header, Sider, Content } = Layout;
const ReportHistory1 = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [testingtype,setTestingtype]=useState("");
  const [selectqualityengineer, Setselectqualityengineer] = useState("");
  const [disable, setDisable] = React.useState(false);
  const [disable1, setDisable1] = React.useState(true);
const handleChange = async (event) => {
    var selectqualityengineer = event.target.value;
      // const userType = event.target.value;
    // alert(employeeCode)
    Setselectqualityengineer(selectqualityengineer);
    //  alert(selectqualityengineer)
    var testingtype = event.target.value;
    setTestingtype(testingtype)
    alert(testingtype)
}

const [data, setData] = useState({
    columns: [
      {
        label: "Project Id",
        field: "projectid",
        sort: "asc",
        width: 160,
      },
      {
        label: "Project Name",
        field: "projectname",
        sort: "asc",
        width: 270,
      },
       {
        label: "Quality Engineer",
        field: "qualityengineer",
        sort: "asc",
        width: 100,
      },
      {
        label: "Last Execution Date",
        field: "lastexecutiondate",
        sort: "asc",
        width: 200,
      },
      // {
      //   label: "Run",
      //   field: "report",
      //   sort: "asc",
      //   width: 100,
      // },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 150,
        textAlign: "center",
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 150,
        textAlign: "center",
      },
    ],
    rows: [],
  });
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
 
 
  const showdate=()=>{
    var a=document.getElementById("startdate").value;
    // alert(a);
 
     var startdate=document.getElementById("startdate").value;
     var enddate=document.getElementById("enddate").value;
    if(startdate==""){
      alert("Please select the start date");

    }
    else if(enddate==""){
      alert("Please select the end date");
    }
    else if(selectqualityengineer=="")
    {
      alert("Please select quality engineer")
    }
    else if(testingtype===""){
      alert("Please select testing type")
    }
    else{
      setDisable(true)
      setDisable1(false)
      const win =window.sessionStorage;
        const value = win.getItem('username');
        // alert(value)
        // alert(selectqualityengineer);
        fetch("https://uat.omfysgroup.com/qpotapp/getReportsDateWise?user_name="+value+"&start_date="+startdate+"&end_date="+enddate+"&employee="+selectqualityengineer)
      .then((response) => response.json())
      .then((result) => {
        const rows = result.map((report) => ({
                projectid: report.project_id,
                projectname: report.project_name,
                qualityengineer:report.user_name,
                lastexecutiondate: report.last_update_date,
                action:(<Button variant="contained" size="small" style={{
    height: '26px'
}}  disabled={report.generate_status} ><a href={"https://uat.omfysgroup.com/qpotmongo/uploadreports/"+report.report_url}><DownloadIcon sx={{ fontSize: 20 }}/></a></Button>),
                status: report.status    
                                                                     
        }));

        setData({ ...data, rows });
      })
      .finally(() => {
        
      });
;
    }
   }
   const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 10));
   const today = new Date().toISOString().slice(0, 10);

  
  const handleDate = (event) => {
    setStartDate(event.target.value);
  };
 const handlerefresh = () => {
  window.location.reload();
 }
  return (
    <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo' style={{background: '#2196F3' }}>
          <h2 className='text-white fs-5 text-center py-3 mb-0'>
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
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <div className="row" >
            
            <div className="col-sm-2 ">
                
            <TextField
                id="startdate"
                label="Start Date"
                type="date"
                sx={{ width: 150 }}
                variant="outlined"
                size="small"
                timeFormat={false}
                inputProps={{ min: "1900-01-01", max: today }}
                selected={startDate}
                onChange={handleDate}
                InputLabelProps={{
                  shrink: true,
                }}
              />
             
            </div>
                 
            <div className="col-sm-2 ">
                
                <TextField
                    id="enddate"
                    label="End Date"
                    type="date"
                    sx={{ width: 150 }}
                    variant="outlined"
                    size="small"
                    inputProps={{ min: "1900-01-01", max: today }}
                    selected={startDate}
                onChange={handleDate}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                 
                </div>
                <div  className="col-sm-2">
                <FormControl sx={{ minWidth: 150 }} size="small">
                <InputLabel id="demo-select-small">
                 User
                </InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="tester"
                  value={selectqualityengineer}
                  label="user"
                //   onChange={(event) => Setselectqualityengineer(event.target.value)}
                onChange={handleChange}
                >
                  <MenuItem value="select" disabled="disabled">Select</MenuItem>
                   <MenuItem value="All">All</MenuItem>
                  <MenuItem value="OMI-1046">Khushboo Londe</MenuItem>
                  <MenuItem value="OMI-1050">Kautilya Pandit</MenuItem>
                </Select>
              </FormControl>
                </div>
                <div  className="col-sm-3">
                <FormControl sx={{ minWidth: 180 }} size="small">
                <InputLabel id="demo-select-small">
                 Testing Type
                </InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="testertype"
                  value={testingtype}
                  label="Testing Type"
                //   onChange={(event) => Setselectqualityengineer(event.target.value)}
                onChange={handleChange}
                >
                  <MenuItem value="select" disabled="disabled">Select</MenuItem>
                   <MenuItem value="automation">Automation Testing</MenuItem>
                  <MenuItem value="manualtesting">Manual Testing</MenuItem>
                  
                </Select>
              </FormControl>
                </div>
                <div className="col-sm-3">
                
                <Button
                variant="contained"
                  onClick={showdate} disabled={disable}
              >
              View Report
              </Button>
              <Button
                variant="contained" sx={{ bgcolor: ''}} disabled={disable1}
                refresh="true" style={{marginLeft:'20px'}} onClick={handlerefresh}
              >
             Reset
              </Button>
            </div>
           
            </div>
            <div className="card my-4">
            <div className="card-header">
              <div className='row'>
                <div className='col-sm-10'>
                <h5 style={{fontWeight:''}}>Report History:</h5>
                </div>
                 <div className='col-sm-2'>
                
                 </div>
              </div>
            </div>
            <div className="card-body">
             <MDBDataTable id="myForm" striped bordered small data={data}/> 
            </div>
            
        </div>
         </Content>
      </Layout>
    </Layout>
  );
};

export default ReportHistory1;