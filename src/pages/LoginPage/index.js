import React, { Component } from "react";
import { Link } from "@reach/router";

class LoginPage extends Component {
	state = {};
	render() {
		return (
			<div>
				<h1>Login Page</h1>
				<Link to="/dashboard/student">student</Link>
				<br />
				<Link to="/dashboard/staff">staff</Link>
			</div>
		);
	}
}

export default LoginPage;
