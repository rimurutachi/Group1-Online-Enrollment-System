const RegisterForm = require("../models/registerItems.js");

const Register = async (req, res) => {
  try {
    const { applicantType, seniorHighTrack, preferredProgram, preferredCourse } = req.body;

    // Validate required fields
    if (!applicantType) {
      return res.status(400).json({ error: "Applicant type is required." });
    }

    // Create new registration record
    const newRegister = await RegisterForm.create({
      applicantType,
      seniorHighTrack,
      preferredProgram,
      preferredCourse,
    });

    return res.status(201).json(newRegister);
  } catch (error) {
    console.error("Error in registerApplicant:", error);
    return res.status(500).json({ error: "Server error. Please try again later." });
  }
};

module.exports = { Register };
