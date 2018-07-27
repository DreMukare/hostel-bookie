import React, { Component } from "react";
import { navigate } from "@reach/router";
import { Input } from "../../components";
import { fakepi } from "../../utils";

class StudentLoginPage extends Component {
	state = {
		formData: {
			studentId: "",
			password: ""
		},
		invalidFormData: false
	};

	handleChange = event => {
		const fieldName = event.target.name;
		const input = event.target.value;
		const currentFormData = this.state.formData;
		this.setState({ formData: { ...currentFormData, [fieldName]: input } });
	};

	handleSubmit = event => {
		event.preventDefault();
		const { formData } = this.state;
		if (fakepi.login(formData)) {
			sessionStorage.setItem("logged-in-user-id", formData.studentId);
			sessionStorage.setItem(
				`user-${formData.studentId}`,
				"student-session-key"
			);
			navigate("/dashboard/student");
			this.props.setAppState({ user: { type: "student", loggedIn: true } });
		} else {
			this.setState({ invalidFormData: true });
		}
	};

	render() {
		return (
			<form>
				<div className="form-group">
					<label htmlFor="studentId">Student ID</label>
					<Input name="studentId" type="text" onChange={this.handleChange} />
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<Input name="password" type="password" onChange={this.handleChange} />
				</div>
				{this.state.invalidFormData && (
					<p style={{ color: "red" }}>Invalid student ID or Password</p>
				)}
				<Input
					name="submit"
					type="submit"
					onClick={this.handleSubmit}
					value="Login"
				/>
			</form>
		);
	}
}

export default StudentLoginPage;
