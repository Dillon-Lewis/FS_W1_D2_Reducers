
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
    return (
        <Navbar bg="primary" expand="md">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link as={NavLink} to="/" activeclassname="active">
                        Homepage
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/exercises" activeclassname="active">
                        Exercises
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;