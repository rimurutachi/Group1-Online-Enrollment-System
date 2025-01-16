const mongoose = require("mongoose");
const { Schema } = mongoose;

// Applicant (2) Schema
const ApplicantSchema = new Schema({
  familyName: String,
  givenName: String,
  middleName: String,
  suffix: String,
  dateOfBirth: Date,
  contactNumber: String,
  religion: String,
  nationality: String,
  sex: String,
  age: Number,
  civilStatus: String,
  emailAddress: String,
  unitNumber: String,
  streetName: String,
  subBarangay: String,
  cityMunicipality: String,
  province: String,
  zipCode: String,
  hasDisability: Boolean,
  partOfIndigenousGroup: Boolean,
  photo: String, // Assuming you'll store the image as a base64 encoded string
});

const ApplicantModel = mongoose.model("Applicant", ApplicantSchema);

module.exports = ApplicantModel;