// ======================================================================================
// @desc      Response User
// @route     GET /api/user
// @access    Public
// ======================================================================================
exports.getUser = (req, res) => {
	res.json({ message: "Hello World! from get User" });
};

// ======================================================================================
// @desc      Post User
// @route     POST /api/user
// @access    Public
// ======================================================================================
exports.postUser = (req, res) => {
	res.json({ message: "Hello World! Post  User" });
};

// ======================================================================================
// @desc      update User
// @route     PUT /api/user
// @access    Public
// ======================================================================================
exports.putUser = (req, res) => {
	res.json({ message: "Hello World!  Update User" });
};

// ======================================================================================
// @desc      Remove User
// @route     DELETE /api/user
// @access    Public
// ======================================================================================
exports.deleteUser = (req, res) => {
	res.json({ message: "Hello World!  Delete User" });
};
