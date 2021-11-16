import React from 'react';
import {Link} from 'react-router-dom';
import './navigation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

function Navigation(){
        return(
            <div className="bg-mybg">
				<div className="container">
				<Navbar variant="dark" sticky="top" expand="md" collapseOnSelect font="myfont">
				<Navbar.Toggle/>
				<Navbar.Collapse>
				<Nav>
					<Nav.Link><Link to="/" className="navTitle">Home</Link></Nav.Link>
					<NavDropdown title={<span className="navTitle">Groceries</span>}>
						<NavDropdown.Item className="naaav"><Link to="/groceries">Dals & Pulses</Link></NavDropdown.Item>
						<NavDropdown.Item><Link to="/groceries">Almonds</Link></NavDropdown.Item>
						<NavDropdown.Item><Link to="/groceries">Cashews</Link></NavDropdown.Item>
						<NavDropdown.Item><Link to="/groceries">Dry Fruit</Link></NavDropdown.Item>
						<NavDropdown.Item><Link to="/groceries">Mukhwas</Link></NavDropdown.Item>
						<NavDropdown.Item><Link to="/groceries">Rice & Rice Products</Link></NavDropdown.Item>
						<NavDropdown.Divider/>
						<NavDropdown.Item href="/groceries">Rice & Rice Products</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title={<span className="navTitle">Household</span>}></NavDropdown>
					<NavDropdown title={<span className="navTitle">Personal Care</span>}></NavDropdown>
					<NavDropdown title={<span className="navTitle">Packaged Foods</span>}></NavDropdown>
					<NavDropdown title={<span className="navTitle">Beverages</span>}></NavDropdown>
					<Nav.Link><Link to="/gourmet" className="navTitle">Gourmet</Link></Nav.Link>
					<Nav.Link><Link to="/offers" className="navTitle">Offers</Link></Nav.Link>
					<Nav.Link><Link to="/contact" className="navTitle">Contact</Link></Nav.Link>
				</Nav>
				</Navbar.Collapse>	
				
				</Navbar>
				</div>
            </div>
        );
}
export default Navigation;