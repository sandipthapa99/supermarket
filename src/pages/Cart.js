import React from "react";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import '../components/css/cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cart(){
    const removeToast = ()=>{
		toast.warning("Item removed from cart",{
			position:"top-center"
		});
	}
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
                removeToast();
            }
    }

    return(
        <div className="container">
            <Helmet>
                <title>Supermarket | Cart</title>
			</Helmet>
            {loading?
            <div>Loading</div>:
             <div className="small-container cart-page">
                 <table className="mytable">
                     <tr>
                         <th>Product</th>
                         <th>Quantity</th>
                         <th>SubTotal</th>
                     </tr>
                     {items.cartProducts.map(prod=>(
                         <tr key={prod.id}>
                         <td>
                             <div className="cart-info">
                                 <img src={prod.product.images[0].imageName}/>
                                 <div>
                                     <p>{prod.product.title}</p>
                                     <small>Price: NRS {prod.product.unitPrice[0].sellingPrice}</small><br/>
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
                         <td>{prod.product.unitPrice[0].sellingPrice * prod.quantity}</td>
                     </tr>
                     ))}
                     
                 </table>
                 <div className="total-price">
                     <table>
                         <tr>
                             <td>Subtotal</td>
                             <td>{items.subTotal}</td>
                         </tr>
                         <tr>
                             <td>Delivery Charge</td>
                             <td>{items.deliveryCharge}</td>
                         </tr>
                         <tr>
                             <td>{items.extra[0].title}</td>
                             <td>{items.extra[0].value}</td>
                         </tr>
                         <tr>
                             <td>{items.extra[1].title}</td>
                             <td>{items.extra[1].value}</td>
                         </tr>
                         <tr>
                             <td className="total">Total</td>
                             <td  className="total">Nrs {items.total}</td>
                         </tr>
                     </table>
                 </div>
             </div>
        }
        <ToastContainer/>
        </div>
    );
}
export default Cart;