const ApplicantForm = require("../models/applicantItems.js");

const Applicant = async (req, res) => {
    try {
      const {
        familyName,
        givenName,
        middleName,
        suffix,
        dateOfBirth,
        contactNumber,
        religion,
        nationality,
        sex,
        age,
        civilStatus,
        emailAddress,
        unitNumber,
        streetName,
        subBarangay,
        cityMunicipality,
        province,
        zipCode,
        hasDisability,
        partOfIndigenousGroup,
        photo,
      } = req.body;
  
      if (
        !familyName ||
        !givenName ||
        !middleName ||
        !dateOfBirth ||
        !contactNumber ||
        !religion ||
        !nationality ||
        !sex ||
        !age ||
        !civilStatus ||
        !emailAddress ||
        !unitNumber ||
        !streetName ||
        !subBarangay ||
        !cityMunicipality ||
        !province ||
        !zipCode
      ) {
        return res.json({ error: "Please fill up all fields!" });
      }

      const Applicant = await ApplicantForm.create({
        familyName,
        givenName,
        middleName,
        suffix,
        dateOfBirth,
        contactNumber,
        religion,
        nationality,
        sex,
        age,
        civilStatus,
        emailAddress,
        unitNumber,
        streetName,
        subBarangay,
        cityMunicipality,
        province,
        zipCode,
        hasDisability,
        partOfIndigenousGroup,
        photo,
      });
      return res.json(Applicant);
    } catch (error) {
      console.log(error);
    }
  };

  module.exports = { Applicant }