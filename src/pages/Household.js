import React from "react";
import {Link} from 'react-router-dom';
import {FaHome,FaArrowRight} from 'react-icons/fa';
import { Helmet } from "react-helmet";

import offer from '../assets/images/offer.png';
import hh1 from '../assets/images/hh1.png';
import hh2 from '../assets/images/hh2.png';
import hh3 from '../assets/images/hh3.png';


function HouseHold(){
    return(
        <div>
            <Helmet>
                <title>Supermarket | Household</title>
			</Helmet>
            <div class="breadcrumbs">
		        <div class="container">
			        <ol class="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
                    <li><Link to='/'><span aria-hidden="true"><FaHome class="glyphicon-home"/></span>Home</Link></li>
                        <li class="active">Household</li>
			        </ol>
		        </div>
	        </div>

            <div class="products">
                <div class="container">
                    <div class="col-md-4 products-left">
                        <div class="categories">
                            <h2>Categories</h2>
                            <ul class="cate">
                                <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Fruits And Vegetables</a></li>
                                    <ul>
                                        <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Cuts & Sprouts</a></li>
                                        <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Flowers</a></li>
                                        <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Fresh Herbs & Seasonings</a></li>
                                        <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Fresh Vegetables</a> </li>
                                        <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>International Vegetables</a> </li>
                                        <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Organic Fruits & Vegetables</a></li>
                                    </ul>
                                <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Grocery & Staples</a></li>
                                    <ul>
                                        <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Dals & Pulses</a> </li>
                                        <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Dry Fruits</a> </li>
                                        <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Edible Oils & Ghee</a> </li>
                                        <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Flours & Sooji</a> </li>
                                        <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Masalas & Spices</a> </li>
                                        <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Organic Staples</a> </li>
                                        <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Rice & Rice Products</a> </li>
                                        <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Salt, Sugar & Jaggery</a></li>
                                    </ul>
                                <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>PersonalCare</a></li>
                                    <ul>
                                        <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Baby Care</a> </li>
                                        <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Cosmetics</a> </li>
                                        <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Deos & Perfumes</a> </li>
                                        <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Skin Care</a> </li>
                                        <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Sanitary Needs</a> </li>
                                        <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Oral Care</a> </li>
                                        <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Personal Hygiene</a> </li>
                                        <li><a href="products.html"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Shaving Needs</a></li>
                                    </ul>
                            </ul>
                        </div>																																												
                    </div>
                    <div class="col-md-8 products-right">
                        <div class="products-right-grid">
                            <div class="products-right-grids">
                                <div class="sorting">
                                    <select id="country" onchange="change_country(this.value)" class="frm-field required sect">
                                        <option value="null"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Default sorting</option>
                                        <option value="null"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Sort by popularity</option> 
                                        <option value="null"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Sort by average rating</option>					
                                        <option value="null"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Sort by price</option>								
                                    </select>
                                </div>
                                <div class="sorting-left">
                                    <select id="country1" onchange="change_country(this.value)" class="frm-field required sect">
                                        <option value="null"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Item on page 9</option>
                                        <option value="null"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Item on page 18</option> 
                                        <option value="null"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Item on page 32</option>					
                                        <option value="null"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>All</option>								
                                    </select>
                                </div>
                                <div class="clearfix"> </div>
                            </div>
                        </div>
                        <div class="agile_top_brands_grids">
                            <div class="col-md-4 top_brand_left">
                                <div class="hover14 column">
                                    <div class="agile_top_brand_left_grid">
                                        <div class="agile_top_brand_left_grid_pos">
                                            <img src={offer} alt=" " class="img-responsive"/>
                                        </div>
                                        <div class="agile_top_brand_left_grid1">
                                            <figure>
                                                <div class="snipcart-item block">
                                                    <div class="snipcart-thumb">
                                                        <a href="single.html"><img title=" " alt=" " src={hh1}/></a>		
                                                        <p>Fry Pan</p>
                                                        <h4>$35.99 <span>$55.00</span></h4>
                                                    </div>
                                                    <div class="snipcart-details top_brand_home_details">
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
                                                                <input type="submit" name="submit" value="Add to cart" class="button"/>
                                                            </fieldset>
                                                        </form>
                                                    </div>
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 top_brand_left">
                                <div class="hover14 column">
                                    <div class="agile_top_brand_left_grid">
                                        <div class="agile_top_brand_left_grid_pos">
                                            <img src={offer} alt=" " class="img-responsive"/>
                                        </div>
                                        <div class="agile_top_brand_left_grid1">
                                            <figure>
                                                <div class="snipcart-item block">
                                                    <div class="snipcart-thumb">
                                                        <a href="single.html"><img title=" " alt=" " src={hh2}/></a>		
                                                        <p>Cookware</p>
                                                        <h4>$30.99 <span>$45.00</span></h4>
                                                    </div>
                                                    <div class="snipcart-details top_brand_home_details">
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
                                                                <input type="submit" name="submit" value="Add to cart" class="button"/>
                                                            </fieldset>
                                                        </form>
                                                    </div>
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 top_brand_left">
                                <div class="hover14 column">
                                    <div class="agile_top_brand_left_grid">
                                        <div class="agile_top_brand_left_grid_pos">
                                            <img src={offer} alt=" " class="img-responsive"/>
                                        </div>
                                        <div class="agile_top_brand_left_grid_pos">
                                            <img src={offer} alt=" " class="img-responsive"/>
                                        </div>
                                        <div class="agile_top_brand_left_grid1">
                                            <figure>
                                                <div class="snipcart-item block">
                                                    <div class="snipcart-thumb">
                                                        <a href="single.html"><img src={hh3} alt=" " class="img-responsive"/></a>
                                                        <p>Dosa Tawa</p>
                                                        <h4>$80.99 <span>$105.00</span></h4>
                                                    </div>
                                                    <div class="snipcart-details top_brand_home_details">
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
                                                                <input type="submit" name="submit" value="Add to cart" class="button"/>
                                                            </fieldset>
                                                        </form>
                                                    </div>
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div class="clearfix"> </div>
                    
                        <nav class="numbering">
                            <ul class="pagination paging">
                                <li>
                                    <a href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li class="active"><a href="#">1<span class="sr-only">(current)</span></a></li>
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
                    <div class="clearfix"> </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default HouseHold;