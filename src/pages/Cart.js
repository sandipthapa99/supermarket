import React from "react";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import '../components/css/cart.css'


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
        </div>
    );
}
export default Cart;