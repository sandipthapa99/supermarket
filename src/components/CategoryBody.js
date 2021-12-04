import React, {useContext, useState, useEffect} from 'react';
import {FaHome,FaArrowRight } from "react-icons/fa";
import { ProductsContext } from '../context/ProductsContext';
import ReactPaginate from 'react-paginate';
import Pagination from './Pagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import offer from '../assets/images/offer.png';
import {addToCart} from "./AddCart";

import {} from './DataFetching';
import { Link } from 'react-router-dom';
import SorterDropdown from './SorterDropdown';

function CategoryBody() {
    
	const [items, setItems] = useState([]);
	const [sortedItems, setSortedItems] = useState([]);
	const [loading,setLoading] = useState(true);

	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(6);
	// console.log(items);

	useEffect(()=>{
		const getProducts = async()=>{
			const res = await fetch("https://uat.ordering-boafresh.ekbana.net/api/v4/product", {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545',
                    'Warehouse-Id':'1',
                    // 'perPage':5,

                }
            });
			const data = await res.json();
			setItems(data.data);
			setLoading(false);
		};
		getProducts();
	},[]);


	const fetchData =  async(currentPage)=>{
		const res = await fetch("https://uat.ordering-boafresh.ekbana.net/api/v4/product", {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545',
                    'Warehouse-Id':'1',
                    'perPage':6,
                    'page': currentPage,
                }
            });
			const data = await res.json();
			return data;
	};

	const indexOfLastProd = currentPage * perPage;
	const indexOfFirstProd =indexOfLastProd - perPage;
	const currentProd = items.slice(indexOfFirstProd, indexOfLastProd);
	console.log(currentProd);

	// change page
	const paginate = (pageNumber) =>  setCurrentPage(pageNumber);

	function sortAZ(){
		currentProd.sort(function(a,b){
			if(a.title.toLowerCase() < b.title.toLowerCase())return -1;
			if(a.title.toLowerCase() > b.title.toLowerCase())return 1;
			return 0;
		});
	}
	function sortZA(){
		currentProd.sort(function(a,b){
			if(a.title.toLowerCase() > b.title.toLowerCase())return -1;
			if(a.title.toLowerCase() < b.title.toLowerCase())return 1;
			return 0;
		});
	}

    return (
            <div className="col-md-8 products-right">
				{/* <SorterDropdown/> */}
				<div className="products-right-grid">
					<div className="products-right-grids">
						<div className="sorting-left">
							<select id="country1" className="frm-field required sect">
								<option>A - Z</option>
								<option>Z - A</option> 
								<option value="null">Price Increasing</option>					
								<option value="null">Price Decreasing</option>								
							</select>
						</div>
						<div className="clearfix"> </div>
					</div>
				</div>
				<div className="agile_top_brands_grids">
                    {currentProd.map(prod=>(
                    <div className="col-md-4 top_brand_left" key={prod.id} style={{paddingBottom:"15px"}}>
						<div className="hover14 column">
							<div className="agile_top_brand_left_grid">
								<div className="agile_top_brand_left_grid_pos">
									<img src={offer} alt=" " className="img-responsive"/>
								</div>
								<div className="agile_top_brand_left_grid1">
									<figure>
										<div className="snipcart-item block">
											<div className="snipcart-thumb">
												<Link to={`${prod.id}`}><img title=" " alt=" " src={prod.images[0].imageName}/></Link>		
												<p>{prod.title}</p>
												<h4>Rs. {prod.unitPrice[0].sellingPrice} <span>Rs. 55.00</span></h4>
											</div>
											<div className="snipcart-details top_brand_home_details">
												<form onSubmit={(e)=>addToCart(e,prod.id)}>
													<fieldset>
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
				<Pagination perPage={perPage} totalProd={items.length} paginate={paginate}/>
				<ToastContainer/>
			</div>
    )
}

export default CategoryBody;
