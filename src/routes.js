const express = require("express");
const createUserController = require("./controllers/User/CreateUserController");
const updateUserController = require("./controllers/User/UpdateUserController");
const deleteUserController = require("./controllers/User/DeleteUserController");

const router = express.Router();

router.post("/users", createUserController.handle);
router.put("/users/:id", updateUserController.handle);
router.delete("/users/:id", deleteUserController.handle);

module.exports = router;
