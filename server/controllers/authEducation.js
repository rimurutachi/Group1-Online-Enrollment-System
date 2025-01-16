const EducationForm = require("../models/educationItems.js");

const Education = async (req, res) => {
    try {
      const { elementary, juniorHighSchool, seniorHighSchool } = req.body;
      if (!elementary || !juniorHighSchool || !seniorHighSchool) {
        return res.json({ error: "Please fill up all fields!" });
      }
  
      const Education = await EducationForm.create({
        elementarySchool,
        juniorHighSchool,
        seniorHighSchool,
      });
      return res.json(Education);
    } catch (error) {
      console.log(error);
    }
  };

  module.exports = { Education}