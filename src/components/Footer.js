import React from "react";
import { Link } from "react-router-dom";
import {FaMapMarkerAlt,FaEnvelope,FaPhoneAlt,FaArrowRight } from "react-icons/fa";

function Footer(){
    return(
        <div className="footer">
		<div className="container">
			<div className="w3_footer_grids">
				<div className="col-md-3 w3_footer_grid">
					<h3>Contact</h3>
					
					<ul className="address">
						<li><i aria-hidden="true"><FaMapMarkerAlt className="glyphicon-map-marker"/></i>1234k Avenue, 4th block, <span>New York City.</span></li>
						<li><i aria-hidden="true"><FaEnvelope className="glyphicon-envelope"/></i><a href="mailto:info@example.com">info@example.com</a></li>
						<li><i aria-hidden="true"><FaPhoneAlt className="glyphicon-earphone"/></i>+1234 567 567</li>
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Information</h3>
					<ul className="info"> 
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><Link to="/about">About Us</Link></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><Link to="/contact">Contact Us</Link></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><Link to="/products">Special Products</Link></li>
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Category</h3>
					<ul className="info"> 
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><Link to="/groceries">Groceries</Link></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><Link to="/household">Household</Link></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><Link to="/personalcare">Personal Care</Link></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><Link to="/packagedfoods">Packaged Foods</Link></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><Link to="/beverages">Beverages</Link></li>
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Profile</h3>
					<ul className="info"> 
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><Link to="/products">Store</Link></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><Link to="/cart">My Cart</Link></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><Link to="/login">Login</Link></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><Link to="/signup">Create Account</Link></li>
					</ul>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
		
		<div className="footer-copy">
			
			<div className="container">
				<p>© 2021 Super Market. All rights reserved | Developed by <a href="https://www.sandipthapa.com.np" target="_blank">Sandip Thapa</a></p>
			</div>
		</div>
		
	</div>
    );
}
export default Footer;