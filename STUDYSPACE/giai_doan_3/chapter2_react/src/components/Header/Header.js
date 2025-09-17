import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, NavLink,Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand href="#home">Hong hoc web</Navbar.Brand> */}
                <Link to='/' className='navbar-brand'>LOGO</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <NavLink to='/' className='nav-link'>Home</NavLink>
                        <NavLink to='/Users' className='nav-link'>Users</NavLink>
                        <NavLink to='/Admin' className='nav-link'>Admin</NavLink>

                        {/* <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Users">Users</Nav.Link>
                        <Nav.Link href="Admin">Admin</Nav.Link> */}

                    </Nav>

                    <Nav>
                        <button className='btn-login'>Log in</button>
                        <button className='btn-signup'>Sign up</button>
                        {/* <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item >Log in</NavDropdown.Item>
                            <NavDropdown.Item >Log out</NavDropdown.Item>
                            <NavDropdown.Item >Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item > Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;