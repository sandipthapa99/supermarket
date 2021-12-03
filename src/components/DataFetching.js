import React, {useState, useEffect} from 'react'

import CategoriesBody from "../components/CategoryBody";
import {ProductsContext} from '../context/ProductsContext';
import Loader from './Loader';


function DataFetching() {
    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        fetch("https://uat.ordering-boafresh.ekbana.net/api/v4/product", {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545',
                    'Warehouse-Id':'1',
                    
                }
            })
            .then(respose => {
                return respose.json();
            })
            .then(data=>{
                // console.log(data);
                setProducts(data.data);
                setLoading(false);
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    return (
        <div>
            <ProductsContext.Provider value={products}>
            {loading?<Loader/>:<CategoriesBody/>}
			</ProductsContext.Provider>
        </div>
    )
}

export default DataFetching
