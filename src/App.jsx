import { useState } from 'react';
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css"; // Specify weight and style
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Profile from './components/Profile/Profile';
import './index.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeView, setActiveView] = useState('home'); // 'home' or 'dashboard'

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const renderMainContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
        case 'profile':
        return <Profile />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <div className={`app-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <div className="app-sidebar">
            <Sidebar 
              isOpen={isSidebarOpen} 
              toggleSidebar={handleToggleSidebar}
              setActiveView={setActiveView}
            />
          </div>
          <div className="app-main">
            {renderMainContent()}
          </div>
        </div>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
}

export default App;