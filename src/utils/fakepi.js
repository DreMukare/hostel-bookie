import caesar from "./caesar";
import Database from "./database";

const privateCipherOffset = 3;

const db = new Database();

async function login(loginData) {
	const { password } = loginData;
	const id = loginData.staffId || loginData.studentId;
	const user = await db.table("login").get(id);
	if (!user) {
		return Promise.resolve({ ok: false });
	}
	const correctUser = Object.is(id, user.id);
	const decryptedPass = caesar(atob(user.password), privateCipherOffset, true);
	const correctPass = Object.is(password, decryptedPass);
	if (correctUser && correctPass) {
		const userType = id.startsWith("stu") ? "student" : "staff";
		return Promise.resolve({
			ok: true,
			status: 200,
			get json() {
				return Promise.resolve({
					id,
					sessionKey: `${userType}-session-key`
				});
			}
		});
	}
	return Promise.resolve({ ok: false });
}

async function hostel(id) {
	let data;
	if (!id) {
		data = db.table("hostels").all();
	}
	data = db.table("hostels").get(id);
	return Promise.resolve({
		ok: true,
		status: 200,
		get json() {
			return data;
		}
	});
}

export default {
	login,
	hostel
};
