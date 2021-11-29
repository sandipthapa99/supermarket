import React, {useContext, useState} from 'react';
import b1 from '../assets/images/b1.jpg';
import b3 from '../assets/images/b3.jpg';
import p2 from '../assets/images/p2.jpg';
import p3 from '../assets/images/p3.jpg';
import p4 from '../assets/images/p4.jpg';
import oneoneone from '../assets/images/111.jpg';
import {Carousel} from 'react-bootstrap';
import { ProductsContext } from '../context/ProductsContext';


function Carousels(){
	const sth = useContext(ProductsContext);
	console.log(sth);
    return(
        <div>
			<Carousel controls={false} indicators={true} interval={3000}>
				<Carousel.Item>
					<img src={sth[6].details[0].images} alt="slide 1" width="100%"/>
				</Carousel.Item>
				<Carousel.Item>
					<img src={sth[6].details[1].images} alt="slide 1" width="100%"/>
				</Carousel.Item>
			</Carousel>

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

export default Carousels;