import React,{useState} from 'react'
import CustomInput from './pages/CustomInput'

const Login = () => {
  return (
    <div>
      <div className="py-5" style={{backgroundColor:'rgb(_250,250,0'}}>
            <div className='my-5 w-25 bg-white rounded-3 mx-auto p-3'>
              <form action="">
              <CustomInput type="text" placeholder="Enter Email Address" id="email" />
              <CustomInput type="password" placeholder="Enter Password" id="password" />
              <button style={{backgroundColor:'rgb(_250,250,0'}}>Login</button>
              </form>
            </div>
      </div>
    </div>
  )

}
export default Login
