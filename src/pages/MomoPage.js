import React, {useContext, useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import {FaHome,FaArrowRight } from "react-icons/fa";
import { Helmet } from "react-helmet";
import offer from '../assets/images/offer.png';

import { ProductsContext } from '../context/ProductsContext';

import Categories from "../components/Categories";
import { Dropdown, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {addToCart} from '../components/AddCart';
import SorterDropdown from '../components/SorterDropdown';
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
				<SorterDropdown/>
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
											<Link to={`/product/${prod.id}`}><img title=" " alt=" " src={prod.images[0].imageName}/></Link>		
												<p>{prod.title}</p>
												<h4>Rs. {prod.unitPrice[0].sellingPrice}</h4>
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
			</div>
                <div className="clearfix"> </div>
            </div>
        </div>
		<ToastContainer/>
        </div>
    );
}
export default MomoPage;