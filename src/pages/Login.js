import React from "react";
import {Link} from 'react-router-dom';
import {FaHome } from "react-icons/fa";

function Login(){
    return(
        <div>
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
				<form>
					<input type="email" placeholder="Email Address" required=" " />
					<input type="password" placeholder="Password" required=" " />
					<div class="forgot">
						<a href="#">Forgot Password?</a>
					</div>
					<input type="submit" value="Login"/>
				</form>
			</div>
			<h4>For New People</h4>
			<p><Link to='/signup'>Register Here</Link> (Or) go back to <Link to='/'>Home<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></Link></p>
		</div>
	</div>
        </div>
    );
}
export default Login;