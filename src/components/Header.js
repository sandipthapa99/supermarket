import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { FaCartArrowDown, FaSearch, FaPhoneAlt } from "react-icons/fa";
import {
  Nav,
  Navbar,
  Dropdown,
  Button
} from "react-bootstrap";
import { CartState } from "../context/Context";
import './css/header.css'


function Header() {
  const [searchKey, setSearchKey] = useState("");

  const searchProd=(e)=>{
    e.preventDefault();
    window.location = '/search/'+searchKey;
  }

  function logOut(){
    localStorage.clear();
    window.location="/";
    }

  const {state: {cart},dispatch} = CartState();

  return (
    <div>
      <div className="agileits_header">
        <div className="container">
          <div className="w3l_offers">
            <p>
              SALE UP TO 70% OFF. USE CODE "SALE70%" .{" "}
              <Link to="/product">SHOP NOW</Link>
            </p>
          </div>
          {localStorage.getItem('access_token')?
          <div>
            <div className="agile-login">
              <ul className="logList">
                {/* <li>
                  <p>Hello, Sandip</p>
                </li> */}
                <li>
                  <Link to='/profile' style={{paddingRight:"15px"}} >Profile</Link>
                  <button style={{color:"#fff"}} onClick={logOut}>Log Out</button>
                </li>
              </ul>
            </div>
            <div className="product_list_header">
            <form action="#" method="post" className="last">
              <input type="hidden" name="cmd" value="_cart" />
              <input type="hidden" name="display" value="1" />
              {/* <Link to="/cart"><button className="w3view-cart"><i className="fa fa-cart-arrow-down" aria-hidden="true"><FaCartArrowDown/></i></button></Link> */}
              
              <Navbar>
                <Nav>
                  <Dropdown>
                    <Dropdown.Toggle variant="success">
                      <FaCartArrowDown fontSize="20px" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{ minWidth: 370, left: "-280px", zIndex:9999 }}
                    >
                        {cart.map(prod=>(
                          <span className="cartitem" key={prod.id}>
                            <img src={prod.image} className="cartItemImg" alt={prod.name}/>
                            <div className="cartItemDetail">
                              <span id="itemText">{prod.name}</span>
                              <span id="itemText">${prod.price}</span>
                            </div>

                          </span>
                        ))}
                        <Link to="/cart">
                          <Button style={{width:"95%", margin:"5px 10px 5px 10px"}}>Go To Cart Page</Button>
                        </Link>
                      
                      
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav>
              </Navbar>
            </form>
          </div>
          </div>:
          <div className="agile-login" style={{float:"right"}}>
            <ul className="logList">
            <li>
                <Link to="/contact">Help</Link>
              </li>
              <li>
                <Link to="/signup">Create Account</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              
            </ul>
          </div>}
          
          <div className="clearfix"> </div>
        </div>
      </div>
      <div className="logo_products">
        <div className="container">
          <div className="w3ls_logo_products_left1">
            <ul className="phone_email">
              <li>
                <i className="fa fa-phone" aria-hidden="true">
                  <FaPhoneAlt />
                </i>
                Order online or call us : (+0123) 234 567
              </li>
            </ul>
          </div>
          <div className="w3ls_logo_products_left">
            <h1>
              <Link to="/">Supermarket</Link>
            </h1>
          </div>
          <div className="w3l_search">
          <form onSubmit={searchProd}>
              <input
                type="search"
                name="Search"
                placeholder="Search for a Product..."
                onChange={(e)=>setSearchKey(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-default search"
                aria-label="Left Align"
              >
                <i className="fa fa-search" aria-hidden="true">
                  <FaSearch />{" "}
                </i>
              </button>
              <div className="clearfix"></div>
        </form>
          </div>

          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
