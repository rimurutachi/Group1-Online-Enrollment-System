const mongoose = require("mongoose");
const { Schema } = mongoose;

// Family Profile (3) Schema
const FamilySchema = new Schema({
  parent1Name: String,
  parent1Education: String,
  parent1Occupation: String,
  parent1Employer: String,
  parent1Income: String,
  parent1Contact: String,
  parent2Name: String,
  parent2Education: String,
  parent2Occupation: String,
  parent2Employer: String,
  parent2Income: String,
  parent2Contact: String,
  guardianName: String,
  guardianRelationship: String,
  guardianEducation: String,
  guardianOccupation: String,
  guardianEmployer: String,
  guardianIncome: String,
  guardianContact: String,
  siblings: String,
});

const FamilyModel = mongoose.model("Family", FamilySchema);

module.exports = FamilyModel;