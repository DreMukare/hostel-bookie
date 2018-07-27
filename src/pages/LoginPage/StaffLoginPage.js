import React, { Component } from "react";
import { navigate } from "@reach/router";
import { fakepi } from "../../utils";
import LoginPage from "./LoginPage";

class StaffLoginPage extends Component {
	state = {
		formData: {
			staffId: "",
			password: ""
		},
		invalidFormData: false
	};

	setFormState = state => {
		this.setState(state);
	};

	handleSubmit = event => {
		event.preventDefault();
		const { formData } = this.state;
		fakepi
			.login(formData)
			.then(response => {
				if (response.ok) {
					return response.json;
				}
				this.setState({ invalidFormData: true });
			})
			.then(json => {
				if (Boolean(json)) {
					sessionStorage.setItem("logged-in-user-id", json.id);
					sessionStorage.setItem(`user-${json.id}`, json.sessionKey);
					navigate("/dashboard/staff");
					this.props.setAppState({ user: { type: "staff", loggedIn: true } });
				}
			});
	};

	render() {
		return (
			<LoginPage
				userType="staff"
				handleSubmit={this.handleSubmit}
				formState={this.state}
				setFormState={this.setFormState}
			/>
		);
	}
}

export default StaffLoginPage;
