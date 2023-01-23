import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/AboutMe';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import "../styles/Header.css";

export default function Header() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        <h1 className="heading">
          Yazmin Bazail
        </h1>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      {renderPage()}
    </div>
  );
}