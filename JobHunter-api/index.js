const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;
const isEmailAlreadyExist = require("./validation/validation");

const { authRouter } = require("./routers/authRouter");
app.use("/", authRouter);

app.get("/validate/email/exist", async (req, res) => {
	const { email } = req.body;
	const bool = await isEmailAlreadyExist(email);

	if (bool) {
		return res.status(409).json({ msg: "email already exist" });
	}

	return res.json(200);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
