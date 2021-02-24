const express = require("express");

const registrationController = require("../controllers/registration.controller");

const router = express.Router();

// Register a user
router.post("/addUser", registrationController.add);

module.exports = router;
