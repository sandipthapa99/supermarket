import React from "react";
import '../components/css/cart.css'
import { useState, useEffect } from "react";
import { CartState } from "../context/Context";
import { ListGroup,Button,Row,Col, Form, Image } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";

function Cart(){
    const stock = [0,3,5,6,7];
    const {state:{cart}, dispatch} = CartState();

    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price)*curr.qty,0));
    }, [cart]);

    return(
        <div className="home">
            {/* <div className="home"> */}
            <div className="productContainer">
                <ListGroup>
                    {
                        cart.map(prod=>(
                            <ListGroup.Item key={prod.id}>
                            <Row>
                                <Col md={2}>
                                    <Image src={prod.image} alt={prod.name} fluid className="cartItemImg"/>
                                </Col>
                                <Col md={2}>
                                    <span>{prod.name}</span>
                                </Col>
                                <Col md={2}>
                                    <span>${prod.price}</span>
                                </Col>
                                <Col md={2}>
                                    <Form.Control as="select" value={prod.qty} 
                                    onChange={(e)=>
                                    dispatch({
                                        type:"CHANGE_ITEM_QTY",
                                        payload:{
                                            id:prod.id,
                                            qty:e.target.value,
                                        },
                                    })}>
                                        {[...stock.keys()].map((x)=>(
                                            <option key={x+1} style={{text:"#000"}}>{x+1}</option>
                                        ))}
                                    </Form.Control>
                                </Col>
                                <Col md={2}>
                                <AiFillDelete
                                    fontSize="20px" 
                                    style={{cursor:"pointer",color:"#dc3545"}}
                                    onClick={()=>dispatch({
                                    type:"REMOVE_FROM_CART",
                                    payload:prod,
                                })}
                             ></AiFillDelete>
                                </Col>
                            </Row>
                            </ListGroup.Item>
                        ))
                    }
                    
                </ListGroup>
                <div className="filters summary">
                    <span className="title">Total unique products: {cart.length}</span>
                    <span style={{fontWeight:700, fontSize:20}}>Total Price: $ {Number(total).toFixed(2)}</span>
                    <Button type="button" disabled={cart.length===0}>Proceed to CheckOut</Button>
                </div>
            {/* </div> */}
            </div>
        </div>
    );
}
export default Cart;