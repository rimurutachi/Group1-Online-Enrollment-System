const RegisterForm = require("../models/registerItems.js");

const Register = async (req, res) => {
  try {
    const {
      applicantType,
      seniorHighTrack,
      preferredProgram,
      preferredCourse,
    } = req.body;

    if (!applicantType) {
      return res.json({ error: "Please fill up all fields!" });
    }

    const Register = await RegisterForm.create({
      applicantType,
      seniorHighTrack,
      preferredProgram,
      preferredCourse,
    });
    return res.json(Register);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Register };
