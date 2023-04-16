import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


const Register = () => {
  const navigate = useNavigate();
  //state
  const [inputs, setInputs] = useState({
    name: "",
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
      const { data } = await axios.post("/api/v1/user/register", {
        username: inputs.name,
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        alert("User Register Successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
             type="text"
              name = "name"
              value={inputs.name}
              onChange={handleChange}
          
          
               className="form-control"
              
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
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
            REGISTER
          </button>
          <br></br>
          <button onClick={() => navigate('/login')} type="submit" className="btn btn-primary btn2 mt-4">
            Already Registered ? Please Login
          </button>
        </form>
      </div>
      
    </>
  )
}

export default Register;