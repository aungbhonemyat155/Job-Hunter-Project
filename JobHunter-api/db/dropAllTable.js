const client = require("./db");

(async () => {
	try {
		const result = await client.query(
			"DROP SCHEMA testing_schema CASCADE;"
		);
		console.log("Dropped All Tables and Schema Successfully...");
	} catch (err) {
		console.log("Dropping Tables Error: " + err);
	} finally {
		await client.end();
		console.log("PostgreSQL connection closed");
	}
})();
