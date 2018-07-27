function caesar(plaintext, offset, reverse) {
	let ciphertext = "";
	for (const char of plaintext) {
		const asciiCode = char.charCodeAt(0);
		if (reverse) {
			ciphertext += String.fromCharCode(asciiCode + offset);
			continue;
		}
		ciphertext += String.fromCharCode(asciiCode - offset);
	}
	return ciphertext;
}

export default caesar;
