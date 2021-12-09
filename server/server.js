import express from "express";
import dotenv from "dotenv";
import cors from "express";
import morgan from "morgan";
dotenv.config();

// import routes
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(cors(""));

app.get("/", (req, res) => {
	res.json({ object: "Hello World test" });
});

// routes middleware
app.use("/api", userRoutes);

const port = process.env.PORT || 9000;
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
