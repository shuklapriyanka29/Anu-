import React,{useState,useEffect,useRef} from 'react';
import { MDBDataTable } from 'mdbreact';
import Modaform from './Modaform';
import UserForm from './UserForm';
import EditIcon from '@mui/icons-material/Edit';



import VisibilityIcon from '@mui/icons-material/Visibility';

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

import { useNavigate } from 'react-router-dom';

const DatatablePage = () => {

  var PMbaseURL = api.defaults.PMbaseURL;
  var base_url = api.defaults.baseURL;
  const inputRef = useRef(null);
  const navigate = useNavigate();
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
//  for view emploee modal
const [EmployeeCodeView, setEmployeeCodeView] = useState("");
const [userTypeView, setUsertypeView] = useState("");
const [firstnameview, setFirstNameView] = useState("");
const [lastnameview, setLastNameView] = useState("");
const [useremailview, setEmailUserView] = useState("");
  const style = {
    backgroundColor:'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  const [modalStates, setModalStates] = useState([]);
  // const handleOpenModal = (user_id) => {
  //   SettingsPowerRounded
  //   // const newModalStates = [...modalStates];
  //   // newModalStates[user_id] = true;
  //   // setModalStates(newModalStates);
  //   // alert("===========user.user_id=========="+user_id)
  // };
  
  useEffect(() => {
    // setInterval(removeTrigger,500);
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = (user_name) => {setOpen(true)
    // alert("user_name"+user_name)
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://demo.omfysgroup.com/qpotapp/view_user_details?user_name="+user_name, requestOptions)
      .then(response => response.text())
      .then(result => {console.log(result)
        var data=JSON.parse(result)
        // alert("========"+data.user_name)
        var employeename=data.first_name+" "+data.last_name;
        var employeetype=data.user_type;
        alert("===employeetype====="+employeetype)
        var employeefirstname=data.first_name;
        var employeelastname=data.last_name;
        var employeepassword=data.password;
        var employeestatus=data.is_active;
        var employeeemailaddress=data.email_address;
        setEmployeeCode(data.user_name)
        setUsertype(data.user_type)
        setFirstName(employeefirstname);
        setLastName(employeelastname);
        setEmailUser(employeeemailaddress);
        setEmployeeCode(data.user_name);
        console.log("EmployeeCode updated:", data.user_name);
      
  
      
      })
      .catch(error => console.log('error', error));
  };
  const handleClose = () => setOpen(false);
 
  const [openview, setOpenview] = React.useState(false);
  const [toggle, setToggle] = useState(true)
  const handleOpenview = (user_name) => {setOpenview(true)
    // alert("user_name"+user_name)
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    
    fetch("https://demo.omfysgroup.com/qpotapp/view_user_details?user_name="+user_name, requestOptions)
      .then(response => response.text())
      .then(result => {console.log(result)
        var data=JSON.parse(result)
        // alert("========"+data.user_name)
        var employeename=data.first_name+" "+data.last_name;
        var employeetype=data.user_type;
        var employeefirstname=data.first_name;
        var employeelastname=data.last_name;
        var employeepassword=data.password;
        var employeestatus=data.is_active;
        var employeeemailaddress=data.email_address;
        setEmployeeCodeView(data.user_name)
        setUsertypeView(employeetype)
        setFirstNameView(employeefirstname);
        setLastNameView(employeelastname);
        setEmailUserView(employeeemailaddress);
        setEmployeeCodeView(data.user_name);
        console.log("EmployeeCode updated:", data.user_name);
      // alert("========data.creation_date========"+data.creation_date)
        document.getElementById("password-input-view").value=employeepassword
        document.getElementById("confirmpasswordview").value=employeepassword;
        // setStartDateView(creation_date1)
        var creation_date1 = data.creation_date.substr(0, 4);
       
     
        setStartDate(data.creation_date)
        if(employeestatus==='Y'){
          // alert("Inside If=================")
          setToggle(true)
        }
        else{
          // alert("Inside else=============")
          setToggle(false)
        }
      })
      .catch(error => console.log('error', error));
  }
  const handleCloseview = () => setOpen(false);
  const [apiData, setApiData] = useState({
    columns: [],
    rows: [],
  });
  const handleChange = async (event) => {
    const employeeCode = event.target.value;
      const userType = event.target.value;
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
  const [passwordforemployee,setPasswordForEmployee]=useState()
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownConfirmPassword = (event) => {
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
  const [disable, setDisable] = React.useState(false);
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
const [startDateView, setStartDateView] = useState("");
const today = new Date().toISOString().split("T")[0];
  useEffect(() => {
    // Fetch data from the API
    fetch('https://demo.omfysgroup.com/qpotapp/all_user_details')
      .then(response => response.json())
      .then(data => {
        // Process the API data to match the structure of your existing data
        const processedData = {
          columns: [
            {
              label: 'Employee Code',
              field: 'employeecode',
              sort: 'asc',
              width: 160,
              style: { textAlign: 'center' },
            },
            {
              label: 'Employee Name',
              field: 'employeename',
              sort: 'asc',
              width: 160,
              style: { textAlign: 'center' },
            },
            {
              label: 'Email Address',
              field: 'useremailaddress',
              sort: 'asc',
              width: 160,
              style: { textAlign: 'center' },
            },
            
            {
              label: 'Creation Date',
              field: 'creationdate',
              sort: 'asc',
              width: 160,
              style: { textAlign: 'center' },
            },
            {
              label: 'Action',
              field: 'statusofUser',
              sort: 'asc',
              width: 150,
              style: { textAlign: 'center' },
            }
          ],
          rows: data.map(user => ({
            employeecode: user.user_name,
            employeename: user.first_name+" "+ user.last_name,
           
            useremailaddress: user.email_address,
            creationdate: user.creation_date_str2,
            statusofUser: (
              // <Button variant="text" size="small">
              //   <EditIcon style={{ fontSize: '20px' }} />
              //   <VisibilityIcon style={{ fontSize: '20px' }} />
              // </Button>
              <>
              <Button onClick={()=> handleOpen (user.user_name)} style={{padding:'0px'}}><EditIcon/></Button>
              <Button onClick={()=> handleOpenview (user.user_name)} style={{padding:'0px'}}><VisibilityIcon/></Button>
      
      </>
            ),
          })),
        };

        setApiData(processedData);
        setModalStates(Array(data.length).fill(false));
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
      });
  }, [])
  return (
    <div className="container-fluid my-4"  >
      <div className="row">
        <div className="col-12">
          <div className="card my-4" style={{ boxShadow: '1px 2px 9px #F4AAB9'}}>
            <div className="card-header">
              <div className='row'>
                <div className='col-sm-10'>
                <h5 style={{fontWeight:''}}>Users:</h5>
                </div>
                 <div className='col-sm-2'>
                 <UserForm />
                 </div>
              </div>
            </div>
            <div className="card-body">
             <MDBDataTable striped bordered small data={apiData}/> 
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
                <OutlinedInput   autoComplete="new-password"
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

      {/* modal for view form */}
      <Modal
        open={openview}
        onClose={handleCloseview}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" gutterBottom label={'margin="none"'} >
            User Details
          </Typography>

          <Divider />

          <div className="row my-3">
           
            <div className="col-sm-6">
            <FormControl sx={{ minWidth: 250 }} size="small">
            <TextField style={{width:'250px'}} required
                id="employeecodeview"
                label="Employee Code"
                type="text"
                variant="outlined"
                size="small"
                value={EmployeeCodeView}
                
              />
    </FormControl>
            </div>
            <div className="col-sm-6">
              <FormControl sx={{ minWidth: 250 }} size="small">
              <TextField style={{width:'250px'}} required
                id="usertypeview"
                label="User Type"
                type="text"
                variant="outlined"
                size="small"
                value={userTypeView}
              />
                
                  
              </FormControl>
            </div>

            <div className="col-sm-6 my-3">
              <TextField style={{width:'250px'}} required
                id="firstnameview"
                label="First Name"
                type="text"
                variant="outlined"
                size="small"
                value={firstnameview}
              />
            </div>
            <div className="col-sm-6 my-3">
              {/* <TextField id="outlined-basic" label="Last Name" variant="outlined" size="small"/> */}
              <TextField required
                id="lastnameview"
                label="Last Name"
                type="text"
                variant="outlined"
                size="small"
                value={lastnameview} style={{width:'250px'}}
              />
            </div>
            <div className="col-sm-6 my-1">
              <TextField required
                id="useremailview"
                label="Email Address"
                type="email"
                variant="outlined"
                size="small" style={{width:'250px'}}
                value={useremailview}
              />
            </div>
            <div className="col-sm-6 ">
              {/* <TextField id="outlined-basic" sx={{width: 200}} label="User Creation Date" type="date" variant="outlined" size="small" /> */}
              <TextField required
                id="usercreatedateview"
                label="User Creation Date"  value={startDateView}
               
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
                <OutlinedInput   readOnly 
                  id="password-input-view" 
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
                <OutlinedInput readOnly
                  id="confirmpasswordview"  
                  type={showConfirmPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownConfirmPassword} 
                        
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
                control={<Switch id="customSwitchesview" readOnly checked={toggle}/>}
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
              
            </Stack>
         
        </Box>
      </Modal>
            </div>
          </div>
          </div>
          </div>
          </div>
  );
}

export default DatatablePage;