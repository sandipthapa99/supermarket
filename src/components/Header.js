import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/style.css'
import { FaCartArrowDown,FaSearch,FaPhoneAlt } from "react-icons/fa";

function Header(){
        return(
            <div>
                <div className="agileits_header">
                <div className="container">
                    <div className="w3l_offers">
                        <p>SALE UP TO 70% OFF. USE CODE "SALE70%" . <a href="products.html">SHOP NOW</a></p>
                    </div>
                    <div className="agile-login">
                        <ul>
                            <li><Link to='/signup'>Create Account</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/contact'>Help</Link></li>
                            
                        </ul>
                    </div>
                    <div className="product_list_header">  
                            <form action="#" method="post" className="last"> 
                                <input type="hidden" name="cmd" value="_cart"/>
                                <input type="hidden" name="display" value="1"/>
                                <button className="w3view-cart" type="submit" name="submit" value=""><i className="fa fa-cart-arrow-down" aria-hidden="true"><FaCartArrowDown/></i></button>
                            </form>  
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
            <div className="logo_products">
		<div className="container">
		<div className="w3ls_logo_products_left1">
				<ul className="phone_email">
					<li><i className="fa fa-phone" aria-hidden="true"><FaPhoneAlt/></i>Order online or call us : (+0123) 234 567</li>
					
				</ul>
			</div>
			<div className="w3ls_logo_products_left">
				<h1><Link to="/">super Market</Link></h1>
			</div>
		<div className="w3l_search">
			<form action="#" method="post">
				<input type="search" name="Search" placeholder="Search for a Product..." required=""/>
				<button type="submit" className="btn btn-default search" aria-label="Left Align">
					<i className="fa fa-search" aria-hidden="true"><FaSearch/> </i>
				</button>
				<div className="clearfix"></div>
			</form>
		</div>
			
			<div className="clearfix"> </div>
		</div>
	</div>
            </div>
        );
}
export default Header;