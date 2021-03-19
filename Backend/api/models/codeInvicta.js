const mongoose = require("mongoose");

const CodeInvictaSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String },
  email: {
    type: String,
    lowercase: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  mobile_number: {
    type: Number,
    match: /^([7-9][0-9]{9})$/g,
  },
  registration_number: { type: String },
  campus: { type: String },
});

module.exports = mongoose.model("Code_Invicta", CodeInvictaSchema);
