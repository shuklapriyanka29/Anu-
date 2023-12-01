import React from 'react'
import { useEffect,useRef } from 'react';
import './Login.css'
import MyImage from './logo.jpeg'
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useNavigate,Link } from "react-router-dom";
import axios from 'axios';
import api from './BaseURL';
const Login = () => {
  var base_url = api.defaults.baseURL;
  const [Username, setUsername] = useState('');
const [password, setPassword] = useState('');
  const inputRef = useRef(null);
  

  
  useEffect(() => {

    //  document.getElementById("outlined-uncontrolled").onload = document.getElementById("outlined-uncontrolled").focus();  
    // document.getElementById("password").onload = document.getElementById("password").focus();  
   // alert(aa.label.innerHTML);
    // setTimeout(()=>{
    //   inputRef.current?.focus()},0)
    
    // document.getElementById("password").focus();
    //  document.getElementById("outlined-uncontrolled").focus();
  }, []);
  
  // const API = axios.create({
  //   baseURL: "https://demo.omfysgroup.com/"
  // });
  
  // alert("Base URL: " + api.defaults.baseURL)
  const win =window.sessionStorage;
  let navigate = useNavigate(); 
const [showPassword, setShowPassword] = React.useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false);
const handleClickShowPassword = () => setShowPassword((show) => !show);

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};




const [disable, setDisable] = React.useState(false);
const [disableforget, setDisableforget] = React.useState(false);
const onSubmit = (e) => {
  e.preventDefault();

  // var username = document.getElementById("user_name").value;
  var Username1 = document.getElementsByName("user_name1");
  var Username = "";
  if(Username1.length > 0)
  {
    Username = Username1[0].value;
  }
  
  var password = document.getElementById("password").value;

  if (Username==="" ) {
    alert('Please fill the username.');
    
  
  }
  else if(password==="")
  {
    alert('Please fill the password.');
  
  }
 
  else{
   setDisable(true);
  
 
  var base_url = api.defaults.baseURL;
  // var url = "https://demo.omfysgroup.com/qpotapp/checkLoginUser?user_name="+username+"&password="+password;
  var url = base_url+"checkLoginUser?user_name="+Username+"&password="+password;
  //  alert("==============baseurlconcat======="+url)
  fetch(url,{
          mode: 'cors'
         
          })  
  .then(response => response.text())
    .then(result => {
      console.log(result);
      var data = JSON.parse(result);
      // alert(data.user_name);
    if(data.user_name != "" && data.user_name != undefined && data.user_name != null && data.password!="" && data.password != undefined && data.password != null)
      {
        var win = window.sessionStorage;
        win.setItem('username', Username);
        win.setItem('password', password);
       
        navigate('dashboard');  
      }
    
      else {
        alert("invalid credential");
         setUsername("");
         setPassword("");
       
      }
      setDisable(false);
      
    })
    .catch(error => console.log('error', error));
  
};}

const Handleforgetpassword = () =>
{
  setDisableforget(false);
  var username = document.getElementById("outlined-uncontrolled").value;
  if(username==="")
  {
    alert("Please enter username.")
  }
  else{
    setDisableforget(false);
    // let headers= new Headers();
    // headers.append('Origin','http://localhost:3001');
    var requestOptions = {
      // mode: 'cors',
      method: 'GET',
      // headers: headers
    
    };
    var win = window.sessionStorage;
    win.setItem('username', username);
    var url1 = base_url+"sendOTPtoQpotuser?user_name="+username;
  fetch(url1, requestOptions)
    .then(response => response.text())
    .then(result => {console.log(result)
  
    if(result==="Success"){
      alert("Your OTP sent on your register email.")
      navigate('/getotp')
    }
     else{
      alert("Please enter correct username");
    }
    
  })
 
    .catch(error => {alert('error', error);}
    );
}
}

 
const disabledtext =() =>
{
  document.getElementById("forget").disabled = true;
}
  return (
    <div style={{backgroundColor: 'rgb(0, 130, 130)'}}>
  
      <div className="container">
      {/* <p>Get up and shine</p> */}
      {/* <h1 className="h1animation" style={{marginTop: '-45%',marginRight:'-50%'}}>Welcome to Quality Platform  </h1> */}
        <div className="card1 ">
        
            <div className="text">
            <img src={MyImage} style={{textAlign:'center'}}/>
                <h3>Login</h3>
                <p style={{    marginBottom: '-11px'}}>Enter your credentials to access your account.</p>
                         <form  id="loginform" name="loginform" >
                <div className="input-text">
                  
                <TextField  id="outlined-uncontrolled" name="user_name1"
               label="User Name"  variant="outlined" ref={inputRef}  required  fullWidth/>
                {/* <TextField
  id="outlined-uncontrolled"
  label="Usernamed"
  defaultValue="demo"
/> */}
                </div>
                <div className="input-text">
                <FormControl fullWidth  sx={{width: '25'}} variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-password" required >Password</InputLabel>
          <OutlinedInput autoComplete='off'  required
            id="password"  ref={inputRef} 
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
            label="Password" 
          />
        </FormControl>
                </div>
                
                <div className="buttons">
                    <input type="button" className="btn btn-primary btn-block" style={{backgroundColor:'rgb(0,130,130)'}} value="Login" disabled={disable} onClick={onSubmit}/>
                </div>
                <div className="forgot">
                     <p style={{FontSize:'12px'}}><Link style={{color:'rgb(0,130,130)'}} id="forget" onBlur={disabledtext} onClick={Handleforgetpassword}   disabled={disableforget}>Forgot Password</Link></p>
                    {/* <button onClick={Handlecorsiisue}>Click</button> */}
                  
                </div>
            </form>
            </div>
        </div>
    </div>
    </div>
  )
          }
export default Login
