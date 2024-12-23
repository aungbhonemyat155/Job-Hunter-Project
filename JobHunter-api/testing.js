function register(req, res) {
	const { name, email, password, role } = req.body;

	if (!name || !email || !password || !role) {
		return res.status(409).json({ message: "input fields are missing" });
	}

	const hashedPassword = bcrypt.hash(password);

	const query = "something";

	try {
		client.query(query, [name, email, password, role]);
	} catch (error) {
		res.status(500).json({ message: "Sever Error", error });
	}

	res.status(201).json({ message: "register success" });
}
