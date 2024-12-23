const { Client } = require("pg");

// Create a new client instance
const client = new Client({
	user: "aungbhonemyat", // Your PostgreSQL username
	host: "localhost", // PostgreSQL server host
	database: "testing_db", // Your database name
	password: "password", // Your PostgreSQL password
	port: 5432, // Default PostgreSQL port
});

// Connect to the database
client
	.connect()
	.then(() => {
		console.log("Connected to PostgreSQL database");
	})
	.catch((err) => {
		console.error("Connection error", err.stack);
	});

module.exports = client;
