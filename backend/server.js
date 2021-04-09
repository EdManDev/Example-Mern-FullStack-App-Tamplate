const express = require("express");
const dotenv = require("dotenv");
const cors = require("express");
dotenv.config();
const morgan = require("morgan");

// import routes
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(morgan("dev"));
app.use(cors(""));

app.get("/test", (req, res) => {
	// res.json({ object: "Hello World! to easy store" });
	res.json({ message: "Hello World test" });
});

// routes middleware
app.use("/api", userRoutes);

const port = process.env.PORT || 9000;
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
