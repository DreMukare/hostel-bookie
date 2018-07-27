import caesar from "./caesar";
import normalize from "./normalize";
import Database from "./database";

const privateCipherOffset = 3;

const db = new Database();

const fakepi = {
	login: async loginData => {
		const { password } = loginData;
		const id = loginData.staffId || loginData.studentId;
		const user = await db.table("login").get(id);
		if (!user) {
			return Promise.resolve({ ok: false });
		}
		const correctUser = Object.is(id, user.id);
		const decryptedPass = caesar(
			atob(user.password),
			privateCipherOffset,
			true
		);
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
};

export default fakepi;
