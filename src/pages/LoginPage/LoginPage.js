import React, { Component } from "react";
import { navigate } from "@reach/router";
import { Input } from "../../components";
import { fakepi } from "../../utils";

class LoginPage extends Component {
	handleChange = event => {
		const fieldName = event.target.name;
		const input = event.target.value;
		const currentFormData = this.props.formState.formData;
		this.props.setFormState({
			formData: { ...currentFormData, [fieldName]: input }
		});
	};

	render() {
		const { userType, handleSubmit } = this.props;
		return (
			<form>
				<div className="form-group">
					<label htmlFor={`${userType}Id`}>S{userType.slice(1)} ID</label>
					<Input
						name={`${userType}Id`}
						type="text"
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<Input name="password" type="password" onChange={this.handleChange} />
				</div>
				{this.props.formState.invalidFormData && (
					<p style={{ color: "red" }}>Invalid {userType} ID or Password</p>
				)}
				<Input
					name="submit"
					type="submit"
					onClick={handleSubmit}
					value="Login"
				/>
			</form>
		);
	}
}

export default LoginPage;
