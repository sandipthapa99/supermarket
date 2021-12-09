import React, {useState, useEffect} from 'react'
import '../components/css/profile.css'
import {UserContext} from '../context/UserContext';
import { FaPhoneAlt, FaEnvelope, FaHome } from "react-icons/fa";
import { Col, Row, Card, Form, Container } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';


function Profile() {
    const [user, setUser] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("");

    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confrimPass, setCofrimPass] = useState("");
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
            })
            .catch(err=>{
                console.log(err);
            })
        }

    const updateProfile =async (e)=>{
        e.preventDefault();
        const mydata = await fetch("https://uat.ordering-boafresh.ekbana.net//api/v4/profile", {
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
            const res = await mydata.json();
            if(mydata.status===200){
                e.target.reset();
                fetchUserData();
                updateToast();
                
            }
            else{
                errorToast(res.errors[0].message);
            }
    }
    const updateToast = ()=>{
		toast.success("Profile Updated",{
			position:"top-center"
		});
	}
    const errorToast = (msg)=>{
		toast.error(msg,{
			position:"top-center"
		});
	}
    const passToast = ()=>{
		toast.success("Password Changed!",{
			position:"top-center"
		});
	}

    const changePassword =async (e)=>{
        e.preventDefault();
        const mydata = await fetch("https://uat.ordering-boafresh.ekbana.net//api/v4/profile/change-password", {
                method: 'POST',
                headers: {
                    'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545',
                    'Authorization': 'Bearer ' + token,    
                },
                body: JSON.stringify({
                    "old-password": oldPass,
                    "new-password": newPass,
                    "confirm-password": confrimPass,
                })
            })
            const res = await mydata.json();
            if(mydata.status===200){
                e.target.reset();
                fetchUserData();
                passToast();
                
            }
            else{
                errorToast(res.errors[0].message);
            }
    }

    return (
    <div className="container mt-5 mb-5">
        <Helmet>
            <title>Supermarket | Profile</title>
		</Helmet>

        <div class="row">
            <div class="column" id="mycolumn">
                <Card id="card">
                <Card.Img src={user.image} style={{position:"relative",width:"100%"}}/>
                <h2>{user.firstName} {user.lastName}</h2>
                <p>{user.email}</p>
                <p>{user.mobileNumber}</p>
                <div className="loyality">
                    <p>Loyality Points: {user.total_loyality_points?user.total_loyality_points:0}</p>
                    <p>Joined: {user.createdAt}<br/>Last updated: {user.updatedAt}</p>
                </div>
                
                </Card>
            </div>

             <div class="column" id="mycolumn">
                <div class="card" id="card">
                    <h3>Update Profile</h3>
                    <Form onSubmit={updateProfile}>
                        <input type="text" placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)}></input>
                        <input type="text" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)}></input>
                        <input type="text" placeholder="Mobile Number" onChange={(e)=>setMobile(e.target.value)}></input>
                        <input type="submit" value="Update" />
                    </Form>
                 </div>
            </div>
  
            <div class="column" id="mycolumn">
                <div class="card" id="card">
                    <h3>Change Password</h3>
                    <Form onSubmit={changePassword}>
                        <input type="Password" placeholder="Previous Password" onChange={(e)=>setOldPass(e.target.value)}></input>
                        <input type="Password" placeholder="New Password" onChange={(e)=>setNewPass(e.target.value)}></input>
                        <input type="Password" placeholder="Confirm Password" onChange={(e)=>setCofrimPass(e.target.value)}></input>
                        <input type="submit" value="Change" />
                    </Form>
                </div>
        </div>
  
</div>

        <ToastContainer/>
    </div>
    )
}

export default Profile
