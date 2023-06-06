import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope,faUser,faKey } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import "../Login/Login.css";
import Button from "../atoms/Button";


const Register = () => {
     var navigate = useNavigate();
     const change = function () {
       navigate(-1);
     };
;
// const initialFormData = {
//   name : "",
//   email:"",
//   password:"",
//   confirmPassword:""
// }

const [data, setData] = useState({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});
const [status,setStatus] = useState()



const handleChange = (event) => {
  let{name,value} = event.target;
  setData({ ...data, [name]: value });
  
  
}
const handleSubmit = (event) => {
  event.preventDefault();

  // if (!data.name || !data.password || data.email || data.confirmPassword) {
  //   setStatus(false); if (!data.name || !data.password || !data.email || !data.confirmPassword)
  // }
  if (data.name && data.password && data.email && data.confirmPassword) {
    setStatus(true);
  } else {
    setStatus(false);
  }
  // else {
  //   setStatus(true);
  // }
  console.log(data);
  console.log(status);
  status === true && axios.post("http://localhost:4000/signup", data)

}


  return (
    <>
      <div className="container">
        <div className="form-box">
          <h1 className="title">Sign Up</h1>
          <form>
            <div className="input-group">
              <div className="input-field">
                <FontAwesomeIcon icon={faUser} className="icon" />
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  id="name"
                  placeholder="Enter Your Full Name"
                  onChange={handleChange}
                />
              </div>

              <div className="input-field">
                <FontAwesomeIcon icon={faLock} className="icon" />
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  id="email"
                  placeholder="Enter Your Email ID"
                  onChange={handleChange}
                />
              </div>

              <div className="input-field">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  id="password"
                  placeholder="Enter Your Password"
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <FontAwesomeIcon icon={faKey} className="icon" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  id="confirmPassword"
                  placeholder="Confirm Your password"
                  onChange={handleChange}
                />
              </div>
              <p>
                Already have an account ? <span onClick={change}>Sign In</span>
              </p>
            </div>
            <div className="btn-field">
              <Button onClick={handleSubmit}>Submit</Button>
              <Button>Reset</Button>
            </div>
            {status === false && (
              <div className="alert alert-warning">
                Enter All fields Correctly
              </div>
            )} 
            {status === true && (
              <div className="alert alert-success">Login Successful</div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
