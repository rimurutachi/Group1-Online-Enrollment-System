const RequirementForm = require("../models/requirementItems.js");

const Requirement = async (req, res) => {
    try {
      const {
        grade11_1st,
        grade11_2nd,
        grade12_1st,
        grade12_2nd,
        certificate_form137,
      } = req.body;
      if (
        !grade11_1st ||
        !grade11_2nd ||
        !grade12_1st ||
        !grade12_2nd ||
        !certificate_form137
      ) {
        return res.json({ error: "Please fill up all fields!" });
      }
  
      const Requirement = await RequirementForm.create({
        grade11_1st,
        grade11_2nd,
        grade12_1st,
        grade12_2nd,
        certificate_form137,
      });
      return res.json(Requirement);
    } catch (error) {
      console.log(error);
    }
  };

  module.exports = { Requirement }