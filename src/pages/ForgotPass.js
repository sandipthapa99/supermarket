import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {FaHome,FaChevronRight } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ForgotPass(){
	const [email, setEmail] = useState("");

	const myToast = (msg, type)=>{
		toast[type](msg,{
			position:"top-center"
		});
	}
	const resetPass = async (e)=>{
		e.preventDefault();
		const res = await fetch("https://uat.ordering-boafresh.ekbana.net//api/v4/auth/forgot-password", {
                method: 'POST',
                headers: {
					"Content-Type": "application/json"
  
                },
				body: JSON.stringify({
					email: email,
				})
            })

            const data = await res.json();
            if(res.status === 200){
                e.target.reset();
                myToast("Password reset link sent to your e-mail", "success");
            }
            else{
                myToast(data.errors[0].message, "error");
            }
	}

    return(
        <div>
			<Helmet>
                <title>Supermarket | Forgot Password</title>
			</Helmet>
            <div class="breadcrumbs">
		<div class="container">
			<ol class="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
				<li><Link to='/'><span aria-hidden="true"><FaHome class="glyphicon-home"/></span>Home</Link></li>
				<li class="active">Forgot Password</li>
			</ol>
		</div>
	</div>

	<div class="login">
		<div class="container">
			<h2>Forgot Password</h2>
            <p style={{margin:"5px 352px"}}>Lost your password? Please enter your email address. You will receive a link to create a new password via email.</p>
		
			<div class="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
				<form onSubmit={resetPass}>
					<input type="email" placeholder="Email Address" required=" " onChange={(e)=>setEmail(e.target.value)}/>
					<div id="error" className="error"></div>

					<input type="submit" value="Submit"/>
				</form>
			</div>
			<p><Link to='/login'>Sign In</Link> (Or) go back to <Link to='/'>Home <FaChevronRight size={12} className="myicon"/></Link></p>
		</div>
	</div>
	<ToastContainer
	autoClose={3000}/>
        </div>
    );
}
export default ForgotPass;