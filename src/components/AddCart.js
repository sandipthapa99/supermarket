import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const addToCart = (e, prodId) => {
  e.preventDefault();
  var token = JSON.parse(window.localStorage.getItem('access_token'));
  if(token){
    const addCart = async(e)=>{
      const mydata = await fetch("https://uat.ordering-boafresh.ekbana.net//api/v4/cart-product", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Warehouse-Id':'1',
                    'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545',
                    'Authorization': 'Bearer ' + token    
                },
                body: JSON.stringify({
                  "productId": prodId,
                  "priceId": prodId,
                  "quantity": "1",
                  "note": "New Item",
                })
            });
            const res = await mydata.json();
            if(mydata.status===200){
              myToast("Added to cart", "success");
            }
            else{
                console.log(res);
            }

          }
          addCart();
  }
  else{
    window.location='/login';
  }
  
}

export const myToast = (msg, type)=>{
  toast[type](msg,{
    position:"top-center"
  });
}

