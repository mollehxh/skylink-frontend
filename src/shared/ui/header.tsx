import { useState } from 'react';
import { Navbar, Container, NavDropdown } from 'react-bootstrap';

export const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        className="justify-content-between position-sticky zindex-fixed w-100 text-white"
      >
        <Container>
          <Navbar.Brand href="#home">SkyLink</Navbar.Brand>
          <NavDropdown
            title="Имя пользователя"
            id="profile-dropdown"
            show={isDropdownOpen}
            onToggle={handleDropdownToggle}
          >
            <NavDropdown.Item href="#profile">Профиль</NavDropdown.Item>
            <NavDropdown.Item href="#logout">Выйти</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </header>
  );
};
