import React from 'react';
import '../../css/components/Navbar/Navbar.css';
import Button from '@mui/material/Button';
import logo from '../../assets/logo_crown_car.png';
function Navbar() {
  return (
    <div className="container-navbar">
        <div className="wrapper-navbar">
            <div className="left-navbar">
                <img src={logo} alt="Logo" />
                <h2>Crown Car</h2>
            </div>
            <div className="right-navbar">
                <Button variant="outlined"><h3>Grab your Deal</h3></Button>
            </div>
        </div>
    </div>
  )
}

export default Navbar