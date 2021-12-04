import React, {useContext, useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import {FaHome,FaArrowRight } from "react-icons/fa";
import { Helmet } from "react-helmet";
import offer from '../assets/images/offer.png';

import { ProductsContext } from '../context/ProductsContext';

import Categories from "../components/Categories";
import { Dropdown, Form } from 'react-bootstrap';
// import { Sorter } from '../components/Sorter';

function MomoPage(){
	const [sortBy, setSortBy] = useState("nameAsc");
	const [sortedItems, setSortedItems] = useState([]);

    const data = useContext(ProductsContext);
    const momo =[];
	// console.log(data)
	useEffect(() => {
		sortItems();
	  }, []);

    data.map(a=>{
        if(a.categoryTitle==="MOMO"){
            momo.push(a);
        }
        
    });

	const sortItems = () => {
		let filterArray = [...momo];
		switch (sortBy) {
		  case "nameAsc":
			filterArray.sort((a, b) => {
				console.log(a)
			  if (a.title <= b.title) {
				return -1;
			  }
			  if (a.title > b.title) {
				return 1;
			  }
			  return 0;
			});
			break;
		  case "nameDesc":
			filterArray.sort((a, b) => {
			  if (a.title <= b.title) {
				return 1;
			  }
			  if (a.title > b.title) {
				return -1;
			  }
			  return 0;
			});
			break;
		  case "C":
			filterArray.sort(
			  (a, b) => a.unitPrice[0].sellingPrice - b.unitPrice[0].sellingPrice
			);
			break;
		  case "D":
			filterArray.sort(
			  (a, b) => b.unitPrice[0].sellingPrice - a.unitPrice[0].sellingPrice
			);
			break;
		  default:
			break;
		}
		setSortedItems(filterArray);
	  };

    return(
        <div>
			<Helmet>
                <title>Supermarket | Momo</title>
			</Helmet>
            <div className="breadcrumbs">
            <div className="container">
                <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
                <li><Link to='/'><span aria-hidden="true"><FaHome className="glyphicon-home"/></span>Home</Link></li>
                    <li className="active">Products / Momos</li>
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
					<Form.Select style={{width:"120px", float:"right"}} defaultValue="nameAsc" onChange={(e)=>{setSortBy(e.target.value)}}>
					<option disabled>Sort By</option>
					<option value="nameAsc">Name Ascending</option>
					<option value="nameDesc">Name Descending</option>
					<option value="priceAsc">Price (Low to High)</option>
					<option value="priceDesc">Price (High to Low)</option>
					</Form.Select>
						<div className="clearfix"> </div>
					</div>
				</div>
				<div className="agile_top_brands_grids">
                    {momo.map(prod=>(
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
export default MomoPage;