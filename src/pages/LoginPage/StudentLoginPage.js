import React, { Component } from "react";
import { navigate } from "@reach/router";
import { fakepi } from "../../utils";
import LoginPage from "./LoginPage";

class StudentLoginPage extends Component {
	state = {
		formData: {
			studentId: "",
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
					navigate("/dashboard/student");
					this.props.setAppState({ user: { type: "student", loggedIn: true } });
				}
			});
	};

	render() {
		return (
			<LoginPage
				userType="student"
				handleSubmit={this.handleSubmit}
				setFormState={this.setFormState}
				formState={this.state}
			/>
		);
	}
}

export default StudentLoginPage;
