"use client"

// Navbar.tsx
import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.dropdown}>
        <div className={styles.dropdownButton} onClick={toggleDropdown}>
          <span className={styles.icon}>⚙️</span>
          <span>Select Crypto</span>
        </div>
        {dropdownOpen && (
          <div className={styles.dropdownMenu}>
            <div className={styles.dropdownItem}>Ethereum</div>
            <div className={styles.dropdownItem}>Base</div>
            <div className={styles.dropdownItem}>Arbitrum</div>
            <div className={styles.dropdownItem}>Optimism</div>
          </div>
        )}
      </div>
      <div className={styles.walletButton}>Create or Connect Wallet</div>
    </nav>
  );
};

export default Navbar;


