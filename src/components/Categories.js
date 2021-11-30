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
						<li><Link to="/pizza"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Pizza</Link></li>
							<ul>
								<li><a href="pizza"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Pizza 1</a></li>
								<li><a href="pizza"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Pizza 2</a></li>
							</ul>
						<li><Link to="/momo"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Momo</Link></li>
						<li><Link to="/noodles"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Noodles</Link></li>
						<li><Link to="/chilli"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Chilli</Link></li>
						<li><Link to="/sandwich"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Sandwich</Link></li>
						<li><Link to="/healthy%20choice"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Healthy Choice</Link></li>
						<li><Link to="/rice"><i className="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Rice</Link></li>

					</ul>
				</div>	
        </div>
    )
}

export default Categories;
