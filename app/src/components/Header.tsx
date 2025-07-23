
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
// import { FaLinux } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="#home">
          {/* <FaLinux className="me-2" /> */}
          Linux Performance Dashboard
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
