const mongoose = require("mongoose");

const Registration = require("../models/registration");

exports.add = async (req, res) => {
  const { name, email, registration_number, mobile_number, data_link } = req.body;
  if (
    !email ||
    !registration_number ||
    !email ||
    !mobile_number ||
    !data_link
  ) {
    res.status(400).json({
      success: false,
      message: "Please provide all the required fields",
    });
  } else {
    try {
      let registration = new Registration({
        _id: new mongoose.Types.ObjectId(),
        email,
        name,
        registration_number,
        mobile_number,
        data_link,
      });
      let result = await registration.save();
      res.status(201).json({
        success: true,
        message: "Successfully registered",
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.toString(),
      });
    }
  }
};

exports.getAll = async (req, res) => {
  const registrations = await Registration.find({});
  if (registrations) {
    res.status(200).json({
      success: true,
      registrations,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "No registrations found",
    });
  }
};
