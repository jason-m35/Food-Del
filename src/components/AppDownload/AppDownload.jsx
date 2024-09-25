import React from 'react';
import './AppDownload.css';
import play_store from '../../assets/play_store.png'; // Ensure path and file are correct
import app_store from '../../assets/app_store.png'; // Ensure path and file are correct

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>Download Our <br /> App</p>
      <div className="app-download-platforms">
        <img src={play_store} alt="Play Store" />
        <img src={app_store} alt="App Store" />
      </div>
    </div>
  );
};

export default AppDownload;
