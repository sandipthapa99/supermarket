import React from 'react';
import b1 from '../assets/images/b1.jpg';
import b3 from '../assets/images/b3.jpg';
import p2 from '../assets/images/p2.jpg';
import p3 from '../assets/images/p3.jpg';
import p4 from '../assets/images/p4.jpg';
import oneoneone from '../assets/images/111.jpg';


function Carousel(){
    return(
        <div>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
{/*       <!-- Indicators --> */}
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="item active">
         <a href="beverages.html"> <img className="first-slide" src={b1} alt="First slide"/></a>
       
        </div>
        <div className="item">
         <a href="personalcare.html"> <img className="second-slide " src={b3} alt="Second slide"/></a>
         
        </div>
        <div className="item">
          <a href="household.html"><img className="third-slide " src={b1} alt="Third slide"/></a>
          
        </div>
      </div>
    </div>

    <div className="ban-bottom-w3l">
					<div className="container">
					<div className="col-md-6 ban-bottom3">
							<div className="ban-top">
								<img src={p2} className="img-responsive" alt=""/>
								
							</div>
							<div className="ban-img">
								<div className=" ban-bottom1">
									<div className="ban-top">
										<img src={p3} className="img-responsive" alt=""/>
										
									</div>
								</div>
								<div className="ban-bottom2">
									<div className="ban-top">
										<img src={p4} className="img-responsive" alt=""/>
										
									</div>
								</div>
								<div className="clearfix"></div>
							</div>
						</div>
						<div className="col-md-6 ban-bottom">
							<div className="ban-top">
								<img src={oneoneone} className="img-responsive" alt=""/>
								
								
							</div>
						</div>
						
						<div className="clearfix"></div>
					</div>
				</div>
    </div>
    );
}

export default Carousel;