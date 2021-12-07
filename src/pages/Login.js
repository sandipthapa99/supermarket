import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {FaHome,FaChevronRight } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login(){
	var error = document.getElementById('error');
	const [username, setUsername] = useState("");
	const [pass, setPass] = useState("");

	const successToast = ()=>{
		toast.success("Login Successful",{
			position:"top-center",
			autoClose:"1000",
		});
	}
	const login = async (e)=>{
		e.preventDefault();
		await fetch("https://uat.ordering-boafresh.ekbana.net//api/v4/auth/login", {
                method: 'POST',
                headers: {
					'warehouse-id':'1',
                    'Api-key': 'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545',
					"Content-Type": "application/json"
  
                },
				body: JSON.stringify({
					client_id: 2,
        			client_secret: "ZkPYPKRiUsEzVke7Q5sq21DrVvYmNK5w5bZKGzQo",
        			grant_type: "password",
					username:username,
					password:pass,
				})
            })
            .then(respose => {
                return respose.json();
            })
            .then(data=>{
                if(data.access_token){
					error.innerHTML = "";
					window.localStorage.setItem("access_token", JSON.stringify(data.access_token))
					successToast();
					e.target.reset();
					window.location="/";
				}
				else{
					error.innerHTML = data.errors[0].message;
				}
            })
            .catch(err=>{
                console.log(err);
            })
	}

    return(
        <div>
			<Helmet>
                <title>Supermarket | Log In</title>
			</Helmet>
            <div class="breadcrumbs">
		<div class="container">
			<ol class="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
				<li><Link to='/'><span aria-hidden="true"><FaHome class="glyphicon-home"/></span>Home</Link></li>
				<li class="active">Login Page</li>
			</ol>
		</div>
	</div>

	<div class="login">
		<div class="container">
			<h2>Login Form</h2>
		
			<div class="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
				<form onSubmit={login}>
					<input type="email" placeholder="Email Address" required=" " onChange={(e)=>setUsername(e.target.value)}/>
					<input type="password" placeholder="Password" required=" " onChange={(e)=>setPass(e.target.value)}/>
					<div id="error" className="error"></div>
					<div class="forgot">
						<Link to="/forgot-password">Forgot Password?</Link>
					</div>
					<input type="submit" value="Login"/>
				</form>
			</div>
			<h4>For New People</h4>
			<p><Link to='/signup'>Register Here</Link> (Or) go back to <Link to='/'>Home <FaChevronRight size={12} className="myicon"/></Link></p>
		</div>
	</div>
	<ToastContainer
	autoClose={1000}/>
        </div>
    );
}
export default Login;