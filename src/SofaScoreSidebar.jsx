import React from 'react';

const SofaScoreSidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
    className='tabela'
      style={{
        position: 'fixed',
        top: 0,
        right: isOpen ? '0' : '-350px', // Sidebar slides in/out
        width: '350px',
        height: '100vh',
        backgroundColor: '#fff',
        transition: 'right 0.3s ease',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        overflowY: 'auto', // Allow scrolling if needed
      }}
    >
      <button
      id='mbyll'
        onClick={toggleSidebar} // Call the toggle function to close the sidebar
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: '#f5f5f5',
          border: 'none',
          cursor: 'pointer',
          padding: '5px 10px',
        }}
      >
        Mbyll 
      </button>
      <iframe
        id="sofa-standings-embed-87485-64850"
        src="https://widgets.sofascore.com/embed/tournament/87485/season/64850/standings/Group%20B?widgetTitle=Group%20B&showCompetitionLogo=true"
        style={{
          height: '100%',
          width: '100%',
          border: 'none',
        }}
        scrolling="no"
        title="SofaScore Standings"
      ></iframe>
      <div
        style={{
          fontSize: '12px',
          fontFamily: 'Arial, sans-serif',
          textAlign: 'left',
          padding: '10px',
        }}
      >
        Standings provided by{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.sofascore.com/"
        >
          Sofascore
        </a>
      </div>
    </div>
  );
};

export default SofaScoreSidebar;
