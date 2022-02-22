import React from "react";
import { Link } from "react-router-dom";
import {FaHome,FaArrowRight } from "react-icons/fa";
import { Helmet } from "react-helmet";

import offer from '../assets/images/offer.png';
import gu1 from '../assets/images/gu1.png';
import gu2 from '../assets/images/gu2.png';
import gu3 from '../assets/images/gu3.png';
import gu4 from '../assets/images/gu4.png';
import gu5 from '../assets/images/gu5.png';
import gu6 from '../assets/images/gu6.png';
import gu7 from '../assets/images/gu7.png';
import gu8 from '../assets/images/gu8.png';
import gu9 from '../assets/images/gu9.png';

function Gourmet(){
    return(
        <div>
			<Helmet>
                <title>Supermarket | Gourmet</title>
			</Helmet>
            <div className="breadcrumbs">
		<div className="container">
			<ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
			<li><Link to='/'><span aria-hidden="true"><FaHome class="glyphicon-home"/></span>Home</Link></li>
				<li className="active">Gourmet</li>
			</ol>
		</div>
	</div>

	<div className="products">
		<div className="container">
			<div className="col-md-4 products-left">
				<div className="categories">
					<h2>Categories</h2>
					<ul className="cate">
						<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Fruits And Vegetables</Link></li>
							<ul>
								<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Cuts & Sprouts</Link></li>
								<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Flowers</Link></li>
								<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Fresh Herbs & Seasonings</Link></li>
								<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Fresh Vegetables</Link> </li>
								<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>International Vegetables</Link> </li>
								<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Organic Fruits & Vegetables</Link></li>
							</ul>
						<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Grocery & Staples</Link></li>
							<ul>
								<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Dals & Pulses</Link> </li>
								<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Dry Fruits</Link> </li>
								<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Edible Oils & Ghee</Link> </li>
								<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Flours & Sooji</Link> </li>
								<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Masalas & Spices</Link> </li>
								<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Organic Staples</Link> </li>
								<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Rice & Rice Products</Link> </li>
								<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Salt, Sugar & Jaggery</Link></li>
							</ul>
						<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>PersonalCare</Link></li>
							<ul>
								<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Baby Care</Link> </li>
								<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Cosmetics</Link> </li>
								<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Deos & Perfumes</Link> </li>
								<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Skin Care</Link> </li>
								<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Sanitary Needs</Link> </li>
								<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Oral Care</Link> </li>
								<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Personal Hygiene</Link> </li>
								<li><Link to='/products'><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Shaving Needs</Link></li>
							</ul>
					</ul>
				</div>																																												
			</div>
			<div className="col-md-8 products-right">
				<div className="products-right-grid">
					<div className="products-right-grids">
						<div className="sorting">
							<select id="country" onchange="" className="frm-field required sect">
								<option value="null"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Default sorting</option>
								<option value="null"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Sort by popularity</option> 
								<option value="null"><i className="fa fa-arrow-righelet" aria-hidden="true"><FaArrowRight/></i>Sort by average rating</option>					
								<option value="null"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Sort by price</option>								
							</select>
						</div>
						<div className="sorting-left">
							<select id="country1" onchange="" className="frm-field required sect">
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
												<Link to='/single'><img title=" " alt=" " src={gu1}/></Link>		
												<p>Milk Caramel</p>
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
												<Link to='/single'><img title=" " alt=" " src={gu2}/></Link>		
												<p>Gourmet</p>
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
												<Link to='/single'><img src={gu3} alt=" " className="img-responsive"/></Link>
												<p>Strawberry</p>
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
												<Link to='/single'><img title=" " alt=" " src={gu4}/></Link>		
												<p>Miniatures</p>
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
												<Link to='/single'><img title=" " alt=" " src={gu5}/></Link>		
												<p>Le-Gourmet</p>
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
												<Link to='/single'><img src={gu6} alt=" " className="img-responsive"/></Link>
												<p>Chocolate Bar</p>
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
												<Link to='/single'><img title=" " alt=" " src={gu7}/></Link>		
												<p>Poultry Rub</p>
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
												<Link to='/single'><img title=" " alt=" " src={gu8}/></Link>		
												<p>Sandwich</p>
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
												<Link to='/single'><img src={gu9} alt=" " className="img-responsive"/></Link>
												<p>Fruit Nut</p>
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

export default Gourmet;