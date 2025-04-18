import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { FiUsers, FiFileText, FiLogOut } from 'react-icons/fi';
import { LuLayoutDashboard } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { GoHome } from "react-icons/go";

const Sidebar = ({ isOpen, toggleSidebar, setActiveView }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { name: 'Home', icon: <GoHome />, viewKey: 'home' },
    { name: 'Dashboards', icon: <LuLayoutDashboard />, viewKey: 'dashboard' },
    { name: 'Forms', icon: <FiFileText />, viewKey: 'forms' },
    { name: 'Users', icon: <FiUsers />, viewKey: 'users' },
    { name: 'Profile', icon: <CgProfile />, viewKey: 'profile' },
    { name: 'Logout', icon: <FiLogOut />, viewKey: 'logout' }
  ];
  
   return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'} ${isMobile ? 'mobile' : ''}`}>
      <div className="sidebar-header">
        <img
          src={isOpen ? 'main-logo.png' : 'mobile-logo.png'}
          alt="Logo"
          className="sidebar-logo"
        />
        <div className="header-border">
          <button className="toggle-btn" onClick={toggleSidebar}>
            {isOpen ? <MdKeyboardDoubleArrowLeft /> : <MdKeyboardDoubleArrowRight />}
          </button>
        </div>
      </div>

      <div className="sidebar-content">
      <ul className="sidebar-menu">
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item" onClick={() => setActiveView(item.viewKey)}>
                <a href={item.path}>
                  <span className="icon">{item.icon}</span>
                  {isOpen && <span className="name">{item.name}</span>}
                </a>
              </li>
            ))}
          </ul>

      </div>
    </div>
  );
};

export default Sidebar;