import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import api from './BaseURL';
const CreateTask = () => {
  var PMbaseURL = api.defaults.PMbaseURL;
  var base_url = api.defaults.baseURL;
  const navigate = useNavigate();
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [projectNames, setProjectNames] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [projectassignedby,setProjectAssignedBy]=useState("");
  const[taskname,setTaskName]=useState("")
  const[assign_omi_id,setassign_omi_id]=useState("")
  const [taskdescription,setTaskDescription]=useState("")
  useEffect(() => {
    const win =window.sessionStorage;
    const value = win.getItem('username');
    var url = base_url+"getqpotprojectNames?user_name="+value;
    // fetch("https://uat.omfysgroup.com/qpotapp/getqpotprojectNames?user_name="+value)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProjectNames(data);
      });
  }, []);
 
const [disable, setDisable] = React.useState(false);
const [projectid, setProjectid] = React.useState('');
const [projectassignedto,setProjectAssignedTo]=useState("")

  function formallocate(){
    // var selectedProject=event.target.value
    // setSelectedProject(selectedProject)
  
    var projectname=document.getElementById("projectname").value;
    var taskname=document.getElementById("taskname").value;
        var task_id=document.getElementById("projectid").value;
        var task_name=document.getElementById("taskname").value;
        var allocatestart=document.getElementById("allocationstartdate").value;
        var allocateend=document.getElementById("allocationenddate").value;
        var task_description=document.getElementById("taskdescription").value;
        var assigned_to=document.getElementById("assigned_to").value
        
        var projectname=document.getElementById("projectname").value;
        // var assignedBy=document.getElementById("assignedBy").value;
        // var assignedTo=document.getElementById("assignedTo").value;
        // alert(task_id);
        // alert(task_name)
        // alert(allocatestart);
        // alert(allocateend);
        // alert(assignedBy);
        // alert(assignedTo);
        
         if(selectedProject=="")
        {
          alert("Please select project name")
        }
        
        else if(task_name=="")
        {
          alert("Please enter task name")
        }
        else if(task_description=="")
        {
          alert("Please enter task description")
        }
        else if(allocatestart=="")
        {
          alert("Please select allocation start date")
        }
        else if(allocateend=="")
        {
          alert("Please select allocation end date")
        }
       
       else{
        const win =window.sessionStorage;
        const value = win.getItem('username');
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
alert(projectassignedto)
var raw = JSON.stringify({
  
    "project_id":task_id,
    "project_name":task_name,
    "status":"Open",
     "user_name":assigned_to,
    "created_by":value,
    "last_updated_by":value,
    "allocation_start_date":allocatestart,
    "allocation_end_date":allocateend,
    "task_name":task_name,
    "task_desc":task_description,

    // {
    //   "project_id":68,
    //   "project_name":"CRM",
    //   "status":"Open",
    //   "user_name":"OMI-1050",
    //   "created_by":"OMI-0076",
    //   "last_updated_by":"OMI-0076",
    //   "allocation_start_date":"2023-05-10",
    //   "allocation_end_date":"2023-05-10",
    //   "task_name":"Test xxx Module",
    //   "task_desc":"Des of XXX"
    //   }
});
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
// alert(raw);
var url2 = base_url+"saveqpotreports";

// fetch("https://uat.omfysgroup.com/qpotapp/saveqpotreports", requestOptions)
fetch(url2, requestOptions)
  .then(response => response.text())
  .then(result => {console.log(result)
  var result1=JSON.parse(result)
  // alert(result1.report_id)
  
  if(result1.report_id != "" && result1.report_id != undefined && result1.report_id != null)
  {
    setDisable(true)
    alert("Your request save successfully.")
    navigate(0)
  }
  else{
    alert("Somthing went wrong");
  }
console.log(result1)})
  .catch(error => console.log('error', error));
       }
  }

 
   const handleChange =(event) =>{
    var selectedProject=event.target.value
     setSelectedProject(selectedProject)
    alert(selectedProject)
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    var url3 = base_url+"getQpotProjectDetails?project_id="+selectedProject;
    // fetch("https://uat.omfysgroup.com/qpotapp/getQpotProjectDetails?project_id="+selectedProject, requestOptions)
    fetch(url3,requestOptions)
    .then((response) => response.text())
    .then((result) => {
      const win =window.sessionStorage;
      const value = win.getItem('username');
      console.log(result);
      var data = JSON.parse(result);
      
        var first_name = data.employee_name;
        //  alert(first_name)
       var qpot_PRO_ID=data.qpot_PRO_ID
       var project_OMI_Id=data.assigned_to
       setProjectid(qpot_PRO_ID)
      setProjectAssignedTo(first_name)
      setProjectAssignedBy(value)
      setassign_omi_id(project_OMI_Id)
    })
    .catch((error) => console.log("error", error));}
  return (
    <div> 
      <Button variant="outlined" onClick={handleOpen}>
        Allocate Task
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" gutterBottom label={'margin="none"'}>
          Allocate Task
          </Typography>

          <Divider />

          <div className="row my-3">
            <div className="col-sm-6 my-3">
            < FormControl sx={{  minWidth: 250 }} size="small">
      <InputLabel id="">Project Name</InputLabel>
      <Select  labelId="project-name-label" MenuProps={{
      PaperProps: {
        style: {
          maxHeight: 200,
          overflow: 'auto',
        },
      },
    }}
          id="projectname"
          value={selectedProject}
          label="Project Name"
          onChange={handleChange}>
          <MenuItem value="select" disabled >Select</MenuItem>
          {projectNames.map((project) => (
            <MenuItem key={project.qpot_PRO_ID} value={project.qpot_PRO_ID}>
              {project.project_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl> 
           
            </div>
            <div className="col-sm-6 my-3">
            <TextField
                id="projectid"
                label="Project Id"
                type="text" disabled
                sx={{ width: 250 }}
                variant="outlined"
                size="small" value={projectid}
                
              />
      
            </div>
            <div className="col-sm-6 my-3">
            <TextField
                id="taskname"
                label="Task Name"
                type="text" 
                sx={{width: 250 }}
                variant="outlined"
                size="small" value={taskname}
                onChange={(e) => setTaskName(e.target.value)}
              />
      
            </div>
            <div className="col-sm-6 my-3">
            <TextField
                id="taskdescription"
                label="Task Description"
                type="text" 
                sx={{ width: 250 }}
                variant="outlined"
                size="small" value={taskdescription}
                onChange={(e) => setTaskDescription(e.target.value)}
              />
      
            </div>
            <div className="col-sm-6 my-1">
              <TextField
                id="allocationstartdate"
                label="Allocation Start Date"
                type="date"
                sx={{ width: 250 }}
                variant="outlined"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="col-sm-6 ">
              {/* <TextField id="outlined-basic" sx={{width: 200}} label="User Creation Date" type="date" variant="outlined" size="small" /> */}
              <TextField
                id="allocationenddate"
                label="Allocation End Date"
                type="date"
                sx={{ width: 250 }}
                variant="outlined"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="col-sm-6 my-3">
            <TextField style={{width:'250px'}}
                id="projectassignedby"
                label="Project Assigned By"
                type="text"
                variant="outlined"
                size="small" disabled
                value={projectassignedby}
              />
            </div>
            <div className="col-sm-6 my-3">
            <TextField style={{width:'250px'}}
                id="projectassignedto"
                label="Project Assigned To"
                type="text" disabled
                variant="outlined"
                size="small"
                value={projectassignedto}
              />
              <input type="hidden" id="assigned_to" value={assign_omi_id}/>
            </div>

            <Stack spacing={1} direction="row" sx={{ ml: 2 }}>
              <Button
                variant="contained"
                orientation="horizontal"  onClick={() => navigate(0)}
              >
                Back
              </Button>
              <Button variant="contained" onClick={formallocate} disabled={disable}>Allocate Task</Button>
            </Stack>
          </div>
        </Box>
      </Modal>
    </div>
  );    
};

export default CreateTask;
