const FamilyForm = require("../models/familyItems.js");

const Family = async (req, res) => {
  try {
    const {
      parent1Name,
      parent1Education,
      parent1Occupation,
      parent1Employer,
      parent1Income,
      parent1Contact,
      parent2Name,
      parent2Education,
      parent2Occupation,
      parent2Employer,
      parent2Income,
      parent2Contact,
      guardianName,
      guardianRelationship,
      guardianEducation,
      guardianOccupation,
      guardianEmployer,
      guardianIncome,
      guardianContact,
      siblings,
    } = req.body;

    if (
      !parent1Name ||
      !parent1Education ||
      !parent1Occupation ||
      !parent1Income ||
      !parent1Contact ||
      !parent2Name ||
      !parent2Education ||
      !parent2Occupation ||
      !parent2Income ||
      !parent2Contact ||
      !guardianName ||
      !guardianRelationship ||
      !guardianEducation ||
      !guardianOccupation ||
      !guardianIncome ||
      !guardianContact ||
      !siblings
    ) {
      return res.json({ error: "Please fill up all fields!" });
    }

    const Family = await FamilyForm.create({
      parent1Name,
      parent1Education,
      parent1Occupation,
      parent1Employer,
      parent1Income,
      parent1Contact,
      parent2Name,
      parent2Education,
      parent2Occupation,
      parent2Employer,
      parent2Income,
      parent2Contact,
      guardianName,
      guardianRelationship,
      guardianEducation,
      guardianOccupation,
      guardianEmployer,
      guardianIncome,
      guardianContact,
      siblings,
    });
    return res.json(Family);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Family };
