import React, { useState } from "react";
import "../styles/ProfilePage.css";
import Footer from '../components/Footer';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    username: "tuthanhphanlk",
    name: "Phan Thành Tú",
    email: "tu*****@gmail.com",
    phone: "*******44",
    gender: "male",
    dob: {
      day: 23,
      month: 9,
      year: 2024,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleGenderChange = (e) => {
    setProfile({
      ...profile,
      gender: e.target.value,
    });
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      dob: {
        ...profile.dob,
        [name]: value,
      },
    });
  };

  return (
    <div className="wrapper">
      <div className="profile-page">
        <div className="sidebar">
          <ul>
            <li>Tài Khoản Của Tôi</li>
            <li>Hồ Sơ</li>
            <li>Ngân Hàng</li>
            <li>Địa Chỉ</li>
            <li>Đổi Mật Khẩu</li>
            <li>Cài Đặt Thông Báo</li>
          </ul>
        </div>

        <div className="profile-content">
          <h1>Hồ Sơ Của Tôi</h1>
          <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>

          <form className="profile-form">
            <label>
              Tên đăng nhập:
              <input type="text" value={profile.username} disabled />
            </label>

            <label>
              Tên:
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Số điện thoại:
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleInputChange}
              />
            </label>

            <label>Giới tính:</label>
            <div className="gender-options">
              <label>
                <input
                  type="radio"
                  value="male"
                  checked={profile.gender === "male"}
                  onChange={handleGenderChange}
                />
                Nam
              </label>
              <label>
                <input
                  type="radio"
                  value="female"
                  checked={profile.gender === "female"}
                  onChange={handleGenderChange}
                />
                Nữ
              </label>
              <label>
                <input
                  type="radio"
                  value="other"
                  checked={profile.gender === "other"}
                  onChange={handleGenderChange}
                />
                Khác
              </label>
            </div>

            <label>Ngày sinh:</label>
            <div className="dob">
              <select
                name="day"
                value={profile.dob.day}
                onChange={handleDateChange}
              >
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select
                name="month"
                value={profile.dob.month}
                onChange={handleDateChange}
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    Tháng {i + 1}
                  </option>
                ))}
              </select>
              <select
                name="year"
                value={profile.dob.year}
                onChange={handleDateChange}
              >
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i} value={2024 - i}>
                    {2024 - i}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="save-button">
              Lưu
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
