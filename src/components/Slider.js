import React from 'react';

function Slider(){
    return(
        <div className="skdslider">
        <ul id="demo1">
			<li>
				<img src='/assets/images/11.jpg' alt="" />
{/* 				<!--Slider Description example--> */}
				<div class="slide-desc">
					<h3>Buy Rice Products Are Now On Line With Us</h3>
				</div>
			</li>
			<li>
				<img src='/assets/images/22.jpg' alt="" />
				  <div class="slide-desc">
					<h3>Whole Spices Products Are Now On Line With Us</h3>
				</div>
			</li>
			
			<li>
				<img src='../assets/images/44.jpg' alt="" />
				<div class="slide-desc">
					<h3>Whole Spices Products Are Now On Line With Us</h3>
				</div>
			</li>
		</ul>
        </div>
    );
}
export default Slider;