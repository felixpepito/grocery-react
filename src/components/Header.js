import React, { useState } from 'react';
 // Assuming you're using a separate CSS file for the header

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header>
 
      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDropdown}>
          <i className="fa fa-cog"></i> {/* Settings icon */}
        </button>
        {dropdownOpen && (
          <div className="dropdown-content">
            <a href="#">Log out</a>
          </div>
        )}
      </div>
      <h1>Grocery List App</h1>
    </header>
  );
};

export default Header;
