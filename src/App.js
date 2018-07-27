import React, { Component } from "react";
import { Router } from "@reach/router";
import {
	LandingPage,
	StaffLoginPage,
	StudentLoginPage,
	Dashboard,
	StudentDashboard,
	StaffDashboard,
	BookRoomPage
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
				<StudentDashboard path="dashboard/student" />
				<StaffDashboard path="dashboard/staff" />
				<BookRoomPage path="dashboard/student/book" />
			</Router>
		);
	}
}

export default App;
