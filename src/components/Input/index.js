import React from "react";
import PropTypes from "prop-types";

const Input = ({
	name,
	value,
	type,
	placeHolder,
	onClick,
	onChange,
	required
}) =>
	React.createElement("input", {
		name,
		type,
		onChange,
		onClick,
		required,
		value,
		placeholder: placeHolder
	});

Input.propTypes = {
	type: PropTypes.string.isRequired,
	placeHolder: PropTypes.string,
	onChange: PropTypes.func,
	onClick: PropTypes.func,
	required: PropTypes.bool,
	name: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Input;
