import React from "react";
import { Link } from "react-router-dom";
import {FaHome } from "react-icons/fa";
import { Helmet } from "react-helmet";

import Categories from "../components/Categories";
import DataFetching from "../components/DataFetching";

function Products(){
    return(
        <div>
			<Helmet>
                <title>Supermarket | Products</title>
			</Helmet>
            <div class="breadcrumbs">
		<div class="container">
			<ol class="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
			<li><Link to='/'><span aria-hidden="true"><FaHome class="glyphicon-home"/></span>Home</Link></li>
				<li class="active">Products</li>
			</ol>
		</div>
	</div>


	<div class="products">
		<div class="container">
			<div class="col-md-4 products-left">
				<Categories/>																																												
			</div>
			<DataFetching/>
			<div class="clearfix"> </div>
		</div>
	</div>
        </div>
    );
}
export default Products;