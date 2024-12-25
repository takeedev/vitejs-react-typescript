import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './shared/slidebar/sidebar'
import Header from './shared/header/header';
import React, { useState } from 'react';
import Page from './page/index';

import './App.css';

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleLogin = (credentials: { username: string; password: string; }) => {
    if (credentials.username === 'admin' && credentials.password === 'P@ssw0rd') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className='mainer'>
      <BrowserRouter>
        {isLoggedIn && <Header />}
        {isLoggedIn && <Sidebar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
        <div className={`page ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <Routes>
            {!isLoggedIn ? (
                <Route path="*" element={<Page.LoginPage onLogin={handleLogin} />} />
                ) : (
                <>
                  <Route path="/SystemParameter" element={<Page.Home></Page.Home>}></Route>
                  <Route path="/SelectAddress" element={<Page.AddressPage></Page.AddressPage>}></Route>
                  <Route path="/AcceptanceBusiness" element={<Page.DropdownPage></Page.DropdownPage>}></Route>
                </>
            )}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
