import React from 'react'
import CustomInput from '../component/CustomInput'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Forgotpassword = () => {
  return (
    <div>
    <div className="py-5" style={{backgroundColor:'rgb(0, 130, 130)',minHeight:'100vh'}}>
        <br />
        <br />
        <br />
          <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
            <h3 className='text-center'>Forgot Password</h3>
            <p className='text-center' style={{fontSize: '14px'}}>Please enter your register email to get a mail</p>
            <form action="">
            {/* <CustomInput type="text" label="Enter Email Address" id="email" /> */}
            <TextField id="outlined-basic" label="Enter Email Address"  variant="outlined" fullWidth/>
            {/* <button className='border-0 px-3 py-2 text-white fw-bold w-100'  type="submit" style={{backgroundColor:'rgb(0, 130, 130)'}}>Send Link</button> */}
            <div style={{textAlign:'center'}}><Button variant="contained" sx={{m:2,backgroundColor:'rgb(0, 130, 130)'}}>Send Link</Button></div>
            </form>
          </div>
    </div>
  </div>
  )
}

export default Forgotpassword
