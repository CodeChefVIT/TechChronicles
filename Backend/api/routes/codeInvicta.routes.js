const express = require("express");

const recaptchaVerification = require('../middlewares/recaptcha.js')

const codeInvitaController = require("../controllers/codeInvicta.controller");

const router = express.Router();

// Register a user
router.post("/addUser",recaptchaVerification, codeInvitaController.add);

// Get all registered users
router.get('/all', codeInvitaController.getAll);

module.exports = router;
