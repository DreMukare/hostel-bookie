function normalize(array) {
	if (Array.isArray(array)) {
		return array.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {});
	}
}

export default normalize;
