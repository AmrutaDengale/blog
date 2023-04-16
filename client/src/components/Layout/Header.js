import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { authActions } from '../../redux/store';
import { useNavigate } from "react-router-dom";

const Header = () => {
  //global state
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  const dispatch = useDispatch();
  const navigate = useNavigate();

 //logout
 const handleLogout = () => {
  try {
    dispatch(authActions.logout());
    alert("Logout Successfully");
    navigate("/login");
    localStorage.clear();
  } catch (error) {
    console.log(error);
  }
};


  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand" href="#">Logo</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
     
        <li className="nav-item">
          <NavLink to="/" className="nav-link " aria-current="page" href="#">Home</NavLink>
        </li>
     
  
        <li className="nav-item">
          <NavLink to="/about" className="nav-link" href="#">About</NavLink>
        </li>
      
       
        <li className="nav-item">
          <NavLink to="/services" className="nav-link" href="#">Services</NavLink>
        </li>

        {isLogin && (
        <li className="nav-item">
          <NavLink to="/blog" className="nav-link" href="#">Blog</NavLink>
        </li>
        )}

        <li className="nav-item">
          <NavLink to="/contact" className="nav-link" href="#">Contact</NavLink>
        </li>

        
      {!isLogin && (
        <>
          <li className="nav-item">
          <NavLink to="/login" className="nav-link" href="#">Login</NavLink>
        </li>
          
        
        <li className="nav-item">
          <NavLink to="/register" className="nav-link" href="#">Register</NavLink>
        </li>
        </>
            )}
        {isLogin && (

        <li className="nav-item">
          <NavLink   onClick={handleLogout} to="/login" className="nav-link" href="#">Logout</NavLink>
        </li>
        )}
        
       
      </ul>
    
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header;