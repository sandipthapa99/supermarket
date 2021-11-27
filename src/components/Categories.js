import React from 'react'
import {FaHome,FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";



function Categories() {
    return (
        <div>
            <div className="categories">
					<h2>Categories</h2>
					<ul className="cate">
					<li><Link to="/products"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>All Products</Link></li>
						<li><Link to="/products/test"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Fruits And Vegetables</Link></li>
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
				</div>	
        </div>
    )
}

export default Categories;
