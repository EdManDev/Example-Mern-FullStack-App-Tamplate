const express = require("express");
const router = express.Router();

const { getPayment, postPayment } = require("../controllers/Payment");

router.get("/store-payment", getPayment);
router.post("/purchase-payment", postPayment);

router.get("/hello", (req, res) => {
	res.send("hello there");
});

module.exports = router;
