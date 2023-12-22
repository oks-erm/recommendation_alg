import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../transp.svg';
import '../Header.css';

const Header = () => {
    return (
        <header style={{ display: 'flex', alignItems: 'center', padding: '20px 30px', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="Logo" style={{ height: '60px' }}/>
                <h1>databae</h1> 
            </div>
            <nav>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/profile" className="nav-link">Profile</Link>
                <Link to="/feedback" className="nav-link">Feedback</Link>
            </nav>
        </header>
    );
};

export default Header;