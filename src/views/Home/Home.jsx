import React from 'react';
import Countdown from './Countdown';
import '../../css/views/Home/Home.css';
import logo from '../../assets/logo_crown_car.png';
function Home() {
  return (
    <div className="home-container">
      <img src={logo} alt="Logo Crown Car" />
      <p className="home-text">Saat ini Website Crown Car sedang dalam perbaikan</p>
      <Countdown />
    </div>
  );
}

export default Home;
