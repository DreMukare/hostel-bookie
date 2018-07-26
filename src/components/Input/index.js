import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, placeHolder, onChange }) => (
	<input type={type} onChange={onChange} placeholder={placeHolder} />
);

Input.propTypes = {
	type: PropTypes.string.isRequired,
	placeHolder: PropTypes.string,
	onChange: PropTypes.func
};

export default Input;
