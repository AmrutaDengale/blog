import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
// import toast from "react-hot-toast";
import {useDispatch} from 'react-redux';
import { authActions } from '../redux/store';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //state
  const [inputs, setInputs] = useState({

    email: "",
    password: "",
  });


 //handle input change
 const handleChange = (e) => {
  setInputs((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));
};

  //form handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/user/login", {
       
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        dispatch(authActions.login());
        alert("User Login Successfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>
         
          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              className="form-control"
            
              placeholder="Enter Your Email"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name = "password"
              value={inputs.password}
              onChange={handleChange}
              className="form-control"
          
              placeholder="Enter Your Password"
              required
              autoFocus
            />
          </div>
         
          <button type="submit" className="btn btn-primary btn1">
            Login
          </button>
          <br></br>
          <button onClick={() => navigate('/register')} type="submit" className="btn btn-primary btn2 mt-4">
          Not a User ?  Please Register First
          </button>
        </form>
      </div>
      
    </>
  )
}

export default Login;