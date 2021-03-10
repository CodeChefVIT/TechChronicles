const express = require("express");

const recaptchaVerification = require('../middlewares/recaptcha.js')

const registrationController = require("../controllers/registration.controller");

const router = express.Router();

// Register a user
router.post("/addUser", recaptchaVerification,registrationController.add);

// Get all registered users
router.get('/all', registrationController.getAll);

module.exports = router;
