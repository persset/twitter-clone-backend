const express = require("express");
const createUserController = require("./controllers/User/CreateUserController");
const updateUserController = require("./controllers/User/UpdateUserController");

const router = express.Router();

router.post("/users", createUserController.handle);
router.put("/users/:id", updateUserController.handle);

module.exports = router;
