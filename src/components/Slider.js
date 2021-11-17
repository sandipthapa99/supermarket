import React from 'react';
import img1 from '../assets/images/11.jpg';
import img2 from '../assets/images/22.jpg';
import img3 from '../assets/images/44.jpg';

import {Carousel} from 'react-bootstrap';

function Slider(){
    return(
		<div className="skdslider">
			<Carousel fade={true} controls={false} interval={3000} indicators={false}>
				<Carousel.Item>
					<img src={img1} alt="" width="100%"/>
					<div className="slide-desc">
						<h3>Buy Rice Products Are Now On Line With Us</h3>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<img src={img2} alt="" width="100%"/>
					<div className="slide-desc">
						<h3>Whole Spices Products Are Now On Line With Us</h3>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<img src={img3} alt="" width="100%"/>
					<div className="slide-desc">
						<h3>Whole Spices Products Are Now On Line With Us</h3>
					</div>
				</Carousel.Item>
			</Carousel>
		</div>
    );
}
export default Slider;