import caesar from "./caesar";
import normalize from "./normalize";

const privateCipherOffset = 3;
const loginDB = [
	{
		id: "staff123",
		password: caesar("Pass123", privateCipherOffset)
	},
	{
		id: "studentId123",
		password: caesar("123Pass", privateCipherOffset)
	}
];

const fakeapi = {
	login: loginData => {
		const normalizedloginDB = normalize(loginDB);
		const id = loginData.staffId || loginData.studentId;
		if (!Object.prototype.hasOwnProperty.call(normalizedloginDB, id)) {
			return false;
		}
		const userFromDB = normalizedloginDB[id];
		if (
			id === userFromDB.id &&
			Object.is(
				loginData.password,
				caesar(userFromDB.password, privateCipherOffset, true)
			)
		) {
			return true;
		}
		return false;
	}
};

export default fakeapi;
