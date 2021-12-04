import React, {useContext, useState} from 'react';
import { Link } from "react-router-dom";
import {FaHome,FaArrowRight } from "react-icons/fa";
import { Helmet } from "react-helmet";
import offer from '../assets/images/offer.png';

import { ProductsContext } from '../context/ProductsContext';

import Categories from "../components/Categories";
import Pagination from '../components/Pagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {addToCart} from '../components/AddCart';
import SorterDropdown from '../components/SorterDropdown';

function HealthyChoicePage(){

	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(6);

    const data = useContext(ProductsContext);
    const noodles =[]

    data.map(a=>{
        if(a.categoryTitle==="HEALTHY CHOICE"){
            noodles.push(a);
        }
        
    });

	const indexOfLastProd = currentPage * perPage;
	const indexOfFirstProd =indexOfLastProd - perPage;
	const currentProd = noodles.slice(indexOfFirstProd, indexOfLastProd);
	// console.log(currentProd);

	// change page
	const paginate = (pageNumber) =>  setCurrentPage(pageNumber);
    return(
        <div>
			<Helmet>
                <title>Supermarket | Healthy Choice</title>
			</Helmet>
            <div className="breadcrumbs">
            <div className="container">
                <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
                <li><Link to='/'><span aria-hidden="true"><FaHome className="glyphicon-home"/></span>Home</Link></li>
                    <li className="active">Products / Healthy Choice</li>
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
                    {currentProd.map(prod=>(
                    <div className="col-md-4 top_brand_left" key={prod.id} style={{paddingBottom:"15px"}}>
						<div className="hover14 column">
							<div className="agile_top_brand_left_grid" >
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
					<Pagination perPage={perPage} totalProd={noodles.length} paginate={paginate}/>

				</div>	
			</div>
                <div className="clearfix"> </div>
            </div>
        </div>
		<ToastContainer/>
        </div>
    );
}
export default HealthyChoicePage;