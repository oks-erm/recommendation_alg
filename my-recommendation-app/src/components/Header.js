import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>My Recommendation App</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/feedback">Feedback</Link>
            </nav>
        </header>
    );
};

export default Header;