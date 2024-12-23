const fs = require("fs");
const path = require("path");
const client = require("./db");

const sqlFilePath = path.join(__dirname, "schema.sql");
const sqlQuery = fs.readFileSync(sqlFilePath, "utf8");

(async () => {
	try {
		const result = await client.query(sqlQuery);
		console.log("migration run successfully");
	} catch (err) {
		console.log("Migration Error: " + err);
	} finally {
		await client.end();
		console.log("PostgreSQL connection closed");
	}
})();
