import React from "react";
import '../components/css/cart.css'
import { useState, useEffect } from "react";
import { CartState } from "../context/Context";
import { ListGroup,Button,Row,Col, Form, Image } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import img from '../assets/images/1.png';

function Cart(){

    const [items, setItems] = useState([]);
	const [loading,setLoading] = useState(true);
    var token = JSON.parse(window.localStorage.getItem('access_token'));
    console.log(items);

    useEffect(()=>{
        if(token){
            fetchCart();
        }
        else{
            window.location="/login";
        }
    },[]);

    const fetchCart= async ()=>{
       const res =  await fetch("https://uat.ordering-boafresh.ekbana.net//api/v4/cart", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545',
                    'Warehouse-Id':'1',
                    'Authorization': 'Bearer ' + token    
                }
            });
        const data = await res.json();
        setItems(data.data);
        setLoading(false);
        }

    return(
        <div className="container">
            {loading?
            <div>Loading</div>:
             <div className="small-container cart-page">
                 <table>
                     <tr>
                         <th>Product</th>
                         <th>Qunatity</th>
                         <th>SubTotal</th>
                     </tr>
                     {items.cartProducts.map(prod=>(
                         <tr key={prod.id}>
                         <td>
                             <div className="cart-info">
                                 <img src={prod.product.images[0].imageName}/>
                                 <div>
                                     <p>{prod.product.title}</p>
                                     <small>Price: NRS {prod.price}</small><br/>
                                     <a href="">Remove</a>
                                 </div>
                             </div>
                         </td>
                         <td><input type="number" value={prod.quantity}/></td>
                         <td>{prod.price * prod.quantity}</td>
                     </tr>
                     ))}
                     
                 </table>
             </div>
            // <div>
            //     {items.cartProducts.map(prod=>(
            //         <div key={prod.id}>
            //             <div>{prod.id}</div>
            //             <div>{prod.product.title}</div>
            //             <div>Nrs. {prod.product.unitPrice[0].sellingPrice}</div>
            //             <div>QTY: {prod.quantity}</div>
            //             <img src={prod.product.images[0].imageName}/>
            //         </div>
            //     ))}
            // </div>
        }
        </div>
    );
}
export default Cart;