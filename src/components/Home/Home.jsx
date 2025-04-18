// src/components/Home/Home.jsx
import React from 'react';
import { PieChart, Pie, Cell,Tooltip,BarChart,Bar, XAxis, YAxis,ResponsiveContainer   } from 'recharts';
import Header from '../Header/Header';

import './Home.css';

const Home = () => {

    const data = [
        { name: 'Education', value: 25 },
        { name: 'Livelihood', value: 20 },
        { name: 'Gender', value: 15 },
        { name: 'Health', value: 20 },
        { name: 'Environment', value: 20 },
    ];

    const bardata = [
        { sdg: '01', value: 40, color: '#3b82f6' },
        { sdg: '02', value: 55, color: '#10b981' },
        { sdg: '03', value: 70, color: '#ef4444' },
        { sdg: '04', value: 68, color: '#f59e0b' },
        { sdg: '05', value: 95, color: '#3b82f6' },
        { sdg: '06', value: 90, color: '#fbbf24' },
        { sdg: '07', value: 85, color: '#92400e' },
        { sdg: '09', value: 30, color: '#f59e0b' },
        { sdg: '10', value: 45, color: '#ec4899' },
        { sdg: '11', value: 60, color: '#facc15' },
        { sdg: '12', value: 78, color: '#047857' },
        { sdg: '13', value: 80, color: '#22c55e' },
        { sdg: '14', value: 85, color: '#84cc16' },
        { sdg: '15', value: 45, color: '#f97316' },
      ];

      const BarTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          return (
            <div className="bg-white border px-3 py-1 rounded shadow text-sm">
              <p>SDG {payload[0].payload.sdg}</p>
              <p>{payload[0].value}%</p>
            </div>
          );
        }
        return null;
      };

    const COLORS = ['#fcb13b', '#3b82f6', '#6366f1', '#10b981', '#84cc16'];

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          const { name, value } = payload[0];
          const total = bardata.reduce((acc, item) => acc + item.value, 0);
          const percentage = ((value / total) * 100).toFixed(1);
          return (
            <div className="bg-white border px-3 py-1 rounded shadow text-sm">
              <p className="font-semibold">{name}</p>
              <p>{percentage}%</p>
            </div>
          );
        }
        return null;
      };
      
    return (
        
        <div className="Home-container">
<div className="header-container">
                <Header />
            </div>
            <div className="Home-header">
                <h1>Welcome Back Ben!</h1>
                <h2>Home</h2>
            </div>

            <div className="stats-container">
                <StatCard title="Projects" value="1,250+" />
                <StatCard title="Total Budget" value="200 Cr" />
                <StatCard title="Active Users" value="340+" />
                <StatCard title="Countries/States" value="18" />
            </div>

            <div className="content-row">
                <div className="sectors-container">
                    <h3>Sectors</h3>
                    <div className="piechart">
                    <PieChart width={250} height={250}>
                                    <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    dataKey="value"
                                    >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                    </Pie>
                                    <Tooltip content={<CustomTooltip />} />
                                    {/* Center Text */}
                                    <text
                                    x="50%"
                                    y="50%"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fontSize="18"
                                    fontWeight="bold"
                                    >
                                    100%
                                    </text>
                                </PieChart>
                    <ul className="ml-6 space-y-2 text-sm">
                        {data.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <span
                            style={{ backgroundColor: COLORS[index] }}
                            className="w-3 h-3 inline-block rounded-full"
                            ></span>
                            {item.name}
                        </li>
                        ))}
                    </ul>
                    </div>
                  
                </div>

                <div className="sdgs-container">
                    <h3>SDGs</h3>
                    <div className="progress-bars">
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart bardata={bardata}>
                            <XAxis dataKey="sdg" />
                            <YAxis domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
                            <Tooltip content={<BarTooltip />} />
                            <Bar dataKey="value">
                                {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="bottom-table">
                <div className="users-table">
                            <h3>Users</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>SL No.</th>
                                        <th>User Name</th>
                                        <th>Designation</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <UserRow
                                        slNo="01"
                                        name="Aanya Sharma"
                                        email="aanya.sharma@example.com"
                                        designation="UiUX Designer"
                                        status="Active"
                                    />
                                    <UserRow
                                        slNo="02"
                                        name="Rohan Mehta"
                                        email="rohan.mehta@example.com"
                                        designation="Frontend Developer"
                                        status="Active"
                                    />
                                    <UserRow
                                        slNo="03"
                                        name="Diya Nair"
                                        email="diy.a.nair@example.com"
                                        designation="HR Manager"
                                        status="Active"
                                    />
                                    <UserRow
                                        slNo="04"
                                        name="Meera Varma"
                                        email="meeta.varma@example.com"
                                        designation="Data Analyst"
                                        status="Active"
                                    />
                                </tbody>
                            </table>
                </div>
                <div className="view-all-section">
                    <h3>View All</h3>
                        <div className="profile-card">
                            <h4>John Abraham</h4>
                            <p className="designation">CEO, Company</p>
                            <p className="email">johnabraham@gmail.com</p>
                            <p className="bio">Passionate professional with a focus on innovation, collaboration, and user-centered solutions.</p>
                        </div>
                </div>
            </div>
            
            <div className="footer">
                <p>Designed By Tabl.</p>
            </div>
        </div>
    );
};

// StatCard Component
const StatCard = ({ title, value }) => (
    <div className="stat-card">
        <h4>{title}</h4>
        <p>{value}</p>
    </div>
);

// ProgressBar Component
const ProgressBar = ({ percentage }) => (
    <div className="progress-bar-container">
        <div
            className="progress-bar-fill"
            style={{ width: `${percentage}%` }}
        ></div>
    </div>
);

// UserRow Component
const UserRow = ({ slNo, name, email, designation, status }) => (
    <tr>
        <td>{slNo}</td>
        <td>
            <div className="user-info">
                <p className="user-name">{name}</p>
                <a href={`mailto:${email}`} className="user-email">{email}</a>
            </div>
        </td>
        <td>{designation}</td>
        <td><span className={`status-badge ${status.toLowerCase()}`}>{status}</span></td>
        <td><button className="view-button">View</button></td>
    </tr>
);

export default Home;