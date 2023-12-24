import React from 'react';
import styled from 'styled-components';
import logo from '../transp.svg';

const FooterContainer = styled.footer`
  background: linear-gradient(180deg, #121212, 65%, rgba(69, 11, 150, 0.88));
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 3.5rem;
  position: relative;
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
`;

const FooterText = styled.p`
  color: #dddddd;
  opacity: 0.7;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-right: 10rem;
    align-items: end;
`

const FooterNav = styled.nav`
  padding: 0 2em;
  display: flex;
  flex-direction: column;

  .nav-link {
    color: #dddddd;
    opacity: 0.5;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    margin: 0.1em 1.4em;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LogoImage = styled.img`
  height: 35px;
  padding: 10px;
  opacity: 0.7
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <LogoImage src={logo} alt="Logo" />
                <FooterText>&copy; {new Date().getFullYear()} databae</FooterText>
            </FooterContent>
            <NavContainer>
            <FooterNav>
                <a href="/" className="nav-link">Home</a>
                <a href="/profile" className="nav-link">About</a>
                <a href="/feedback" className="nav-link">Feedback</a>
            </FooterNav>
            <FooterNav>
                <a href="/" className="nav-link">News</a>
                <a href="/profile" className="nav-link">Tutorials</a>
                <a href="/feedback" className="nav-link">Interviews</a>
            </FooterNav>
            <FooterNav>
                <a href="/" className="nav-link">Papers and Articles</a>
                <a href="/profile" className="nav-link">Lectures and Seminars</a>
                <a href="/feedback" className="nav-link">Tools and Resources</a>
            </FooterNav>
            </NavContainer>
        </FooterContainer>
    );
};

export default Footer;
