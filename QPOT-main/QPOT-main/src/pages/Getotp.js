import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import api from './BaseURL';
function Getotp() {
  var base_url = api.defaults.baseURL;
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (index, event) => {
    const otpCopy = [...otp];
    otpCopy[index] = event.target.value;
    setOtp(otpCopy);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const win = window.sessionStorage;
    const username = win.getItem('username');
    const otpValue = otp.join('');
    var d=document.getElementById("otpcheck").value;
   
    if (otpValue.trim() === '') {
      alert('Please enter OTP');
      return;
    }else{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    var url = base_url+`checkQpotForgotPassOTP?user_name=${username}&otp=${otpValue}`;
    // fetch(`https://demo.omfysgroup.com/qpotapp/checkQpotForgotPassOTP?user_name=${username}&otp=${otpValue}`, requestOptions)
      fetch(url, requestOptions)
    .then(response => response.text())
      .then(result => {
        if(result==="success") {
          alert("Your OTP is correct");
          navigate('/resetpassword');
        } else {
          alert("Please enter correct otp")
          setOtp(["", "", "", "", "", ""]); // Clear OTP field
        }
      })
      .catch(error => console.log('error', error));
  };
}

  const inputFocus = (index, event) => {
    if (event.key === "Delete" || event.key === "Backspace") {
      const next = index - 1;
      if (next > -1) {
        document.getElementsByName(`otp${next + 1}`)[0].focus();
      }
    } else {
      const next = index + 1;
      if (next < 6) {
        document.getElementsByName(`otp${next + 1}`)[0].focus();
      }
    }
  };
  
  return (
    <div style={{ backgroundColor: "rgb(0, 130, 130)" }}>
      <div className="container">
        <div className="card1" style={{ height: "259px", width: "650px" }}>
          <div className="text">
            <img style={{ textAlign: "center" }} />
            <h3>Forgot Password?</h3>
            <p style={{ marginBottom: "-11px" }}>
              OTP sent to your registered email
            </p>

            <form >
              <div className="otpContainer" style={{margin:'25px'}}>
                {otp.map((digit, index) => (
                  <input id="otpcheck"
                    key={index}
                    name={`otp${index + 1}`}
                    type="text"
                    autoComplete="off"
                    className="otpInput"
                    value={digit}
                    onChange={(e) => handleChange(index, e)}
                    tabIndex={index + 1}
                    maxLength="1"
                    style={{width: '30px', margin: '10px',textAlign:'center'}}
                    onKeyUp={(e) => inputFocus(index, e)}
                  />
                ))}
              </div>
              <div>
              <Button style={{backgroundColor: "rgb(0, 130, 130)"}} type="submit"  onClick={() => navigate('/')}>
                Back
              </Button>
              &nbsp;
              <Button style={{backgroundColor: "rgb(0, 130, 130)"}} type="submit" onClick={handleSubmit}>
                Submit
              </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Getotp;

