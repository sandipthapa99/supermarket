import React from 'react';
import {Link} from 'react-router-dom';


function Navigation(){
        return(
            <div>
                <div className="navigation-agileits">
		<div className="container">
			<nav className="navbar navbar-default">
{/* 							<!-- Brand and toggle get grouped for better mobile display --> */}
							<div className="navbar-header nav_2">
								<button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							</div> 
							<div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
								<ul className="nav navbar-nav">
									<li className="active"><Link to="/" className="act">Home</Link></li>	
{/* 									<!-- Mega Menu --> */}
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Groceries<b className="caret"></b></a>
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>All Groceries</h6>
														<li><Link to="/groceries">Dals & Pulses</Link></li>
														<li><Link to="/groceries">Almonds</Link></li>
														<li><Link to="/groceries">Cashews</Link></li>
														<li><Link to="/groceries">Dry Fruit</Link></li>
														<li><Link to="/groceries"> Mukhwas </Link></li>
														<li><Link to="/groceries">Rice & Rice Products</Link></li>
													</ul>
												</div>	
												
											</div>
										</ul>
									</li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Household<b className="caret"></b></a>
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>All Household</h6>
														<li><a href="household.html">Cookware</a></li>
														<li><a href="household.html">Dust Pans</a></li>
														<li><a href="household.html">Scrubbers</a></li>
														<li><a href="household.html">Dust Cloth</a></li>
														<li><a href="household.html"> Mops </a></li>
														<li><a href="household.html">Kitchenware</a></li>
													</ul>
												</div>
												
												
											</div>
										</ul>
									</li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Personal Care<b className="caret"></b></a>
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>Baby Care</h6>
														<li><a href="personalcare.html">Baby Soap</a></li>
														<li><a href="personalcare.html">Baby Care Accessories</a></li>
														<li><a href="personalcare.html">Baby Oil & Shampoos</a></li>
														<li><a href="personalcare.html">Baby Creams & Lotion</a></li>
														<li><a href="personalcare.html"> Baby Powder</a></li>
														<li><a href="personalcare.html">Diapers & Wipes</a></li>
													</ul>
												</div>
												
											</div>
										</ul>
									</li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Packaged Foods<b className="caret"></b></a>
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>All Accessories</h6>
														<li><Link to="/packagedfoods">Baby Food</Link></li>
														<li><Link to="/packagedfoods">Dessert Items</Link></li>
														<li><Link to="/packagedfoods">Biscuits</Link></li>
														<li><Link to="/packagedfoods">Breakfast Cereals</Link></li>
														<li><Link to="/packagedfoods"> Canned Food </Link></li>
														<li><Link to="/packagedfoods">Chocolates & Sweets</Link></li>
													</ul>
												</div>
												
											
											</div>
										</ul>
									</li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">Beverages<b className="caret"></b></a>
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>Tea & Coeffe</h6>
														<li><a href="beverages.html">Green Tea</a></li>
														<li><a href="beverages.html">Ground Coffee</a></li>
														<li><a href="beverages.html">Herbal Tea</a></li>
														<li><a href="beverages.html">Instant Coffee</a></li>
														<li><a href="beverages.html"> Tea </a></li>
														<li><a href="beverages.html">Tea Bags</a></li>
													</ul>
												</div>
							
											</div>
										</ul>
									</li>
									<li><Link to="/gourmet">Gourmet</Link></li>
									<li><Link to="/offers">Offers</Link></li>
									<li><Link to="/contact">Contact</Link></li>
								</ul>
							</div>
							</nav>
			</div>
		</div>
            </div>
        );
}
export default Navigation;