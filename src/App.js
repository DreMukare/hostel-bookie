import React from "react";
import { Router } from "@reach/router";
import {
	LandingPage,
	LoginPage,
	Dashboard,
	StudentDashboard,
	StaffDashboard
} from "./pages";

const App = props => (
	<Router>
		<LandingPage path="/" />
		<LoginPage path="login" />
		<Dashboard path="dashboard">
			<StudentDashboard path="student" />
			<StaffDashboard path="staff" />
		</Dashboard>
	</Router>
);

export default App;
