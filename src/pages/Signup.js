import React from "react";
import {Link} from 'react-router-dom';

function Signup(){
    return(
        <div>
            <div class="breadcrumbs">
		<div class="container">
			<ol class="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
				<li><Link to="/"><span class="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link></li>
				<li class="active">Register Page</li>
			</ol>
		</div>
	</div>
	<div class="register">
		<div class="container">
			<h2>Register Here</h2>
			<div class="login-form-grids">
				<h5>profile information</h5>
				<form action="#" method="post">
					<input type="text" placeholder="First Name..." required=" " />
					<input type="text" placeholder="Last Name..." required=" " />
				</form>
				<div class="register-check-box">
					<div class="check">
						<label class="checkbox"><input type="checkbox" name="checkbox"/><i> </i>Subscribe to Newsletter</label>
					</div>
				</div>
				<h6>Login information</h6>
					<form action="#" method="post">
					<input type="email" placeholder="Email Address" required=" " />
					<input type="password" placeholder="Password" required=" " />
					<input type="password" placeholder="Password Confirmation" required=" " />
					<div class="register-check-box">
						<div class="check">
							<label class="checkbox"><input type="checkbox" name="checkbox"/><i> </i>I accept the terms and conditions</label>
						</div>
					</div>
					<input type="submit" value="Register"/>
				</form>
			</div>
			<div class="register-home">
				<Link to='/'>Home</Link>
			</div>
		</div>
	</div>
        </div>
    );
}
export default Signup;