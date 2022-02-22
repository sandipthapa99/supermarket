import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {FaHome } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup(){
	const successToast = ()=>{
		toast.success("Sign Up Successful, You'll be redirected to Log In page Now!",{
			position:"top-center"
		});
	}
	var fNameE = document.getElementById("firstNameError");
	var lNameE = document.getElementById("lastNameError");
	var emailE = document.getElementById("emailError");
	var phoneE = document.getElementById("phoneError");
	var passwordE = document.getElementById("passwordError");

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");

	
	const signUp = async(e)=>{
		e.preventDefault();
		const mydata = await fetch("https://uat.ordering-boafresh.ekbana.net//api/v4/auth/signup", {
                method: 'POST',
                headers: {
					'warehouse-id':'1',
                    'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545',
					"Content-Type": "application/json"
  
                },
				body: JSON.stringify({
					first_name: firstName,
					last_name:lastName,
					email:email,
					mobile_number:phone,
					password:password
				})
            })
		const res = await mydata.json();
		fNameE.innerHTML = "";
		lNameE.innerHTML = "";
		emailE.innerHTML = "";
		phoneE.innerHTML = "";
		passwordE.innerHTML = "";
		if(mydata.status === 201){
			successToast();
			e.target.reset();
			setTimeout(()=>{window.location="/login";},5000);
			
		}else{
			for(var i=0; i<res.errors.length;i++){
				console.log(res.errors[i]);
				if(res.errors[i].title === "first_name"){
					fNameE.innerHTML = res.errors[i].message;
				}
				if(res.errors[i].title === "last_name"){
					lNameE.innerHTML = res.errors[i].message;
				}
				if(res.errors[i].title === "email"){
					emailE.innerHTML = res.errors[i].message;
				}
				if(res.errors[i].title === "mobile_number"){
					phoneE.innerHTML = res.errors[i].message;
				}
				if(res.errors[i].title === "Invalid Mobile Number"){
					phoneE.innerHTML = res.errors[i].message;
				}
				if(res.errors[i].title === "password"){
					passwordE.innerHTML = res.errors[i].message;
				}
			}
		}		

	}

    return(
        <div>
			<Helmet>
			<meta charSet="utf-8" />
                <title>Supermarket | Sign Up</title>
			</Helmet>
            <div class="breadcrumbs">
		<div class="container">
			<ol class="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
				<li><Link to='/'><span aria-hidden="true"><FaHome class="glyphicon-home"/></span>Home</Link></li>
				<li class="active">Register Page</li>
			</ol>
		</div>
	</div>
	<div class="register">
		<div class="container">
			<h2>Register Here</h2>
			<div class="login-form-grids">
				<h5>profile information</h5>
				<form onSubmit={signUp}>
					<input type="text" placeholder="First Name..." onChange={(e)=>setFirstName(e.target.value)}/>
					<div id="firstNameError"></div>
					<input type="text" placeholder="Last Name..." onChange={(e)=>setLastName(e.target.value)}/>
					<div id="lastNameError"></div>
					<input type="email" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)}/>
					<div id="emailError"></div>
					<input type="number" placeholder="Phone Number" onChange={(e)=>setPhone(e.target.value)}/>
					<div id="phoneError"></div>
					<input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
					<div id="passwordError"></div>
					<input type="password" placeholder="Password Confirmation" />
					<input type="submit" value="Register"/>
				</form>
			</div>
			<div class="register-home">
				<Link to='/'>Home</Link>
			</div>
		</div>
	</div>
	<ToastContainer/>
        </div>
    );
}
export default Signup;