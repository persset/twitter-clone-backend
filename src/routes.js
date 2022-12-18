const express = require("express");
const createUserController = require("./controllers/User/CreateUserController");
const updateUserController = require("./controllers/User/UpdateUserController");
const deleteUserController = require("./controllers/User/DeleteUserController");
const listAllUsersController = require("./controllers/User/ListAllUsersController");
const getUserController = require("./controllers/User/GetUserController");

const router = express.Router();

router.post("/users", createUserController.handle);
router.put("/users/:id", updateUserController.handle);
router.delete("/users/:id", deleteUserController.handle);
router.get("/users/", listAllUsersController.handle);
router.get("/users/:id", getUserController.handle);

module.exports = router;
