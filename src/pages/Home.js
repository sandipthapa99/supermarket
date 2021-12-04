import React, {useState, useEffect} from 'react';
import BrandStore from '../components/BrandStore';
import Carousels from '../components/Carousels';
import NewOffers from '../components/NewOffers';
import Offers from '../components/Offers';
import Slider from '../components/Slider';
import { Helmet } from 'react-helmet';
import {ProductsContext} from '../context/ProductsContext';
import Loader from '../components/Loader';
import ProductCategory from '../components/ProductCategory';
import ScroolTop from '../components/ScroolTop';
import NewDishes from '../components/NewDishes';


function Home(){
    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        loadData();
    },[]);

    const loadData = async()=>{
        await fetch("https://uat.ordering-boafresh.ekbana.net/api/v4/newhome", {
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
                setProducts(data.data);
                setLoading(false);
            })
            .catch(err=>{
                console.log(err);
            })
    }
    // console.log(products);
    return(
        <div>
            <Helmet>
                <title>Supermarket | Home</title>
			</Helmet>
            <ProductsContext.Provider value={products}>
            {loading?<Loader/>:
            <div>
            <Slider/>
            <ScroolTop/>
            <ProductCategory/>
            <Offers/>
            <NewDishes/>
            </div>}
            </ProductsContext.Provider>
        </div>
    );
}

export default Home;