// ======================================================================================
// @desc      Response User
// @route     GET /api/user
// @access    Public
// ======================================================================================
const getUser = (req, res) => {
	res.json({ message: "Hello World! from get User" });
};

// ======================================================================================
// @desc      Post User
// @route     POST /api/user
// @access    Public
// ======================================================================================
const postUser = (req, res) => {
	res.json({ message: "Hello World! Post  User" });
};

// ======================================================================================
// @desc      update User
// @route     PUT /api/user
// @access    Public
// ======================================================================================
const putUser = (req, res) => {
	res.json({ message: "Hello World!  Update User" });
};

// ======================================================================================
// @desc      Remove User
// @route     DELETE /api/user
// @access    Public
// ======================================================================================
const deleteUser = (req, res) => {
	res.json({ message: "Hello World!  Delete User" });
};

export { getUser, postUser, putUser, deleteUser };
