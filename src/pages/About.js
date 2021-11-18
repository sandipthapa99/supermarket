import React from 'react'
import p3 from '../assets/images/p3.jpg'
import p4 from '../assets/images/p4.jpg'
import t1 from '../assets/images/t1.jpg'
import t2 from '../assets/images/t2.jpg'
import t3 from '../assets/images/t3.jpg'
import t4 from '../assets/images/t4.jpg'
import { FaHome } from 'react-icons/fa'

import {Carousel} from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGooglePlusG } from 'react-icons/fa'

const About = () => {
    return (
        <div>
            <div class="breadcrumbs">
		<div class="container">
			<ol class="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
            <li><a href="index.html"><span aria-hidden="true"><FaHome class="glyphicon-home"/></span>Home</a></li>
				<li class="active">About</li>
			</ol>
		</div>
	</div>

	<div class="about">
		<div class="container">
			<h3 class="w3_agile_header">About Us</h3>
			<div class="about-agileinfo w3layouts">
				<div class="col-md-8 about-wthree-grids grid-top">
					<h4>Blanditiis praesentium deleniti atque corrupti quos </h4>
					<p class="top">Gnissimos voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi. atque corrupti quos dolores et quas molestias excepturi sint occaecat officia deserunt mollitia laborum et dolorum fuga</p>
					<p>Dignissimos at vero eos et accusamus et iusto odio ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecat officia deserunt mollitia laborum et dolorum fuga. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecat atque corrupti quos dolores et quas molestias excepturi sint occaecat officia deserunt mollitia laborum et dolorum </p>		
					<div class="about-w3agilerow">
						<div class="col-md-4 about-w3imgs">
							<img src={p3} alt="" class="img-responsive zoom-img"/>
						</div>
						<div class="col-md-4 about-w3imgs">
							<img src={p4} alt=""  class="img-responsive zoom-img"/>
						</div>
						<div class="col-md-4 about-w3imgs">
							<img src={p3} alt=""  class="img-responsive zoom-img"/>
						</div>
						<div class="clearfix"> </div>
					</div>
				</div>
				<div class="col-md-4 about-wthree-grids">
					<div class="offic-time">
						<div class="time-top">
							<h4>Praesentium :</h4>
						</div>
						<div class="time-bottom">
							<h5>At vero eos </h5>
							<h5>Accusamus et</h5>
							<p>Dignissimos at vero eos et accusamus et iusto odio ducimus qui accusamus et. </p>
						</div>
					</div>
					<div class="testi">
						<h3 class="w3_agile_header">Testimonial</h3>

						
						<div  id="top" class="callbacks_container">
                            <Carousel fade={true} indicators={false} controls={true}>
							{/* <ul class="rslides" id="slider5"> */}
                                <Carousel.Item>
                                    
									<div class="testi-slider">
										<h4>" I AM VERY PLEASED.</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu magna dolor, quisque semper.</p>
										<div class="testi-subscript">
											<p><a href="#">John Doe,</a>Adipiscing</p>
											<span class="w3-agilesub"> </span>
										</div>	
									</div>
                                    
                                </Carousel.Item>
								<Carousel.Item>
									<div class="testi-slider">
										<h4>" I AM LOREM IPSUM.</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu magna dolor, quisque semper.</p>
										<div class="testi-subscript">
											<p><a href="#">elit semper,</a>Dolor Elit</p>
											<span class="w3-agilesub"> </span>
										</div>	
									</div>
                                </Carousel.Item>
								<Carousel.Item>
									<div class="testi-slider">
										<h4>" CONSECTETUR PIMAGNA.</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu magna dolor, quisque semper.</p>
										<div class="testi-subscript">
											<p><a href="#">Amet Doe,</a>Suspendisse</p>
											<span class="w3-agilesub"> </span>
										</div>	
									</div>
                                </Carousel.Item>
							{/* </ul> */}
                            </Carousel>	
						</div>
					</div>
				</div>	
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>

	<div class="about-slid agileits-w3layouts"> 
		<div class="container">
			<div class="about-slid-info"> 
				<h2>Lorem Ipsum is that it has a moreless normal</h2>
				<p>Lorem Ipsum generators on the Internet tend to repeat predefined chunks on the Internet tend as necessary, making this the first true generator on the Internet embarrassing hidden in the middle of text Lorem Ipsum generators on the Internet tend to repeat predefinedchunks as necessary, making this the first true generator on the.</p>
			</div>
		</div>
	</div>

	<div class="about-team"> 
		<div class="container">
			<h3 class="w3_agile_header">Meet Our Team</h3>
			<div class="team-agileitsinfo">
				<div class="col-md-3 about-team-grids">
					<img src={t4} alt=""/>
					<div class="team-w3lstext">
						<h4><span>ANDERSON,</span> Manager</h4>
						<p>Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.</p>
					</div>
					<div class="social-icons caption"> 
						<ul>
							<li><a href="#" class="fa fa-facebook facebook"><FaFacebookF/> </a></li>
							<li><a href="#" class="fa fa-twitter twitter"><FaTwitter/></a></li>
							<li><a href="#" class="fa fa-google-plus googleplus"><FaGooglePlusG/> </a></li> 
						</ul>
						<div class="clearfix"> </div>  
					</div>
				</div>
				<div class=" col-md-3 about-team-grids">
					<img src={t2} alt=""/>
					<div class="team-w3lstext">
						<h4><span>ELIFS,</span> Director</h4>
						<p>Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.</p>
					</div>
					<div class="social-icons caption"> 
						<ul>
                            <li><a href="#" class="fa fa-facebook facebook"><FaFacebookF/> </a></li>
							<li><a href="#" class="fa fa-twitter twitter"><FaTwitter/></a></li>
							<li><a href="#" class="fa fa-google-plus googleplus"><FaGooglePlusG/> </a></li> 
						</ul>
						<div class="clearfix"> </div>  
					</div>
				</div>
				<div class="col-md-3 about-team-grids">
					<img src={t1} alt=""/>
					<div class="team-w3lstext">
						<h4><span>JESSICA,</span> Supervisior</h4>				
						<p>Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.</p>
					</div>
					<div class="social-icons caption"> 
						<ul>
                            <li><a href="#" class="fa fa-facebook facebook"><FaFacebookF/> </a></li>
							<li><a href="#" class="fa fa-twitter twitter"><FaTwitter/></a></li>
							<li><a href="#" class="fa fa-google-plus googleplus"><FaGooglePlusG/> </a></li> 
						</ul>
						<div class="clearfix"> </div>  
					</div>
				</div>
				<div class="col-md-3 about-team-grids">
					<img src={t3} alt=""/>
					<div class="team-w3lstext">
						<h4><span>RACKHAM,</span> Staff</h4>
						<p>Odio dignissimos vero eos voluptatem accusantium doloremque laudantium reader will be distracted.</p>
					</div>
					<div class="social-icons caption"> 
						<ul>
                            <li><a href="#" class="fa fa-facebook facebook"><FaFacebookF/> </a></li>
							<li><a href="#" class="fa fa-twitter twitter"><FaTwitter/></a></li>
							<li><a href="#" class="fa fa-google-plus googleplus"><FaGooglePlusG/> </a></li> 
						</ul>
						<div class="clearfix"> </div>  
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>
        </div>
    )
}

export default About
