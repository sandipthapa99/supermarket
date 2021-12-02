import React,{useState, useEffect} from 'react'
import { Card, Button } from 'react-bootstrap';
import {FaArrowCircleRight } from "react-icons/fa";
import "./css/category.css"
import {Link} from 'react-router-dom';

function ProductCategory() {
    const [category, setCategory]= useState([]);
    console.log(category);

    useEffect(()=>{
        fetch("https://uat.ordering-boafresh.ekbana.net/api/v4/category", {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545',
                    'Warehouse-Id':'1' 
                }
            })
            .then(respose => {
                return respose.json();
            })
            .then(data=>{
                setCategory(data.data);

            })
            .catch(err=>{
                console.log(err);
            })
    },[]);
    return (
        <div className="cat">
            <div className="container" style={{padding:"0 0 20px 40px"}}>
                <h2>Shop By Categories</h2>
                <p>We’ve got something for everyone</p>
            </div>
            <div className="container">
                <div className="row">
                {category.map(cat=>(
                    <Card style={{ width: '21rem', margin:"20px", border:"none" }} className="col-md-4" key={cat.id}>
                    <Card.Img variant="top" src={cat.icon} />
                    <Card.Body>
                        <Card.Title style={{fontWeight:600,fontSize:"16px"}}>{cat.title}</Card.Title>
                        <Card.Text>
                        {cat.productCount} products
                        </Card.Text>
                        <Link to={cat.title.toLowerCase()}>Shop Now <FaArrowCircleRight style={{color:"#fe9126"}}/></Link> 
                    </Card.Body>
                </Card>
                ))}
                </div>
            </div>
        </div>
    )
}

export default ProductCategory;
