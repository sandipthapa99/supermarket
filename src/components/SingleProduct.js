import React, {useEffect, useState} from 'react'
import { Helmet } from "react-helmet";
import {FaStar, FaHome} from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import Loader from './Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {addToCart} from '../components/AddCart';

const SingleProduct = () => {
	const params = useParams();
	const productId = params.productId;
	// console.log(productId);

	const [prodDetails, setProdDetails] = useState([]);
	const [loading,setLoading] = useState(true);
	useEffect(()=>{
		const fetchCart= async ()=>{
			const res =  await fetch("https://uat.ordering-boafresh.ekbana.net//api/v4/product/"+productId, {
					 method: 'GET',
					 headers: {
						 'Content-Type': 'application/json',
						 'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545',
						 'Warehouse-Id':'1',   
					 }
				 });
			 const data = await res.json();
			 setProdDetails(data.data);
			 console.log(prodDetails)
			 setLoading(false);
		 }
		 fetchCart();
	},[])
    return (
        <div>
			<Helmet>
                <title>Supermarket | Products</title>
			</Helmet>
            <div class="breadcrumbs">
		<div class="container">
			<ol class="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
            <li><Link to="/"><span aria-hidden="true"><FaHome class="glyphicon-home"/></span>Home</Link></li>
				<li class="active">Products / {prodDetails.title}</li>
			</ol>
		</div>
	</div>

	<div class="products">
		{loading?<Loader/>:
			<div class="container">
			<div class="agileinfo_single">
				<div class="col-md-4 agileinfo_single_left">
					<img id="example" src={prodDetails.images[0].imageName} alt=" " class="img-responsive"/>
				</div>
				<div class="col-md-8 agileinfo_single_right">
				<h2>{prodDetails.title}</h2>
					<div class="w3agile_description">
						<h4>Category : {prodDetails.categoryTitle}</h4>
						<p></p>
					</div>
					<div class="snipcart-item block">
						<div class="snipcart-thumb agileinfo_single_right_snipcart">
							<h4 class="m-sing">Rs. {prodDetails.unitPrice[0].sellingPrice}</h4>
						</div>
						<div class="snipcart-details agileinfo_single_right_details">
							<form onSubmit={(e)=>addToCart(e,productId)}>
								<fieldset>
									<input type="submit" name="submit" value="Add to cart" class="button"/>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
		}
	</div>
	<ToastContainer/>
</div>
    )
}

export default SingleProduct
