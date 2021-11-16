import React from "react";
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
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><a href="about.html">About Us</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><a href="contact.html">Contact Us</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><a href="short-codes.html">Short Codes</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><a href="faq.html">FAQ's</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><a href="products.html">Special Products</a></li>
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Category</h3>
					<ul className="info"> 
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><a href="groceries.html">Groceries</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><a href="household.html">Household</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><a href="personalcare.html">Personal Care</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><a href="packagedfoods.html">Packaged Foods</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><a href="beverages.html">Beverages</a></li>
					</ul>
				</div>
				<div className="col-md-3 w3_footer_grid">
					<h3>Profile</h3>
					<ul className="info"> 
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><a href="products.html">Store</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><a href="checkout.html">My Cart</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><a href="login.html">Login</a></li>
						<li><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i><a href="registered.html">Create Account</a></li>
					</ul>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
		
		<div className="footer-copy">
			
			<div className="container">
				<p>© 2017 Super Market. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a></p>
			</div>
		</div>
		
	</div>
    );
}
export default Footer;