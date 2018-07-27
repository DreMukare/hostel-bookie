import React, { Component } from "react";
import { Link } from "@reach/router";

class StudentDashboard extends Component {
	render() {
		return (
			<div>
				<h1>Student Dashboard</h1>
				<Link to="/dashboard/student/book">Book room</Link>
				<br />
				<Link to="">Log complaint</Link>
				<br />
				<Link to="">Return key</Link>
			</div>
		);
	}
}

export default StudentDashboard;
