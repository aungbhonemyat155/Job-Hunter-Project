const client = require("../db/db");

async function isEmailAlreadyExist(email) {
	const result = await client.query(
		`SELECT * FROM testing_schema.users where email=$1`,
		[email]
	);

	if (result.rowCount) {
		return true;
	}

	return false;
}

module.exports = isEmailAlreadyExist;
