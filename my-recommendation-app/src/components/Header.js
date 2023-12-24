import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../transp.svg';


const HeaderContainer = styled.header`
  background: linear-gradient(180deg, #0b0d65 15%, #0b0e37);
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 0.9rem 1.4rem;
//   box-shadow: 3px 2px 7px 0px rgba(153, 244, 255, 0.32);
  position: relative;
  z-index: 99;
`;

const LogoContainer = styled.div`
  display: flex;
  padding: 0px 20px;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 60px;
  padding: 0 10px 0 0;
`;

const Title = styled.h1`
  color: rgba(123, 241, 255, 0.82);;
  font-size: 36px;
  font-family: Ubuntu;
`;

const Nav = styled.nav`
  padding: 45px 0 0 0;

  .nav-link {
    color: #dddddd;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 0.99rem;
    margin: 0 1.4rem;
    text-decoration: none;
    letter-spacing: 0.3px;

    &:hover {
      text-decoration: underline;
    }
  }
`;


const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <LogoImage src={logo} alt="Logo" />
                <Title>databae</Title> 
            </LogoContainer>
            <Nav>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/profile" className="nav-link">Profile</Link>
                <Link to="/feedback" className="nav-link">Feedback</Link>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;