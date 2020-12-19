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
          <Navbar.Collapse id="nav-bar-right">
            <Nav>
              <NavDropdown title="Deals" id="collasible-nav-dropdown dark">
                <NavDropdown.Item href="/products/new-deals">
                  New Deals
                </NavDropdown.Item>
                <NavDropdown.Item href="/products/freebie">
                  Freebie
                </NavDropdown.Item>
                <NavDropdown.Item href="/products/stores">
                  Stores
                </NavDropdown.Item>
                <NavDropdown.Item href="/products/popular-deals">
                  Popular Deals
                </NavDropdown.Item>
              </NavDropdown>
              { !auth.authenticated ? (
                <>
                  <Nav.Item>
                    <Nav.Link href="/users/signin">Sign-in</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/users/signup">Register</Nav.Link>
                  </Nav.Item>
                </>
              ) : (
                <Nav.Item>
                  <Nav.Link href="/users/profile">{auth.user.name}</Nav.Link>
                </Nav.Item>
              ) }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}
