import React, {useState, useEffect} from 'react'
import { Card, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import offer from '../assets/images/offer.png';
import Loader from '../components/Loader';
import '../components/css/searchCard.css'
import {FaHome,FaArrowRight } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {addToCart} from '../components/AddCart';


function Search() {
    var token = JSON.parse(window.localStorage.getItem('access_token'));

    const params = useParams();
    const searchKey = params.searchKey;

    const [results, setResults] = useState();
    const [loading, setLoading] = useState(true);
    
    // console.log(results);
    useEffect(()=>{
		const fetchData= async ()=>{
			const res =  await fetch("https://uat.ordering-boafresh.ekbana.net//api/v4/product/", {
					 method: 'GET',
					 headers: {
						 'Content-Type': 'application/json',
						 'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545',
						 'Warehouse-Id':'1',   
					 }
				 });
			 const data = await res.json();
             
            // console.log(data.data);

            const resData = data.data.filter((prod)=>{
                var title = prod.title;
                var searchArray = searchKey.split("");
                var reg = new RegExp("(?=.*" + searchArray.join(")(?=.*") + ")", "i");  

                if(reg.test(title)){
                    return prod;
                }
            });
            setResults(resData);
            setLoading(false);
		 }
         fetchData();
	},[]);

    return (
        <div>
            <Helmet>
                <title>Supermarket | Search</title>
			</Helmet>
            <div className="breadcrumbs">
            <div className="container">
                <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
                <li><Link to='/'><span aria-hidden="true"><FaHome className="glyphicon-home"/></span>Home</Link></li>
                    <li className="active">Search</li>
                </ol>
            </div>
	    </div>
            <div className="container mb-5">
                {loading?<Loader/>:
                <div>
                    <div className="clearfix mt-5 mb-2">
                        <h4 className="search-result">{results.length} items found for keyword: &apos;{searchKey}&apos;</h4>
                    </div>
                    <div >
                        {results.map(prod=>(
                            <Col md={3} key={prod.id} >
                                <Card className="snipcart-thumb" id="searchCard">
                                    <Link to={`/product/${prod.id}`}><Card.Img src={prod.images[0].imageName} style={{position:"relative"}}/></Link>
                                    <Card.Body>
                                        <h2>{prod.title}</h2>
                                        <p>Rs {prod.unitPrice[0].sellingPrice}</p>
                                        <form 
                                        onSubmit={(e)=>addToCart(e,prod.id)}>
                                            <fieldset>
                                                <input type="submit" name="submit" value="Add to cart" className="button" />
                                            </fieldset>
                                        </form>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </div>
                </div>
                }
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Search
