import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, label, onClick, id }) =>
	React.createElement(
		"button",
		{
			id,
			type,
			onClick
		},
		label
	);

Button.propTypes = {
	id: PropTypes.string,
	type: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	label: PropTypes.string
};

export default Button;
