import React, {useState, useEffect} from 'react'

import MomoBody from "../../components/MomoBody";
import {ProductsContext} from '../../context/ProductsContext';
import Loader from '../Loader';


function MomoFetching() {
    const [momos, setMomos] = useState([]);
    const [loading,setLoading] = useState(true);
    const momo = [];
    
    console.log(momos);
    useEffect(()=>{
        fetch("https://uat.ordering-boafresh.ekbana.net/api/v4/product", {
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
                const mydata=data.data;
           
                mydata.map(a=>{
                    if(a.categoryTitle==="MOMO"){
                        momo.push(a);
                    }
                    
                });
                setMomos(momo);
                setLoading(false);
            })
            .catch(err=>{
                console.log(err);
            })
            
    },[])
    return (
        <div>
            <ProductsContext.Provider value={momos}>
            {loading?<Loader/>:<MomoBody/>}
			</ProductsContext.Provider>
        </div>
    )
}

export default MomoFetching
