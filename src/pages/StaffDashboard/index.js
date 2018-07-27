import React, { Component } from "react";
import { Link } from "@reach/router";

class StaffDashboard extends Component {
	render() {
		return (
			<div>
				<h1>Staff Dashboard</h1>
				<Link to="">View complaints</Link>
				<br />
				<Link to="">Collect key</Link>
			</div>
		);
	}
}

export default StaffDashboard;
