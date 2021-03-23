const mongoose = require("mongoose");

const CodeInvicta = require("../models/codeInvicta");

exports.add = async (req, res) => {
  const { name, email, registration_number, mobile_number, campus } = req.body;
  if (
    !email ||
    !registration_number ||
    !email ||
    !mobile_number ||
    !campus
  ) {
    res.status(400).json({
      success: false,
      message: "Please provide all the required fields",
    });
  } else {
    try {
      const registered = await CodeInvicta.findOne({
        email
      })
      if(registered){
        res.status(403).json({
          success: false,
          message: "Already registered!"
        })
      }
      let codeInvicta = new CodeInvicta({
        _id: new mongoose.Types.ObjectId(),
        email,
        name,
        registration_number,
        mobile_number,
        campus,
      });
      let result = await codeInvicta.save();
      res.status(201).json({
        success: true,
        message: "Successfully registered",
        result,
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
  const codeInvicta = await CodeInvicta.find({});
  if (registrations) {
    res.status(200).json({
      success: true,
      registrations: codeInvicta,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "No registrations found",
    });
  }
};
