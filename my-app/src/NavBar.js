import React, { useState } from 'react';
import { Container, Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
           <Container>
           <Navbar color="dark" dark expand="md" className="nav">
                <NavbarBrand href="#">
                    Hacker News
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#">New</NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink href="#">Past</NavLink>
                        </NavItem> */}
                        <NavItem>
                            <NavLink href="/comments">Comments</NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink href="#">Ask</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Show</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Jobs</NavLink>
                        </NavItem> */}
                        <NavItem>
                            <NavLink href="/submit">Submit</NavLink>
                        </NavItem>
                    </Nav>
                    <NavLink href="/login" className="login">Login</NavLink>
                </Collapse>
            </Navbar>
           </Container>
        </div>
    )
}

export default NavBar;