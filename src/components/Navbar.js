
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Registration from "./Registration";
import ViewCollege from "./ViewCollege";
import About from "./About";

const NavbarComp = () => {
    return (
        <div>
            <Router>
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="#">College-Registration</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to={"/"}>About</Nav.Link>
                                    <Nav.Link as={Link} to={"ViewCollege"}>ViewCollege</Nav.Link>
                                    <Nav.Link as={Link} to={"/NewRegistration"}>NewRegistration</Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link href="SignOut">SignOut</Nav.Link>
                                    <Nav.Link href="AdminSigin">Admin Sigin</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>
                <Switch>
                    <Route exact path="/" component={About}></Route>
                    <Route path="/ViewCollege" component={ViewCollege}></Route>
                    <Route path="/NewRegistration" component={Registration}></Route>
                </Switch>
                </div>
            </Router>
        </div>
    )
}

export default NavbarComp


