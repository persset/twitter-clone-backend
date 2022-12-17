const express = require("express");
const createUserController = require("./controllers/User/CreateUserController");
const router = express.Router();

router.post("/users", createUserController.handle);

module.exports = router;
