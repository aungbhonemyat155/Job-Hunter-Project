const { faker, ro } = require("@faker-js/faker");
const client = require("../db");
const bcrypt = require("bcrypt");

const UserSeeder = async () => {
	const query =
		"INSERT INTO testing_schema.users (name,email,password,role,bio) VALUES ($1,$2,$3,$4,$5);";

	const hashPwd = await bcrypt.hash("password", 10);

	try {
		for (let i = 0; i < 20; i++) {
			const name = faker.person.fullName();
			const email = faker.internet.email(); // Use faker.internet.email() for email
			const password = hashPwd; // Consider hashing this
			const role = Math.random() < 0.5 ? "employer" : "employee"; // More readable
			const bio = faker.person.bio();

			await client.query(query, [name, email, password, role, bio]);
		}

		console.log("User  Seeding Success");
	} catch (err) {
		console.error("Error seeding users:", err);
	} finally {
		// Close the database connection
		await client.end();
	}
};

module.exports = UserSeeder;
