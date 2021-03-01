const express = require("express");
const dotenv = require("dotenv");
const cors = require("express");
dotenv.config();
const morgan = require("morgan");
// const stripeSecreteKey = process.env.STRIPE_SECRETE_KEY;

// console.log(stripeSecreteKey);
const { uuid } = require("uuidv4");
console.log(uuid());

// import routes
const paymentRoutes = require("./routes/Payment.routes");

const app = express();

app.use(morgan("dev"));
app.use(cors(""));

app.get("/", (req, res) => {
	// res.json({ object: "Hello World! to easy store" });
	res.json({ message: "Hello World" });
});

// routes middleware
app.use("/api", paymentRoutes);

const port = process.env.PORT || 9000;
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
