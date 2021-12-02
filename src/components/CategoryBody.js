import React, {useContext, useState, useEffect} from 'react';
import {FaHome,FaArrowRight } from "react-icons/fa";
import { ProductsContext } from '../context/ProductsContext';
import ReactPaginate from 'react-paginate';

import offer from '../assets/images/offer.png';


import {} from './DataFetching';

function CategoryBody() {
    
    // const products = useContext(ProductsContext);
	const [items, setItems] = useState([]);
	const [loading,setLoading] = useState(true);

	useEffect(()=>{
		const getProducts = async()=>{
			const res = await fetch("https://uat.ordering-boafresh.ekbana.net/api/v4/product", {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545',
                    'Warehouse-Id':'1',
                    'perPage':5,

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
	const handlePageClick = async (data)=>{
		console.log(data.selected);
		let currentPage= data.selected+1;
		const dataFromServer = await fetchData(currentPage);
		setItems(dataFromServer);
	}

    return (
            <div class="col-md-8 products-right">
				<div class="products-right-grid">
					<div class="products-right-grids">
						<div class="sorting">
							<select id="country" class="frm-field required sect">
								<option value="null"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Default sorting</option>
								<option value="null"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Sort by popularity</option> 
								<option value="null"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Sort by average rating</option>					
								<option value="null"><i class="fa fa-arrow-right" aria-hidden="true"><FaArrowRight/></i>Sort by price</option>								
							</select>
						</div>
						<div class="sorting-left">
							<select id="country1" class="frm-field required sect">
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
                    {items.map(prod=>(
                    <div class="col-md-4 top_brand_left" key={prod.id}>
						<div class="hover14 column">
							<div class="agile_top_brand_left_grid">
								<div class="agile_top_brand_left_grid_pos">
									<img src={offer} alt=" " class="img-responsive"/>
								</div>
								<div class="agile_top_brand_left_grid1">
									<figure>
										<div class="snipcart-item block">
											<div class="snipcart-thumb">
												<a href="single.html"><img title=" " alt=" " src={prod.images[0].imageName}/></a>	
												<p>{prod.id}</p>	
												<p>{prod.title}</p>
												<h4>Rs. {prod.unitPrice[0].sellingPrice} <span>Rs. 55.00</span></h4>
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
                    ))}
				</div>	
				<ReactPaginate
				previousLabel={"<<"}
				nextLabel={'>>'}
				breakLabel={'...'}
				pageCount={25}
				marginPagesDisplayed={2}
				pageRangeDisplayed={3}
				onPageChange={handlePageClick}
				containerClassName={'pagination justify-content-center'}
				pageClassName={'page-item'}
				pageLinkClassName={'page-link'}
				activeClassName={'active'}
				/>
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
    )
}

export default CategoryBody;
