import React from 'react';
import {useState} from 'react';

import img1 from '../assets/images/offer.png';
import one from '../assets/images/1.png';
import two from '../assets/images/2.png';
import three from '../assets/images/3.png';
import four from '../assets/images/4.png';
import five from '../assets/images/5.png';
import six from '../assets/images/6.png';
import seven from '../assets/images/7.png';
import eight from '../assets/images/8.png';
import nine from '../assets/images/9.png';
import ten from '../assets/images/10.png';
import twelve from '../assets/images/12.png';
import thirteen from '../assets/images/13.png';
import './offers.css';


function Offers(){

	const [toggleState, setToggleState] = useState(1);

	const toggleTab =(index)=>{
		setToggleState(index);
	}
    return(
        <div className="top-brands">

			<div className="container">
			<div className="bloc-tabs">
				{/* <button className={toggleState===1?"tabs active-tabs":"tabs" onclick={()=>toggleTab(1)}}></button> */}
				<div className={toggleState===1?"tabs active-tabs":"tabs"} onClick={()=>toggleTab(1)}>Tab 1</div>
				<div className={toggleState===2?"tabs active-tabs":"tabs"} onClick={()=>toggleTab(2)}>Tab 2</div>
			</div>

			<div className="content-tabs">
				<div className={toggleState===1?"content active-content":"content"}>
					<h3>Content 1</h3><hr/>
					<p>
						This is content 1.
					</p>
				</div>
				<div className={toggleState===2?"content active-content":"content"}>
					<h3>Content 2</h3><hr/>
					<p>
						This is content 2.
					</p>
				</div>
			</div>
			</div>

			<div className="container">
			<h2>Top selling offers</h2>
				<div className="grid_3 grid_5">
					<div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
						<ul id="myTab" className="nav nav-tabs" role="tablist">
							<li role="presentation" className="active"><a href="#expeditions" id="expeditions-tab" role="tab" data-toggle="tab" aria-controls="expeditions" aria-expanded="true">Advertised offers</a></li>
							<li role="presentation"><a href="#tours" role="tab" id="tours-tab" data-toggle="tab" aria-controls="tours">Today Offers</a></li>
						</ul>
						<div id="myTabContent" className="tab-content">
							<div role="tabpanel" className="tab-pane fade in active" id="expeditions" aria-labelledby="expeditions-tab">
								<div className="agile-tp">
									<h5>Advertised this week</h5>
									<p className="w3l-ad">We've pulled together all our advertised offers into one place, so you won't miss out on a great deal.</p>
								</div>
								<div className="agile_top_brands_grids">
									<div className="col-md-4 top_brand_left">
										<div className="hover14 column">
											<div className="agile_top_brand_left_grid">
												<div className="agile_top_brand_left_grid_pos">
													<img src={img1} alt=" " className="img-responsive" />
												</div>
												<div className="agile_top_brand_left_grid1">
													<figure>
														<div className="snipcart-item block" >
															<div className="snipcart-thumb">
																<a href="products.html"><img title=" " alt=" " src={one} /></a>		
																<p>Tata-salt</p>
																<div className="stars">
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star gray-star" aria-hidden="true"></i>
																</div>
																<h4>$20.99 <span>$35.00</span></h4>
															</div>
															<div className="snipcart-details top_brand_home_details">
																<form action="#" method="post">
																	<fieldset>
																		<input type="hidden" name="cmd" value="_cart" />
																		<input type="hidden" name="add" value="1" />
																		<input type="hidden" name="business" value=" " />
																		<input type="hidden" name="item_name" value="Fortune Sunflower Oil" />
																		<input type="hidden" name="amount" value="20.99" />
																		<input type="hidden" name="discount_amount" value="1.00" />
																		<input type="hidden" name="currency_code" value="USD" />
																		<input type="hidden" name="return" value=" " />
																		<input type="hidden" name="cancel_return" value=" " />
																		<input type="submit" name="submit" value="Add to cart" className="button" />
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
													<img src={img1} alt=" " className="img-responsive" />
												</div>
												<div className="agile_top_brand_left_grid1">
													<figure>
														<div className="snipcart-item block" >
															<div className="snipcart-thumb">
																<a href="products.html"><img title=" " alt=" " src={two} /></a>		
																<p>Fortune-sunflower</p>
																<div className="stars">
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star gray-star" aria-hidden="true"></i>
																</div>
																<h4>$20.99 <span>$35.00</span></h4>
															</div>
															<div className="snipcart-details top_brand_home_details">
																<form action="#" method="post">
																	<fieldset>
																		<input type="hidden" name="cmd" value="_cart" />
																		<input type="hidden" name="add" value="1" />
																		<input type="hidden" name="business" value=" " />
																		<input type="hidden" name="item_name" value="basmati rise" />
																		<input type="hidden" name="amount" value="20.99" />
																		<input type="hidden" name="discount_amount" value="1.00" />
																		<input type="hidden" name="currency_code" value="USD" />
																		<input type="hidden" name="return" value=" " />
																		<input type="hidden" name="cancel_return" value=" " />
																		<input type="submit" name="submit" value="Add to cart" className="button" />
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
													<img src={img1} alt=" " className="img-responsive" />
												</div>
												<div className="agile_top_brand_left_grid1">
													<figure>
														<div className="snipcart-item block">
															<div className="snipcart-thumb">
																<a href="products.html"><img src={three} alt=" " className="img-responsive" /></a>
																<p>Aashirvaad-atta</p>
																<div className="stars">
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star gray-star" aria-hidden="true"></i>
																</div>
																<h4>$40.99 <span>$65.00</span></h4>
															</div>
															<div className="snipcart-details top_brand_home_details">
																<form action="#" method="post">
																	<fieldset>
																		<input type="hidden" name="cmd" value="_cart" />
																		<input type="hidden" name="add" value="1" />
																		<input type="hidden" name="business" value=" " />
																		<input type="hidden" name="item_name" value="Pepsi soft drink" />
																		<input type="hidden" name="amount" value="40.00" />
																		<input type="hidden" name="discount_amount" value="1.00" />
																		<input type="hidden" name="currency_code" value="USD" />
																		<input type="hidden" name="return" value=" " />
																		<input type="hidden" name="cancel_return" value=" " />
																		<input type="submit" name="submit" value="Add to cart" className="button" />
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
													<img src={img1} alt=" " className="img-responsive" />
												</div>
												<div className="agile_top_brand_left_grid1">
													<figure>
														<div className="snipcart-item block" >
															<div className="snipcart-thumb">
																<a href="products.html"><img title=" " alt=" " src={four} /></a>		
																<p>Sampann-toor-dal</p>
																<div className="stars">
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star gray-star" aria-hidden="true"></i>
																</div>
																<h4>$35.99 <span>$55.00</span></h4>
															</div>
															<div className="snipcart-details top_brand_home_details">
																<form action="#" method="post">
																	<fieldset>
																		<input type="hidden" name="cmd" value="_cart" />
																		<input type="hidden" name="add" value="1" />
																		<input type="hidden" name="business" value=" " />
																		<input type="hidden" name="item_name" value="Fortune Sunflower Oil" />
																		<input type="hidden" name="amount" value="35.99" />
																		<input type="hidden" name="discount_amount" value="1.00" />
																		<input type="hidden" name="currency_code" value="USD" />
																		<input type="hidden" name="return" value=" " />
																		<input type="hidden" name="cancel_return" value=" " />
																		<input type="submit" name="submit" value="Add to cart" className="button" />
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
													<img src={img1} alt=" " className="img-responsive" />
												</div>
												<div className="agile_top_brand_left_grid1">
													<figure>
														<div className="snipcart-item block" >
															<div className="snipcart-thumb">
																<a href="products.html"><img title=" " alt=" " src={five} /></a>		
																<p>Parryss-sugar</p>
																<div className="stars">
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star gray-star" aria-hidden="true"></i>
																</div>
																<h4>$30.99 <span>$45.00</span></h4>
															</div>
															<div className="snipcart-details top_brand_home_details">
																<form action="#" method="post">
																	<fieldset>
																		<input type="hidden" name="cmd" value="_cart" />
																		<input type="hidden" name="add" value="1" />
																		<input type="hidden" name="business" value=" " />
																		<input type="hidden" name="item_name" value="basmati rise" />
																		<input type="hidden" name="amount" value="30.99" />
																		<input type="hidden" name="discount_amount" value="1.00" />
																		<input type="hidden" name="currency_code" value="USD" />
																		<input type="hidden" name="return" value=" " />
																		<input type="hidden" name="cancel_return" value=" " />
																		<input type="submit" name="submit" value="Add to cart" className="button" />
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
													<img src={img1} alt=" " className="img-responsive" />
												</div>
												<div className="agile_top_brand_left_grid_pos">
													<img src={img1} alt=" " className="img-responsive" />
												</div>
												<div className="agile_top_brand_left_grid1">
													<figure>
														<div className="snipcart-item block">
															<div className="snipcart-thumb">
																<a href="products.html"><img src={six} alt=" " className="img-responsive" /></a>
																<p>Saffola-gold</p>
																<div className="stars">
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star gray-star" aria-hidden="true"></i>
																</div>
																<h4>$80.99 <span>$105.00</span></h4>
															</div>
															<div className="snipcart-details top_brand_home_details">
																<form action="#" method="post">
																	<fieldset>
																		<input type="hidden" name="cmd" value="_cart" />
																		<input type="hidden" name="add" value="1" />
																		<input type="hidden" name="business" value=" " />
																		<input type="hidden" name="item_name" value="Pepsi soft drink" />
																		<input type="hidden" name="amount" value="80.00" />
																		<input type="hidden" name="discount_amount" value="1.00" />
																		<input type="hidden" name="currency_code" value="USD" />
																		<input type="hidden" name="return" value=" " />
																		<input type="hidden" name="cancel_return" value=" " />
																		<input type="submit" name="submit" value="Add to cart" className="button" />
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
							</div>
							<div role="tabpanel" className="tab-pane fade" id="tours" aria-labelledby="tours-tab">
								<div className="agile-tp">
									<h5>This week</h5>
									<p className="w3l-ad">We've pulled together all our advertised offers into one place, so you won't miss out on a great deal.</p>
								</div>
								<div className="agile_top_brands_grids">
									<div className="col-md-4 top_brand_left">
										<div className="hover14 column">
											<div className="agile_top_brand_left_grid">
												<div className="agile_top_brand_left_grid_pos">
													<img src={img1} alt=" " className="img-responsive" />
												</div>
												<div className="agile_top_brand_left_grid1">
													<figure>
														<div className="snipcart-item block" >
															<div className="snipcart-thumb">
																<a href="products.html"><img title=" " alt=" " src={seven} /></a>		
																<p>Sona-masoori-rice</p>
																<div className="stars">
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star gray-star" aria-hidden="true"></i>
																</div>
																<h4>$35.99 <span>$55.00</span></h4>
															</div>
															<div className="snipcart-details top_brand_home_details">
																<form action="#" method="post">
																	<fieldset>
																		<input type="hidden" name="cmd" value="_cart" />
																		<input type="hidden" name="add" value="1" />
																		<input type="hidden" name="business" value=" " />
																		<input type="hidden" name="item_name" value="Fortune Sunflower Oil" />
																		<input type="hidden" name="amount" value="35.99" />
																		<input type="hidden" name="discount_amount" value="1.00" />
																		<input type="hidden" name="currency_code" value="USD" />
																		<input type="hidden" name="return" value=" " />
																		<input type="hidden" name="cancel_return" value=" " />
																		<input type="submit" name="submit" value="Add to cart" className="button" />
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
													<img src={img1} alt=" " className="img-responsive" />
												</div>
												<div className="agile_top_brand_left_grid1">
													<figure>
														<div className="snipcart-item block" >
															<div className="snipcart-thumb">
																<a href="products.html"><img title=" " alt=" " src={eight} /></a>		
																<p>Milky-mist-paneer</p>
																<div className="stars">
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star gray-star" aria-hidden="true"></i>
																</div>
																<h4>$30.99 <span>$45.00</span></h4>
															</div>
															<div className="snipcart-details top_brand_home_details">
																<form action="#" method="post">
																	<fieldset>
																		<input type="hidden" name="cmd" value="_cart" />
																		<input type="hidden" name="add" value="1" />
																		<input type="hidden" name="business" value=" " />
																		<input type="hidden" name="item_name" value="basmati rise" />
																		<input type="hidden" name="amount" value="30.99" />
																		<input type="hidden" name="discount_amount" value="1.00" />
																		<input type="hidden" name="currency_code" value="USD" />
																		<input type="hidden" name="return" value=" " />
																		<input type="hidden" name="cancel_return" value=" " />
																		<input type="submit" name="submit" value="Add to cart" className="button" />
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
													<img src={img1} alt=" " className="img-responsive" />
												</div>
												<div className="agile_top_brand_left_grid_pos">
													<img src={img1} alt=" " className="img-responsive" />
												</div>
												<div className="agile_top_brand_left_grid1">
													<figure>
														<div className="snipcart-item block">
															<div className="snipcart-thumb">
																<a href="products.html"><img src={nine} alt=" " className="img-responsive" /></a>
																<p>Basmati-Rice</p>
																<div className="stars">
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star gray-star" aria-hidden="true"></i>
																</div>
																<h4>$80.99 <span>$105.00</span></h4>
															</div>
															<div className="snipcart-details top_brand_home_details">
																<form action="#" method="post">
																	<fieldset>
																		<input type="hidden" name="cmd" value="_cart" />
																		<input type="hidden" name="add" value="1" />
																		<input type="hidden" name="business" value=" " />
																		<input type="hidden" name="item_name" value="Pepsi soft drink" />
																		<input type="hidden" name="amount" value="80.00" />
																		<input type="hidden" name="discount_amount" value="1.00" />
																		<input type="hidden" name="currency_code" value="USD" />
																		<input type="hidden" name="return" value=" " />
																		<input type="hidden" name="cancel_return" value=" " />
																		<input type="submit" name="submit" value="Add to cart" className="button" />
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
													<img src={img1} alt=" " className="img-responsive" />
												</div>
												<div className="agile_top_brand_left_grid1">
													<figure>
														<div className="snipcart-item block" >
															<div className="snipcart-thumb">
																<a href="products.html"><img title=" " alt=" " src={ten} /></a>		
																<p>Fortune-sunflower</p>
																<div className="stars">
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star gray-star" aria-hidden="true"></i>
																</div>
																<h4>$20.99 <span>$35.00</span></h4>
															</div>
															<div className="snipcart-details top_brand_home_details">
																<form action="#" method="post">
																	<fieldset>
																		<input type="hidden" name="cmd" value="_cart" />
																		<input type="hidden" name="add" value="1" />
																		<input type="hidden" name="business" value=" " />
																		<input type="hidden" name="item_name" value="Fortune Sunflower Oil" />
																		<input type="hidden" name="amount" value="20.99" />
																		<input type="hidden" name="discount_amount" value="1.00" />
																		<input type="hidden" name="currency_code" value="USD" />
																		<input type="hidden" name="return" value=" " />
																		<input type="hidden" name="cancel_return" value=" " />
																		<input type="submit" name="submit" value="Add to cart" className="button" />
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
													<img src={img1} alt=" " className="img-responsive" />
												</div>
												<div className="agile_top_brand_left_grid1">
													<figure>
														<div className="snipcart-item block" >
															<div className="snipcart-thumb">
																<a href="products.html"><img title=" " alt=" " src={twelve} /></a>		
																<p>Nestle-a-slim</p>
																<div className="stars">
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star gray-star" aria-hidden="true"></i>
																</div>
																<h4>$20.99 <span>$35.00</span></h4>
															</div>
															<div className="snipcart-details top_brand_home_details">
																<form action="#" method="post">
																	<fieldset>
																		<input type="hidden" name="cmd" value="_cart" />
																		<input type="hidden" name="add" value="1" />
																		<input type="hidden" name="business" value=" " />
																		<input type="hidden" name="item_name" value="basmati rise" />
																		<input type="hidden" name="amount" value="20.99" />
																		<input type="hidden" name="discount_amount" value="1.00" />
																		<input type="hidden" name="currency_code" value="USD" />
																		<input type="hidden" name="return" value=" " />
																		<input type="hidden" name="cancel_return" value=" " />
																		<input type="submit" name="submit" value="Add to cart" className="button" />
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
													<img src={img1} alt=" " className="img-responsive" />
												</div>
												<div className="agile_top_brand_left_grid1">
													<figure>
														<div className="snipcart-item block">
															<div className="snipcart-thumb">
																<a href="products.html"><img src={thirteen} alt=" " className="img-responsive" /></a>
																<p>Bread-sandwich</p>
																<div className="stars">
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star blue-star" aria-hidden="true"></i>
																	<i className="fa fa-star gray-star" aria-hidden="true"></i>
																</div>
																<h4>$40.99 <span>$65.00</span></h4>
															</div>
															<div className="snipcart-details top_brand_home_details">
																<form action="#" method="post">
																	<fieldset>
																		<input type="hidden" name="cmd" value="_cart" />
																		<input type="hidden" name="add" value="1" />
																		<input type="hidden" name="business" value=" " />
																		<input type="hidden" name="item_name" value="Pepsi soft drink" />
																		<input type="hidden" name="amount" value="40.00" />
																		<input type="hidden" name="discount_amount" value="1.00" />
																		<input type="hidden" name="currency_code" value="USD" />
																		<input type="hidden" name="return" value=" " />
																		<input type="hidden" name="cancel_return" value=" " />
																		<input type="submit" name="submit" value="Add to cart" className="button" />
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
}

export default Offers;