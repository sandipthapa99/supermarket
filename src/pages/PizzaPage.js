import React, {useContext, useState} from 'react';
import { Link } from "react-router-dom";
import {FaHome,FaArrowRight } from "react-icons/fa";
import { Helmet } from "react-helmet";
import offer from '../assets/images/offer.png';

import { ProductsContext } from '../context/ProductsContext';

import Categories from "../components/Categories";

function PizzaPage(){
    const data = useContext(ProductsContext);
    const pizza =[];
	console.log(data);
    data.map(a=>{
        if((a.categoryTitle === "PIZZA") || (a.categoryTitle === "PIzza sub1")){
            pizza.push(a);
        }
        
    });
    return(
        <div>
			<Helmet>
                <title>Supermarket | Pizza</title>
			</Helmet>
            <div className="breadcrumbs">
            <div className="container">
                <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
                <li><Link to='/'><span aria-hidden="true"><FaHome className="glyphicon-home"/></span>Home</Link></li>
                    <li className="active">Products / Pizza</li>
                </ol>
            </div>
	    </div>

        <div className="products">
            <div className="container">
                <div className="col-md-4 products-left">
                    <Categories/>																																												
                </div>
                <div className="col-md-8 products-right">
				<div className="products-right-grid">
					<div className="products-right-grids">
						<div className="sorting">
							<select id="country" className="frm-field required sect">
								<option value="null"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Default sorting</option>
								<option value="null"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Sort by popularity</option> 
								<option value="null"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Sort by average rating</option>					
								<option value="null"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Sort by price</option>								
							</select>
						</div>
						<div className="sorting-left">
							<select id="country1" className="frm-field required sect">
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
                    {pizza.map(prod=>(
                    <div className="col-md-4 top_brand_left" key={prod.id}>
						<div className="hover14 column">
							<div className="agile_top_brand_left_grid">
								<div className="agile_top_brand_left_grid_pos">
									<img src={offer} alt=" " className="img-responsive"/>
								</div>
								<div className="agile_top_brand_left_grid1">
									<figure>
										<div className="snipcart-item block">
											<div className="snipcart-thumb">
											<Link to={`/product/${prod.id}`}><img title=" " alt=" " src={prod.images[0].imageName}/></Link>		
												<p>{prod.title}</p>
												<h4>Rs. {prod.unitPrice[0].sellingPrice} <span>Rs. 55.00</span></h4>
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
                    ))}
				</div>	
			</div>
                <div className="clearfix"> </div>
            </div>
        </div>
        </div>
    );
}
export default PizzaPage;