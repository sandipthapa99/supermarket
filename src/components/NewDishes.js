import React, {useContext} from 'react'
import { ProductsContext } from '../context/ProductsContext';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Col } from 'react-bootstrap';
import './css/newDishes.css'


const NewDishes = () => {
    const products = useContext(ProductsContext);
    const data = products[2];
    // console.log(products);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
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
                    <Card.Img src={prod.categoryBackgroundImage} style={{position:"relative"}}/>
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
