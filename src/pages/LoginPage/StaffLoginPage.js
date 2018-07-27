import React, { Component } from "react";
import { navigate } from "@reach/router";
import { Input } from "../../components";
import { fakepi } from "../../utils";

class LoginPage extends Component {
	state = {
		formData: {
			staffId: "",
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
			sessionStorage.setItem("logged-in-user-id", formData.staffId);
			sessionStorage.setItem(`user-${formData.staffId}`, "staff-session-key");
			navigate("/dashboard/staff");
			this.props.setAppState({ user: { type: "staff", loggedIn: true } });
		} else {
			this.setState({ invalidFormData: true });
		}
	};

	render() {
		return (
			<form>
				<div className="form-group">
					<label htmlFor="staffId">Staff ID</label>
					<Input name="staffId" type="text" onChange={this.handleChange} />
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<Input name="password" type="password" onChange={this.handleChange} />
				</div>
				{this.state.invalidFormData && (
					<p style={{ color: "red" }}>Invalid staff ID or Password</p>
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

export default LoginPage;
