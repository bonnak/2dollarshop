import React, { useContext } from 'react';
import {
  Navbar, Nav, Container, NavDropdown,
} from 'react-bootstrap';
import GlobalSearch from './GlobalSearch';
import { Context as AuthContext } from '../contexts/AuthContext';

export default function PageHeader() {
  const { state: auth } = useContext(AuthContext);

  return (
    <header className="app-header">
      <Container>
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          className="app-main-nav"
        >
          <Navbar.Brand href="/">Two-Dollars.com</Navbar.Brand>
          <div className="flex-grow-1">
            <GlobalSearch />
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav>
              <NavDropdown title="Deals">
                <NavDropdown.Item href="/deals/new-deals">
                  New Deals
                </NavDropdown.Item>
                <NavDropdown.Item href="/deals/freebie">
                  Freebie
                </NavDropdown.Item>
                <NavDropdown.Item href="/deals/stores">Stores</NavDropdown.Item>
                <NavDropdown.Item href="/deals/popular-deals">
                  Popular Deals
                </NavDropdown.Item>
              </NavDropdown>
              {!auth.authenticated ? (
                <>
                  <Nav.Item>
                    <Nav.Link href="/users/signin">Sign-in</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/users/signup">Register</Nav.Link>
                  </Nav.Item>
                </>
              ) : (
                <NavDropdown title={auth.user.name}>
                  <NavDropdown.Item href="/_office/deals">
                    Deals
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/_office/users/profile">
                    Profile
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}
