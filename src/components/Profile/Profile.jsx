import React, { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { MdModeEdit,MdDeleteOutline  } from "react-icons/md";
import Header from '../Header/Header';
import './Profile.css';

const Profile = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: 'John',
    lastName: 'Abraham',
    email: 'Johnabraham@gmail.com',
    dob: '2000-09-01',
    location: 'USA, New York',
    phone: '1234567890',
    username: 'Johnabraham@gmail.com',
    oldPassword: 'Johnabraham@2025',
    newPassword: 'Johnabraham#@2025',
  });

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="header-container">
                <Header />
            </div>
    <div>
      <div className="profile-heading">
        <h3>Profile Details</h3>
        <p>Profile</p>
      </div>
    </div>
     <div className="profile-container">
      <div className="profile-header">
        <div className="banner">
          <button className="upload-btn">Upload Banner</button>
        </div>   
      </div>

      <div className="profile-data">
        <div className="profile-photo">
        <img src="public/profile.jpg" alt="User" className="profile-pic" />
        <div className="photo-edit-flex">
            <div className="photo-edit">
              <button><MdModeEdit/></button>
            </div>
            <div className="photo-delete">
              <button><MdDeleteOutline/></button>
            </div>
        </div>
        </div>
          <div className='profile-content'>
            <h2>John Abraham</h2>
            <p className="role">CEO, Company Name <span className='location'><i><IoLocationOutline/></i>USA, New York</span></p>
            <span className="status-dot active"></span> <span className="status-text">Active</span>
          </div>
        </div>

      <div className="profile-body">
      <div className="left-panel">
  <div className="form-row">
    <div className="form-group">
      <label>First Name</label>
      <input name="firstName" value={userDetails.firstName} onChange={handleChange} />
    </div>
    <div className="form-group">
      <label>Last Name</label>
      <input name="lastName" value={userDetails.lastName} onChange={handleChange} />
    </div>
  </div>

  <div className="form-group">
    <label>Email</label>
    <input name="email" value={userDetails.email} onChange={handleChange} />
  </div>

  <div className="form-row">
    <div className="form-group">
      <label>Date of Birth</label>
      <input type="date" name="dob" value={userDetails.dob} onChange={handleChange} />
    </div>
    <div className="form-group">
      <label>Location</label>
      <input name="location" value={userDetails.location} onChange={handleChange} />
    </div>
  </div>

  <div className="form-group">
    <label>Phone Number</label>
    <div className="phone-input">
      <select name="" id="">
        <option value=""><img src="public\india.png" alt="" />+91</option>
      </select>
      <input name="phone" value={userDetails.phone} onChange={handleChange} />
    </div>
  </div>

  <button className="edit-btn">Edit details</button>
</div>


        <div className="right-panel">
          <h3>Edit Login Details</h3>
          <div className="right-form">
          <div className="form-row">
          <div className="form-group right-group">
          <label>Username</label>
          <input disabled value={userDetails.username} />
          </div>
          </div>
          <div className="form-row">
          <div className="form-group right-group">
          <label>Old Password</label>
          <input type="password" value={userDetails.oldPassword} readOnly />
          </div>
          </div>
          <div className="form-row">
          <div className="form-group right-group">
          <label>New Password</label>
          <input type="password" value={userDetails.newPassword} />
          </div>
          </div>
          <button className="change-pass-btn">Change Password</button>
          </div>
       
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Profile;
