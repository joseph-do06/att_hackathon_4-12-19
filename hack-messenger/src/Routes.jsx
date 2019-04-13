import React from 'react';
import { Navbar, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./components/Homepage";
import LandingPage from "./components/landingPage/LandingPage";

class Routes extends React.Component {
    render() {
        return(
        <React.Fragment>
            <Router>
                <Navbar className="navbar" light expand="md">
                    <Collapse navbar>
                        <Nav>
                            <NavItem className="NavItem">
                                <NavLink tag={Link} to="/">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem className="NavItem">
                                <NavLink tag={Link} disabled to="/messenger">
                                    Messenger
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

                <Route exact path="/" component={LandingPage} />
                <Route exact path="/messenger" component={HomePage} />
            </Router>    
        </React.Fragment>
        )
    }
}

export default Routes;