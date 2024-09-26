import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from '../assets/Flower_preview_rev_1.png';
import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';

const products = [
  { id: 1, name: "Rose", description: "Beautiful red roses" },
  { id: 2, name: "Tulip", description: "Bright yellow tulips" },
  { id: 3, name: "Lily", description: "Pure white lilies" },
  { id: 4, name: "Orchid", description: "Delicate purple orchids" },
  { id: 5, name: "Sunflower", description: "Bright and cheerful sunflowers" }
];

function Navbar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const toggleSearchBar = () => {
    // Toggle the visibility of the search bar
    setIsSearchVisible(!isSearchVisible);
    if (!isSearchVisible) {
      // Reset search when toggling off
      setSearchTerm('');
      setSearchResults([]);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value) {
      // Filter products based on search term
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(value) ||
        product.description.toLowerCase().includes(value)
      );
      setSearchResults(filteredProducts);
    } else {
      // Clear search results if no input
      setSearchResults([]);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" className="navbar-logo" />
      </div>

      <div className="navbar-center">
        <NavLink exact to="/" className="nav-link" activeClassName="activeLink">Home</NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="activeLink">About</NavLink>
        <NavLink to="/menu" className="nav-link" activeClassName="activeLink">Product</NavLink>
        <NavLink to="/contact" className="nav-link" activeClassName="activeLink">Contact</NavLink>
        <NavLink to="/blog" className="nav-link" activeClassName="activeLink">Blog</NavLink>
        <NavLink to="/cart" className="nav-link" activeClassName="activeLink">Cart</NavLink>
        <NavLink to="/profile-page" className="nav-link" activeClassName="activeLink">Test</NavLink>
      </div>

      <div className="navbar-right">
        {/* Search Icon */}
        <FaSearch className="navbar-icon" onClick={toggleSearchBar} />
        
        {/* Search Bar with Dynamic Results */}
        {isSearchVisible && (
          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchResults.length > 0 && (
              <div className="search-results">
                {searchResults.map((product) => (
                  <div key={product.id} className="search-result-item">
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        
        {/* User and Cart Icons */}
        <Link to="/login">
          <FaUser className="navbar-icon" />
        </Link>
        <div className="cart-icon-wrapper">
          <FaShoppingBag className="navbar-icon" />
          <span className="cart-count">0</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
