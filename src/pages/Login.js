import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Login.css'; // Import CSS file for styling
import Footer from '../components/Footer';
import api from '../config/axios'; // Axios instance with pre-configured base URL
import { useNavigate } from 'react-router-dom'; // useNavigate for redirection after login

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Gửi thông tin đăng nhập tới Spring Boot
      // const response = await api.post('https://reqres.in/api/login', {
      //   email: email,
      //   password: password
      // });
      const response = await api.post('http://localhost:8080/identity/users/login', {
        email: email,
        password: password
      });
  
      // Lấy token từ phản hồi và lưu vào localStorage
      const { token } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userEmail", email);
  
      // Chuyển hướng người dùng về trang chủ sau khi đăng nhập thành công
      navigate("/");
      console.log("Đăng nhập thành công");
  
    } catch (error) {
      console.error("Login error: ", error);
      // Hiển thị thông báo lỗi nếu đăng nhập không thành công
      setError('Invalid email or password. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <input
              className="form-input"
              placeholder=" "
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email" className="form-label">Email</label>
          </div>

          <div className="form-field password-field">
            <input
              className="form-input"
              placeholder=" "
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password" className="form-label">Password</label>

            {/* Password toggle icon */}
            <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="forgot-password">Forgot password?</div>

          {/* Display error message */}
          {error && <div className="error-message" style={{ color: "red", marginTop: "10px" }}>{error}</div>}

          <button type="submit" className="login-btn">
            LOGIN
          </button>
        </form>

        <div className="social-login">
          <p>Or Sign up using</p>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaGoogle /></a>
          </div>
        </div>
        <div className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
