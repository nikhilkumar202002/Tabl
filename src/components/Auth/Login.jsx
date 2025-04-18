import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const validEmail = 'admin@example.com';
    const validPassword = 'admin123';

    if (email === validEmail && password === validPassword) {
      onLoginSuccess();
    } else {
      alert('Invalid credentials. Try admin@example.com / admin123');
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="brand">
          <div className="logo">
            <img src="public/main-logo.png" alt="Logo" />
          </div>
        </div>
        <h2>Hi there!</h2>
        <p>Have we met before?</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot My Password?</a>
          </div>
          <button className="login-button" type="submit">Login</button>
          <div className="divider">OR</div>
          <button className="google-login" type="button">
            <img
              src="https://img.icons8.com/color/16/000000/google-logo.png"
              alt="google"
            />
            Login With Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
