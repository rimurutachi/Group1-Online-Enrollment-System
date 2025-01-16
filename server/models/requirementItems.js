const mongoose = require("mongoose");
const { Schema } = mongoose;

// Requirements (5) Schema
const RequirementSchema = new Schema({
  grade11_1st: String,
  grade11_2nd: String,
  grade12_1st: String,
  grade12_2nd: String,
  certificate_form_137: String,
});

const RequirementModel = mongoose.model("Requirement", RequirementSchema);

module.exports = RequirementModel;