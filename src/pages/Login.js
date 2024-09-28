import React, { useState, useEffect} from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import api from '../config/axios';
import '../styles/Login.css';
import Footer from '../components/Footer';
// import withLoading from '../components/withLoading';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true); // Thêm trạng thái loading
  
  const navigate = useNavigate();

  useEffect(() => {
    // Giả lập trạng thái tải dữ liệu
    const timer = setTimeout(() => {
      setLoading(false); // Sau 2 giây, sẽ dừng hiển thị loading
    }, 2000); // Bạn có thể thay đổi thời gian này theo yêu cầu

    // Cleanup timer nếu component bị unmount
    return () => clearTimeout(timer);
  }, []);
  



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        // Gửi thông tin đăng nhập đến Spring Boot server
        const response = await api.post("https://reqres.in/api/login", {
            email: email,
            password: password
        });

        

        // Lấy user-info và lưu vào localStorage
        const { userInfo } = response.data; // Assume the response contains an object called userInfo
        localStorage.setItem("user-info", JSON.stringify(userInfo)); // Save the user-info as a string

        // Điều hướng đến trang chủ sau khi đăng nhập thành công
        navigate("/");

    } catch (error) {
        console.error("Login error: ", error);
        // Hiển thị thông báo lỗi
        setError('Invalid email or password. Please try again.');
    }
};



  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const handleGoogleLoginSuccess = async (credentialResponse) => {
  //   const googleToken = credentialResponse.credential; // Lấy token từ Google

  //   try {
  //     const response = await api.post('http://localhost:8080/identity/', {
  //       idToken: googleToken,
  //     });

  //     const { token, role, email } = response.data;
  //     localStorage.setItem("token", token);
  //     localStorage.setItem("userEmail", email);
  //     localStorage.setItem("userRole", role);

  //     role === 'admin' ? navigate("/admin") : navigate("/");
  //   } catch (error) {
  //     setError('Google login failed. Please try again.');
  //   }
  // };

  if (loading) {
    return (
      <div className="loading-container">
  <div className="spinner"></div>
  <p className="loading-text">Đang tải dữ liệu...</p>
</div>

    );
  }

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
            {/* <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaGoogle /></a> */}
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

export default Login; // Sử dụng HOC với Home
