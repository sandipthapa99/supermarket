import React, {useContext} from 'react'
import {useState} from 'react';

import img1 from '../assets/images/offer.png';
import './css/offers.css';

import {CartState} from "../context/Context";
import { Link } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';



function Offers(){
	const products = useContext(ProductsContext)
	const data = products[6];
	const newProd = products[4];
	console.log(products);


	const {state:{a1,a2,t1,t2},} = CartState();

	const {state:{cart},dispatch} = CartState();
	// console.log(cart);

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
							<div className={toggleState===1?"tabs active-tabs":"tabs"} onClick={()=>toggleTab(1)}>{data.sectionDetails.title}</div>
							<div className={toggleState===2?"tabs active-tabs":"tabs"} onClick={()=>toggleTab(2)}>{newProd.sectionDetails.title}</div>
						</div>
						<div className="content-tabs">
							<div className={toggleState===1?"content active-content":"content"}>
								<div className="agile-tp">
									<h5>{data.sectionDetails.title}</h5>
									<p className="w3l-ad">We've pulled together all our advertised offers into one place, so you won't miss out on a great deal.</p>
								</div>
								<div className="agile_top_brands_grids">
									{data.sectionDetails.products.map((prod)=>(
										<div key={prod.id} className="col-md-4 top_brand_left" style={{paddingBottom:"15px"}}>
										<div className="hover14 column">
											<div className="agile_top_brand_left_grid">
												<div className="agile_top_brand_left_grid_pos">
													<img src={img1} alt=" " className="img-responsive" />
												</div>
												<div className="agile_top_brand_left_grid1">
													<figure>
														<div className="snipcart-item block" >
															<div className="snipcart-thumb">
																<Link to={`product/${prod.id}`}><img src={prod.images[0].imageName} title="" alt=" "  /></Link>		
																<p>{prod.title}</p>
																{/* <div className="stars">
																	<IconContext.Provider value={{color:'#3399cc'}}>
																	<FaStar className="mybg" aria-hidden="true"></FaStar>
																	<FaStar className="fa fa-star blue-star" aria-hidden="true"></FaStar>
																	<FaStar className="fa fa-star blue-star" aria-hidden="true"></FaStar>
																	<FaStar className="fa fa-star blue-star" aria-hidden="true"></FaStar>
																	</IconContext.Provider>
																	<IconContext.Provider value={{color:'#808080'}}>
																	<FaStar className="fa fa-star blue-star" aria-hidden="true"></FaStar>
																	</IconContext.Provider>
																</div> */}
																<h4>Rs. {prod.unitPrice[0].sellingPrice} </h4>
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
																		{cart.some(p=>p.id===prod.id)?(
																			<input type="button" 
																			onClick={()=>{dispatch({
																				type:'REMOVE_FROM_CART',
																				payload:prod,
																			});
																			}}  name="submit" value="Remove from Cart" className="buttonRemove"/>
																		):(
																			<input type="button" 
																			onClick={()=>{dispatch({
																				type:'ADD_TO_CART',
																				payload:prod,
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
									<h5>{newProd.sectionDetails.title}</h5>
									<p className="w3l-ad">We've pulled together all our advertised offers into one place, so you won't miss out on a great deal.</p>
								</div>
								<div className="agile_top_brands_grids">
									{newProd.sectionDetails.products.map((items)=>(
										<div key={items.id} className="col-md-4 top_brand_left" style={{paddingBottom:"15px"}}>
										<div className="hover14 column">
											<div className="agile_top_brand_left_grid">
												<div className="agile_top_brand_left_grid_pos">
													<img src={img1} alt=" " className="img-responsive" />
												</div>
												<div className="agile_top_brand_left_grid1">
													<figure>
														<div className="snipcart-item block" >
															<div className="snipcart-thumb">
																<Link to="/single"><img title=" " alt=" " src={items.categoryBackgroundImage} /></Link>		
																<p>{items.title}</p>
																{/* <div className="stars">
																	<IconContext.Provider value={{color:'#3399cc'}}>
																	<FaStar className="mybg" aria-hidden="true"></FaStar>
																	<FaStar className="fa fa-star blue-star" aria-hidden="true"></FaStar>
																	<FaStar className="fa fa-star blue-star" aria-hidden="true"></FaStar>
																	<FaStar className="fa fa-star blue-star" aria-hidden="true"></FaStar>
																	</IconContext.Provider>
																	<IconContext.Provider value={{color:'#808080'}}>
																	<FaStar className="fa fa-star blue-star" aria-hidden="true"></FaStar>
																	</IconContext.Provider>
																</div> */}
																<h4>Rs. {items.unitPrice[0].sellingPrice}</h4>
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
}

export default Offers;