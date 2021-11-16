import React from 'react';
import BrandStore from '../components/BrandStore';
import Carousel from '../components/Carousel';
import NewOffers from '../components/NewOffers';
import Offers from '../components/Offers';
import Slider from '../components/Slider';

function Home(){
    return(
        <div>
            <Slider/>
            <Offers/>
            <Carousel/>
            <BrandStore/>
            <NewOffers/>
        </div>
    );
}

export default Home;