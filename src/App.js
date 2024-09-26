import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import PageTransition from "./components/PageTransition";
// import { AnimatePresence } from "framer-motion";

import "./App.css";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login"; // Import the Login component
import SignUp from './pages/SignUp';
import ProfilePage from './pages/ProfilePage';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <AnimatePresence exitBeforeEnter> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
