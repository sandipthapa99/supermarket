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
					<Nav.Link><Link to="/products" className="navTitle">Products</Link></Nav.Link>

					<NavDropdown id="noUnderline" title={<span className="navTitle">Groceries</span>}>
						<NavDropdown.Item id="droplist"><span className="dropdownTitle">All Groceries</span></NavDropdown.Item>
						<NavDropdown.Divider/>
						<NavDropdown.Item id="droplist"><Link to="/groceries" className="dropItems">Dals &amp; Pulses</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/groceries" className="dropItems">Almonds</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/groceries" className="dropItems">Cashews</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/groceries" className="dropItems">Dry Fruit</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/groceries" className="dropItems">Mukhwas</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/groceries" className="dropItems">Rice &amp; Rice Products</Link></NavDropdown.Item>
					</NavDropdown>

					<NavDropdown id="noUnderline" title={<span className="navTitle">HouseHold</span>}>
						<NavDropdown.Item id="droplist"><span className="dropdownTitle">All HouseHold</span></NavDropdown.Item>
						<NavDropdown.Divider/>
						<NavDropdown.Item id="droplist"><Link to="/household" className="dropItems">Cookware</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/household" className="dropItems">Dust Pans</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/household" className="dropItems">Scrubbers</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/household" className="dropItems">Dust Cloth</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/household" className="dropItems">Mops</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/household" className="dropItems">Kitchenware</Link></NavDropdown.Item>
					</NavDropdown>

					<NavDropdown id="noUnderline" title={<span className="navTitle">Personal Care</span>}>
						<NavDropdown.Item id="droplist"><span className="dropdownTitle">Baby Care</span></NavDropdown.Item>
						<NavDropdown.Divider/>
						<NavDropdown.Item id="droplist"><Link to="/personalcare" className="dropItems">Baby Soap</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/personalcare" className="dropItems">Baby Care Accessories</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/personalcare" className="dropItems">Baby Oil &amp; Shampoos</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/personalcare" className="dropItems">Baby Creams &amp; Lotion</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/personalcare" className="dropItems">Baby Powder</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/personalcare" className="dropItems">Diapers &amp; Wipes</Link></NavDropdown.Item>
					</NavDropdown>

					<NavDropdown id="noUnderline" title={<span className="navTitle">Packaged Foods</span>}>
						<NavDropdown.Item id="droplist"><span className="dropdownTitle">All Accessories</span></NavDropdown.Item>
						<NavDropdown.Divider/>
						<NavDropdown.Item id="droplist"><Link to="/packagedfoods" className="dropItems">Baby Food</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/packagedfoods" className="dropItems">Desert Items</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/packagedfoods" className="dropItems">Biscuits &amp; Shampoos</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/packagedfoods" className="dropItems">Breakfast Cereals &amp; Lotion</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/packagedfoods" className="dropItems">Canned Food</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/packagedfoods" className="dropItems">Chocolates &amp; Sweets</Link></NavDropdown.Item>
					</NavDropdown>

					<NavDropdown id="noUnderline" title={<span className="navTitle">Beverages</span>}>
						<NavDropdown.Item id="droplist"><span className="dropdownTitle">Tea &amp; Coeffee</span></NavDropdown.Item>
						<NavDropdown.Divider/>
						<NavDropdown.Item id="droplist"><Link to="/beverages" className="dropItems">Green Tea</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/beverages" className="dropItems">Ground Coffee</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/beverages" className="dropItems">Herbal Tea</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/beverages" className="dropItems">Instant Coeffee</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/beverages" className="dropItems">Tea</Link></NavDropdown.Item>
						<NavDropdown.Item id="droplist"><Link to="/beverages" className="dropItems">Tea Bags</Link></NavDropdown.Item>
					</NavDropdown>

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