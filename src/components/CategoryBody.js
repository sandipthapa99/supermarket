import React, {useContext, useState, useEffect} from 'react';
import {FaHome,FaArrowRight } from "react-icons/fa";
import { ProductsContext } from '../context/ProductsContext';
import ReactPaginate from 'react-paginate';
import Pagination from './Pagination';

import offer from '../assets/images/offer.png';
import {addToCart} from "../components/CartFunction";

import {} from './DataFetching';

function CategoryBody() {
    
    // const products = useContext(ProductsContext);
	const [items, setItems] = useState([]);
	const [loading,setLoading] = useState(true);

	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(6);

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
	// const handlePageClick = async (data)=>{
	// 	console.log(data.selected);
	// 	let currentPage= data.selected+1;
	// 	const dataFromServer = await fetchData(currentPage);
	// 	setItems(dataFromServer);
	// }

	const indexOfLastProd = currentPage * perPage;
	const indexOfFirstProd =indexOfLastProd - perPage;
	const currentProd = items.slice(indexOfFirstProd, indexOfLastProd);
	// console.log(currentProd);

	// change page
	const paginate = (pageNumber) =>  setCurrentPage(pageNumber);

    return (
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
														<input type="submit" name="submit" value="Add to cart" className="button" onClick={()=>addToCart()}/>
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
			</div>
    )
}

export default CategoryBody;
