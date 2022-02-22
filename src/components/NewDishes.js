import React, {useContext} from 'react'
import { ProductsContext } from '../context/ProductsContext';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Col } from 'react-bootstrap';
import './css/newDishes.css'
import { Link } from 'react-router-dom';


const NewDishes = () => {
    const products = useContext(ProductsContext);
    const data = products[2];
    console.log(data);

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  dots: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 360,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
        ]
      };
    return (
        <div className="container mb-5">
            <div className="clearfix mt-5 mb-2">
                <h4>{data.sectionDetails.title}</h4>
            </div>
            <Slider {...settings}>
            {data.sectionDetails.products.map(prod=>(
                <Col md={3} key={prod.id}>
                <Card id="dishCard">
                <Link to={`/product/${prod.id}`}><Card.Img src={prod.images[0].imageName} style={{position:"relative"}}/></Link>
                    <Card.Body>
                        <h3>{prod.categoryTitle}</h3>
                        <h2>{prod.title}</h2>
                        <p>Rs {prod.unitPrice[0].sellingPrice}</p>
                    </Card.Body>
                </Card>
            </Col>
            ))}
            </Slider>
            
        </div>
    )
}

export default NewDishes
