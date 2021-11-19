import React from 'react';
import {useState} from 'react';

import img1 from '../assets/images/offer.png';

import './css/offers.css';

import {FaStar} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {CartState} from "../context/Context";


function Offers(){
	const {state:{a1,a2,t1,t2},} = CartState();

	const {state:{cart},dispatch} = CartState();
	console.log(cart);

	// const {advertised1,advertised2,today1,today2} = Data;

	const [toggleState, setToggleState] = useState(1);

	const toggleTab =(index)=>{
		setToggleState(index);
	}
    return(
        <div className="top-brands">
			<div className="container">
				<h2>Top selling offers</h2>
				<div className="grid_3 grid_5">
					<div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
						<div className="bloc-tabs">
							{/* <button className={toggleState===1?"tabs active-tabs":"tabs" onclick={()=>toggleTab(1)}}></button> */}
							<div className={toggleState===1?"tabs active-tabs":"tabs"} onClick={()=>toggleTab(1)}>Advertised Offers</div>
							<div className={toggleState===2?"tabs active-tabs":"tabs"} onClick={()=>toggleTab(2)}>Today Offers</div>
						</div>
						<div className="content-tabs">
							<div className={toggleState===1?"content active-content":"content"}>
								<div className="agile-tp">
									<h5>Advertised this week</h5>
									<p className="w3l-ad">We've pulled together all our advertised offers into one place, so you won't miss out on a great deal.</p>
								</div>
								<div className="agile_top_brands_grids">
									{a1.map((b)=>(
										<div key={b.id} className="col-md-4 top_brand_left">
										<div className="hover14 column">
											<div className="agile_top_brand_left_grid">
												<div className="agile_top_brand_left_grid_pos">
													<img src={img1} alt=" " className="img-responsive" />
												</div>
												<div className="agile_top_brand_left_grid1">
													<figure>
														<div className="snipcart-item block" >
															<div className="snipcart-thumb">
																<a href="products.html"><img src={b.image} title="" alt=" "  /></a>		
																<p>{b.name}</p>
																<div className="stars">
																	<IconContext.Provider value={{color:'#3399cc'}}>
																	<FaStar className="mybg" aria-hidden="true"></FaStar>
																	<FaStar className="fa fa-star blue-star" aria-hidden="true"></FaStar>
																	<FaStar className="fa fa-star blue-star" aria-hidden="true"></FaStar>
																	<FaStar className="fa fa-star blue-star" aria-hidden="true"></FaStar>
																	</IconContext.Provider>
																	<IconContext.Provider value={{color:'#808080'}}>
																	<FaStar className="fa fa-star blue-star" aria-hidden="true"></FaStar>
																	</IconContext.Provider>
																</div>
																<h4>${b.price} <span>$35.00</span></h4>
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
																		{cart.some(p=>p.id===b.id)?(
																			<input type="button" 
																			onClick={()=>{dispatch({
																				type:'REMOVE_FROM_CART',
																				payload:b,
																			});
																			}}  name="submit" value="Remove from Cart" className="buttonRemove"/>
																		):(
																			<input type="button" 
																			onClick={()=>{dispatch({
																				type:'ADD_TO_CART',
																				payload:b,
																			});
																			}} 
																			name="submit" value="Add to cart" className="button"/>
																		)}
																		
																		
																	</fieldset>
																</form>
															</div>
														</div>
													</figure>
												</div>
											</div>
										</div>
									</div>
									))}									
									<div className="clearfix"> </div>
								</div>
								<div className="agile_top_brands_grids">
									{a2.map((a)=>(
										<div key={a.id} className="col-md-4 top_brand_left">
										<div className="hover14 column">
											<div className="agile_top_brand_left_grid">
												<div className="agile_top_brand_left_grid_pos">
													<img src={img1} alt=" " className="img-responsive" />
												</div>
												<div className="agile_top_brand_left_grid1">
													<figure>
														<div className="snipcart-item block" >
															<div className="snipcart-thumb">
																<a href="products.html"><img src={a.image} title="" alt=" "  /></a>		
																<p>{a.name}</p>
																<div className="stars">
																	<IconContext.Provider value={{color:'#3399cc'}}>
																	<FaStar className="mybg" aria-hidden="true"></FaStar>
																	<FaStar className="fa fa-star blue-star" aria-hidden="true"></FaStar>
																	<FaStar className="fa fa-star blue-star" aria-hidden="true"></FaStar>
																	<FaStar className="fa fa-star blue-star" aria-hidden="true"></FaStar>
																	</IconContext.Provider>
																	<IconContext.Provider value={{color:'#808080'}}>
																	<FaStar className="fa fa-star blue-star" aria-hidden="true"></FaStar>
																	</IconContext.Provider>
																</div>
																<h4>${a.price} <span>$35.00</span></h4>
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
																		{cart.some(p=>p.id===a.id)?(
																			<input type="button" 
																			onClick={()=>{dispatch({
																				type:'REMOVE_FROM_CART',
																				payload:a,
																			});
																			}}  name="submit" value="Remove from Cart" className="buttonRemove"/>
																		):(
																			<input type="button" 
																			onClick={()=>{dispatch({
																				type:'ADD_TO_CART',
																				payload:a,
																			});
																			}} 
																			name="submit" value="Add to cart" className="button"/>
																		)}
																	</fieldset>
																</form>
															</div>
														</div>
													</figure>
												</div>
											</div>
										</div>
									</div>
									))}									
									<div className="clearfix"> </div>
								</div>								
							</div>

							<div className={toggleState===2?"content active-content":"content"}>
								<div className="agile-tp">
									<h5>This week</h5>
									<p className="w3l-ad">We've pulled together all our advertised offers into one place, so you won't miss out on a great deal.</p>
								</div>
								<div className="agile_top_brands_grids">
									{t1.map((items)=>(
										<div key={items.id} className="col-md-4 top_brand_left">
										<div className="hover14 column">
											<div className="agile_top_brand_left_grid">
												<div className="agile_top_brand_left_grid_pos">
													<img src={img1} alt=" " className="img-responsive" />
												</div>
												<div className="agile_top_brand_left_grid1">
													<figure>
														<div className="snipcart-item block" >
															<div className="snipcart-thumb">
																<a href="products.html"><img title=" " alt=" " src={items.image} /></a>		
																<p>{items.name}</p>
																<div className="stars">
																	<IconContext.Provider value={{color:'#3399cc'}}>
																	<FaStar className="mybg" aria-hidden="true"></FaStar>
																	<FaStar className="fa fa-star blue-star" aria-hidden="true"></FaStar>
																	<FaStar className="fa fa-star blue-star" aria-hidden="true"></FaStar>
																	<FaStar className="fa fa-star blue-star" aria-hidden="true"></FaStar>
																	</IconContext.Provider>
																	<IconContext.Provider value={{color:'#808080'}}>
																	<FaStar className="fa fa-star blue-star" aria-hidden="true"></FaStar>
																	</IconContext.Provider>
																</div>
																<h4>${items.price} <span>$55.00</span></h4>
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
																		{cart.some(p=>p.id===items.id)?(
																			<input type="button" 
																			onClick={()=>{dispatch({
																				type:'REMOVE_FROM_CART',
																				payload:items,
																			});
																			}}  name="submit" value="Remove from Cart" className="buttonRemove"/>
																		):(
																			<input type="button" 
																			onClick={()=>{dispatch({
																				type:'ADD_TO_CART',
																				payload:items,
																			});
																			}} 
																			name="submit" value="Add to cart" className="button"/>
																		)}
																	</fieldset>
																</form>
															</div>
														</div>
													</figure>
												</div>
											</div>
										</div>
									</div>
									))}
								<div className="clearfix"> </div>
								</div>
								<div className="agile_top_brands_grids">
									{t2.map((items)=>(
										<div key={items.id} className="col-md-4 top_brand_left">
										<div className="hover14 column">
											<div className="agile_top_brand_left_grid">
												<div className="agile_top_brand_left_grid_pos">
													<img src={img1} alt=" " className="img-responsive" />
												</div>
												<div className="agile_top_brand_left_grid1">
													<figure>
														<div className="snipcart-item block" >
															<div className="snipcart-thumb">
																<a href="products.html"><img title=" " alt=" " src={items.image} /></a>		
																<p>{items.name}</p>
																<div className="stars">
																	<IconContext.Provider value={{color:'#3399cc'}}>
																	<FaStar className="mybg" aria-hidden="true"></FaStar>
																	<FaStar className="fa fa-star blue-star" aria-hidden="true"></FaStar>
																	<FaStar className="fa fa-star blue-star" aria-hidden="true"></FaStar>
																	<FaStar className="fa fa-star blue-star" aria-hidden="true"></FaStar>
																	</IconContext.Provider>
																	<IconContext.Provider value={{color:'#808080'}}>
																	<FaStar className="fa fa-star blue-star" aria-hidden="true"></FaStar>
																	</IconContext.Provider>
																</div>
																<h4>${items.price} <span>$35.00</span></h4>
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
																		{cart.some(p=>p.id===items.id)?(
																			<input type="button" 
																			onClick={()=>{dispatch({
																				type:'REMOVE_FROM_CART',
																				payload:items,
																			});
																			}}  name="submit" value="Remove from Cart" className="buttonRemove"/>
																		):(
																			<input type="button" 
																			onClick={()=>{dispatch({
																				type:'ADD_TO_CART',
																				payload:items,
																			});
																			}} 
																			name="submit" value="Add to cart" className="button"/>
																		)}
																	</fieldset>
																</form>
															</div>
														</div>
													</figure>
												</div>
											</div>
										</div>
									</div>
									))}
									
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