import React from "react";
import {FaFacebookF,FaTwitter,FaDribbble,FaVimeo } from "react-icons/fa";
import img from '../assets/images/card.png';


function BottomFooter(){
    return(
        <div className="footer-botm">
			<div className="container">
				<div className="w3layouts-foot">
					<ul>
						<li><a href="#" className="w3_agile_facebook"><i className="fa fa-facebook" aria-hidden="true"><FaFacebookF /></i></a></li>
						<li><a href="#" className="agile_twitter"><i className="fa fa-twitter" aria-hidden="true"><FaTwitter/></i></a></li>
						<li><a href="#" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true"><FaDribbble/></i></a></li>
						<li><a href="#" className="w3_agile_vimeo"><i className="fa fa-vimeo" aria-hidden="true"><FaVimeo/></i></a></li>
					</ul>
				</div>
				<div className="payment-w3ls">	
					<img src={img} alt=" " className="img-responsive"/>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
    );
}
export default BottomFooter;