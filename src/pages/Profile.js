import React, {useState, useEffect} from 'react'
import '../components/css/profile.css'
import {UserContext} from '../context/UserContext';
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Col, Row, Image, Card, Form, Container } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Profile() {
    const [user, setUser] = useState([]);
    const [firstName, setFirstName] = useState([]);
    const [lastName, setLastName] = useState([]);
    const [mobile, setMobile] = useState([]);
    var token = JSON.parse(window.localStorage.getItem('access_token'));

    useEffect(()=>{
        if(token){
            fetchUserData();
        }
        else{
            window.location="/login";
        }
    },[]);
    const fetchUserData=(e)=>{
        fetch("https://uat.ordering-boafresh.ekbana.net//api/v4/profile/show", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545',
                    'Authorization': 'Bearer ' + token    
                }
            })
            .then(respose => {
                return respose.json();
            })
            .then(data=>{
                setUser(data.data);
                console.log(data.data);
            })
            .catch(err=>{
                console.log(err);
            })
        }

    const updateProfile =(e)=>{
        e.preventDefault();
        fetch("https://uat.ordering-boafresh.ekbana.net//api/v4/profile", {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545',
                    'Authorization': 'Bearer ' + token,    
                },
                body: JSON.stringify({
                    "first-name": firstName,
                    "last-name": lastName,
                    "mobile_number": mobile,
                })
            })
            .then(respose => {
                return respose.json();
            })
            .then(data=>{
                // console.log(data);
                setUser(data);
                fetchUserData();
                updateToast();
            })
            .catch(err=>{
                console.log(err);
            })
    }
    const updateToast = ()=>{
		toast.success("Profile Updated",{
			position:"top-center"
		});
	}

    return (
    <div className="container mt-4 mb-4 p-3 d-flex justify-content-left">
        <Container>
        <div className="card p-4">
            <div className=" image d-flex flex-column justify-content-center align-items-center">
                <img src={user.image} alt="profile" height="100" width="100"/> 
                <span className="name mt-3">{user.firstName} {user.lastName}</span>
                <span className="idd"><FaEnvelope/> {user.email}</span>
                <span className="idd"><FaPhoneAlt/> {user.mobileNumber}</span>
                <div className="d-flex flex-row justify-content-center align-items-center gap-2"> <span className="idd1">{user.username}</span> <span><i className="fa fa-copy"></i></span> </div>
                <div className="text mt-3"> <span>Loyality Points: {user.total_loyality_points?user.total_loyality_points:0}</span> </div>
                <div className=" px-2 rounded mt-4 date " style={{textAlign:"center"}}> <span className="join">Joined: {user.createdAt}<br/>Last updated: {user.updatedAt}</span> </div>
            </div>
        </div>
        </Container>
        <Container>
        <Row className="justify-content-right">
          <Col md={6} className="agileinfo_single_left form-module">
            <div className="form" id="profile-updt-form">
              <h2>Update Profile</h2>
              <Form onSubmit={updateProfile}>
                <input
                  type="text"
                  placeholder="First Name"
                  onChange={(e)=>setFirstName(e.target.value)}
                ></input>
                <input
                  type="text"
                  placeholder="Last Name"
                  onChange={(e)=>setLastName(e.target.value)}
                ></input>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  onChange={(e)=>setMobile(e.target.value)}
                ></input>
                <input type="submit" value="Save" />
              </Form>
            </div>
          </Col>
          <Col md={6} className="agileinfo_single_left form-module">
            <div className="form" id="pw-change-form">
              <h2>Change Password </h2>
              <Form>
                <input
                  type="Password"
                  placeholder="Previous Password"
                  required
                ></input>
                <input
                  type="Password"
                  placeholder="New Password"
                  required
                ></input>
                <input
                  type="Password"
                  placeholder="Confirm Password"
                  required
                ></input>
                <input type="submit" value="Change" />
              </Form>
            </div>
          </Col>
          <div className="clearfix"> </div>
        </Row>
        </Container>
        <ToastContainer/>
    </div>
    )
}

export default Profile
