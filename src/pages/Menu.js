import React from "react";
import { MenuList } from "../helpers/MenuList"; // Import danh sách các loại hoa
import MenuItem from "../components/menucomponents/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      {/* Left Sidebar - Categories */}
      <div className="menu-sidebar">
        <h3>Danh Mục Hoa</h3>
        <ul className="category-list">
          <li>Bó Hoa</li>
          <li>Giỏ Hoa</li>
          <li>Hoa Baby</li>
          <li>Hoa Chia Buồn</li>
          <li>Hoa Hướng Dương</li>
          <li>Hoa Khai Trương</li>
          <li>Lan Hồ Điệp</li>
        </ul>
      </div>

      {/* Main Menu Content */}
      <div className="menu-content">
        <h1 className="menuTitle">Các Sản Phẩm Hoa Đang Bán</h1>
        <div className="menuList">
          {/* Hiển thị danh sách hoa */}
          {MenuList.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
              />
            );
          })}
        </div>

        {/* Recently Viewed Section */}
        <div className="recently-viewed">
          <h2>Sản Phẩm Vừa Xem</h2>
          <div className="recently-viewed-list">
            {/* Hiển thị các sản phẩm vừa xem */}
            {MenuList.slice(0, 4).map((menuItem, key) => (
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
