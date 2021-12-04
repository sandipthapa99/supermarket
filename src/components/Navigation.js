import React from 'react';
import {Link} from 'react-router-dom';
import './css/navigation.css';
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
					<Nav.Link><Link to="/product" className="navTitle">Products</Link></Nav.Link>

					<NavDropdown id="noUnderline" title={<span className="navTitle">Pizza</span>}>
						<NavDropdown.Item id="droplist"><span className="dropdownTitle">All Groceries</span></NavDropdown.Item>
						<NavDropdown.Divider/>
						<NavDropdown.Item id="droplist"><Link to="/groceries" className="dropItems">Pizza 1</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/groceries" className="dropItems">Pizza 2</Link></NavDropdown.Item>
					</NavDropdown>

					<Nav.Link><Link to="/momo" className="navTitle">Momo</Link></Nav.Link>
					<Nav.Link><Link to="/noodles" className="navTitle">Noodles</Link></Nav.Link>
					<Nav.Link><Link to="/chilli" className="navTitle">Chilli</Link></Nav.Link>
					<Nav.Link><Link to="/sandwich" className="navTitle">Sandwhich</Link></Nav.Link>
					<Nav.Link><Link to="/healthy%20choice" className="navTitle">Healthy Choice</Link></Nav.Link>
					<Nav.Link><Link to="/rice" className="navTitle">Rice</Link></Nav.Link>
				</Nav>
				</Navbar.Collapse>	
				
				</Navbar>
				</div>
            </div>
        );
}
export default Navigation;