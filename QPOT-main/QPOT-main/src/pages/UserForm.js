import React,{useEffect,useRef} from "react";
import moment from 'moment';

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import api from './BaseURL';
import Stack from "@mui/material/Stack";
import axios from "axios";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
  var PMbaseURL = api.defaults.PMbaseURL;
  var base_url = api.defaults.baseURL;
  const inputRef = useRef(null);
  const navigate = useNavigate();
  
  // const handleClick = () => {
  //   navigate(0);
  // };
  const removeTrigger =() =>{
    var colorXhange= document.getElementsByClassName("trigger");
    if(colorXhange.length > 0)
    {
      colorXhange[0].classList.remove("trigger");
    }
     
  
      }
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

  const [EmployeeCode, setEmployeeCode] = useState("");
  const [userType, setUsertype] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [useremail, setEmailUser] = useState("");
  const [Password, setPassword] = useState("");
  const handleUserTypeChange = (event) => {
    setUsertype(event.target.value);
  };
  const [employeeData, setEmployeeData] = useState([]);
 

  useEffect(() => {
    setInterval(removeTrigger,500);
    // Fetch employee data from the API
    // var aa=document.getElementById("password-input").value='';
    var url =PMbaseURL +"getTestersemployeedata";
   
    // axios.get('https://demo.omfysgroup.com/project-managementQpotAPi/qpot/getTestersemployeedata')
    axios.get(url)
      .then(response => {
        // Update the employee data state with the retrieved data
        setEmployeeData(response.data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  }, []);

 
  const [disable, setDisable] = React.useState(false);
  const [isUserPresent, setIsUserPresent] = useState(false);
  const handleChange = async (event) => {
    const employeeCode = event.target.value;
      // const userType = event.target.value;
    //  alert(employeeCode)
    setEmployeeCode(employeeCode);
    //  setUsertype(userType)
    //  alert(userType)
   
  //   const userName = event.target.value;
  // alert(userName);
  // setUserName(userName);
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    var url2 = base_url+"checkuserAvailabilty?user_name="+employeeCode;
    fetch(url2,requestOptions)
    // fetch("https://demo.omfysgroup.com/qpotapp/checkuserAvailabilty?user_name="+employeeCode, requestOptions)
  .then(response => response.text())
  .then(result => {
      if (result === "Found") {
          console.log("Employee is present");
          // alert("========="+startDate)
          alert("The " +employeeCode+ " is already present in Qpot.")
          setDisable(true)
      } else {
          // console.log("Employee is not present");
          // alert("The" +employeeCode+ "is not present")
          setDisable(false)
      }
  })
  .catch(error => console.log('error', error));
    
  
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    var url3 =PMbaseURL +"getTestersemployeedatabyempcode?empdata=" + employeeCode;
    // fetch(
    //   "https://demo.omfysgroup.com/project-managementQpotAPi/qpot/getTestersemployeedatabyempcode?empdata=" +
    //     employeeCode,
    //   requestOptions
    // )
    fetch(url3,requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        var data = JSON.parse(result);
        if (data.length > 0) {
          var first_name = data[0].emp_first_name;
          // alert(first_name)
          var last_name = data[0].emp_last_name;
          var email_id = data[0].e_mail;
          
          setFirstName(first_name);
          setLastName(last_name);
          setEmailUser(email_id);
          // alert(`First Name: ${first_name}\nLast Name: ${last_name}\nEmail: ${email_id}`);
          // document.getElementById("firstname").readOnly = true
        }
      })
      .catch((error) => console.log("error", error));
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function formSubmit(event) {
    event.preventDefault();
    // const employeeCode = event.target.value;
    // const userType = event.target.value1;
    // alert(employeeCode)
   
    var check = document.getElementById("customSwitches");
      //var employeeCode1=document.getElementById("selectemp").value;
       //const employeeCode1 = event.target.value;
//         const employeeCode=document.getElementsByClassName("MuiSelect-nativeInput css-yf8vq0-MuiSelect-nativeInput");
//     const selectedValue = employeeCode[0].value;
// alert(selectedValue);
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var emailUser = document.getElementById("useremail").value;
    var password1 = document.getElementById("password-input").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    var usertype = document.getElementById("usertype").value;
    
    var status = '';
    const usercreatedate=document.getElementById("usercreatedate").value;
    // alert("------------"+EmployeeCode)
    if (EmployeeCode==="" ) {
      alert("Please select the employee Name.");
    } 
    else if(userType==="")
    {
      alert("Please select the User Type.");
    }
    else if(startDate===""){
      alert("Please select creation date.")
    }
    else if(password1==="")
    {
      alert("Please enter the password.");
    }
    else if(confirmPassword==="")
    {
      alert("Please enter the confirm password.");
      var password1 = document.getElementById("password-input").value;
      var confirmPassword = document.getElementById("confirmpassword").value;
      if(password1===confirmPassword){
        // alert("password are match");
         setDisable(false)
      }
      else{
        
        // alert("password are not match");
        // document.getElementById("password-input").value = "";
        document.getElementById("confirmpassword").value="";
        setDisable(false)
      }
    }
   
         else{
    // if (check.checked == true) {
    //   status='Y'
    //   // alert("checkedddddd");
    // } else {
    //   status='N'
    //   // alert("Notchecked");
    // }
    // alert(EmployeeCode);
    // alert(userType);
    // alert(firstName);
    // alert(lastName);
    // alert(emailUser);
    //  alert(usercreatedate);
    // alert(password1);
    // alert(confirmPassword);
    // alert(status);
    
   
    //  alert(check.checked);
   
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "profile_id": userType,
  "user_name": EmployeeCode,
  "password": password1,
  "first_name": firstName,
  "last_name": lastName,
  "contact_number": "7350322503",
  "email_address": emailUser,
  "is_active": "Y"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
var url4 = base_url+"saveQpotUsers";
fetch(url4,requestOptions)
// fetch("https://demo.omfysgroup.com/qpotapp/saveQpotUsers", requestOptions)
  .then(response => response.text())
  .then(result => {console.log(result)
  var data1=JSON.parse(result)
  // alert(data1.user_id);
  setDisable(true)
  if(data1.user_id!='' && data1.user_id!=null && data1.user_id!=undefined)
{
  if (password1 === confirmPassword) {
    // alert("passwords are match");
    setDisable(false);
    alert("User created successfully");
    navigate(0);
  } else {
    alert("Passwords do not match");
    document.getElementById("password-input").value = "";
    document.getElementById("confirmpassword").value = "";
    // setDisable(true);
  }
}
else{
  alert("Something went wrong. Please contact your support team");
}}
  
  )
  .catch(error => console.log('error', error));
  

  }
  }
  
  // password check
 const checkpassword =() =>
 {
  var password1 = document.getElementById("password-input").value;
      var confirmPassword = document.getElementById("confirmpassword").value;
      
  if(password1===confirmPassword){
    // alert("password are match");
     setDisable(false)
  }
  else{
    setDisable(true)
    alert("password are not match");
    document.getElementById("password-input").value = "";
    document.getElementById("confirmpassword").value="";
    setDisable(false)
  }
 }
  
//  for disabled date
const [startDate, setStartDate] = useState("");
const handleDate = (event) => {
  setStartDate(event.target.value);
};

const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen} style={{textTransform:'capitalize'}}>
        Create User
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" gutterBottom label={'margin="none"'} >
            User Creation
          </Typography>

          <Divider />

          <div className="row my-3">
           
            <div className="col-sm-6">
              {/* <FormControl sx={{ minWidth: 250 }} size="small">
                <InputLabel  required>Employee Code</InputLabel>
                              <Select
                labelId="demo-select-small"
                id="selectemp" 
                value={EmployeeCode}
                label="Employee Code"
                onChange={handleChange}
              >
                <MenuItem value={Select} disabled="disabled">Select</MenuItem>
                <MenuItem value="OMI-1050">OMI-1050</MenuItem>
                <MenuItem value="OMI-0076">OMI-0076</MenuItem>
                <MenuItem value="OMI-1046">OMI-1046</MenuItem>
              
              </Select>
              </FormControl> */}
               <FormControl sx={{ minWidth: 250 }} size="small">
      <InputLabel required>Employee Name</InputLabel>
      <Select
        labelId="demo-select-small"
        id="selectemp" 
        value={EmployeeCode}
        label="Employee Code"
        onChange={handleChange}
      >
        <MenuItem value="" disabled>Select</MenuItem>
        {employeeData.map(employee => (
          <MenuItem key={employee.code} value={employee.emp_code}>{employee.emp_first_name+" "+employee.emp_last_name}</MenuItem>
        ))}
      </Select>
    </FormControl>
            </div>
            <div className="col-sm-6">
              <FormControl sx={{ minWidth: 250 }} size="small">
                <InputLabel required>User Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="usertype"
                  value={userType}
                  label="User Type"
                  onChange={handleUserTypeChange}
                >
                  <MenuItem value="select" disabled="disabled">Select</MenuItem>
                  <MenuItem value={1}>Admin</MenuItem>
                  <MenuItem value={2}>Quality Engineer</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="col-sm-6 my-3">
              <TextField style={{width:'250px'}} required
                id="firstname"
                label="First Name"
                type="text"
                variant="outlined"
                size="small"
                value={firstname}
              />
            </div>
            <div className="col-sm-6 my-3">
              {/* <TextField id="outlined-basic" label="Last Name" variant="outlined" size="small"/> */}
              <TextField required
                id="lastname"
                label="Last Name"
                type="text"
                variant="outlined"
                size="small"
                value={lastname} style={{width:'250px'}}
              />
            </div>
            <div className="col-sm-6 my-1">
              <TextField required
                id="useremail"
                label="Email Address"
                type="email"
                variant="outlined"
                size="small" style={{width:'250px'}}
                value={useremail}
              />
            </div>
            <div className="col-sm-6 ">
              {/* <TextField id="outlined-basic" sx={{width: 200}} label="User Creation Date" type="date" variant="outlined" size="small" /> */}
              <TextField required
                id="usercreatedate"
                label="User Creation Date"  selected={startDate}
                onChange={handleDate}
                type="date"  
                sx={{ width: 250 }}
                variant="outlined"
                size="small" timeFormat={false}
                inputProps={{min: today}}
                InputLabelProps={{
                  shrink: true,}}
              />
             
            </div>
            <div className="col-sm-6 my-3">
              <FormControl sx={{ width: "27" }} variant="outlined" size="small">
                <InputLabel htmlFor="outlined-adornment-password" required>
                  Password
                </InputLabel>
                <OutlinedInput autoComplete="off"   autoComplete="new-password"
                  id="password-input" 
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword} 
                        edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton> 
                    </InputAdornment>}label="Password"/> 
              </FormControl>
            
            </div>
            <div className="col-sm-6 my-3">
              <FormControl sx={{ width: "27" }} variant="outlined" size="small">
                <InputLabel htmlFor="outlined-adornment-password" required>
                  Confirm Password
                </InputLabel>
                <OutlinedInput  onBlur={checkpassword} autocomplete="off"
                  id="confirmpassword"  
                  type={showConfirmPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword} 
                        
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                />
              </FormControl>
            </div>
            <div className="col-sm-6">
              <FormControlLabel required
                label="Status of user"
                control={<Switch id="customSwitches" defaultChecked/>}
              />
            </div>
            </div>

            <Stack spacing={1} direction="row" sx={{ m: 2 }}>
              <Button
                variant="contained"
                orientation="horizontal"  style={{textTransform:'capitalize'}}
                //  onClick={handleClick}
                // startIcon={<KeyboardReturnIcon />}
                onClick={() => navigate(0)}
              >
                Back
              </Button>
              <Button
                variant="contained" style={{textTransform:'capitalize'}}
                onClick={event=>formSubmit(event)}  disabled={disable}
                // endIcon={<SendIcon />}
              >
                Create User
              </Button>
            </Stack>
         
        </Box>
      </Modal>
    </div>
  );
};

export default UserForm;
