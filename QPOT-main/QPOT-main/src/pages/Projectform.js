import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SendIcon from '@mui/icons-material/Send';
import Stack from "@mui/material/Stack";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const Projectform = () => {
  const [disable, setDisable] = React.useState(false);
  const navigate = useNavigate();
  const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);  
      const [projecttype, setProjecttype] = React.useState('');
      const [projectid, setProjectid] = React.useState('');
      
     

      const handleProject=() =>
      {
        var projectname=document.getElementById("projectname").value;
        var projectdesc=document.getElementById("projectdesc").value;
        var plannedstartdate=document.getElementById("plannedstartdate").value;
        var plannedenddate=document.getElementById("plannedenddate").value;
        var batfilepath=document.getElementById("batfilepath").value;
        
       alert(projectname)
       alert(projectdesc)
       alert(plannedstartdate);
       alert(plannedenddate);
       alert(assignedto)
        if(projecttype=="")
        {
            alert("Please select the project type")
        }
        else if(assignedto=="")
        {
          alert("Please enter the assign project")
        }
        else if(projectname=="")
        {
          alert("Please enter the project name")
        }
        else if(projectdesc=="")
        {
          alert("Please enter the project description")
        }
        else if(plannedstartdate=="")
        {
          alert("Please select the planned start date")
        }
        else if(plannedenddate=="")
        {
          alert("Please select planned end date")
        }
        
        else if(batfilepath=="")
        {
          alert("Please enter the batfile path")
          
        }
        else{
          const win =window.sessionStorage;
          const value = win.getItem('username');
          var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "project_name": projectname,
  "project_des": projectdesc,
  "planned_start_date": plannedstartdate,
  "planned_end_date": plannedenddate,
  "batch_file_address": batfilepath,
  "created_by": value,
  "last_updated_by": value,
  "assigned_to": assignedto
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://uat.omfysgroup.com/qpotapp/saveQpotProjects", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
          setDisable(true)
          alert("Your request successfully save.")
          navigate(0)
        }
      }
     
      const [assignedto, setAssignedTo] = useState('');
      const [userDetails, setUserDetails] = useState([]);
    
    
    
      const getUserDetailsForAssignedTo = async () => {
        try {
          const response = await axios.get('https://uat.omfysgroup.com/qpotapp/getUserDetailsForAssignedTo');
          setUserDetails(response.data);
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        getUserDetailsForAssignedTo();
      }, []);
     
  return (
    <div>
      <Button variant="outlined" sx={{ width:180}} style={{marginLeft:'-25px'}} onClick={handleOpen}>Create Project</Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style}>
      <Typography variant="h6" gutterBottom label={'margin="none"'}>
          Project Creation
      </Typography>
      <Divider />
      <div className='row my-3'>
      <div className='col-sm-6'>
      <FormControl sx={{  minWidth: 250 }} size="small">
      <InputLabel id="demo-select-small">Project Type</InputLabel>
      <Select labelId="demo-select-small" id="projecttype" value={projecttype} label="Project Type Code"  onChange={(event) => setProjecttype(event.target.value)}>
          <MenuItem value="supportservicecontract">Support Service Contract</MenuItem>
          <MenuItem value="poc">POC</MenuItem>
          <MenuItem value="training">Training</MenuItem>
          <MenuItem value="productimplementation">Production Implementation</MenuItem>
          <MenuItem value="r&d">R & D</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>
  </div>
  <div className='col-sm-6'>
  <FormControl sx={{ minWidth: 250 }} size="small">
      <InputLabel id="demo-select-small">Assigned To</InputLabel>
      <Select labelId="demo-select-small" id="assignedto" name="assignedto" value={assignedto} label="Assigned To"  onChange={(event) => setAssignedTo(event.target.value)}>
        <MenuItem value="select" disabled>Select</MenuItem>
        {userDetails.map(user => (
          <MenuItem key={user.emp_id} value={user.user_name}>{user.first_name + ' ' + user.last_name}</MenuItem>
        ))}
      </Select>
    </FormControl>

  </div>
  <div className='col-sm-6 my-3' >
  <TextField id="projectname" label="Project Name" variant="outlined" size="small" style={{width:'250px'}}/>
 
  
  </div>
  <div className='col-sm-6 my-3' >
  <TextField id="projectdesc" label="Project Description" variant="outlined" size="small" style={{width:'250px'}} />
 
  
  </div>
  
  <div className='col-sm-6 '>
  {/* <TextField id="outlined-basic" sx={{width: 200}} label="User Creation Date" type="date" variant="outlined" size="small" /> */}
  <TextField
        id="plannedstartdate"
        label="Planned Start Date"
        type="date"
        sx={{width: 250}}
        variant="outlined"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
      />
      
  </div>
  <div className='col-sm-6 '>
  {/* <TextField id="outlined-basic" sx={{width: 200}} label="User Creation Date" type="date" variant="outlined" size="small" /> */}
  <TextField
        id="plannedenddate"
        label="Planned End Date"
        type="date"
        sx={{width: 250}}
        variant="outlined"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
      />
      
  </div>
 
  <div className="col-sm-6 my-3">
    
  <TextField
       TextField id="batfilepath" label="Batch File Path" variant="outlined" size="small" style={{width:'250px'}}
       
      />
  </div>
 
  
  </div>
  <Stack spacing={1} direction="row" sx={{ ml: 2 }}>
              <Button
                variant="contained"
                orientation="horizontal"   onClick={() => navigate(0)}
              >
                Back
              </Button>
              <Button variant="contained" onClick={handleProject} disabled={disable}>Create Project</Button>
            </Stack>
  </Box>
</Modal>
    </div>
  )
}

export default Projectform

