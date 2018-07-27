import React, { Component } from "react";
import { Link } from "@reach/router";

const DynamicLink = props => (
	<Link to={props.useAlt ? props.alt : props.default}>{props.label}</Link>
);

class LandingPage extends Component {
	render() {
		const { appState } = this.props;
		return (
			<div>
				<h1>Landing Page</h1>
				<DynamicLink
					useAlt={appState.user.isLoggedIn && appState.user.type === "staff"}
					alt="dashboard/staff"
					default="login/staff"
					label="Staff login"
				/>
				<br />
				<DynamicLink
					useAlt={appState.user.isLoggedIn && appState.user.type === "student"}
					alt="dashboard/student"
					default="login/student"
					label="Student login"
				/>
			</div>
		);
	}
}

export default LandingPage;
