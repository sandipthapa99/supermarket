import React from 'react';
import BrandStore from '../components/BrandStore';
import Carousels from '../components/Carousels';
import NewOffers from '../components/NewOffers';
import Offers from '../components/Offers';
import Slider from '../components/Slider';
import { Helmet } from 'react-helmet';
import DataFetching from '../components/DataFetching';
import {ProductsContext} from '../context/ProductsContext';

function Home(){
    return(
        <div>
            <Helmet>
                <title>Supermarket | Home</title>
			</Helmet>
            <Slider/>
            <Offers/>
            <Carousels/>
            <BrandStore/>
            <NewOffers/>
        </div>
    );
}

export default Home;