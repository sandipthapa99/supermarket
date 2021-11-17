import React from 'react';
import BrandStore from '../components/BrandStore';
import Carousel from '../components/Carousel';
import NewOffers from '../components/NewOffers';
import Offers from '../components/Offers';
import Slider from '../components/Slider';
import { Helmet } from 'react-helmet';

function Home(){
    return(
        <div>
            <Helmet>
                <title>Supermarket | Home</title>
			</Helmet>
            <Slider/>
            <Offers/>
            <Carousel/>
            <BrandStore/>
            <NewOffers/>
        </div>
    );
}

export default Home;