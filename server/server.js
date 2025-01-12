const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const connectDB = require("./db.js");
const corsOptions = {
  origin: ["http://localhost:5173"]
};

app.use(cors(corsOptions));
app.use(express.json());

connectDB();

// SCHEMAS //

// RegistrationForm.jsx (1) Model Schema
const RegisterSchema = new mongoose.Schema({
  applicantType: String,
  seniorHighTrack: String,
  preferredProgram: String,
  preferredCourse: String,
});

const Register = mongoose.model("Register", RegisterSchema);

// Applicant (2) Schema
const ApplicantSchema = new mongoose.Schema({
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
  disabilityNature: String,
  partOfIndigenousGroup: Boolean,
  indigenousGroup: String,
  photo: String, // Assuming you'll store the image as a base64 encoded string
});

const Applicant = mongoose.model("Applicant", ApplicantSchema);

// Family Profile (3) Schema
const FamilySchema = new mongoose.Schema({
  parent1Name: String,
  parent1Relationship: String,
  parent1Education: String,
  parent1Occupation: String,
  parent1Employer: String,
  parent1Income: String,
  parent1Contact: String,
  parent2Name: String,
  parent2Relationship: String,
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
  siblings: [{ fullName: String, age: Number }],
});

const Family = mongoose.model("Family", FamilySchema);

// Educational Profile (4) Schema
const EducationSchema = new mongoose.Schema({
  elementary: {
    schoolName: String,
    schoolAddress: String,
    schoolType: String,
    yearGraduated: String,
  },
  juniorHigh: {
    schoolName: String,
    schoolAddress: String,
    schoolType: String,
    track: String,
    yearGraduated: String,
  },
  seniorHigh: {
    schoolName: String,
    schoolAddress: String,
    schoolType: String,
    courseProgram: String,
    yearGraduated: String,
  },
});

const Education = mongoose.model("Education", EducationSchema);

// Requirements (5) Schema
const RequirementSchema = new mongoose.Schema({
  grade11_1st: String,
  grade11_2nd: String,
  grade12_1st: String,
  grade12_2nd: String,
  certificate_form_137: String,
});

const Requirement = mongoose.model("Requirement", RequirementSchema);

// Schedule Appointment (6) Schema
const ScheduleSchema = new mongoose.Schema({
  preferredDate: Date,
  preferredTime: String,
});

const Schedule = mongoose.model("Schedule", ScheduleSchema);

// FETCH AND SAVE EACH PART OF ADMISSION //

// Your registration (1) endpoint
app.post("/RegistrationForm", async (req, res) => {
  try {
    const {
      applicantType,
      seniorHighTrack,
      preferredProgram,
      preferredCourse,
    } = req.body;

    // Create a new register (1) document
    const newRegister = new Register({
      applicantType,
      seniorHighTrack,
      preferredProgram,
      preferredCourse
    });

    // Save the register (1) to the database
    await newRegister.save();

    res.status(201).json({ message: "First phase completed." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Fetch register (1) endpoint
app.get("/RegistrationForm", async (res) => {
  try {
    const registers = await Register.find();
    res.json(registers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// API endpoint to save applicant (2) data
app.post("/ApplicantProfile", async (req, res) => {
  try {
    const newApplicant = new Applicant(req.body);
    await newApplicant.save();
    res.status(201).json(newApplicant);
  } catch (error) {
    console.error("Error saving applicant data:", error);
    res.status(500).json({ error: "Failed to save applicant data" });
  }
});

// API endpoint to fetch applicant (2) data
app.get("/ApplicantProfile", async (res) => {
  try {
    const applicants = await Applicant.find();
    res.json(applicants);
  } catch (error) {
    console.error("Error fetching applicants:", error);
    res.status(500).json({ error: "Failed to fetch applicants" });
  }
});

// API endpoint to save family profile (3) data
app.post("/FamilyProfile", async (req, res) => {
  try {
    const newFamily = new Family(req.body);
    await newFamily.save();
    res.status(201).json(newFamily);
  } catch (error) {
    console.error("Error saving family profile:", error);
    res.status(500).json({ error: "Failed to save family profile" });
  }
});

// API endpoint to fetch family profile (3) data
app.get("/FamilyProfile", async (res) => {
  try {
    const family = await Family.find();
    res.json(family);
  } catch (error) {
    console.error("Error fetching family profile:", error);
    res.status(500).json({ error: "Failed to fetch family profile" });
  }
});

// API endpoint to save educational profile (4) data
app.post("/EducationalProfile", async (req, res) => {
  try {
    const newEducation = new Education(req.body);
    await newEducation.save();
    res.status(201).json(newEducation);
  } catch (error) {
    console.error("Error saving educational profile:", error);
    res.status(500).json({ error: "Failed to save educational profile" });
  }
});

// API endpoint to fetch educational profile (4) data
app.get("EducationalProfile", async (res) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (error) {
    console.error("Error fetching educational profile:", error);
    res.status(500).json({ error: "Failed to fetch educational profile" });
  }
});

// API endpoint to save requirements (5) data
app.post("/UploadRequirements", async (req, res) => {
  try {
    const newRequirement = new Requirement(req.body);
    await newRequirement.save();
    res.status(201).json(newRequirement);
  } catch (error) {
    console.error("Error saving requirements:", error);
    res.status(500).json({ error: "Failed to save requirements" });
  }
});

// API endpoint to fetch requirements (5) data
app.get("/UploadRequirements", async (res) => {
  try {
    const requirements = await Requirement.find();
    res.json(requirements);
  } catch (error) {
    console.error("Error fetching requirements:", error);
    res.status(500).json({ error: "Failed to fetch requirements" });
  }
});

// API endpoint to save schedule appointment (6) data
app.post("/ScheduleAppointment", async (req, res) => {
  try {
    const newSchedule = new Schedule(req.body);
    await newSchedule.save();
    res.status(201).json(newSchedule);
  } catch (error) {
    console.error("Error saving schedule:", error);
    res.status(500).json({ error: "Failed to save schedule" });
  }
});

// API endpoint to fetch schedule appointment (6) data
app.get("/ScheduleAppointment", async (res) => {
  try {
    const schedule = await Schedule.find();
    res.json(schedule);
  } catch (error) {
    console.error("Error fetching schedule:", error);
    res.status(500).json({ error: "Failed to fetch schedule" });
  }
});

export const fetchMessages = async () => {
  try {
    const response = await fetch(`${BASE_URL}/messages`);
    if (!response.ok) throw new Error("Failed to fetch messages");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const sendMessage = async (message) => {
  try {
    const response = await fetch(`${BASE_URL}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });
    if (!response.ok) throw new Error("Failed to send message");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

app.listen(8080, () => {
  console.log("server start on port 8080!");
});
