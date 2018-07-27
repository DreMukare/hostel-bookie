import React, { Component } from "react";
import { Router } from "@reach/router";
import {
	LandingPage,
	StaffLoginPage,
	StudentLoginPage,
	Dashboard,
	StudentDashboard,
	StaffDashboard
} from "./pages";

class App extends Component {
	state = {
		user: {
			type: "",
			isLoggedIn: false
		}
	};

	componentDidMount() {
		if (!this.state.user.isLoggedIn) {
			const loggedInUser = sessionStorage.getItem("logged-in-user-id");
			const sessionKey = sessionStorage.getItem(`user-${loggedInUser}`);
			if (Object.is(sessionKey, "staff-session-key")) {
				this.setState({ user: { type: "staff", isLoggedIn: true } });
			} else if (Object.is(sessionKey, "student-session-key")) {
				this.setState({ user: { type: "student", isLoggedIn: true } });
			}
		}
	}

	setAppState = state => {
		this.setState(state);
	};

	render() {
		return (
			<Router>
				<LandingPage path="/" appState={this.state} />
				<StudentLoginPage
					path="login/student"
					setAppState={this.setAppState}
					appState={this.state}
				/>
				<StaffLoginPage
					path="login/staff"
					setAppState={this.setAppState}
					appState={this.state}
				/>
				<Dashboard path="dashboard">
					<StudentDashboard path="student" />
					<StaffDashboard path="staff" />
				</Dashboard>
			</Router>
		);
	}
}

export default App;
