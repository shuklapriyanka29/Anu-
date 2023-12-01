import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import Button from '@mui/material/Button';
import AttachmentIcon from '@mui/icons-material/Attachment';
import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import html2canvas from 'html2canvas';
import { styled } from '@mui/system';
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
   UserOutlined, 
} from '@ant-design/icons';
import { useRef } from 'react';
import jsPDF from 'jspdf';
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
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
import { MenuItem } from '@mui/material';
import { red } from '@mui/material/colors';
import api from './BaseURL';

const { Header, Sider, Content } = Layout;
const Dashboard = () => {
  var PMbaseURL = api.defaults.PMbaseURL;
  var base_url = api.defaults.baseURL;
  
 
  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };
  const [selectedValue, setSelectedValue] = useState('');

  // const handleSelectChange = (event) => {
  //   setSelectedValue(event.target.value);
  //   var value1111=event.target.value;
  //   alert("==========="+value1111)
  // };
  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };
  // const switchStyles = {
  //   color: 'blue ', // Change this to the desired color
  //   '&.Mui-checked': {
  //     color: 'blue', // Change this to the desired color when the switch is checked
  //   },
  // };
  const [toggleValue, setToggleValue] = useState();

  const handleToggleChange = (event) => {
    // setToggleValue(event.target.checked);
    var toggleValue=document.getElementById("customSwitches").checked
    // alert("==========="+toggleValue)
  };

  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 220px;
    margin-top: 2px;
    resize:none;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 5px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 24px ${
      theme.palette.mode === 'dark' ? blue[900] : blue[100]
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );
  const reportTemplateRef = useRef(null);
  
  

  const [isAttachmentDisabled, setIsAttachmentDisabled] = useState(true);
  const [isCommentsectionDisabled,setIsCommentsectionDisabled]=useState(true)
  const [isIconDisabled, setIsIconDisabled] = useState(true);
  const [isRadioButtonDisabled, setIsRadioButtonDisabled] = useState(true);
  
 const [isCommentUpdate,setIsCommentUpdate]=useState(true)
 

const [activeMenu, setActiveMenu] = useState(null);
    const handleuploadcomment = () =>{
     
     
          var mytridforupdate=document.getElementById("tr_id_comment").value;
          // alert("====tridcomment"+mytridforupdate)
        
        var passorfailed=document.getElementById("commentpassorfailed"+mytridforupdate).checked;
        // alert("===========passorfailed===="+passorfailed);
        var updatecomment_textarea=document.getElementById("updatecomment_textarea").value;
        var formdata = new FormData();
        formdata.append("tr_id", mytridforupdate);
        formdata.append("qpot_action", passorfailed);
        formdata.append("qpot_comments", updatecomment_textarea);
        formdata.append("", "");

var requestOptions = {
 method: 'POST',
 body: formdata,
 redirect: 'follow'
};
var url1 = PMbaseURL+"getTestingQpotdatabyActionandComments";
fetch(url1, requestOptions)
// fetch("https://demo.omfysgroup.com/project-managementQpotAPi/qpot/getTestingQpotdatabyActionandComments", requestOptions)
 .then(response => response.text())
 .then(result => console.log(result))
 .catch(error => console.log('error', error));
      if(passorfailed==="true"){
        var formdata = new FormData();
formdata.append("tr_id  ", mytridforupdate);
formdata.append("qpotstatus", "Pass");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};
var url2 = PMbaseURL+"getTestingdatabyAllStataus";
fetch(url2,requestOptions)
// fetch("https://demo.omfysgroup.com/project-managementQpotAPi/qpot/getTestingdatabyAllStataus", requestOptions)
  .then(response => response.text())
  .then(result => {console.log(result)
 }
  )
  .catch(error => console.log('error', error));
      }
    }
    
  function fillselect(tr_id,status)
  {
    const isDisabled = status === "Accepted";
    const handleSelectChange = (event) => {
      const selectedValue = event.target.value;
      // Do something with the selected value
      console.log(selectedValue);
      var aaaa=document.getElementById("selectstatus"+tr_id).value;
    // alert("=========="+aaaa)
    if(aaaa==="Pass"){
      // alert("Is action is pass")
      

    }
    else{
      
    }
    }
    switch(status) {
      case 'Completed':
        return <select value={taskStatusupdate[tr_id]} id={"selectstatus"+tr_id}   onChange={handleSelectChange}
        // onChange={handleSelectstatus} 

        >
          <option value="Select" disabled>Select</option>
        <option value="Pass" selected>Pass</option>
        <option value="Fail">Fail</option>
        
      </select>;
        case 'In Progress':
          return <select value={taskStatusupdate[tr_id]} id={"selectstatus"+tr_id}  onChange={handleSelectChange}
          // onChange={handleSelectstatus} 
          disabled={isDisabled}
          >
            <option value="Select" disabled>Select</option>
        <option value="Pass">Pass</option>
        <option value="Fail" selected>Fail</option>
        </select>;
        case 'Open':
          return <select value={taskStatusupdate[tr_id]} id={"selectstatus"+tr_id}   onChange={handleSelectChange}
          // onChange={handleSelectstatus}
            disabled={isDisabled}
          >
            <option value="Select" disabled selected>Select</option>
        <option value="Pass" disabled>Pass</option>
        <option value="Fail"disabled >Fail</option>
        </select>;
      default:
        return '';
    }
    
  }
  
  const [collapsed, setCollapsed] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);
	// const generatePdf = async () => {
		
  //   var requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow'
  //   };
    
  //   fetch("https://demo.omfysgroup.com/project-managementQpotAPi/qpot/getClearanccecertificatebyPm?tr_id=309", requestOptions)
  //     .then(response => response.text())
  //     .then(result => console.log(result))
  //     .catch(error => console.log('error', error));
   
  //   }
  
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
  const handleFile = (e) => {
    console.log(e.target.files);
  }
  const menu = (
    <Menu>
      <Menu.Item onClick={handleprofile}>Profile</Menu.Item>
      <Menu.Item  onClick={handleLogout}> Logout</Menu.Item> 
    </Menu>
  );  
  const handleCommentBox = (event) =>{
    var commentbox=document.getElementById("comment_textarea").value;
    // alert("-----comment==========="+commentbox)
    // alert("insidecommentbox");
    
    // alert("---------"+selectionfile)
    setSelectedTestingPhase(selectedtestingphase)
    // alert("======selectedtestingphase====="+selectedtestingphase)
    if(commentbox===""){
      alert("Please enter comment");
    }
    else if(selectedtestingphase===""){
      alert("Please select testing phase")
    }
    else{
      var commentdescription=document.getElementById("comment_textarea").value;
 
  
  var filedata = document.getElementById("myInput");
const selectedFiles = filedata.files; 
console.log(selectedFiles);
const value = win.getItem('username');
var settrid1 = document.getElementById("trid").value;
// alert(settrid1);
// alert("-------" + settrid1);




var apiCalls = [];
var file =[];
// alert("length of file----------------"+selectedFiles.length);
for (var i = 0; i < selectedFiles.length; i++) {
  // alert("in loop-------------------");
   file = selectedFiles[i];
  // alert("===========file====="+file.name)
  // alert("settrid1------"+settrid1);
var formdata = new FormData();
formdata.append("tr_id", settrid1);
formdata.append(" emp_code", value);
formdata.append("comments", commentdescription);
  formdata.append("uploadfile", selectedFiles[i]);  // Append file name along with the file
formdata.append("testing_phase", selectedtestingphase);
console.log("-----------------"+selectedFiles[i])
var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};
var url3 = PMbaseURL+"getuploadedfileafteracceptance";
fetch(url3,requestOptions)
// fetch("https://demo.omfysgroup.com/project-managementQpotAPi/qpot/getuploadedfileafteracceptance", requestOptions)
  .then(response => response.text())
  .then(result => {console.log(result)
     alert("Your request upload successfully")
     navigate(0)
  })
  .catch(error => console.log('error', error));
}
    //  navigate(0)
      
    }
  }
  // function uncheckedradio(event) {
  //   const radioButton = event.target;
  //   radioButton.checked = !radioButton.checked;
  // }
  
  // const handlecommentemptyornot = (event) =>
  // {
  //   // var commentradiobutton=document.getElementById("comment_radio").checked;
  //   // alert("====commentradiobutton==="+commentradiobutton);
  //   var tableRows =document.getElementsByClassName("pass_fail_comment");
  //   // alert("=====length"+ tableRows.length)
  //   var tr_id=0;
  //   var pointer=0;
  //   for (let i = 0; i < tableRows.length; i++)
  //   {
  //     if(tableRows[i].checked)
  //     {
  //       tr_id=tableRows[i].value
  //       pointer=(i+1);
  //       break;
  //     }
  //       // alert(tableRows[i].value)
  //     }
  //     if(tr_id>0){
        
  //         // alert('calling Api to take action.')
  //         // alert("=====apicalling tr id"+tr_id);
  //         var commentsend=document.getElementById("comment_passorfail"+tr_id).value;
  //         var commmentaction=document.getElementById("selectstatus"+tr_id).value;
  //         // alert("======commentsend========="+commentsend);
  //         // alert("======commmentaction========"+commmentaction)
  //         if(commmentaction=="Select")
  //         {
            
  //             alert("Please select action at row no. "+pointer);

  //         }
  //         else{
  //           // alert("integrate api")
  //           var formdata = new FormData();
  //       formdata.append("tr_id", tr_id);
  //       formdata.append("qpot_action",commmentaction);
  //       formdata.append("qpot_comments",commmentaction);
  //       formdata.append("", "");

  //       var requestOptions = 
  //       {
  //       method: 'POST',
  //       body: formdata,
  //       redirect: 'follow'
  //       };

  //       fetch("https://demo.omfysgroup.com/project-managementQpotAPi/qpot/getTestingQpotdatabyActionandComments", requestOptions)
  //       .then(response => response.text())
  //       .then(result => {console.log(result)
  //         alert("Your request submitted successfully.")
  //       })
  //       .catch(error => console.log('error', error));
  //         }
  //     }else{
  //       alert("please select rows to take action.")
  //     }
    
     
  // }
  const [files, setFiles] = useState([]);
  const [isFileListVisible, setIsFileListVisible] = useState(false);
  const handleFileChange = (event) => {
    const fileList = Array.from(event.target.files);
    setFiles([...files, ...fileList]);
    setIsFileListVisible(true);
  };

  const handleFileRemove = (file) => {
    const updatedFiles = files.filter((f) => f !== file);
    setFiles(updatedFiles);
  };


  const handlecommentemptyornot = (event) => {
    var tableRows = document.getElementsByClassName("pass_fail_comment");
    var checkedRadioButtons = [];
    var tr_id = 0;
    var pointer = 0;
  
    for (let i = 0; i < tableRows.length; i++) {
      if (tableRows[i].checked) {
        checkedRadioButtons.push(tableRows[i]);
        tr_id = tableRows[i].value;
        pointer = i + 1;
      }
    }
  
    if (checkedRadioButtons.length === 1) {
      var commentsend = document.getElementById("comment_passorfail" + tr_id).value;
      var commmentaction = document.getElementById("selectstatus" + tr_id).value;
      // alert("===="+commentsend)
      if (commmentaction === "Select") {
        alert("Please select an action at row no. " + pointer);
      } else {
        var formdata = new FormData();
        formdata.append("tr_id", tr_id);
        formdata.append("qpot_action", commmentaction);
        formdata.append("exception_comments", commentsend);
        formdata.append("", "");
  
        var requestOptions = {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        };
        var url4 = PMbaseURL+"getTestingQpotdatabyActionandComments";
        fetch(url4,requestOptions)
        // fetch("https://demo.omfysgroup.com/project-managementQpotAPi/qpot/getTestingQpotdatabyActionandComments", requestOptions)
          .then(response => response.text())
          .then(result => {
            console.log(result);
            alert("Your request is submitted successfully.");
            navigate(0)
          })
          .catch(error => console.log('error', error));
      }
    } else {
      alert("Please select a single row to take action.");
    }
  }
  
 const [taskStatusupdate,settaskstatusUpdate]=useState("")
  const [data, setData] = useState({
    columns: [
      {
        label: '',
        field: 'commentaction',
        sort: 'asc',
        width: '200',
        style: { textAlign: 'center' } 
      },
      {
        label: 'Project Id',
        field: 'projectid',
        sort: 'asc',
        width: '100px',
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
        width: '20%',
        style: { textAlign: 'center' } 
      },
            {
              label: 'Task Name',
              field: 'taskname',
              sort: 'asc',
              width: '20%',  
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
              label: 'Need by Date',
              field: 'needbydate',
              sort: 'asc',
              width: 150,  
              style: { textAlign: 'center' } 
            },
            {
              label: 'Priority',
              field: 'testingpriority',
              sort: 'asc',
              width: 150,  
              style: { textAlign: 'center' } 
            },
            
            
            {
              label: 'Attachment History',
              field: 'attachment',
              sort: 'asc',
              width: 150,  
              style: { textAlign: 'center' } 
            },
            {
              label: 'Upload File',
              field: 'uploadfile',
              sort: 'asc',
              width: 150,  
              style: { textAlign: 'center' } 
            },
            {
              label: 'Result',
              field: 'action',
              sort: 'asc',
              width: 150,  
              style: { textAlign: 'center' } 
            },
            {
              label: 'Action Required',
              field: 'action_required',
              sort: 'asc',
              width: 150,  
              style: { textAlign: 'center' } 
            },
            {
              label: 'Exception',
              field: 'comment',
              sort: 'asc',
              width: 150,  
              style: { textAlign: 'center' } 
            },
            {
              label: 'Status',
              field: 'status',
              sort: 'asc',
              width: 150,  
              style: { textAlign: 'center' } 
            }
            ,
            {
              label: '',
              field: 'testingrequest',
              sort: 'asc',
              width: 150,  
              style: { textAlign: 'center' } 
            },
          ],
    rows: [],
  })
  const [selectedtestingphase, setSelectedTestingPhase] = useState("");
  const handleChange =(event) =>{
     var selectedtestingphase=event.target.value
    setSelectedTestingPhase(selectedtestingphase)
    // alert("======selectedtestingphase====="+selectedtestingphase)
    }
    
    const removeTrigger =() =>{
      var colorXhange= document.getElementsByClassName("trigger");
      if(colorXhange.length > 0)
      {
        colorXhange[0].classList.remove("trigger");
      }
       
    
        }
    // 
    
  useEffect(() => {
    setInterval(removeTrigger,500);
    //var colorXhange= document.getElementsByClassName("trigger");
    //colorXhange[0].classList.remove("trigger");
    //colorXhange.style.color = red;
    const win =window.sessionStorage;
      const value = win.getItem('username');
     
  // fetch("https://demo.omfysgroup.com/project-managementQpotAPi/qpot/getTestingdatanotcompleted?empdata="+value)
  // fetch("https://demo.omfysgroup.com/project-managementQpotAPi/qpot/getTestingdatabygrouptesterid?empdata="+value)  
  var url5 = PMbaseURL+"getTestingdatabygrouptesterid?empdata="+value; 
  fetch(url5)
  .then((response) => response.json())
    .then((result) => {
      console.log(result)
      const rows = result.map((report) => ({
          tr_id:report.tr_id,
          commentaction:report.is_accepted === 'Y' ?(<input type="checkbox" value={""+report.tr_id} id="comment_radio" disable={setIsRadioButtonDisabled} className="pass_fail_comment" name="comment_radio"  style={{margin:'10px'}}/>):
          (<input type="checkbox" value={""+report.tr_id} id="comment_radio" className="pass_fail_comment" name="comment_radio" disabled={isRadioButtonDisabled} style={{margin:'10px'}}/>),
          projectid: report.project_id,
          taskid: report.task_Alloc_Id,
          projectname: report.name_of_project,
          taskname:report.main_Task,
          testingassignedby: report.creator_name,
          testingassignedto:report.group_name,
          
          testingrequestdate:report.creation_date_trans,
          
          needbydate:report.need_by_date_trans,
          testingpriority:report.priority,
          
          attachment:  report.is_accepted === 'Y' ?(<a variant="text" size="small"   disable={setIsAttachmentDisabled} data-toggle="modal" data-target="#exampleModal" onClick={event => fillChilddata(report.tr_id)} style={{ color: 'blue' }} // Set the initial text color to blue
          onMouseOver={event => event.target.style.color = 'black'} // Change text color to black on hover
          onMouseOut={event => event.target.style.color = 'blue'}><AttachmentIcon style={{fontSize: '20px'}}/></a>):
          (<a variant="text" size="small"  style={{color:'black'}}  disabled={isAttachmentDisabled} data-toggle="modal" data-target="#exampleModal" onClick={event => fillChilddata(report.tr_id)}><AttachmentIcon style={{fontSize: '20px'}}/></a>),                                                              
          uploadfile:report.is_accepted === 'Y' ?(<FileUploadIcon style={{cursor:'pointer'}} onClick={ () => handleOpen(report.tr_id)
            // handleSettrid(report.tr_id);
            }   disable={isIconDisabled}  ><AttachmentIcon style={{fontSize: '15px'}}/></FileUploadIcon>):
          (<FileUploadIcon disable={setIsIconDisabled} style={{backgroundColor:'gray',color:'white'}}><AttachmentIcon style={{fontSize: '15px'}}/></FileUploadIcon>),                                                              
          action_required: report.test_flag === 'Y' ? (<FormControlLabel required
          
          control={<Switch id="customSwitches"  defaultChecked checked={toggleValue} onChange={handleToggleChange}/>}
        />):(<FormControlLabel required
          
          control={<Switch id="customSwitches"   checked={toggleValue} onChange={handleToggleChange}/>}
        />) ,
       action : fillselect(report.tr_id,report.testingstatus),
      comment:report.is_accepted === 'Y' ?(<StyledTextarea aria-label="empty textarea" id={"comment_passorfail"+report.tr_id} disable={setIsCommentsectionDisabled} placeholder="Enter exception..." />):
      (<StyledTextarea aria-label="empty textarea" id={"comment_passorfail"+report.tr_id}  disabled={isCommentsectionDisabled} placeholder="Enter exception..." />
      )
      
      ,
      status:report.testingstatus,
      testingrequest:
          //  <Button variant="text" size="small" type="button" className="btn btn-primary"    disabled={isButtonDisabled} onClick={event=>handleTestingRequest(report.tr_id)}>Accept</Button>,                                                              
          report.is_accepted === 'N' ?   
           (<a variant="text" size="small"  className="" disable={setIsButtonDisabled} onClick={event=>handleTestingRequest(report.tr_id)}
           style={{ color: 'blue' }} // Set the initial text color to blue
  onMouseOver={event => event.target.style.color = 'black'} // Change text color to black on hover
  onMouseOut={event => event.target.style.color = 'blue'}>Accept</a>
          ): (
            <a variant="text" size="small"  className="" disabled={isButtonDisabled}  style={{color:'black',textTransform:'capitalize'}}>Accept</a>
        ),
  
     
      
 
      }))
      
     
      setData({ ...data, rows });
      
    })
    .finally(() => {
      
    });
}, []);
const [disableComplete, setDisableComplete] = useState(false);  
const [disableCertificate,setDisableCertificate]=useState(false)
const handleClick = (event, tr_id) => {
    
    // alert("-------"+tr_id)
    // var settrid1=document.getElementById("trid").value
    // alert(settrid1)
    // var aa = document.getElementById("selectstatus"+tr_id).value;
    // alert("select value-------------"+aa);
    // var formdata = new FormData();
    // formdata.append("tr_id ", tr_id);
    // formdata.append("qpotstatus",aa );
    
    // var requestOptions = {
    //   method: 'POST',
    //   body: formdata,
    //   redirect: 'follow'
    // };
    
    // fetch("https://demo.omfysgroup.com/project-managementQpotAPi/qpot/getTestingdatabyAllStataus", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));

  
} 
var mytr_id = 0;
 const [data1, setData1] = useState({
    columns: [
      {
        label: 'Sr No.',
        field: 'srno',
        sort: 'asc',
        width: 160,
        style: { textAlign: 'center' } 
      },
      {
        label: 'Testing Id',
        field: 'testingid',
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
            {
              label: 'Comment',
              field: 'comment',
              sort: 'asc',
              width: 200,
              style: { textAlign: 'center' } 
            },
          ],
    rows: [],
  });
     
  const fillChilddata = (tr_id) =>{
  
    //  alert(tr_id)
     
      const win =window.sessionStorage;
        const value = win.getItem('username');
   
    // fetch("https://demo.omfysgroup.com/project-managementQpotAPi/qpot/getTestingdatabyheaderid?tr_id="+tr_id)
      
    var url6 = PMbaseURL+"getTestingdatabyheaderid?tr_id="+tr_id;
    fetch(url6)
    .then((response) => response.json())
      .then((result) => {
      // alert("=====empid======"+value)
      console.log(result)
        const rows = result.map((report,index) => ({
          srno: index + 1,
          testingid: report.tr_id,
          filename: report.file_name,
           uploadedby: report.uploader_name,
           documentstatus:report.document_status,
          testingrequestdate:report.lastupdate_date_trans,
           attachment:( 
            <a  disabled={report.document_status !== 'Uploaded'}
              href={"https://demo.omfysgroup.com/SpringBootRestAPIMongoDB1/uploadTestingFile/" + report.object_Storage_Id}
              style={{ color: 'black !important' }}
            >
              <DownloadIcon sx={{ fontSize: 15 }} />
            </a>
        ),                                                              
           comment: report.comments,
          }));
        
        setData1({ ...data1, rows });
      })
      .finally(() => {})
  }
  // useEffect(() => {
  //   const win =window.sessionStorage;
  //       const value = win.getItem('username');
  //   fetch('https://demo.omfysgroup.com/qpotapp/getAllmenus?user_name='+value)
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
  // }, []);

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
 
  }, []);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate=useNavigate();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen = (tr_id) => {setOpen(true);
    // alert("========="+tr_id)-
    handleSettrid(tr_id);
}
const handleOpen1 = (tr_id) => {setOpen1(true);
  // alert("in handleOpen1");
  // alert("========="+tr_id);
  handleSettrid1(tr_id);
}
  const handleSettrid = (tr_id) =>{
    // alert("========="+tr_id)
    setTrid(tr_id)
    
  }
  const handleSettrid1 = (tr_id) =>{
    // alert("handleSettrid1---------------------------")
    // alert("========="+tr_id)
    document.getElementById("tr_id_comment").value=tr_id;
    setTrid(tr_id);
    // alert(document.getElementById("tr_id_comment").value);
  }
  const [disable, setDisable] = React.useState(false);   
  // const  callAPI =() =>{
  //   var fileupload=document.getElementById("upload_file").value;
  //   // alert("file-------"+fileupload)
  //   if(fileupload==="")  //   {
  //     alert("Please select file.")
  //   }
  //   else{
  //   const win =window.sessionStorage;
  //   const value = win.getItem('username');
  //   var settrid1=document.getElementById("trid").value
  //   // alert(settrid1)
  //   var filedata= document.getElementById("upload_file");
  //   const selectedFile = filedata.files[0];
  //   console.log(selectedFile);
  //   var formdata = new FormData();
  //   formdata.append("uploadfile",selectedFile);
  //   formdata.append("tr_id", settrid1);
  //   formdata.append("emp_code", value);
  //   // alert("----------------uploadqpot"+value);
  
    
  //   var requestOptions = {
  //     method: 'POST',
  //     body: formdata,
  //     redirect: 'follow'
  //   }
  //   alert("File uploaded successfully.")
  //   setDisable(true)
  //   navigate(0)
  //   fetch("https://demo.omfysgroup.com/project-managementQpotAPi/qpot/getuploadedfilebyqpot", requestOptions)
  //     .then(response => response.text())
  //     .then(result => {console.log(result)
  //    })
  
  //     .catch(error => console.log('error', error));}
      
  // }
  
      const handleClose = () => setOpen(false);
      const [trid, setTrid] = useState('');
      const [tr_id_comment, settr_id_comment] = useState('');
    //   const handleTestingRequest =(tr_id) =>{
    //     // alert("InsideCerticatefunction")
    //     // alert("Inside testingrequest")
    //     var formdata = new FormData();
    //     const win =window.sessionStorage;
    //         const value = win.getItem('username');
    //         //  var settrid1=document.getElementById("trid").value
            
    // formdata.append("tr_id  ", tr_id);
    // formdata.append("emp_code", value);
    
    // var requestOptions = {
    //   method: 'POST',
    //   body: formdata,
    //   redirect: 'follow'
    // };
    
    // // alert("=========tr_id"+tr_id)
    // fetch("https://demo.omfysgroup.com/project-managementQpotAPi/qpot/getupdatetesterid", requestOptions)
    //   .then(response => response.text())
    //   .then(result => {console.log(result)
    //   //  var  result1=JSON.stringify(result)
    //   //   alert("result1-----------"+result1)
    //     if(result=="\"Success\"")
    //     {
    //       const result123 = window.confirm('Are you sure you want to proceed?');
    //       // alert(result123)
    //        setIsAttachmentDisabled(false);
    //       navigate(0) 
    //     }
    //     else
    //     {
    //       alert("Testing request not accepted successfully")
    //       setIsAttachmentDisabled(true);
    //     }
    //   })
    //   .catch(error => console.log('error', error));
        
    //   }
    const handleTestingRequest = (tr_id) => {

      const result123 = window.confirm('Are you sure you want to proceed?');
      if (result123) {
        var formdata = new FormData();
  const win = window.sessionStorage;
  const value = win.getItem('username');
  
  formdata.append("tr_id", tr_id);
  formdata.append("emp_code", value);
  
  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  var url8 = PMbaseURL+"getupdatetesterid";
  fetch(url8,requestOptions)
  // fetch("https://demo.omfysgroup.com/project-managementQpotAPi/qpot/getupdatetesterid", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result);
      if (result=="\"Success\"") {
        alert("Testing request accepted successfully");
      } else {
        
        //setIsAttachmentDisabled(false);
      }
    })
    .catch(error => console.log('error', error));
        //setIsAttachmentDisabled(false);
        navigate(0);
      } else {
        //setIsAttachmentDisabled(true);
        //alert("Request cancelled.");
      }
  
};

      const handleClickMenu = (key) => {
        setActiveMenu(activeMenu === key ? null : key);
      };
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
           
           
            
            <div className="col-sm-6">
             
            {/* <label>Choose File</label> */}
  {/* <input type="file"
        id="upload_file"  
        multiple
        onChange={handleFile}
        
        sx={{width: 250}}
        variant="outlined"
        size="small"
       
      /> */}
       <input
        id="myInput"
        type="file"
        multiple
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    
      <button
        id="myButton"
        type="button"
        style={{ marginTop:'40px',border:'none',borderRadius: '5px', backgroundColor: '#fff', color: 'black' }}
        onClick={() => {
          document.getElementById('myInput').click();
          
        
        }}
      >

        + Choose File
      </button>

     
      {isFileListVisible && (

      <div id="myFiles" style={{marginTop:'10px',
    overflow: 'scroll',
    marginTop: '10px',
    width: '235px',
    height: '66px'
}}>
        {files.map((file, index) => (
          <p key={index}>
            {file.name}
            <span
              style={{ cursor: 'pointer', marginLeft: '10px' }}
              onClick={() => handleFileRemove(file)}
            >
              Remove
            </span>
          </p>
        ))}
      </div>
      )}
            </div>
            <div className="col-sm-6 my-3">
            <input type="textarea" aria-label="empty textarea" id="comment_textarea" placeholder="Enter comment..." style={{marginTop:'28px'}} />
              </div>
              <div className="col-sm-6 my-3">
              < FormControl sx={{  minWidth: 250 }} size="small">
      <InputLabel id="">Testing Phase</InputLabel>
      <Select  labelId="project-name-label" MenuProps={{
PaperProps: {style: {maxHeight: 200,overflow: 'auto',},},}}
          id="testing_phase" value={selectedtestingphase} label="Testing Phase" onChange={event=>handleChange(event)}>
          <MenuItem value="select" disabled >Select</MenuItem>
          <MenuItem value="1" >Phase 1</MenuItem>
          <MenuItem value="2" >Phase 2</MenuItem>
          <MenuItem value="3" >Phase 3</MenuItem>
          <MenuItem value="4" >Phase 4</MenuItem>
          <MenuItem value="5" >Phase 5</MenuItem>
          <MenuItem value="6" >Phase 6</MenuItem>
        </Select>
      </FormControl> 
             </div>
            </div>

            <Stack spacing={1} direction="row" sx={{ m: 2 }}>

              <Button
                variant="contained"
                orientation="horizontal" 
                style={{textTransform:'capitalize'}}
                onClick={() => navigate(0)}
              >
                Back
              </Button>
              <Button
                variant="contained"  onClick={event => handleCommentBox()}
                // onClick={callAPI}
                disabled={disable} style={{textTransform:'capitalize'}}
              >
               Upload 
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
        {/* <Menu
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
        </Menu> */}
        <Menu
  theme='dark'
  mode='inline'
  defaultSelectedKeys={['']}
  selectedKeys={[activeMenu]} 
  onClick={({ key }) => {
    if (key === 'signout') {
      // handle logout functionality here
    } else {
      setActiveMenu(key); 
      navigate(key);
    }
  }}
>
  {menuItems.map((menuItem) => {
    if (menuItem.children) {
      const isOpen = activeMenu === menuItem.key;
      return (
        <Menu.SubMenu
          key={menuItem.key}
          icon={menuItem.icon}
          title={menuItem.label}
          onTitleClick={() => handleClickMenu(menuItem.key)}
          open={isOpen}
        >
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
                 <h5 style={{fontWeight:''}}>Task List:</h5>
                 </div>
                  <div className='col-sm-2'>
                  <Button variant="contained" size="small" style={{marginTop: '7px',
    marginLeft: '90px'}} onClick={handlecommentemptyornot} >Forward</Button>
                  </div>
               </div>
             </div>
             <div className="card-body">
              <div className='table-cntainer' >
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
      <MDBDataTable responsive striped bordered small data={data1} id="table1" />  
      </div>
      <div class="modal-footer">
     
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content" style={{width:'70%'}}>
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update Comment</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" >
       
            <StyledTextarea aria-label="empty textarea" id="updatecomment_textarea" placeholder="Enter comment..." />
            <input type="hidden" id="tr_id_comment"/>
      
      </div>
      <div class="modal-footer">
      <Button
                variant="contained"
                orientation="horizontal" 
               
                onClick={() => navigate(0)}
              >
                Back
              </Button>
              <Button
                variant="contained"  
                onClick={handleuploadcomment}
                // onClick={callAPI}
                disabled={disable}
              >
               Upload comment
              </Button>
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