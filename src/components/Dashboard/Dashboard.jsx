import React from 'react';
import Header from '../Header/Header';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaStar } from "react-icons/fa6";
import { LuFilter } from "react-icons/lu";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdContentPasteSearch } from "react-icons/md";
import { IoKey,IoShareSocialSharp  } from "react-icons/io5";
import { MdKeyboardDoubleArrowLeft,MdKeyboardDoubleArrowRight } from "react-icons/md";
import './Dashboard.css';

const Dashboard = () => {

    const [openMenuId, setOpenMenuId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1)
    const dashboardsPerPage = 5;

    const dashboards = [
        { id: 1, name: 'Project Details Dashboard', owner: 'Adam', status: 'Live' },
        { id: 2, name: 'Impact Overview Dashboard', owner: 'Adam', status: 'Live' },
        { id: 3, name: 'Project Insights Dashboard', owner: 'Adam', status: 'Live' },
        { id: 4, name: 'Project Insights Dashboard', owner: 'Adam', status: 'Live' },
        { id: 5, name: 'Impact Overview Dashboard', owner: 'Adam', status: 'Live' },
        { id: 6, name: 'Project Insights Dashboard', owner: 'Adam', status: 'Live' },
        { id: 7, name: 'Project Insights Dashboard', owner: 'Adam', status: 'Live' },
        { id: 8, name: 'Impact Overview Dashboard', owner: 'Adam', status: 'Live' },
    ];

    // pagination
    const indexOfLastDashboard = currentPage * dashboardsPerPage;
    const indexOfFirstDashboard = indexOfLastDashboard - dashboardsPerPage;
    const currentDashboards = dashboards.slice(indexOfFirstDashboard, indexOfLastDashboard);
    const totalPages = Math.ceil(dashboards.length / dashboardsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setOpenMenuId(null);
    }

    return (
        <>
            <div className="header-container">
                <Header />
            </div>

            <div className="dashboard-header">
                <div className="header-content">
                    <h1>Welcome to the Dashboard!</h1>
                    <h2>Available Dashboards</h2>
                </div>

                <div className="search-container">
                    <div className="search-input">
                        <FiSearch className="search-icon" />
                        <input type="text" placeholder="Search here……" />
                    </div>
                    <div className='filter-btn'>
                        <button><LuFilter /></button>
                    </div>
                    <div className="section-header">
                        <FaStar className="star-icon" />
                        <h3>Favorites</h3>
                    </div>
                </div>
            </div>

            <div className="dashboard-table-container">
                <div className="dashboard-table">
                    <table>
                        <thead className='dashboard-table-header'>
                            <tr>
                                <th>Sl No.</th>
                                <th>Dashboard Name</th>
                                <th>Actions</th>
                                <th>Favorite</th>
                                <th>Owner</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='dashboard-table-body'>
                            {dashboards.map((dashboard) => (
                                <tr key={dashboard.id}>
                                    <td>{String(dashboard.id).padStart(2, '0')}</td>
                                    <td>{dashboard.name}</td>
                                    <td className="actions-cell">
                                        <button className="action-btn action-btn-view"><span><MdContentPasteSearch/></span> View</button>
                                        <button className="action-btn action-btn-permission"><span><IoKey/></span> Permissions</button>
                                        <button className="action-btn action-btn-share"><span><IoShareSocialSharp/></span> Share</button>
                                    </td>
                                    <td>⭐</td>
                                    <td>{dashboard.owner}</td>
                                    <td className="status-cell">• {dashboard.status}</td>
                                    <td className="extra-menu-container">
                                        <button
                                            className="extra-menu"
                                            onClick={() =>
                                            setOpenMenuId(openMenuId === dashboard.id ? null : dashboard.id)
                                            }
                                        >
                                            <HiOutlineDotsVertical />
                                        </button>
                                        {openMenuId === dashboard.id && (
                                            <ul className="dropdown-menu">
                                            <li>Edit</li>
                                            <li>Hide</li>
                                            <li>Delete</li>
                                            </ul>
                                        )}
                                        </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="pagination-container">
                        {/* Left Arrow Button */}
                        <button
                            className={`pagination-action-arrow ${currentPage === 1 ? 'disabled' : ''}`}
                            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <MdKeyboardDoubleArrowLeft />
                        </button>

                        {/* Page Numbers */}
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                className={`pagination-btn ${currentPage === i + 1 ? 'active' : ''}`}
                                onClick={() => handlePageChange(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}

                        {/* Right Arrow Button */}
                        <button
                            className={`pagination-action-arrow ${currentPage === totalPages ? 'disabled' : ''}`}
                            onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <MdKeyboardDoubleArrowRight />
                        </button>
                    </div>

                
            </div>

        </>

    );
};

export default Dashboard;