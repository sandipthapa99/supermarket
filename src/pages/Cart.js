import React from "react";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import '../components/css/cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../components/Loader";
import { Button } from "react-bootstrap";


function Cart(){
    const myToast = (msg, type)=>{
		toast[type](msg,{
			position:"top-center"
		});
	}
    const [items, setItems] = useState([]);
	const [loading,setLoading] = useState(true);
    var token = JSON.parse(window.localStorage.getItem('access_token'));
    // console.log(items);

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
    
    const increaseProd = async (e, prodId, qty) => {
        e.preventDefault();
        const res =  await fetch("https://uat.ordering-boafresh.ekbana.net//api/v4/cart-product/"+prodId, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545',
                    'Warehouse-Id':'1',
                    'Authorization': 'Bearer ' + token    
                },
                body: JSON.stringify({
                    quantity:qty+1,
                })
            });
        const data = await res.json();
        if(res.status === 200){
            fetchCart();
            myToast("Quantity Increased", "success");
        }
    }

    const decreaseProd = async (e, prodId, qty) => {
        e.preventDefault();
        if(qty===1){
            deleteItem(e, prodId);
        }
        else{
        const res =  await fetch("https://uat.ordering-boafresh.ekbana.net//api/v4/cart-product/"+prodId, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545',
                    'Warehouse-Id':'1',
                    'Authorization': 'Bearer ' + token    
                },
                body: JSON.stringify({
                    quantity:qty-1,
                })
            });
            const data = await res.json();
            if(res.status === 200){
                fetchCart();
                myToast("Quantity Decreased", "warning");
            }
        }
        
    }

    const deleteItem = async (e, prodId)=>{
        e.preventDefault();
        const res =  await fetch("https://uat.ordering-boafresh.ekbana.net//api/v4/cart-product/"+prodId, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545',
                    'Warehouse-Id':'1',
                    'Authorization': 'Bearer ' + token    
                },
            });

            if(res.status === 204){
                fetchCart();
                myToast("Item removed from the Cart", "warning");
            }
    }

    return(
        <div className="container">
            <Helmet>
                <title>Supermarket | Cart</title>
			</Helmet>
            {loading?
            <Loader/>:
             <div className="small-container cart-page">
                 <h3>You have {items.cartProducts.length} unique product(s) in your Cart.</h3>
                 <table className="mytable">
                     <thead>
                     <tr>
                         <th>Product</th>
                         <th>Quantity</th>
                         <th>SubTotal</th>
                     </tr>
                     </thead>
                     <tbody>
                     {items.cartProducts.map(prod=>(
                         <tr key={prod.id}>
                         <td>
                             <div className="cart-info">
                                 <img src={prod.product.images[0].imageName}/>
                                 <div>
                                     <p>{prod.product.title}</p>
                                     <small>Price: Rs. {prod.product.unitPrice[0].sellingPrice}</small><br/>
                                     <a href="#" onClick={(e)=>deleteItem(e, prod.id)}> Remove</a>
                                 </div>
                             </div>
                         </td>
                         <td>
                         <div className="quantity">
                      <div className="quantity-select">
                        <div
                          className="entry value-minus"
                          onClick={(e) =>
                            decreaseProd(
                              e,
                              prod.id,
                              prod.quantity
                            )
                          }
                        >
                          &nbsp;
                        </div>
                        <div className="entry value">
                          <span>{prod.quantity}</span>
                        </div>
                        <div
                          className="entry value-plus active"
                          onClick={(e) =>
                            increaseProd(
                              e,
                              prod.id,
                              prod.quantity
                            )
                          }
                        >
                          &nbsp;
                        </div>
                      </div>
                    </div>
                         </td>
                         <td>Rs. {prod.product.unitPrice[0].sellingPrice * prod.quantity}</td>
                     </tr>
                     ))}
                     </tbody>
                 </table>
                 <div className="total-price">
                     <table>
                         <tbody>
                         <tr>
                             <td>Subtotal</td>
                             <td>Rs. {items.subTotal}</td>
                         </tr>
                         <tr>
                             <td>Delivery Charge</td>
                             <td>Rs. {items.deliveryCharge}</td>
                         </tr>
                         <tr>
                             <td>{items.extra[0].title}</td>
                             <td>Rs. {items.extra[0].value}</td>
                         </tr>
                         <tr>
                             <td>{items.extra[1].title}</td>
                             <td>Rs. {items.extra[1].value}</td>
                         </tr>
                         <tr>
                             <td className="total">Total</td>
                             <td  className="total">Rs. {items.total}</td>
                         </tr>
                         </tbody>
                     </table>
                 </div>
                <Button style={{float:"right", marginTop:"15px", border:"none"}}>Proceed to Checkout</Button>
             </div>
        }
        <ToastContainer
        autoClose={1500}/>
        </div>
    );
}
export default Cart;