import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginReq, getUser } from "../../State/AUTH/Action";
import Swal from 'sweetalert2';
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);

  

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
  
    try {
      await dispatch(LoginReq(userData));
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'Welcome back!',
      });
    } catch (error) {

      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Invalid email or password. Please try again.',
      });
    }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleInputChange}
          margin="normal"
          fullWidth
          required
          autoComplete="email"
        />

        <TextField
          label="Password"
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleInputChange}
          margin="normal"
          fullWidth
          required
          autoComplete="current-password"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
      <div>
        <div className="py-3 flex ietms-center">
          <p>If you have don't have an acccount ?</p>
          <Button
            className="ml-5"
            size="small"
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
