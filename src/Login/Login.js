import React ,{useState}from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import axios from "axios"


const Login = () => {
    var navigate = useNavigate();
const change = function() {
    navigate("/signup")
}
const [data,setData] = useState({
  email : "",
  password :""
})


const handleChange = (event) => {
  let { name, value } = event.target;
  setData({ ...data, [name]: value });
}

const handleSubmit = (event) => {
  event.preventDefault();

console.log(data);


axios.get(`http://localhost:4000/login/${data.email}`).then((response)=>{
    console.log(response)
    navigate("/home")
  })

}


  return (
    <>
      <div className="container">
        <div className="form-box">
          <h1 className="title">Sign In</h1>
          <form action="">
            <div className="input-group">
              <div className="input-field">
                <FontAwesomeIcon icon={faLock} className="icon" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={data.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email ID"
                />
              </div>

              <div className="input-field">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <input
                  type="text"
                  name="password"
                  id="password"
                  value={data.password}
                  onChange={handleChange}
                  placeholder="Enter Your password"
                />
              </div>
              <p>
                Doesn't have an account ?<span onClick={change}>Sign up</span>!
              </p>
            </div>
            <div className="btn-field">
              <button type="button" id="submit" onClick={handleSubmit}>
                Submit
              </button>
              <button type="button" id="reset">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login