const express = require("express");
const router = express.Router();
const client = require("../db/db");
const bcrypt = require("bcrypt");
require("dotenv").config();

const jwt = require("jsonwebtoken");

router.get("/register", async (req, res) => {
	const { name, email, role, password } = req.body;

	if (!name || !email || !role || !password) {
		return res.status(400).json({ msg: "validation error" });
	}

	const query = `INSERT INTO testing_schema.users (name, email, password, role) VALUES ($1, $2, $3, $4);`;

	try {
		const result = await client.query(query, [name, email, password, role]);

		return res.status(201).json({ msg: "registeration success" + result });
	} catch (error) {
		return res.status(500).json({ msg: "Database Error: " + error });
	}
});

router.post("/login", async (req, res) => {
	const secret = process.env.JWT_SECRETKEY;
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({ msg: "email and password require" });
	}

	const query = "SELECT * FROM testing_schema.users WHERE email=$1";

	try {
		const result = await client.query(query, [email]);
		var data = result.rows[0];
	} catch (err) {
		return res.status(500).json({ error: "Database Error: " + err });
	}

	if (!data) {
		return res.status(401).json({ msg: "Email not found" });
	}

	const bool = await bcrypt.compare(password, data.password);
	if (!bool) {
		return res.status(401).json({ msg: "Wrong Password" });
	}

	const token = jwt.sign(data, secret);

	res.status(200).json({ msg: "Login Success", data, token });
});

module.exports = { authRouter: router };
