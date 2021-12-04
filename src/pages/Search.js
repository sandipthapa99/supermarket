import React, {useState, useEffect} from 'react'
import { Card, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import offer from '../assets/images/offer.png';
import Loader from '../components/Loader';


function Search() {
    const params = useParams();
    const searchKey = params.searchKey;

    const [results, setResults] = useState();
    const [loading, setLoading] = useState(true);
    console.log(results);
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
        <div className="container mb-5">
            {loading?<Loader/>:
            <div>
                <div className="clearfix mt-5 mb-2">
                    <h4>{results.length} items found</h4>
                </div>
                 <div>
                    {results.map(prod=>(
                        <Col md={3} key={prod.id}>
                            <Card id="dishCard">
                                <Card.Img src={prod.images[0].imageName} style={{position:"relative"}}/>
                                <Card.Body>
                                    <h3>{prod.title}</h3>
                                    <h2>{prod.title}</h2>
                                    <p>Rs {prod.unitPrice[0].sellingPrice}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </div>
            </div>
            }
        </div>
    )
}

export default Search
