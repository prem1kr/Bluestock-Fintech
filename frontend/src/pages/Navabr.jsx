import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="navbar-left">
        <img
          src="https://s3-alpha-sig.figma.com/img/33b9/eda0/4843225c388eec499ad6ac8810e70a6a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=al6yUmY6tGL5I~hnHHslFS4pHWVF-ihTpWjeube80TkmOCDz5b17iwfRy8VEmIUnNa4HZAnXbzwtUqWYXbA-3mhvubAV06qixzYdjo-wPdga9CtQ4mwX64UGfP4FcBzPOwZ12sH5kPMu7BtNKS-V9Br-MLLibyJX6EH~2Zok8MnPBtrz~EVdMr-Bh8Y~sENXuYzoVu56GwFMmJTTGPZun0ww7wUHTGnEbMrmgVdkO-vBR-wV~WJ7Ve0b4q8GrXJFnJ9Zil-6hPo6bCZz0RtY2Gb~BrUE7i3lBgfGzzi6nKWsqrvapy158ZauY3F7FWA-UXg68LSdr-njnOBTT7dOmg__"
          alt="Logo"
          className="logo"
        />
        <a className="brand" href="/">

        <span className="brand">BLUESTOCK</span>
        </a>
      </div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="/ipo">IPO</a></li>
        <li><a href="/community">Community</a></li>

        <li className="dropdown product">
          <a className="product" href="/product" onClick={(e) => { e.preventDefault(); setDropdownOpen(!dropdownOpen); }}>
            Products ▼
          </a>
          {dropdownOpen && (
            <motion.ul
              className="dropdown-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            > 
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/product">Product</a></li>
              
              <li><a href="/analysis">Analysis</a></li>
            </motion.ul>
          )}
        </li>

        <li><a href="/Broker">Brokers</a></li>
        <li><a href="#live-news">Live News <span className="badge">NEW</span></a></li>
      </ul>
      <div className="navbar-right">
        <a href="/login" className="signin">Sign In</a>

        <motion.button
          className="signup-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a className="signup-btn1" href="/signup">Sign Up Now</a>
        </motion.button>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
