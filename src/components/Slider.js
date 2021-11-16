import React from 'react';
import img1 from '../assets/images/11.jpg';
import img2 from '../assets/images/22.jpg';
import img3 from '../assets/images/44.jpg';

function Slider(){
    return(
        <div className="skdslider">
        <ul id="demo1">
			<li>
				<img src={img1} alt="" />
{/* 				<!--Slider Description example--> */}
				<div className="slide-desc">
					<h3>Buy Rice Products Are Now On Line With Us</h3>
				</div>
			</li>
			<li>
				<img src={img2} alt="" />
				  <div className="slide-desc">
					<h3>Whole Spices Products Are Now On Line With Us</h3>
				</div>
			</li>
			
			<li>
				<img src={img3} alt="" />
				<div className="slide-desc">
					<h3>Whole Spices Products Are Now On Line With Us</h3>
				</div>
			</li>
		</ul>
        </div>
    );
}
export default Slider;