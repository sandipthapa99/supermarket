import React, {useContext, useState} from 'react';
import { Link } from "react-router-dom";
import {FaHome,FaArrowRight } from "react-icons/fa";
import { Helmet } from "react-helmet";
import offer from '../assets/images/offer.png';

import { ProductsContext } from '../context/ProductsContext';

import Categories from "../components/Categories";

function NoodlesPage(){
    const data = useContext(ProductsContext);
    const noodles =[]
    console.log(data)

    data.map(a=>{
        if(a.categoryTitle==="NOODLES"){
            noodles.push(a);
        }
        
    });
    return(
        <div>
			<Helmet>
                <title>Supermarket | Noodles</title>
			</Helmet>
            <div className="breadcrumbs">
            <div className="container">
                <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
                <li><Link to='/'><span aria-hidden="true"><FaHome className="glyphicon-home"/></span>Home</Link></li>
                    <li className="active">Products/Noodles</li>
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
                    {noodles.map(prod=>(
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
												<a href="single.html"><img title=" " alt=" " src={prod.images[0].imageName}/></a>		
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
export default NoodlesPage;