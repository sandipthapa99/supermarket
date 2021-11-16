import React from 'react';

function Carousel(){
    return(
        <div>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
{/*       <!-- Indicators --> */}
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="item active">
         <a href="beverages.html"> <img class="first-slide" src="assets/images/b1.jpg" alt="First slide"/></a>
       
        </div>
        <div class="item">
         <a href="personalcare.html"> <img class="second-slide " src="assets/images/b3.jpg" alt="Second slide"/></a>
         
        </div>
        <div class="item">
          <a href="household.html"><img class="third-slide " src="assets/images/b1.jpg" alt="Third slide"/></a>
          
        </div>
      </div>
    </div>

    <div class="ban-bottom-w3l">
					<div class="container">
					<div class="col-md-6 ban-bottom3">
							<div class="ban-top">
								<img src="assets/images/p2.jpg" class="img-responsive" alt=""/>
								
							</div>
							<div class="ban-img">
								<div class=" ban-bottom1">
									<div class="ban-top">
										<img src="assets/images/p3.jpg" class="img-responsive" alt=""/>
										
									</div>
								</div>
								<div class="ban-bottom2">
									<div class="ban-top">
										<img src="assets/images/p4.jpg" class="img-responsive" alt=""/>
										
									</div>
								</div>
								<div class="clearfix"></div>
							</div>
						</div>
						<div class="col-md-6 ban-bottom">
							<div class="ban-top">
								<img src="assets/images/111.jpg" class="img-responsive" alt=""/>
								
								
							</div>
						</div>
						
						<div class="clearfix"></div>
					</div>
				</div>
    </div>
    );
}

export default Carousel;