import React from "react";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { useNavigate,Link } from "react-router-dom";
import api from './BaseURL';
const Resetpassword = () => {
  var base_url = api.defaults.baseURL;
  const [newpassword, setNewpassword] = useState('');
  const [newconfirmpassword,setNewconfirmpassword]=useState('')
  const [showPassword, setShowPassword] = React.useState(false);
const handleClickShowPassword = () => setShowPassword((show) => !show);
var navigate = useNavigate(); 
const handleMouseDownPassword = (event) => {
  event.preventDefault();
};
const checkpassword =() =>
 {
  var password1 = document.getElementById("newpassword").value;
  var confirmPassword = document.getElementById("newconfirmpassword11").value;
  

  if(newpassword===''){
    alert("New password can not be null")
  }
  else if(newconfirmpassword==='')
  {
    alert('Please enter confirm  password');
  }
  else if(newpassword!=newconfirmpassword)
  {
    alert("New password and Confirm Password Not Matched");
  }
  
  
}
const handleresetpassword = ()=>
{
  if(newpassword==="")
  {
    alert("Please enter new password");
  }
  else if(newconfirmpassword===""){
    alert("Please enter confirm  password");
  }
  else if(newpassword!=newconfirmpassword)
  {
    alert("New password and Confirm Password Not Matched");
  }
  else{
    
  // alert("--------Insidehandleresetpassword------");
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  const win =window.sessionStorage;
  var value = win.getItem('username');
   var url = base_url+"saveQpotForgotPass?user_name="+value+"&new_pass="+newconfirmpassword;
     fetch(url)
  //  fetch("https://mindsconnect.omfysgroup.com/qpotapp/saveQpotForgotPass?user_name="+value+"&new_pass="+newconfirmpassword, requestOptions)
    .then(response => response.text())
    .then(result => {
      // alert(result);
      console.log(result)
    if(result=="Success"){
      alert("Your password save successfully.")
      navigate('/')
    }})
    .catch(error => console.log('error', error));}
}
  return (
    <div>
      <div style={{ backgroundColor: "rgb(0, 130, 130)" }}>
        <div className="container">
          <div className="card1" style={{height:'400px'}}>
            <div className="text">
              <img style={{ textAlign: "center" }} />
              <h3>Reset Password</h3>
              <p style={{ marginBottom: "-11px" }}>
                Enter your password to access reset password.
              </p>

              <form id="loginform" name="loginform">
              <div className="input-text">
                <FormControl fullWidth  sx={{  width: '25' }} variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-password" autoComplete='off' required>New Password</InputLabel>
          <OutlinedInput  value={newpassword}  onChange={(e) => setNewpassword(e.target.value)}
            id="newpassword"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="New Password" 
          />
        </FormControl>
                </div>
               
                <div className="input-text">
                <FormControl fullWidth  sx={{  width: '25' }} variant="outlined" >
          <InputLabel htmlFor="" autoComplete='off'  required>Confirm Password</InputLabel>
          <OutlinedInput  onBlur={checkpassword}
            id="newconfirmpassword11"  value={newconfirmpassword} onChange={(e) => setNewconfirmpassword(e.target.value)}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password" 
          />
        </FormControl>
                </div>
                <div className="buttons">
                    <input type="button"  className="btn btn-primary btn-block" style={{backgroundColor:'rgb(0,130,130)'}} value="Save" onClick={handleresetpassword}/>
                </div>
                <div className="buttons">
                    <input type="button"  className="btn btn-block"  onClick={() => navigate('/getotp')} style={{backgroundColor:'none',borderColor:'rgb(0,130,130)'}} value="Back" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Resetpassword;
