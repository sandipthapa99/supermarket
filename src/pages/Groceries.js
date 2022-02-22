import React from "react";
import {Link} from 'react-router-dom';
import {FaHome,FaArrowRight } from "react-icons/fa";
import Helmet from "react-helmet";

import offer from '../assets/images/offer.png';
import one4 from '../assets/images/14.png';
import one5 from '../assets/images/15.png';
import one6 from '../assets/images/16.png';
import one7 from '../assets/images/17.png';
import Categories from "../components/Categories";


function Groceries(){
    return(
        <div>
			<Helmet>
                <title>Supermarket | Groceries</title>
			</Helmet>
            <div className="breadcrumbs">
		<div className="container">
			<ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
			<li><Link to='/'><span aria-hidden="true"><FaHome class="glyphicon-home"/></span>Home</Link></li>
				<li className="active">Groceries</li>
			</ol>
		</div>
	</div>

	<div className="products">
		<div className="container">
			<div className="col-md-4 products-left">
				<Categories/>
				{/* <div className="categories">
					<h2>Categories</h2>
					<ul className="cate">
						<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Fruits And Vegetables</a></li>
							<ul>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Cuts & Sprouts</a></li>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Flowers</a></li>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Fresh Herbs & Seasonings</a></li>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Fresh Vegetables</a> </li>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>International Vegetables</a> </li>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Organic Fruits & Vegetables</a></li>
							</ul>
						<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Grocery & Staples</a></li>
							<ul>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Dals & Pulses</a> </li>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Dry Fruits</a> </li>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Edible Oils & Ghee</a> </li>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Flours & Sooji</a> </li>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Masalas & Spices</a> </li>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Organic Staples</a> </li>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Rice & Rice Products</a> </li>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Salt, Sugar & Jaggery</a></li>
							</ul>
						<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>PersonalCare</a></li>
							<ul>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Baby Care</a> </li>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Cosmetics</a> </li>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Deos & Perfumes</a> </li>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Skin Care</a> </li>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Sanitary Needs</a> </li>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Oral Care</a> </li>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Personal Hygiene</a> </li>
								<li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Shaving Needs</a></li>
							</ul>
					</ul>
				</div>																																												 */}
			</div>
			<div className="col-md-8 products-right">
				<div className="products-right-grid">
					<div className="products-right-grids">
						<div className="sorting">
							<select id="country" onchange="change_country(this.value)" className="frm-field required sect">
								<option value="null"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Default sorting</option>
								<option value="null"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Sort by popularity</option> 
								<option value="null"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Sort by average rating</option>					
								<option value="null"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Sort by price</option>								
							</select>
						</div>
						<div className="sorting-left">
							<select id="country1" onchange="change_country(this.value)" className="frm-field required sect">
								<option value="null"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Item on page 9</option>
								<option value="null"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Item on page 18</option> 
								<option value="null"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Item on page 32</option>					
								<option value="null"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>All</option>								
							</select>
						</div>
						<div className="clearfix"> </div>
					</div>
				</div>
				<div className="agile_top_brands_grids">
					<div className="col-md-4 top_brand_left">
						<div className="hover14 column">
							<div className="agile_top_brand_left_grid">
								<div className="agile_top_brand_left_grid_pos">
									<img src={offer} alt=" " className="img-responsive"/>
								</div>
								<div className="agile_top_brand_left_grid1">
									<figure>
										<div className="snipcart-item block">
											<div className="snipcart-thumb">
												<a href="single.html"><img title=" " alt=" " src={one4}/></a>		
												<p>Toor Dal</p>
												<h4>$35.99 <span>$55.00</span></h4>
											</div>
											<div className="snipcart-details top_brand_home_details">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart"/>
														<input type="hidden" name="add" value="1"/>
														<input type="hidden" name="business" value=" "/>
														<input type="hidden" name="item_name" value="Fortune Sunflower Oil"/>
														<input type="hidden" name="amount" value="35.99"/>
														<input type="hidden" name="discount_amount" value="1.00"/>
														<input type="hidden" name="currency_code" value="USD"/>
														<input type="hidden" name="return" value=" "/>
														<input type="hidden" name="cancel_return" value=" "/>
														<input type="submit" name="submit" value="Add to cart" className="button"/>
													</fieldset>
												</form>
											</div>
										</div>
									</figure>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 top_brand_left">
						<div className="hover14 column">
							<div className="agile_top_brand_left_grid">
								<div className="agile_top_brand_left_grid_pos">
									<img src={offer} alt=" " className="img-responsive"/>
								</div>
								<div className="agile_top_brand_left_grid1">
									<figure>
										<div className="snipcart-item block">
											<div className="snipcart-thumb">
												<a href="single.html"><img title=" " alt=" " src={one5}/></a>		
												<p>Moong Dal</p>
												<h4>$30.99 <span>$45.00</span></h4>
											</div>
											<div className="snipcart-details top_brand_home_details">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart"/>
														<input type="hidden" name="add" value="1"/>
														<input type="hidden" name="business" value=" "/>
														<input type="hidden" name="item_name" value="basmati rise"/>
														<input type="hidden" name="amount" value="30.99"/>
														<input type="hidden" name="discount_amount" value="1.00"/>
														<input type="hidden" name="currency_code" value="USD"/>
														<input type="hidden" name="return" value=" "/>
														<input type="hidden" name="cancel_return" value=" "/>
														<input type="submit" name="submit" value="Add to cart" className="button"/>
													</fieldset>
												</form>
											</div>
										</div>
									</figure>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 top_brand_left">
						<div className="hover14 column">
							<div className="agile_top_brand_left_grid">
								<div className="agile_top_brand_left_grid_pos">
									<img src={offer} alt=" " className="img-responsive"/>
								</div>
								<div className="agile_top_brand_left_grid_pos">
									<img src={offer} alt=" " className="img-responsive"/>
								</div>
								<div className="agile_top_brand_left_grid1">
									<figure>
										<div className="snipcart-item block">
											<div className="snipcart-thumb">
												<a href="single.html"><img src={one6} alt=" " className="img-responsive"/></a>
												<p>Channa</p>
												<h4>$80.99 <span>$105.00</span></h4>
											</div>
											<div className="snipcart-details top_brand_home_details">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart"/>
														<input type="hidden" name="add" value="1"/>
														<input type="hidden" name="business" value=" "/>
														<input type="hidden" name="item_name" value="Pepsi soft drink"/>
														<input type="hidden" name="amount" value="80.00"/>
														<input type="hidden" name="discount_amount" value="1.00"/>
														<input type="hidden" name="currency_code" value="USD"/>
														<input type="hidden" name="return" value=" "/>
														<input type="hidden" name="cancel_return" value=" "/>
														<input type="submit" name="submit" value="Add to cart" className="button"/>
													</fieldset>
												</form>
											</div>
										</div>
									</figure>
								</div>
							</div>
						</div>
					</div>
						<div className="clearfix"> </div>
				</div>
				<div className="agile_top_brands_grids">
					<div className="col-md-4 top_brand_left">
						<div className="hover14 column">
							<div className="agile_top_brand_left_grid">
								<div className="agile_top_brand_left_grid_pos">
									<img src={offer} alt=" " className="img-responsive"/>
								</div>
								<div className="agile_top_brand_left_grid1">
									<figure>
										<div className="snipcart-item block">
											<div className="snipcart-thumb">
												<a href="single.html"><img title=" " alt=" " src={one7}/></a>		
												<p>Arhar Dal</p>
												<h4>$35.99 <span>$55.00</span></h4>
											</div>
											<div className="snipcart-details top_brand_home_details">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart"/>
														<input type="hidden" name="add" value="1"/>
														<input type="hidden" name="business" value=" "/>
														<input type="hidden" name="item_name" value="Fortune Sunflower Oil"/>
														<input type="hidden" name="amount" value="35.99"/>
														<input type="hidden" name="discount_amount" value="1.00"/>
														<input type="hidden" name="currency_code" value="USD"/>
														<input type="hidden" name="return" value=" "/>
														<input type="hidden" name="cancel_return" value=" "/>
														<input type="submit" name="submit" value="Add to cart" className="button"/>
													</fieldset>
												</form>
											</div>
										</div>
									</figure>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 top_brand_left">
						<div className="hover14 column">
							<div className="agile_top_brand_left_grid">
								<div className="agile_top_brand_left_grid_pos">
									<img src={offer} alt=" " className="img-responsive"/>
								</div>
								<div className="agile_top_brand_left_grid1">
									<figure>
										<div className="snipcart-item block">
											<div className="snipcart-thumb">
												<a href="single.html"><img title=" " alt=" " src={one4}/></a>		
												<p>Toor Dal</p>
												<h4>$30.99 <span>$45.00</span></h4>
											</div>
											<div className="snipcart-details top_brand_home_details">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart"/>
														<input type="hidden" name="add" value="1"/>
														<input type="hidden" name="business" value=" "/>
														<input type="hidden" name="item_name" value="basmati rise"/>
														<input type="hidden" name="amount" value="30.99"/>
														<input type="hidden" name="discount_amount" value="1.00"/>
														<input type="hidden" name="currency_code" value="USD"/>
														<input type="hidden" name="return" value=" "/>
														<input type="hidden" name="cancel_return" value=" "/>
														<input type="submit" name="submit" value="Add to cart" className="button"/>
													</fieldset>
												</form>
											</div>
										</div>
									</figure>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 top_brand_left">
						<div className="hover14 column">
							<div className="agile_top_brand_left_grid">
								<div className="agile_top_brand_left_grid_pos">
									<img src={offer} alt=" " className="img-responsive"/>
								</div>
								<div className="agile_top_brand_left_grid_pos">
									<img src={offer} alt=" " className="img-responsive"/>
								</div>
								<div className="agile_top_brand_left_grid1">
									<figure>
										<div className="snipcart-item block">
											<div className="snipcart-thumb">
												<a href="single.html"><img src={one5} alt=" " className="img-responsive"/></a>
												<p>Moong Dal</p>
												<h4>$80.99 <span>$105.00</span></h4>
											</div>
											<div className="snipcart-details top_brand_home_details">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart"/>
														<input type="hidden" name="add" value="1"/>
														<input type="hidden" name="business" value=" "/>
														<input type="hidden" name="item_name" value="Pepsi soft drink"/>
														<input type="hidden" name="amount" value="80.00"/>
														<input type="hidden" name="discount_amount" value="1.00"/>
														<input type="hidden" name="currency_code" value="USD"/>
														<input type="hidden" name="return" value=" "/>
														<input type="hidden" name="cancel_return" value=" "/>
														<input type="submit" name="submit" value="Add to cart" className="button"/>
													</fieldset>
												</form>
											</div>
										</div>
									</figure>
								</div>
							</div>
						</div>
					</div>
						<div className="clearfix"> </div>
				</div>
				<div className="agile_top_brands_grids">
					<div className="col-md-4 top_brand_left">
						<div className="hover14 column">
							<div className="agile_top_brand_left_grid">
								<div className="agile_top_brand_left_grid_pos">
									<img src={offer} alt=" " className="img-responsive"/>
								</div>
								<div className="agile_top_brand_left_grid1">
									<figure>
										<div className="snipcart-item block">
											<div className="snipcart-thumb">
												<a href="single.html"><img title=" " alt=" " src={one6}/></a>		
												<p>Channa</p>
												<h4>$35.99 <span>$55.00</span></h4>
											</div>
											<div className="snipcart-details top_brand_home_details">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart"/>
														<input type="hidden" name="add" value="1"/>
														<input type="hidden" name="business" value=" "/>
														<input type="hidden" name="item_name" value="Fortune Sunflower Oil"/>
														<input type="hidden" name="amount" value="35.99"/>
														<input type="hidden" name="discount_amount" value="1.00"/>
														<input type="hidden" name="currency_code" value="USD"/>
														<input type="hidden" name="return" value=" "/>
														<input type="hidden" name="cancel_return" value=" "/>
														<input type="submit" name="submit" value="Add to cart" className="button"/>
													</fieldset>
												</form>
											</div>
										</div>
									</figure>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 top_brand_left">
						<div className="hover14 column">
							<div className="agile_top_brand_left_grid">
								<div className="agile_top_brand_left_grid_pos">
									<img src={offer} alt=" " className="img-responsive"/>
								</div>
								<div className="agile_top_brand_left_grid1">
									<figure>
										<div className="snipcart-item block">
											<div className="snipcart-thumb">
												<a href="single.html"><img title=" " alt=" " src={one7}/></a>		
												<p>Arhar Dal</p>
												<h4>$30.99 <span>$45.00</span></h4>
											</div>
											<div className="snipcart-details top_brand_home_details">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart"/>
														<input type="hidden" name="add" value="1"/>
														<input type="hidden" name="business" value=" "/>
														<input type="hidden" name="item_name" value="basmati rise"/>
														<input type="hidden" name="amount" value="30.99"/>
														<input type="hidden" name="discount_amount" value="1.00"/>
														<input type="hidden" name="currency_code" value="USD"/>
														<input type="hidden" name="return" value=" "/>
														<input type="hidden" name="cancel_return" value=" "/>
														<input type="submit" name="submit" value="Add to cart" className="button"/>
													</fieldset>
												</form>
											</div>
										</div>
									</figure>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 top_brand_left">
						<div className="hover14 column">
							<div className="agile_top_brand_left_grid">
								<div className="agile_top_brand_left_grid_pos">
									<img src={offer} alt=" " className="img-responsive"/>
								</div>
								<div className="agile_top_brand_left_grid_pos">
									<img src={offer} alt=" " className="img-responsive"/>
								</div>
								<div className="agile_top_brand_left_grid1">
									<figure>
										<div className="snipcart-item block">
											<div className="snipcart-thumb">
												<a href="single.html"><img src={one4} alt=" " className="img-responsive"/></a>
												<p>Toor Dal</p>
												<h4>$80.99 <span>$105.00</span></h4>
											</div>
											<div className="snipcart-details top_brand_home_details">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart"/>
														<input type="hidden" name="add" value="1"/>
														<input type="hidden" name="business" value=" "/>
														<input type="hidden" name="item_name" value="Pepsi soft drink"/>
														<input type="hidden" name="amount" value="80.00"/>
														<input type="hidden" name="discount_amount" value="1.00"/>
														<input type="hidden" name="currency_code" value="USD"/>
														<input type="hidden" name="return" value=" "/>
														<input type="hidden" name="cancel_return" value=" "/>
														<input type="submit" name="submit" value="Add to cart" className="button"/>
													</fieldset>
												</form>
											</div>
										</div>
									</figure>
								</div>
							</div>
						</div>
					</div>
						<div className="clearfix"> </div>
				</div>
				<nav className="numbering">
					<ul className="pagination paging">
						<li>
							<a href="#" aria-label="Previous">
								<span aria-hidden="true">&laquo;</span>
							</a>
						</li>
						<li className="active"><a href="#">1<span className="sr-only">(current)</span></a></li>
						<li><a href="#">2</a></li>
						<li><a href="#">3</a></li>
						<li><a href="#">4</a></li>
						<li><a href="#">5</a></li>
						<li>
							<a href="#" aria-label="Next">
							<span aria-hidden="true">&raquo;</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className="clearfix"> </div>
		</div>
	</div>
        </div>
    );
}

export default Groceries;