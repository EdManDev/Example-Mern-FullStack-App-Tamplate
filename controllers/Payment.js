// ======================================================================================
// @desc      Response Payment
// @route     POST /api/store-payment
// @access    Public
// ======================================================================================
exports.getPayment = (req, res) => {
	res.json({ message: "Hello World! to store from store payment" });
	// fs.readFile("items.json", function (error, data) {
	// 	if (error) {
	// 		res.status(500).end();
	// 	} else {
	// 		res.render("store.ejs", {
	// 			stripePublicKey: stripePublicKey,
	// 			items: JSON.parse(data),
	// 		});
	// 	}
	// });
};

// ======================================================================================
// @desc      Request Payment
// @route     GET /api/purchase-payment
// @access    Public
// ======================================================================================
exports.postPayment = (req, res) => {
	res.json({ message: "Hello World! to store from request purchase payment" });
	// fs.readFile("items.json", function (error, data) {
	// 	if (error) {
	// 		res.status(500).end();
	// 	} else {
	// 		const itemsJson = JSON.parse(data);
	// 		const itemsArray = itemsJson.music.concat(itemsJson.merch);
	// 		let total = 0;
	// 		req.body.items.forEach(function (item) {
	// 			const itemJson = itemsArray.find(function (i) {
	// 				return i.id == item.id;
	// 			});
	// 			total = total + itemJson.price * item.quantity;
	// 		});
	// 		stripe.charges
	// 			.create({
	// 				amount: total,
	// 				source: req.body.stripeTokenId,
	// 				currency: "usd",
	// 			})
	// 			.then(function () {
	// 				console.log("Charge Successful");
	// 				res.json({ message: "Successfully purchased items" });
	// 			})
	// 			.catch(function () {
	// 				console.log("Charge Fail");
	// 				res.status(500).end();
	// 			});
	// 	}
	// });
};
