import React, { useState } from 'react';
import { FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import './Header.css';

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="user-profile">
      <div className="profile-header" onClick={toggleDropdown}>
        <div className="profile-avatar">
          <span>JA</span>
        </div>
        <div className="profile-info">
          <div className="profile-name">John Abraham</div>
          <div className="profile-role">Tester</div>
        </div>
        <div className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 6L11 1" stroke="#4F4F4F" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
      
      {isOpen && (
        <div className="profile-dropdown">
          <div className="dropdown-item">
            <FiUser className="dropdown-icon" />
            <span>Profile</span>
          </div>
          <div className="dropdown-item">
            <FiSettings className="dropdown-icon" />
            <span>Settings</span>
          </div>
          <div className="dropdown-divider"></div>
          <div className="dropdown-item sign-out">
            <FiLogOut className="dropdown-icon" />
            <span>Sign Out</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;