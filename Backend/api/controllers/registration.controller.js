const mongoose = require("mongoose");

const Registration = require("../models/registration");

exports.add = async (req, res) => {
  const { name, email, registration_number, mobile_number } = req.body;
  if (!email || !registration_number || !email || !mobile_number) {
    res.status(400).json({
      success: false,
      message: "Please provide all the required fields",
    });
  } else {
    try {
      const isExist = await Registration.findOne({ email });
      if (isExist) {
        res.status(403).json({
          success: false,
          message: "Already Registered with this email",
        });
      } else {
        let registration = new Registration({
          _id: new mongoose.Types.ObjectId(),
          email,
          name,
          registration_number,
          mobile_number,
        });
        let result = await registration.save();
        res.status(201).json({
          success: true,
          message: "Successfully registered",
        });
      }
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.toString(),
      });
    }
  }
};
