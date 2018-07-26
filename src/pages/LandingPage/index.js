import React, { Component } from "react";
import { Link } from "@reach/router";

class LandingPage extends Component {
	render() {
		return (
			<div>
				<h1>Landing Page</h1>
				<Link to="login">login</Link>
			</div>
		);
	}
}

export default LandingPage;
