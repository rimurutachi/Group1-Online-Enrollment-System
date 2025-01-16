// Initialize mongoose
const mongoose = require("mongoose");
const { Schema } = mongoose;

// RegistrationForm.jsx (1) Model Schema
const RegisterSchema = new Schema({
  applicantType: String,
  seniorHighTrack: String,
  preferredProgram: String,
  preferredCourse: String,
});

const RegisterModel = mongoose.model("Register", RegisterSchema);

module.exports = RegisterModel;