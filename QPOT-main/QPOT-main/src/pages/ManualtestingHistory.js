import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import Button from '@mui/material/Button';
import AttachmentIcon from '@mui/icons-material/Attachment';
import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import html2canvas from 'html2canvas';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
   UserOutlined, 
} from '@ant-design/icons';
import { useRef } from 'react';
import jsPDF from 'jspdf';
import ReportTemplate from './ReportTemplate';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Layout, Menu, theme } from 'antd';
import { AiOutlineDashboard } from 'react-icons/ai';
import {useNavigate } from 'react-router-dom';
import { Dropdown } from 'antd';
import { Avatar } from 'antd';
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import Omfyslogo from './download-modified.png'
import qpotlogo1 from './qpotlogo1.jpeg'
import api from './BaseURL';
const { Header, Sider, Content } = Layout;
const Dashboard = () => {
  var PMbaseURL = api.defaults.PMbaseURL;
  var base_url = api.defaults.baseURL
  const reportTemplateRef = useRef(null);

	const generatePdf = async () => {
		// const doc = new jsPDF({
		// 	format: 'a4',
		// 	unit: 'm',
		// });

		// // Adding the fonts.
		// doc.setFont('Inter-Regular', 'normal');

		// doc.html(reportTemplateRef.current, {
		// 	async callback(doc) {
		// 		await doc.save('document');
		// 	},
		// });
  
    const input = document.getElementById('report-template');
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    });
    pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
    pdf.save('report.pdf');
    }
  const [collapsed, setCollapsed] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  // const [loading, setLoading] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
const win =window.sessionStorage;
  const handleLogout = () => {
    win.clear();
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
 
  const [data, setData] = useState({
    columns: [
            {
              label: 'Project Id',
              field: 'projectid',
              sort: 'asc',
              width: 160,
              style: { textAlign: 'center' } 
            },
            {
              label: 'Task Id',
              field: 'taskid',
              sort: 'asc',
              width: '150',
              style: { textAlign: 'center' } 
            },
            {
              label: 'Project Name',
              field: 'projectname',
              sort: 'asc',
              width: 270,
              style: { textAlign: 'center' } 
            },
            {
              label: 'Task Name',
              field: 'taskname',
              sort: 'asc',
              width: 150,  
              style: { textAlign: 'center' } 
            },
            {
              label: 'Requested By',
              field: 'testingassignedby',
              sort: 'asc',
              width: 200,
              style: { textAlign: 'center' } 
            },
            {
              label:'Requested To',
              field: 'testingassignedto',
              sort: 'asc',
              width: 100,
              style: { textAlign: 'center' } 
            },
            {
              label: 'Request Date',
              field: 'testingrequestdate',
              sort: 'asc',
              width: 150,  
              style: { textAlign: 'center' } 
            },
            {
              label: 'Attachment',
              field: 'attachment',
              sort: 'asc',
              width: 150,  
              style: { textAlign: 'center' } 
            },
           
           
            {
              label: 'Task Status',
              field: 'taskstatus',
              sort: 'asc',
              width: 150,  
              style: { textAlign: 'center' } 
            },
            {
              label: 'Certificate',
              field: 'certificate',
              sort: 'asc',
              width: 150,  
              style: { textAlign: 'center' } 
            }
          ],
    rows: [],
  })
  const handleGeneratecertificate =() =>{
    // alert("InsideCerticatefunction")
  }
  useEffect(() => {
     
    const win =window.sessionStorage;
      const value = win.getItem('username');
      var url1 = PMbaseURL+"getTestingdatacompleted?empdata="+value;
      fetch(url1)
  // fetch("https://demo.omfysgroup.com/project-managementQpotAPi/qpot/getTestingdatacompleted?empdata="+value)
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      const rows = result.map((report) => ({
          tr_id:report.tr_id,
          projectid: report.project_id,
          taskid: report.task_Alloc_Id,
          projectname: report.name_of_project,
          taskname:report.main_Task,
          testingassignedby: report.creator_name,
          testingassignedto:report.group_name,
          testingrequestdate:report.creation_date_trans,
          attachment:
          
          <Button variant="text" size="small"  type="button"  className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={event => fillChilddata(report.tr_id)}><AttachmentIcon style={{fontSize: '20px'}}/></Button>
        
          ,                                                              
                                                                     
         
      
       taskstatus:report.testingstatus,
       certificate: 
      //  <> <DownloadIcon style={{cursor:'pointer'}} onClick={generatePdf}>File
      //  </DownloadIcon>	<div ref={reportTemplateRef}>
			// 	<ReportTemplate />
			// </div></>
        <Button variant="text" size="small" type="button" className="btn btn-primary"><a   href={`https://demo.omfysgroup.com/SpringBootRestAPIMongoDB1/uploadTestingCertificateFile/${report.certiobject_storage_id}`}><DownloadIcon style={{color:'black'}}/></a></Button>
 
    
      }))
      
     
      setData({ ...data, rows });
      
    })
    .finally(() => {
      
    });
}, []);
const [disableComplete, setDisableComplete] = useState(false);  
const [disableCertificate,setDisableCertificate]=useState(false)
const handleClick = (event, tr_id) => {
    
    alert("-------"+tr_id)
    // var settrid1=document.getElementById("trid").value
    // alert(settrid1)
    var formdata = new FormData();
    formdata.append("tr_id",tr_id ); 
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    var url2 = PMbaseURL+"getTestingdatabystatus";
fetch(url2, requestOptions)

    // fetch("https://demo.omfysgroup.com/project-managementQpotAPi/qpot/getTestingdatabystatus", requestOptions)
      .then(response => response.text())
      .then(result => {console.log(result)
      alert("Your request successfully save")
      navigate(0)
    })
      .catch(error => console.log('error', error));

  
} 
 const [data1, setData1] = useState({
    columns: [
      // {
      //   label: 'Testing Id',
      //   field: 'testingid',
      //   sort: 'asc',
      //   width: 160,
      //   style: { textAlign: 'center' } 
      // },
      {
        label: 'Sr No.',
        field: 'srno',
        sort: 'asc',
        width: 160,
        style: { textAlign: 'center' } 
      },
      {
        label: 'File Name',
        field: 'filename',
        sort: 'asc',
        width: 160,
        style: { textAlign: 'center' } 
      },
            {
              label: 'Uploaded By',
              field: 'uploadedby',
              sort: 'asc',
              width: 200,
              style: { textAlign: 'center' } 
            },
            {
              label:'Document Status',
              field: 'documentstatus',
              sort: 'asc',
              width: 100,
              style: { textAlign: 'center' } 
            },
            {
              label: 'Testing Request Date',
              field: 'testingrequestdate',
              sort: 'asc',
              width: 150,  
              style: { textAlign: 'center' } 
            },
            {
              label: 'Attachment',
              field: 'attachment',
              sort: 'asc',
              width: 150,  
              style: { textAlign: 'center' } 
            },
           
          ],
    rows: [],
  });
     
  const fillChilddata = (tr_id) =>{
    // setLoading(true);
    alert(tr_id)
     
      const win =window.sessionStorage; 
        const value = win.getItem('username');
        var url3 = PMbaseURL+"getTestingdatabyheaderid?tr_id="+tr_id;
        fetch(url3)

    // fetch("https://demo.omfysgroup.com/project-managementQpotAPi/qpot/getTestingdatabyheaderid?tr_id="+tr_id)
      .then((response) => response.json())
      .then((result) => {
      // alert("=====empid======"+value)
        const rows = result.map((report,index) => ({
          srno: index + 1,
          // testingid: report.tr_id,
          filename: report.file_name,
           uploadedby: report.uploader_name,
           documentstatus:report.document_status,
          testingrequestdate:report.lastupdate_date_trans,
           attachment:  <a  disabled={report.document_status !== 'Uploaded'}
           href={"https://demo.omfysgroup.com/SpringBootRestAPIMongoDB1/uploadTestingFile/" + report.object_Storage_Id}
           style={{ color: 'black !important' }}
         >
           <DownloadIcon sx={{ fontSize: 15 }} />
         </a>  ,
        
          }));

        setData1({ ...data1, rows });
      })
      .finally(() => {})
  }
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
 
  }, []
  );
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate=useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = (tr_id) => {setOpen(true);
    // alert("========="+tr_id)
    handleSettrid(tr_id);
}
  const handleSettrid = (tr_id) =>{
    // alert("========="+tr_id)
    setTrid(tr_id)
  }
  const [disable, setDisable] = React.useState(false);   
  const  callAPI =() =>{
    var fileupload=document.getElementById("upload_file").value;
    // alert("file-------"+fileupload)
    if(fileupload==="")
    {
      alert("Please select file.")
    }
    else{
    const win =window.sessionStorage;
    const value = win.getItem('username');
    var settrid1=document.getElementById("trid").value
    // alert(settrid1)
    var filedata= document.getElementById("upload_file");
    const selectedFile = filedata.files[0];
    console.log(selectedFile);
    var formdata = new FormData();
    formdata.append("uploadfile",selectedFile);
    formdata.append("tr_id", settrid1);
    formdata.append("emp_code", value);
    // alert("----------------uploadqpot"+value);
  
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    }
    alert("File uploaded successfully.")
    setDisable(true)
    navigate(0)
    var url4 = PMbaseURL+"getuploadedfilebyqpot";
fetch(url4, requestOptions)
    // fetch("https://demo.omfysgroup.com/project-managementQpotAPi/qpot/getuploadedfilebyqpot", requestOptions)
      .then(response => response.text())
      .then(result => {console.log(result)
     })
  
      .catch(error => console.log('error', error));}
      
  }
  
      const handleClose = () => setOpen(false);
      const [trid, setTrid] = useState('');

  return (
    <Layout>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6"  gutterBottom label={'margin="none"'}>
            Upload File:
          </Typography>

          <Divider />

          <div className="row my-3">
           
           
            
            <div className="col-sm-6 my-3">
             
            <label>Choose File</label>
  <TextField
        id="upload_file"  
       
        type="file"
        sx={{width: 250}}
        variant="outlined"
        size="small"
       
      />
            </div>
            </div>

            <Stack spacing={1} direction="row" sx={{ m: 2 }}>

              <Button
                variant="contained"
                orientation="horizontal" 
               
                onClick={() => navigate(0)}
              >
                Back
              </Button>
              <Button
                variant="contained" onClick={callAPI}
                disabled={disable}
              >
               Upload File
              </Button>
            </Stack>
            <input type="hidden" name="trid" id="trid" value={trid} onChange={(event)=>event.target.value} />
        </Box>
      </Modal>
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
       <div className="container-fluid my-4"  >
       <div className="row">
         <div className="col-12">
           <div className="card my-4" style={{ boxShadow: '1px 2px 9px #F4AAB9'}}>
             <div className="card-header">
               <div className='row'>
                 <div className='col-sm-10'>
                 <h5 style={{fontWeight:''}}>Project List:</h5>
                 </div>
                  <div className='col-sm-2'>
               
                  </div>
               </div>
             </div>
             <div className="card-body">
              <div className='table-cntainer'>
              <MDBDataTable responsive striped bordered small data={data} id="table"/> 
              </div>
             </div>
           </div>
           </div>
           </div>
           </div>
           <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content" style={{width:'170%'}}>
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Testing History</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" >
      {/* {loading ? <div>Loading...</div> : null} */}
      <MDBDataTable responsive striped bordered small data={data1} id="table1" />  
      </div>
      <div class="modal-footer">
     
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
