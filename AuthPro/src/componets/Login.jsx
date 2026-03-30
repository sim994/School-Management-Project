import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "./Token";
import email from "../../src/assets/loginicon/email.png";
import password from "../../src/assets/loginicon/password.png";
import loginbtn from "../../src/assets/loginicon/loginbtn.png";

export function Login() {
  let Navigate = useNavigate();
  let [data, setdata] = useState({
    email: "",
    password: "",
  });

  const { token, settoken } = useContext(AuthContext);

  let submit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:3000/login", data, {
        withCredentials: true,
      });
      toast.success(res.data.msg);
      settoken(res.data.token);
      Navigate("/home");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <section className="login-form">
      <form onSubmit={submit}>
        <div className="header">
          <h1>Welcome Back Sir</h1>
          <p>Enter your cradentails to access Student form and data table</p>
        </div>
        <div className="input-wrapper">
          <span>Email Address</span>
          <img src={email} alt="Image Not Found" />
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={(e) => setdata({ ...data, email: e.target.value })}
          />
        </div>
        <div className="input-wrapper">
          <span>Password</span>
          <img src={password} alt="Image Not Found" />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={(e) => setdata({ ...data, password: e.target.value })}
          />
        </div>
        <div className="condition-text-box">
          <p>
            <input type="radio" name="keep login" /> Keep me login in for 30
            days
          </p>
          <p>Forget Password?</p>
        </div>
        <button className="login-btn">
          Login <img src={loginbtn} alt="Image Not Found" />
        </button>
        <p>
          Don't have account yet ?{" "}
          <NavLink to="/signup">Create an account </NavLink>
        </p>
      </form>
    </section>
  );
}
