import React, {useContext} from 'react';
import './css/slider.css';

import {Carousel} from 'react-bootstrap';
import { ProductsContext } from '../context/ProductsContext';


function Slider(){
	const sth = useContext(ProductsContext);
	// console.log(sth[6].details);
    return(
		<div className="skdslider">

			<Carousel fade={true} controls={false} interval={3000} indicators={false}>
				<Carousel.Item>
					<img src={sth[0].details[1].images} alt="" width="100%"/>
					<div className="slide-desc">
						{/* <Button style={{margin:0}}>Buy Now</Button> */}
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<img src={sth[0].details[0].images} alt="" width="100%"/>
					<div className="slide-desc">
						{/* <h3>Whole Spices Products Are Now On Line With Us</h3> */}
					</div>
				</Carousel.Item>

			</Carousel>
		</div>
    );
}
export default Slider;