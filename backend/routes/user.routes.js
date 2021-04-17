const express = require("express");
const router = express.Router();

const {
	getUser,
	postUser,
	putUser,
	deleteUser,
} = require("../controllers/userController");

router.get("/user", getUser);
router.post("/user", postUser);
router.put("/user:id", putUser);
router.delete("/user:id", deleteUser);

module.exports = router;
