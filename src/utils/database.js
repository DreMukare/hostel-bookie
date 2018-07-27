import data from "./data";

class Database {
	constructor() {
		this.data = data;
		this.collection = null;
	}
	table(collection) {
		this.collection = collection;
		return this;
	}
	all() {
		const table = this.collection;
		if (Boolean(table)) {
			return Promise.resolve(this.data[table]);
		}
	}
	get(id) {
		const table = this.collection;
		if (Boolean(table)) {
			const userExists = this.data[table].some(entry => entry.id === id);
			if (userExists) {
				return Promise.resolve(
					this.data[table].filter(entry => entry.id === id)[0]
				);
			}
		}
	}
}

export default Database;
